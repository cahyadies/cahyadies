// ==========================================================================
// CAHYADIES EDITORIAL STUDIO — CORE LOGIC
// ==========================================================================

let STORE = null;
let currentSha = null;
let currentStoriesSort = "all";
let currentWorksCategory = "all";
let currentEditorLang = "id";

// Story Editor Temporary Memory for Multi-Language Drafts
let activeStoryDraft = {
  id: "",
  date: "",
  tag: "",
  likes: 0,
  id_content: { t: "", ex: "", body: "" },
  en_content: { t: "", ex: "", body: "" }
};

const DEFAULT_PIN = "1234";

function getStoredPin() {
  return localStorage.getItem("cahyadies_admin_pin") || DEFAULT_PIN;
}

function handleAuth(e) {
  e.preventDefault();
  const pinInput = document.getElementById("adminPin").value.trim();
  if (pinInput === getStoredPin()) {
    document.getElementById("authGate").classList.add("hidden");
    sessionStorage.setItem("cahyadies_admin_auth", "true");
    initStudio();
  } else {
    showToast("PIN salah! Coba lagi.", "error");
  }
}

// Session check
window.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("cahyadies_admin_auth") === "true") {
    document.getElementById("authGate").classList.add("hidden");
    initStudio();
  }
});

async function initStudio() {
  await loadStoreData();
  loadSettings();
  renderStoriesList();
  renderWorksGrid();
  renderMentayaSettings();
  renderProfileSettings();
}

async function loadStoreData() {
  try {
    const res = await fetch("../data/store.json?t=" + Date.now());
    if (!res.ok) throw new Error("Gagal mengambil data");
    STORE = await res.json();
  } catch (err) {
    console.warn("Menggunakan fallback cache lokal:", err);
    const local = localStorage.getItem("cahyadies_store_cache");
    if (local) {
      STORE = JSON.parse(local);
    } else {
      showToast("Gagal memuat data/store.json", "error");
    }
  }
}

function saveStoreLocally() {
  localStorage.setItem("cahyadies_store_cache", JSON.stringify(STORE));
}

// Top Tab Navigation
function switchTab(tabId) {
  document.querySelectorAll(".nav-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".pane-view").forEach(pane => {
    pane.classList.toggle("active", pane.id === `pane-${tabId}`);
  });

  if (tabId === "posts") {
    closeZenWriter();
    renderStoriesList();
  } else if (tabId === "works") {
    renderWorksGrid();
  }
}

// ==========================================================================
// 1. STORIES (BLOG & ZEN WRITER)
// ==========================================================================

function filterStoriesSort(sortType, btn) {
  currentStoriesSort = sortType;
  document.querySelectorAll("#storiesListView .filter-chip").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderStoriesList();
}

function renderStoriesList() {
  if (!STORE || !STORE.posts) return;
  const container = document.getElementById("storiesContainer");
  const query = (document.getElementById("searchPosts").value || "").toLowerCase();

  let list = [...STORE.posts];

  // Filtering by search
  if (query) {
    list = list.filter(p => {
      const tId = (p.id_content && p.id_content.t) ? p.id_content.t.toLowerCase() : "";
      const tEn = (p.en_content && p.en_content.t) ? p.en_content.t.toLowerCase() : "";
      const ex = (p.id_content && p.id_content.ex) ? p.id_content.ex.toLowerCase() : "";
      return tId.includes(query) || tEn.includes(query) || ex.includes(query);
    });
  }

  // Sorting
  if (currentStoriesSort === "likes") {
    list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  } else if (currentStoriesSort === "latest") {
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 48px 20px; color:var(--mute); border:1px dashed var(--line); border-radius:var(--r);">
        <p style="font-size:16px; margin:0 0 10px;">Belum ada cerita yang cocok.</p>
        <button class="btn btn-secondary btn-sm" onclick="openZenWriter()">Mulai Tulis Cerita Baru</button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(p => {
    const title = (p.id_content && p.id_content.t) ? p.id_content.t : p.id;
    const excerpt = (p.id_content && p.id_content.ex) ? p.id_content.ex : "";
    const tag = (p.id_content && p.id_content.tag) ? p.id_content.tag : "Umum";
    const body = (p.id_content && p.id_content.body) ? p.id_content.body : "";
    const words = body.replace(/<[^>]+>/g, " ").split(/\s+/).length;
    const readMin = Math.max(1, Math.round(words / 200));
    const likes = p.likes || 0;

    return `
      <div class="story-card">
        <div class="story-card-top">
          <h2 class="story-title" onclick="openZenWriter('${p.id}')">${title}</h2>
          <span class="story-tag">${tag}</span>
        </div>
        <p class="story-excerpt">${excerpt || "Tidak ada ringkasan teks."}</p>
        <div class="story-meta-row">
          <div class="story-meta-left">
            <span>📅 ${p.date || "Draf"}</span>
            <span>·</span>
            <span>⏱️ ${readMin} min read</span>
            <span>·</span>
            <span class="like-badge" onclick="quickEditLikes('${p.id}', event)" title="Klik untuk atur likes">
              ❤️ ${likes} Suka
            </span>
          </div>
          <div class="story-actions">
            <button class="btn btn-secondary btn-sm" onclick="openZenWriter('${p.id}')">Edit ✎</button>
            <a href="../index.html#/blog/${p.id}" target="_blank" class="btn btn-ghost btn-sm">Lihat ↗</a>
            <button class="btn btn-danger-ghost btn-sm" onclick="deleteStory('${p.id}')">Hapus</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function quickEditLikes(id, e) {
  e.stopPropagation();
  const p = STORE.posts.find(x => x.id === id);
  if (!p) return;
  const newLikes = prompt(`Atur jumlah Likes untuk "${p.id_content ? p.id_content.t : id}":`, p.likes || 0);
  if (newLikes !== null && !isNaN(newLikes)) {
    p.likes = Math.max(0, parseInt(newLikes, 10));
    saveStoreLocally();
    renderStoriesList();
    showToast(`Likes diupdate menjadi ❤️ ${p.likes}!`, "success");
  }
}

function deleteStory(id) {
  if (!confirm(`Hapus tulisan "${id}" ini selamanya?`)) return;
  STORE.posts = STORE.posts.filter(x => x.id !== id);
  saveStoreLocally();
  renderStoriesList();
  showToast("Tulisan berhasil dihapus.", "success");
}

// ZEN WRITER CANVAS
function openZenWriter(storyId = null) {
  document.getElementById("storiesListView").style.display = "none";
  document.getElementById("storyEditorView").style.display = "block";
  setEditorViewMode("write");

  if (storyId) {
    const p = STORE.posts.find(x => x.id === storyId);
    if (!p) return;
    activeStoryDraft = JSON.parse(JSON.stringify(p));
  } else {
    activeStoryDraft = {
      id: "",
      date: new Date().toISOString().slice(0, 10),
      tag: "Design",
      likes: 0,
      id_content: { t: "", ex: "", body: "" },
      en_content: { t: "", ex: "", body: "" }
    };
  }

  currentEditorLang = "id";
  updateLangButtons();
  loadDraftIntoForm();
  updateEditorStats();
}

function closeZenWriter() {
  document.getElementById("storyEditorView").style.display = "none";
  document.getElementById("storiesListView").style.display = "block";
}

function switchEditorLang(targetLang) {
  saveCurrentFormToMemory();
  currentEditorLang = targetLang;
  updateLangButtons();
  loadDraftIntoForm();
  updateEditorStats();
}

function copyStoryIdToEn() {
  saveCurrentFormToMemory();
  activeStoryDraft.en_content = JSON.parse(JSON.stringify(activeStoryDraft.id_content));
  if (currentEditorLang === "en") {
    loadDraftIntoForm();
    updateEditorStats();
  } else {
    switchEditorLang("en");
  }
  showToast("Teks ID disalin ke English!", "success");
}

function updateLangButtons() {
  const isId = currentEditorLang === "id";
  document.getElementById("btnLangId").className = isId ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";
  document.getElementById("btnLangEn").className = !isId ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";
}

function saveCurrentFormToMemory() {
  const contentObj = currentEditorLang === "id" ? activeStoryDraft.id_content : activeStoryDraft.en_content;
  contentObj.t = document.getElementById("writerTitle").value.trim();
  contentObj.ex = document.getElementById("writerExcerpt").value.trim();
  contentObj.body = document.getElementById("writerBody").value.trim();

  activeStoryDraft.id = document.getElementById("writerSlug").value.trim().toLowerCase().replace(/\s+/g, "-");
  activeStoryDraft.date = document.getElementById("writerDate").value;
  activeStoryDraft.tag = document.getElementById("writerTag").value.trim();
  activeStoryDraft.likes = parseInt(document.getElementById("writerLikes").value || 0, 10);
}

function loadDraftIntoForm() {
  const contentObj = currentEditorLang === "id" ? activeStoryDraft.id_content : activeStoryDraft.en_content;
  document.getElementById("writerTitle").value = contentObj.t || "";
  document.getElementById("writerExcerpt").value = contentObj.ex || "";
  document.getElementById("writerBody").value = contentObj.body || "";

  document.getElementById("writerSlug").value = activeStoryDraft.id || "";
  document.getElementById("writerDate").value = activeStoryDraft.date || "";
  document.getElementById("writerTag").value = activeStoryDraft.tag || (activeStoryDraft.id_content && activeStoryDraft.id_content.tag) || "Design";
  document.getElementById("writerLikes").value = activeStoryDraft.likes || 0;
}

function handleTitleChange() {
  if (!activeStoryDraft.id) {
    const val = document.getElementById("writerTitle").value.trim();
    document.getElementById("writerSlug").value = val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }
}

let currentEditorMode = "write";

function setEditorViewMode(mode) {
  currentEditorMode = mode;
  const workspace = document.getElementById("obsidianEditorWorkspace");
  if (workspace) workspace.className = `obsidian-editor-workspace mode-${mode}`;

  const btnWrite = document.getElementById("btnModeWrite");
  const btnSplit = document.getElementById("btnModeSplit");
  const btnPreview = document.getElementById("btnModePreview");

  if (btnWrite) btnWrite.className = mode === "write" ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";
  if (btnSplit) btnSplit.className = mode === "split" ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";
  if (btnPreview) btnPreview.className = mode === "preview" ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";

  const previewPane = document.getElementById("obsidianPreviewPane");
  if (previewPane) {
    if (mode === "split" || mode === "preview") {
      previewPane.style.display = "flex";
      updateLivePreview();
    } else {
      previewPane.style.display = "none";
    }
  }
}

function handleWriterBodyInput() {
  updateEditorStats();
  if (currentEditorMode === "split" || currentEditorMode === "preview") {
    updateLivePreview();
  }
}

function handleExcerptChange() {
  if (currentEditorMode === "split" || currentEditorMode === "preview") {
    updateLivePreview();
  }
}

function updateEditorStats() {
  const text = document.getElementById("writerBody").value || "";
  const words = text.replace(/<[^>]+>/g, " ").replace(/[#*`_~|\[\]\(\)>!-]/g, " ").split(/\s+/).filter(Boolean).length;
  const readMin = Math.max(1, Math.round(words / 200));
  const el = document.getElementById("editorWordStats");
  if (el) el.innerHTML = `<span>📖 ${readMin} min read · ${words} kata · Markdown GFM</span>`;
}

function updateLivePreview() {
  const title = document.getElementById("writerTitle").value.trim() || "Judul Cerita";
  const excerpt = document.getElementById("writerExcerpt").value.trim();
  const date = document.getElementById("writerDate").value || new Date().toISOString().slice(0, 10);
  const tag = document.getElementById("writerTag").value.trim() || "Catatan";
  const rawBody = document.getElementById("writerBody").value || "";

  const renderedHtml = renderMarkdown(rawBody);

  const container = document.getElementById("livePreviewContent");
  if (container) {
    container.innerHTML = `
      <div style="margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid var(--line);">
        <span class="tag" style="font-size: 11px; text-transform: uppercase; color: var(--acc); font-weight: 700; letter-spacing: 0.06em;">${tag}</span>
        <h1 style="font-size: 30px; font-weight: 700; margin: 8px 0 10px; line-height: 1.2;">${title}</h1>
        ${excerpt ? `<p style="font-size: 15px; color: var(--mute); font-style: italic; margin-bottom: 10px;">${excerpt}</p>` : ""}
        <div style="font-size: 12px; color: var(--mute); font-family: var(--sans);">${date} · ${calculateReadingMinutes(rawBody)} min read · GFM GitHub Pages</div>
      </div>
      <div>${renderedHtml}</div>
    `;
  }

  const words = rawBody.replace(/<[^>]+>/g, " ").replace(/[#*`_~|\[\]\(\)>!-]/g, " ").split(/\s+/).filter(Boolean).length;
  const chars = rawBody.length;
  const statsEl = document.getElementById("previewCharStats");
  if (statsEl) {
    statsEl.textContent = `${words} kata · ${chars} karakter`;
  }
}

function calculateReadingMinutes(text) {
  const words = (text || "").replace(/<[^>]+>/g, " ").replace(/[#*`_~|\[\]\(\)>!-]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function handleWriterBodyKeydown(e) {
  const textarea = e.target;
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const val = textarea.value;

  // 1. Tab key -> Indent 2 spaces
  if (e.key === "Tab") {
    e.preventDefault();
    if (!e.shiftKey) {
      textarea.value = val.substring(0, start) + "  " + val.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 2;
    } else {
      const lineStart = val.lastIndexOf("\n", start - 1) + 1;
      if (val.substring(lineStart, lineStart + 2) === "  ") {
        textarea.value = val.substring(0, lineStart) + val.substring(lineStart + 2);
        textarea.selectionStart = Math.max(lineStart, start - 2);
        textarea.selectionEnd = Math.max(lineStart, end - 2);
      }
    }
    handleWriterBodyInput();
    return;
  }

  // 2. Ctrl+B / Cmd+B -> Bold
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
    e.preventDefault();
    insertMd("bold");
    return;
  }

  // 3. Ctrl+I / Cmd+I -> Italic
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "i") {
    e.preventDefault();
    insertMd("italic");
    return;
  }

  // 4. Ctrl+K / Cmd+K -> Link
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    insertMd("link");
    return;
  }

  // 5. Enter key -> Smart list & checklist auto-continuation
  if (e.key === "Enter" && !e.shiftKey) {
    const curLineStart = val.lastIndexOf("\n", start - 1) + 1;
    const curLine = val.substring(curLineStart, start);

    // Checklist: - [ ] or - [x]
    const checkMatch = curLine.match(/^(\s*)-\s*\[([ xX])\]\s*(.*)$/);
    if (checkMatch) {
      e.preventDefault();
      const indent = checkMatch[1] || "";
      const textAfter = checkMatch[3] || "";
      if (!textAfter.trim()) {
        textarea.value = val.substring(0, curLineStart) + val.substring(start);
        textarea.selectionStart = textarea.selectionEnd = curLineStart;
      } else {
        const nextBullet = "\n" + indent + "- [ ] ";
        textarea.value = val.substring(0, start) + nextBullet + val.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + nextBullet.length;
      }
      handleWriterBodyInput();
      return;
    }

    // Unordered bullet list: - or *
    const bulletMatch = curLine.match(/^(\s*)[-*]\s*(.*)$/);
    if (bulletMatch) {
      e.preventDefault();
      const indent = bulletMatch[1] || "";
      const textAfter = bulletMatch[2] || "";
      if (!textAfter.trim()) {
        textarea.value = val.substring(0, curLineStart) + val.substring(start);
        textarea.selectionStart = textarea.selectionEnd = curLineStart;
      } else {
        const nextBullet = "\n" + indent + "- ";
        textarea.value = val.substring(0, start) + nextBullet + val.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + nextBullet.length;
      }
      handleWriterBodyInput();
      return;
    }

    // Ordered number list: 1. 2.
    const numMatch = curLine.match(/^(\s*)(\d+)\.\s*(.*)$/);
    if (numMatch) {
      e.preventDefault();
      const indent = numMatch[1] || "";
      const num = parseInt(numMatch[2], 10);
      const textAfter = numMatch[3] || "";
      if (!textAfter.trim()) {
        textarea.value = val.substring(0, curLineStart) + val.substring(start);
        textarea.selectionStart = textarea.selectionEnd = curLineStart;
      } else {
        const nextBullet = "\n" + indent + (num + 1) + ". ";
        textarea.value = val.substring(0, start) + nextBullet + val.substring(end);
        textarea.selectionStart = textarea.selectionEnd = start + nextBullet.length;
      }
      handleWriterBodyInput();
      return;
    }
  }
}

function insertMd(type) {
  const textarea = document.getElementById("writerBody");
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const val = textarea.value;
  const sel = val.substring(start, end);

  let prefix = "";
  let suffix = "";
  let defaultText = "teks";

  switch (type) {
    case "h1":
      prefix = "# ";
      defaultText = "Judul Bagian";
      break;
    case "h2":
      prefix = "## ";
      defaultText = "Subjudul";
      break;
    case "h3":
      prefix = "### ";
      defaultText = "Topik";
      break;
    case "bold":
      prefix = "**";
      suffix = "**";
      defaultText = "teks tebal";
      break;
    case "italic":
      prefix = "*";
      suffix = "*";
      defaultText = "teks miring";
      break;
    case "strike":
      prefix = "~~";
      suffix = "~~";
      defaultText = "teks dicoret";
      break;
    case "highlight":
      prefix = "==";
      suffix = "==";
      defaultText = "highlight kuning";
      break;
    case "code-inline":
      prefix = "`";
      suffix = "`";
      defaultText = "code";
      break;
    case "code-block":
      prefix = "```javascript\n";
      suffix = "\n```";
      defaultText = "// Tulis kode di sini\nconsole.log('Hello');";
      break;
    case "quote":
      prefix = "> ";
      defaultText = "Kutipan inspiratif";
      break;
    case "list-ul":
      prefix = "- ";
      defaultText = "Poin penting";
      break;
    case "list-ol":
      prefix = "1. ";
      defaultText = "Langkah pertama";
      break;
    case "task":
      prefix = "- [ ] ";
      defaultText = "Tugas yang perlu dikerjakan";
      break;
    case "table":
      prefix = "\n| Kolom 1 | Kolom 2 | Kolom 3 |\n| :--- | :---: | ---: |\n| Data A | Data B | Data C |\n| Data D | Data E | Data F |\n";
      defaultText = "";
      break;
    case "link":
      prefix = "[";
      suffix = "](https://contoh.com)";
      defaultText = sel || "Judul Tautan";
      break;
    case "hr":
      prefix = "\n---\n";
      defaultText = "";
      break;
  }

  const insertText = prefix + (sel || defaultText) + suffix;
  textarea.value = val.substring(0, start) + insertText + val.substring(end);
  textarea.focus();
  if (sel) {
    textarea.selectionStart = start;
    textarea.selectionEnd = start + insertText.length;
  } else {
    textarea.selectionStart = start + prefix.length;
    textarea.selectionEnd = start + prefix.length + defaultText.length;
  }
  handleWriterBodyInput();
}

function toggleCalloutMenu(e) {
  e.stopPropagation();
  const dropdown = document.getElementById("calloutMenuDropdown");
  if (dropdown) {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
}

document.addEventListener("click", () => {
  const dropdown = document.getElementById("calloutMenuDropdown");
  if (dropdown) dropdown.style.display = "none";
});

function insertCallout(type) {
  const textarea = document.getElementById("writerBody");
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const val = textarea.value;
  const sel = val.substring(start, end) || "Tulis catatan atau penjelasan di sini...";

  const template = `\n> [!${type}] Catatan ${type}\n> ${sel.replace(/\n/g, "\n> ")}\n\n`;
  textarea.value = val.substring(0, start) + template + val.substring(end);
  textarea.focus();
  textarea.selectionStart = textarea.selectionEnd = start + template.length;
  handleWriterBodyInput();

  const dropdown = document.getElementById("calloutMenuDropdown");
  if (dropdown) dropdown.style.display = "none";
}

function openMarkdownHelpModal() {
  document.getElementById("modalMarkdownHelp").classList.add("active");
}

async function handleBlogImageInsert(input) {
  const file = input.files && input.files[0];
  if (!file) return;

  try {
    showToast("Mengompresi gambar untuk cerita...", "info");
    const res = await compressImageFile(file, { maxWidth: 1200, maxHeight: 900, quality: 0.85 });

    const textarea = document.getElementById("writerBody");
    const start = textarea.selectionStart || textarea.value.length;
    const end = textarea.selectionEnd || textarea.value.length;

    const imgTag = `\n![${file.name.replace(/\.[^/.]+$/, "")}](${res.dataUrl})\n`;

    textarea.value = textarea.value.substring(0, start) + imgTag + textarea.value.substring(end);
    textarea.focus();
    handleWriterBodyInput();

    showToast(`✨ Foto terkompresi: ${formatBytes(res.origSize)} ➔ ${formatBytes(res.newSize)} (-${res.savedPercent}%) & disisipkan!`, "success");
  } catch (err) {
    showToast(err.message || "Gagal menyisipkan gambar", "error");
  } finally {
    input.value = "";
  }
}

/* =========================================
   MARKDOWN ENGINE (OBSIDIAN & GFM)
========================================= */
function renderMarkdown(md) {
  if (!md) return '';
  let text = String(md).replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  const codeBlocks = [];
  // 1. Fenced Code Blocks: ```lang ... ```
  text = text.replace(/`{3,}([a-zA-Z0-9_-]*)\n([\s\S]*?)`{3,}/g, (match, lang, code) => {
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const l = (lang || 'text').toLowerCase();
    const token = '@@CODEBLOCK_' + codeBlocks.length + '@@';
    codeBlocks.push(
      '<div class="code-block-wrapper">' +
        '<div class="code-block-header">' +
          '<span class="code-lang">' + (lang || 'code') + '</span>' +
          '<button type="button" class="copy-code-btn" onclick="copyCodeSnippet(this)">Copy</button>' +
        '</div>' +
        '<pre><code class="language-' + l + '">' + escaped + '</code></pre>' +
      '</div>'
    );
    return token;
  });

  // 2. Inline Code: `code`
  const inlineCodes = [];
  text = text.replace(/`([^`\n]+)`/g, (match, code) => {
    const escaped = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const token = '@@INLINECODE_' + inlineCodes.length + '@@';
    inlineCodes.push('<code>' + escaped + '</code>');
    return token;
  });

  // 3. Obsidian & GitHub Callouts:
  // > [!NOTE] Title
  // > Body text
  text = text.replace(/^(>[ \t]*\[!([A-Z]+)\][ \t]*(.*?)\n)((?:>[ \t]*[^\n]*\n?)*)/gim, (match, head, type, title, body) => {
    const t = type.toUpperCase();
    const icons = {
      NOTE: 'ℹ️', TIP: '💡', WARNING: '⚠️', IMPORTANT: '⚡',
      CAUTION: '🛑', INFO: 'ℹ️', QUOTE: '💬', SUCCESS: '✅', DANGER: '🔥'
    };
    const icon = icons[t] || '📌';
    const displayTitle = (title || t).trim();
    const cleanBody = body.replace(/^>[ \t]?/gm, '').trim();
    return '<div class="callout callout-' + t.toLowerCase() + '">' +
      '<div class="callout-title"><span class="callout-icon">' + icon + '</span> ' + displayTitle + '</div>' +
      (cleanBody ? '<div class="callout-body">' + cleanBody + '</div>' : '') +
    '</div>\n\n';
  });

  // 4. Standard Blockquotes (non-callout)
  text = text.replace(/^(>[ \t]*[^\n]+(?:\n>[ \t]*[^\n]+)*)/gm, match => {
    const content = match.replace(/^>[ \t]?/gm, '').trim();
    return '<blockquote>' + content + '</blockquote>\n\n';
  });

  // 5. Tables
  text = text.replace(/(?:^|\n)((?:\|[^\n]+\|\n?)+)/gm, match => {
    const lines = match.trim().split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length < 2) return match;
    if (!/^\|[\s\-:|]+\|$/.test(lines[1])) return match;

    const headers = lines[0].split('|').slice(1, -1).map(h => h.trim());
    const alignments = lines[1].split('|').slice(1, -1).map(a => {
      a = a.trim();
      if (a.startsWith(':') && a.endsWith(':')) return 'center';
      if (a.endsWith(':')) return 'right';
      return 'left';
    });
    let html = '\n<div class="table-wrapper"><table><thead><tr>';
    headers.forEach((h, i) => {
      const align = alignments[i] ? ' align="' + alignments[i] + '"' : '';
      html += '<th' + align + '>' + h + '</th>';
    });
    html += '</tr></thead><tbody>';
    for (let i = 2; i < lines.length; i++) {
      const cells = lines[i].split('|').slice(1, -1).map(c => c.trim());
      html += '<tr>';
      cells.forEach((c, idx) => {
        const align = alignments[idx] ? ' align="' + alignments[idx] + '"' : '';
        html += '<td' + align + '>' + (c || '') + '</td>';
      });
      html += '</tr>';
    }
    html += '</tbody></table></div>\n\n';
    return html;
  });

  // 6. Headers
  text = text.replace(/^######[ \t]+(.*)$/gm, '<h6>$1</h6>');
  text = text.replace(/^#####[ \t]+(.*)$/gm, '<h5>$1</h5>');
  text = text.replace(/^####[ \t]+(.*)$/gm, '<h4>$1</h4>');
  text = text.replace(/^###[ \t]+(.*)$/gm, '<h3>$1</h3>');
  text = text.replace(/^##[ \t]+(.*)$/gm, '<h2>$1</h2>');
  text = text.replace(/^#[ \t]+(.*)$/gm, '<h1>$1</h1>');

  // 7. Horizontal Rules
  text = text.replace(/^(?:---|\*\*\*|___)[ \t]*$/gm, '<hr>');

  // 8. Task Lists / Checklists
  text = text.replace(/^[ \t]*-[ \t]+\[ \][ \t]+(.*)$/gm, '<li class="task-item"><input type="checkbox" disabled> $1</li>');
  text = text.replace(/^[ \t]*-[ \t]+\[[xX]\][ \t]+(.*)$/gm, '<li class="task-item"><input type="checkbox" checked disabled> $1</li>');

  // Wrap consecutive task items
  text = text.replace(/((?:<li class="task-item">.*<\/li>\n?)+)/g, '<ul class="task-list">$1</ul>\n\n');

  // 9. Standard Unordered Lists (- or *)
  text = text.replace(/^[ \t]*[-*][ \t]+(.*)$/gm, '<li>$1</li>');
  text = text.replace(/((?:<li>.*<\/li>\n?)+)/g, match => {
    if (match.includes('task-item')) return match;
    return '<ul>' + match + '</ul>\n\n';
  });

  // 10. Ordered Lists
  text = text.replace(/^[ \t]*\d+\.[ \t]+(.*)$/gm, '<oli>$1</oli>');
  text = text.replace(/((?:<oli>.*<\/oli>\n?)+)/g, match => {
    return '<ol>' + match.replace(/<\/?oli>/g, m => m === '<oli>' ? '<li>' : '</li>') + '</ol>\n\n';
  });

  // 11. Images: ![alt](url)
  text = text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" loading="lazy">');

  // 12. Links: [text](url)
  text = text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

  // 13. Inline Styles
  // Obsidian highlight: ==highlight==
  text = text.replace(/==([^=\n]+)==/g, '<mark class="obsidian-highlight">$1</mark>');
  // Bold & Italic
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>');
  text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');
  text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
  text = text.replace(/_(.*?)_/g, '<em>$1</em>');
  text = text.replace(/~~(.*?)~~/g, '<del>$1</del>');

  // 14. Paragraphs (split by double newline)
  const blocks = text.split(/\n\s*\n/);
  const blockTagsRegex = /^(<(?:h[1-6]|div|p|blockquote|ul|ol|table|pre|hr)|@@CODEBLOCK_)/i;
  text = blocks.map(b => {
    b = b.trim();
    if (!b) return '';
    if (blockTagsRegex.test(b)) return b;
    return '<p>' + b.replace(/\n/g, '<br>') + '</p>';
  }).filter(Boolean).join('\n\n');

  // 15. Restore Code Blocks & Inline Codes
  text = text.replace(/@@CODEBLOCK_(\d+)@@/g, (_, idx) => codeBlocks[Number(idx)] || '');
  text = text.replace(/@@INLINECODE_(\d+)@@/g, (_, idx) => inlineCodes[Number(idx)] || '');

  return text;
}

window.copyCodeSnippet = function(btn) {
  const wrapper = btn.closest('.code-block-wrapper');
  if (!wrapper) return;
  const code = wrapper.querySelector('pre code');
  if (!code) return;
  navigator.clipboard.writeText(code.innerText).then(() => {
    const orig = btn.textContent;
    btn.textContent = 'Copied! ✓';
    btn.style.color = '#34d399';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.color = '';
    }, 2000);
  });
};

function saveZenStory() {
  saveCurrentFormToMemory();

  if (!activeStoryDraft.id_content.t && !activeStoryDraft.en_content.t) {
    showToast("Judul cerita tidak boleh kosong!", "error");
    return;
  }

  const slug = activeStoryDraft.id || "cerita-" + Date.now();

  // Normalize plain text bodies to clean paragraphs
  activeStoryDraft.id_content.body = formatTextToHtml(activeStoryDraft.id_content.body);
  activeStoryDraft.en_content.body = formatTextToHtml(activeStoryDraft.en_content.body || activeStoryDraft.id_content.body);

  // Sync English fallbacks
  if (!activeStoryDraft.en_content.t) activeStoryDraft.en_content.t = activeStoryDraft.id_content.t;
  if (!activeStoryDraft.en_content.ex) activeStoryDraft.en_content.ex = activeStoryDraft.id_content.ex;

  activeStoryDraft.id = slug;
  activeStoryDraft.id_content.tag = activeStoryDraft.tag;
  activeStoryDraft.en_content.tag = activeStoryDraft.tag;

  const existingIdx = STORE.posts.findIndex(x => x.id === slug);
  if (existingIdx >= 0) {
    STORE.posts[existingIdx] = activeStoryDraft;
  } else {
    STORE.posts.unshift(activeStoryDraft);
  }

  saveStoreLocally();
  closeZenWriter();
  renderStoriesList();
  showToast("Cerita berhasil disimpan! Siap dipublish.", "success");
}

// ==========================================================================
// 2. WORKS (VISUAL PORTFOLIO CARDS)
// ==========================================================================

let currentWorkModalLang = "id";
let activeWorkDraft = {
  img: "",
  id_content: { t: "", role: "", d: "", body: "" },
  en_content: { t: "", role: "", d: "", body: "" }
};

function switchWorkModalLang(targetLang) {
  saveWorkModalToMemory();
  currentWorkModalLang = targetLang;
  updateWorkLangButtons();
  loadWorkDraftIntoForm();
}

function updateWorkLangButtons() {
  const isId = currentWorkModalLang === "id";
  document.getElementById("btnWorkLangId").className = isId ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";
  document.getElementById("btnWorkLangEn").className = !isId ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";

  const suffix = isId ? "(ID)" : "(EN)";
  document.getElementById("lblWorkTitle").textContent = `Judul Karya ${suffix}`;
  document.getElementById("lblWorkRole").textContent = `Peran / Role ${suffix}`;
  document.getElementById("lblWorkDesc").textContent = `Deskripsi Singkat ${suffix}`;
  document.getElementById("lblWorkBody").textContent = `Catatan Proses & Detail ${suffix}`;
}

function saveWorkModalToMemory() {
  const c = currentWorkModalLang === "id" ? activeWorkDraft.id_content : activeWorkDraft.en_content;
  c.t = document.getElementById("wTitle").value.trim();
  c.role = document.getElementById("wRole").value.trim();
  c.d = document.getElementById("wDesc").value.trim();
  c.body = document.getElementById("wBody").value.trim();
}

function loadWorkDraftIntoForm() {
  const c = currentWorkModalLang === "id" ? activeWorkDraft.id_content : activeWorkDraft.en_content;
  document.getElementById("wTitle").value = c.t || "";
  document.getElementById("wRole").value = c.role || "";
  document.getElementById("wDesc").value = c.d || "";
  document.getElementById("wBody").value = c.body || "";
}

function copyWorkIdToEn() {
  saveWorkModalToMemory();
  activeWorkDraft.en_content = JSON.parse(JSON.stringify(activeWorkDraft.id_content));
  if (currentWorkModalLang === "en") {
    loadWorkDraftIntoForm();
  } else {
    switchWorkModalLang("en");
  }
  showToast("Teks ID disalin ke English!", "success");
}

function filterWorksCategory(cat, btn) {
  currentWorksCategory = cat;
  document.querySelectorAll("#pane-works .filter-chip").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  renderWorksGrid();
}

function renderWorksGrid() {
  if (!STORE || !STORE.works) return;
  const container = document.getElementById("worksGridContainer");
  const query = (document.getElementById("searchWorks").value || "").toLowerCase();

  const filtered = STORE.works.filter(w => {
    if (currentWorksCategory !== "all" && (w.category || "").toLowerCase() !== currentWorksCategory) {
      return false;
    }
    const tId = (w.id_content && w.id_content.t) ? w.id_content.t.toLowerCase() : "";
    const init = (w.initiative || "").toLowerCase();
    return tId.includes(query) || init.includes(query);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding: 48px 20px; color:var(--mute); border:1px dashed var(--line); border-radius:var(--r);">
        Belum ada karya untuk kategori ini.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(w => {
    const title = (w.id_content && w.id_content.t) ? w.id_content.t : w.id;
    const desc = (w.id_content && w.id_content.d) ? w.id_content.d : "";
    const role = (w.id_content && w.id_content.role) ? w.id_content.role : "-";
    const hue = w.hue || 140;
    const initial = title[0] || "W";
    const tag = `${(w.category || "web").toUpperCase()} · ${(w.initiative || "proyek").toUpperCase()}`;

    return `
      <div class="work-card-admin">
        <div class="work-card-cover" style="background: linear-gradient(135deg, hsl(${hue} 60% 55%), hsl(${(hue + 40) % 360} 55% 32%));">
          ${initial}
        </div>
        <div class="work-card-body">
          <div class="work-card-tags">${tag}</div>
          <h3 class="work-card-title">${title}</h3>
          <p class="work-card-desc">${desc}</p>
          <div class="work-card-footer">
            <span>📅 ${w.year || "-"} · ${role}</span>
            <div style="display:flex; gap:6px;">
              <button class="btn btn-secondary btn-sm" onclick="editWork('${w.id}')">Edit</button>
              <button class="btn btn-danger-ghost btn-sm" onclick="deleteWork('${w.id}')">Hapus</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function openWorkModal() {
  document.getElementById("modalWorkTitle").textContent = "Tambah Karya Baru";
  document.getElementById("workEditId").value = "";
  document.getElementById("wCategory").value = currentWorksCategory === "design" ? "design" : "website";
  document.getElementById("wInitiative").value = "mentayasandbox";
  document.getElementById("wId").value = "";
  document.getElementById("wId").disabled = false;
  document.getElementById("wYear").value = new Date().getFullYear();
  document.getElementById("wHue").value = Math.floor(Math.random() * 360);
  document.getElementById("wLink").value = "#";

  activeWorkDraft = {
    img: "",
    id_content: { t: "", role: "", d: "", body: "" },
    en_content: { t: "", role: "", d: "", body: "" }
  };
  removeWorkCover();

  currentWorkModalLang = "id";
  updateWorkLangButtons();
  loadWorkDraftIntoForm();
  document.getElementById("modalWork").classList.add("active");
}

function editWork(id) {
  const w = STORE.works.find(x => x.id === id);
  if (!w) return;

  document.getElementById("modalWorkTitle").textContent = "Edit Karya: " + id;
  document.getElementById("workEditId").value = w.id;
  document.getElementById("wCategory").value = w.category || "website";
  document.getElementById("wInitiative").value = w.initiative || "mentayasandbox";
  document.getElementById("wId").value = w.id;
  document.getElementById("wId").disabled = true;
  document.getElementById("wYear").value = w.year || "";
  document.getElementById("wHue").value = w.hue || 140;
  document.getElementById("wLink").value = w.link || "#";

  activeWorkDraft = {
    img: w.img || "",
    id_content: { ...(w.id_content || {}) },
    en_content: { ...(w.en_content || {}) }
  };

  document.getElementById("wImgUrl").value = w.img || "";
  document.getElementById("workCoverCompressStatus").style.display = "none";
  if (w.img) {
    document.getElementById("workCoverPreviewBox").style.backgroundImage = `url('${w.img}')`;
    document.getElementById("workCoverPreviewPlaceholder").style.display = "none";
    document.getElementById("btnRemoveWorkCover").style.display = "inline-flex";
  } else {
    document.getElementById("workCoverPreviewBox").style.backgroundImage = "";
    document.getElementById("workCoverPreviewPlaceholder").style.display = "block";
    document.getElementById("btnRemoveWorkCover").style.display = "none";
  }

  currentWorkModalLang = "id";
  updateWorkLangButtons();
  loadWorkDraftIntoForm();
  document.getElementById("modalWork").classList.add("active");
}

async function handleWorkCoverUpload(input) {
  const file = input.files && input.files[0];
  if (!file) return;

  try {
    showToast("Mengompresi foto karya...", "info");
    const res = await compressImageFile(file, { maxWidth: 1600, maxHeight: 1200, quality: 0.86 });
    activeWorkDraft.img = res.dataUrl;
    document.getElementById("wImgUrl").value = "";

    const previewBox = document.getElementById("workCoverPreviewBox");
    previewBox.style.backgroundImage = `url('${res.dataUrl}')`;
    document.getElementById("workCoverPreviewPlaceholder").style.display = "none";
    document.getElementById("btnRemoveWorkCover").style.display = "inline-flex";

    const statusEl = document.getElementById("workCoverCompressStatus");
    statusEl.innerHTML = `✨ Terkompresi: <strong>${formatBytes(res.origSize)} ➔ ${formatBytes(res.newSize)}</strong> (-${res.savedPercent}%) | ${res.width}×${res.height}px tajam`;
    statusEl.style.display = "block";

    showToast(`Foto terkompresi otomatis! (${formatBytes(res.newSize)})`, "success");
  } catch (err) {
    showToast(err.message || "Gagal mengompresi foto", "error");
  } finally {
    input.value = "";
  }
}

function handleWorkImgUrlInput() {
  const url = document.getElementById("wImgUrl").value.trim();
  const previewBox = document.getElementById("workCoverPreviewBox");
  if (url) {
    activeWorkDraft.img = url;
    previewBox.style.backgroundImage = `url('${url}')`;
    document.getElementById("workCoverPreviewPlaceholder").style.display = "none";
    document.getElementById("btnRemoveWorkCover").style.display = "inline-flex";
  } else {
    removeWorkCover();
  }
}

function removeWorkCover() {
  activeWorkDraft.img = "";
  const inputUrl = document.getElementById("wImgUrl");
  if (inputUrl) inputUrl.value = "";
  const previewBox = document.getElementById("workCoverPreviewBox");
  if (previewBox) previewBox.style.backgroundImage = "";
  const placeholder = document.getElementById("workCoverPreviewPlaceholder");
  if (placeholder) placeholder.style.display = "block";
  const btnRemove = document.getElementById("btnRemoveWorkCover");
  if (btnRemove) btnRemove.style.display = "none";
  const statusEl = document.getElementById("workCoverCompressStatus");
  if (statusEl) statusEl.style.display = "none";
}

function saveWorkItem(e) {
  e.preventDefault();
  saveWorkModalToMemory();

  if (!activeWorkDraft.id_content.t && !activeWorkDraft.en_content.t) {
    showToast("Judul karya tidak boleh kosong!", "error");
    return;
  }

  // AUTO-MIRRORING: jika versi EN kosong, otomatis gunakan versi ID
  if (!activeWorkDraft.en_content.t) activeWorkDraft.en_content.t = activeWorkDraft.id_content.t;
  if (!activeWorkDraft.en_content.role) activeWorkDraft.en_content.role = activeWorkDraft.id_content.role;
  if (!activeWorkDraft.en_content.d) activeWorkDraft.en_content.d = activeWorkDraft.id_content.d;
  if (!activeWorkDraft.en_content.body) activeWorkDraft.en_content.body = activeWorkDraft.id_content.body;

  const editId = document.getElementById("workEditId").value;
  const id = editId || document.getElementById("wId").value.trim().toLowerCase().replace(/\s+/g, "-");
  const cat = document.getElementById("wCategory").value;
  const init = document.getElementById("wInitiative").value;
  const coverImg = activeWorkDraft.img || document.getElementById("wImgUrl").value.trim();

  const workData = {
    id,
    category: cat,
    initiative: init,
    year: document.getElementById("wYear").value.trim(),
    hue: parseInt(document.getElementById("wHue").value || 140, 10),
    tags: [cat, init],
    link: document.getElementById("wLink").value.trim() || "#",
    id_content: activeWorkDraft.id_content,
    en_content: activeWorkDraft.en_content
  };
  if (coverImg) workData.img = coverImg;

  if (editId) {
    const idx = STORE.works.findIndex(x => x.id === editId);
    if (idx >= 0) STORE.works[idx] = workData;
  } else {
    STORE.works.unshift(workData);
  }

  saveStoreLocally();
  closeModal("modalWork");
  renderWorksGrid();
  showToast("Karya berhasil disimpan! (Auto-mirrored)", "success");
}

function deleteWork(id) {
  if (!confirm(`Hapus karya "${id}"?`)) return;
  STORE.works = STORE.works.filter(x => x.id !== id);
  saveStoreLocally();
  renderWorksGrid();
  showToast("Karya berhasil dihapus", "success");
}

// ==========================================================================
// 3. MENTAYASANDBOX & 4. SETTINGS
// ==========================================================================

function renderMentayaSettings() {
  if (!STORE || !STORE.mentayasandbox) return;
  const m = STORE.mentayasandbox;
  document.getElementById("mCommStatus").value = m.commissionStatus || "open";
  document.getElementById("mCommSlots").value = m.commissionSlots || "";
  if (m.contact) {
    document.getElementById("mWaLink").value = m.contact.wa || "";
    document.getElementById("mCollabWaLink").value = m.contact.collabWa || "";
  }
}

function saveMentayaSettings() {
  if (!STORE) return;
  STORE.mentayasandbox = STORE.mentayasandbox || {};
  STORE.mentayasandbox.commissionStatus = document.getElementById("mCommStatus").value;
  STORE.mentayasandbox.commissionSlots = document.getElementById("mCommSlots").value.trim();
  STORE.mentayasandbox.contact = {
    wa: document.getElementById("mWaLink").value.trim(),
    collabWa: document.getElementById("mCollabWaLink").value.trim()
  };
  saveStoreLocally();
  showToast("Pengaturan MentayaSandbox tersimpan!", "success");
}

// PROFILE MULTI-LANGUAGE
let currentProfileLang = "id";
let activeProfileDraft = {
  tagline: { id: "", en: "" },
  intro: { id: "", en: "" }
};

function switchProfileLang(targetLang) {
  saveProfileDraftToMemory();
  currentProfileLang = targetLang;
  updateProfileLangButtons();
  loadProfileDraftIntoForm();
}

function updateProfileLangButtons() {
  const isId = currentProfileLang === "id";
  document.getElementById("btnProfileLangId").className = isId ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";
  document.getElementById("btnProfileLangEn").className = !isId ? "btn btn-sm btn-secondary" : "btn btn-sm btn-ghost";

  const suffix = isId ? "(ID)" : "(EN)";
  document.getElementById("lblProfileTagline").textContent = `Tagline Website ${suffix}`;
  document.getElementById("lblProfileIntro").textContent = `Bio / Intro Ringkas ${suffix}`;
}

function saveProfileDraftToMemory() {
  activeProfileDraft.tagline[currentProfileLang] = document.getElementById("siteTagline").value.trim();
  activeProfileDraft.intro[currentProfileLang] = document.getElementById("siteIntro").value.trim();
}

function loadProfileDraftIntoForm() {
  document.getElementById("siteTagline").value = activeProfileDraft.tagline[currentProfileLang] || "";
  document.getElementById("siteIntro").value = activeProfileDraft.intro[currentProfileLang] || "";
}

function copyProfileIdToEn() {
  saveProfileDraftToMemory();
  activeProfileDraft.tagline.en = activeProfileDraft.tagline.id;
  activeProfileDraft.intro.en = activeProfileDraft.intro.id;
  if (currentProfileLang === "en") {
    loadProfileDraftIntoForm();
  } else {
    switchProfileLang("en");
  }
  showToast("Profil ID disalin ke versi English!", "success");
}

function renderProfileSettings() {
  if (!STORE || !STORE.site) return;
  const s = STORE.site;
  document.getElementById("siteName").value = s.name || "Adies";
  document.getElementById("siteLocation").value = s.location || "Surabaya, Jawa Timur";
  document.getElementById("siteEmail").value = s.email || "";

  activeProfileDraft = {
    tagline: {
      id: (s.tagline && s.tagline.id) || "",
      en: (s.tagline && s.tagline.en) || ""
    },
    intro: {
      id: (s.intro && s.intro.id) || "",
      en: (s.intro && s.intro.en) || ""
    }
  };
  currentProfileLang = "id";
  updateProfileLangButtons();
  loadProfileDraftIntoForm();
}

function loadSettings() {
  document.getElementById("ghRepo").value = localStorage.getItem("cahyadies_gh_repo") || "cahyadies/cahyadies";
  document.getElementById("ghToken").value = localStorage.getItem("cahyadies_gh_token") || "";
}

function saveAllSettings() {
  if (!STORE) return;
  saveProfileDraftToMemory();

  // Auto-mirror if EN is empty
  if (!activeProfileDraft.tagline.en) activeProfileDraft.tagline.en = activeProfileDraft.tagline.id;
  if (!activeProfileDraft.intro.en) activeProfileDraft.intro.en = activeProfileDraft.intro.id;

  STORE.site = STORE.site || {};
  STORE.site.name = document.getElementById("siteName").value.trim();
  STORE.site.location = document.getElementById("siteLocation").value.trim();
  STORE.site.email = document.getElementById("siteEmail").value.trim();
  STORE.site.tagline = activeProfileDraft.tagline;
  STORE.site.intro = activeProfileDraft.intro;

  const repo = document.getElementById("ghRepo").value.trim();
  const token = document.getElementById("ghToken").value.trim();
  const newPin = document.getElementById("newPin").value.trim();

  if (repo) localStorage.setItem("cahyadies_gh_repo", repo);
  if (token) localStorage.setItem("cahyadies_gh_token", token);
  if (newPin) localStorage.setItem("cahyadies_admin_pin", newPin);

  saveStoreLocally();
  showToast("Profil & pengaturan berhasil disimpan!", "success");
}

// ==========================================================================
// 5. GITHUB AUTO-PUBLISH & BACKUP
// ==========================================================================

async function publishChanges() {
  if (!STORE) {
    showToast("Data belum siap", "error");
    return;
  }

  const token = localStorage.getItem("cahyadies_gh_token");
  const repo = localStorage.getItem("cahyadies_gh_repo") || "cahyadies/cahyadies";

  if (!token) {
    switchTab("settings");
    showToast("Masukkan GitHub Token di tab Pengaturan terlebih dahulu!", "error");
    return;
  }

  const btn = document.getElementById("btnPublish");
  const originalText = btn.innerHTML;
  btn.innerHTML = "⏳ Mengunggah...";
  btn.disabled = true;

  try {
    const filePath = "data/store.json";
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;

    let sha = currentSha;
    const getRes = await fetch(apiUrl, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github.v3+json"
      }
    });

    if (getRes.ok) {
      const data = await getRes.json();
      sha = data.sha;
    }

    const jsonString = JSON.stringify(STORE, null, 2);
    const contentBase64 = btoa(unescape(encodeURIComponent(jsonString)));

    const putRes = await fetch(apiUrl, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": "application/vnd.github.v3+json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: "Publish content via cahyadies Editorial Studio",
        content: contentBase64,
        sha: sha
      })
    });

    if (!putRes.ok) {
      const errData = await putRes.json();
      throw new Error(errData.message || "Gagal mengunggah ke GitHub");
    }

    const putData = await putRes.json();
    currentSha = putData.content.sha;
    showToast("🚀 Berhasil dipublish! Vercel otomatis mendeploy.", "success");
  } catch (err) {
    console.error(err);
    showToast("Gagal publish: " + err.message, "error");
  } finally {
    btn.innerHTML = originalText;
    btn.disabled = false;
  }
}

function downloadBackup() {
  if (!STORE) return;
  const blob = new Blob([JSON.stringify(STORE, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `cahyadies-studio-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast("File backup JSON diunduh!", "success");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
}

let toastTimer = null;
function showToast(msg, type = "success") {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = `toast-msg ${type} show`;
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.className = "toast-msg";
  }, 3500);
}

// ==========================================================================
// 6. SMART IMAGE COMPRESSOR & OPTIMIZER (RETINA QUALITY)
// ==========================================================================

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) return "0 B";
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

/**
 * Smart Image Compressor
 * - Downsamples oversized photos to max dimensions (1600x1200 default)
 * - Canvas bicubic/lanczos smooth resampling
 * - WebP high quality 0.86 (fallback JPEG)
 * - Retains crisp text, sharpness and color fidelity while reducing file size 80-95%
 */
function compressImageFile(file, options = {}) {
  const {
    maxWidth = 1600,
    maxHeight = 1200,
    quality = 0.86,
    format = "image/webp"
  } = options;

  return new Promise((resolve, reject) => {
    if (!file || !file.type.startsWith("image/")) {
      return reject(new Error("File yang dipilih bukan gambar"));
    }

    const origSize = file.size;
    const reader = new FileReader();

    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;
        const origW = width;
        const origH = height;

        // Skip compression if already lightweight (< 160KB) and within max dimensions
        if (width <= maxWidth && height <= maxHeight && origSize < 160 * 1024) {
          return resolve({
            dataUrl: e.target.result,
            origSize,
            newSize: origSize,
            origW,
            origH,
            width,
            height,
            savedPercent: 0,
            isCompressed: false
          });
        }

        // Proportional scale down
        const ratio = Math.min(maxWidth / width, maxHeight / height, 1.0);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, 0, 0, width, height);

        let mimeType = format;
        try {
          const test = canvas.toDataURL("image/webp");
          if (!test.startsWith("data:image/webp")) {
            mimeType = "image/jpeg";
          }
        } catch {
          mimeType = "image/jpeg";
        }

        const dataUrl = canvas.toDataURL(mimeType, quality);
        const newSize = Math.round((dataUrl.length - dataUrl.indexOf(",") - 1) * 0.75);
        const savedPercent = Math.max(0, Math.round(((origSize - newSize) / origSize) * 100));

        resolve({
          dataUrl,
          origSize,
          newSize,
          origW,
          origH,
          width,
          height,
          savedPercent,
          isCompressed: true
        });
      };
      img.onerror = () => reject(new Error("Gagal membaca gambar"));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error("Gagal memuat file"));
    reader.readAsDataURL(file);
  });
}

let lastCompressedData = null;

function openCompressorModal() {
  lastCompressedData = null;
  const resultBox = document.getElementById("compressResultBox");
  if (resultBox) resultBox.style.display = "none";
  const dropZone = document.getElementById("compressDropZone");
  if (dropZone) dropZone.classList.remove("drag-over");
  document.getElementById("modalCompressor").classList.add("active");
}

async function handleStandaloneCompress(file) {
  if (!file) return;
  try {
    showToast("Mengompresi foto...", "info");
    const res = await compressImageFile(file, { maxWidth: 1600, maxHeight: 1200, quality: 0.86 });
    lastCompressedData = { ...res, name: file.name };

    document.getElementById("compressResultImg").src = res.dataUrl;
    document.getElementById("compressBadgePercent").textContent = `-${res.savedPercent}% Lebih Ringan`;
    document.getElementById("compressDimensions").textContent = `${res.width} × ${res.height} px (asli: ${res.origW} × ${res.origH})`;
    document.getElementById("compressFileName").textContent = file.name;
    document.getElementById("compressOrigSize").textContent = formatBytes(res.origSize);
    document.getElementById("compressNewSize").textContent = formatBytes(res.newSize);

    document.getElementById("compressResultBox").style.display = "block";
    showToast(`✨ Foto berhasil dikompresi! (${formatBytes(res.newSize)})`, "success");
  } catch (err) {
    showToast(err.message || "Gagal mengompresi gambar", "error");
  }
}

function handleDragOver(e) {
  e.preventDefault();
  e.stopPropagation();
  const dz = document.getElementById("compressDropZone");
  if (dz) dz.classList.add("drag-over");
}

function handleDragLeave(e) {
  e.preventDefault();
  e.stopPropagation();
  const dz = document.getElementById("compressDropZone");
  if (dz) dz.classList.remove("drag-over");
}

function handleDrop(e) {
  e.preventDefault();
  e.stopPropagation();
  const dz = document.getElementById("compressDropZone");
  if (dz) dz.classList.remove("drag-over");
  if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
    handleStandaloneCompress(e.dataTransfer.files[0]);
  }
}

function downloadCompressedResult() {
  if (!lastCompressedData) return;
  const a = document.createElement("a");
  a.href = lastCompressedData.dataUrl;
  const baseName = (lastCompressedData.name || "image").replace(/\.[^/.]+$/, "");
  a.download = `${baseName}-optimized.webp`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast("File WebP terkompresi berhasil diunduh!", "success");
}

function copyCompressedDataUrl() {
  if (!lastCompressedData) return;
  navigator.clipboard.writeText(lastCompressedData.dataUrl)
    .then(() => showToast("Data URL berhasil disalin ke clipboard!", "success"))
    .catch(() => showToast("Gagal menyalin ke clipboard", "error"));
}
