// ══════════════════════════════════════════════════════
//  GAME.JS  —  Oyun motoru
// ══════════════════════════════════════════════════════

const Game = (() => {

  // ── DURUM ──────────────────────────────────────────
  let state = {
    currentScene: null,
    inventory: [],
    notes: [],
    dialogQueue: [],
    dialogIndex: 0,
    selectedItem: null,
    unlockedScenes: new Set(["buro"]),
    completed: false
  };

  // ── EKRAN YÖNETİMİ ─────────────────────────────────
  function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById("screen-" + id).classList.add("active");
  }

  // ── BAŞLAT ─────────────────────────────────────────
  function start() {
    state = {
      currentScene: null,
      inventory: [],
      notes: [],
      dialogQueue: [],
      dialogIndex: 0,
      selectedItem: null,
      unlockedScenes: new Set(["buro"]),
      completed: false
    };
    showScreen("game");
    loadScene("buro");
    renderChars();
  }

  function restart() {
    showScreen("title");
  }

  // ── SAHNE YÜKLE ────────────────────────────────────
  function loadScene(sceneId) {
    const scene = STORY.scenes[sceneId];
    if (!scene) return;

    state.currentScene = sceneId;
    state.unlockedScenes.add(sceneId);

    // Başlık
    document.getElementById("scene-name").textContent = scene.name;

    // SVG sanat
    const artEl = document.getElementById("scene-art");
    artEl.innerHTML = scene.art;

    // Hotspot nesneler
    const objEl = document.getElementById("scene-objects");
    objEl.innerHTML = "";
    scene.hotspots.forEach(hs => {
      const div = document.createElement("div");
      div.className = "hotspot";
      div.style.cssText = hs.style;
      div.innerHTML = `<span class="hotspot-label">${hs.label}</span>`;
      div.addEventListener("click", () => handleHotspot(hs));
      objEl.appendChild(div);
    });

    // Açıklama
    document.getElementById("desc-text").textContent = scene.description;

    // Navigasyon
    renderNav(scene.navigation);

    // Giriş diyaloğu
    if (scene.onEnter && STORY.dialogs[scene.onEnter]) {
      setTimeout(() => startDialog(scene.onEnter), 400);
    }
  }

  // ── HOTSPOT AKSİYON ────────────────────────────────
  function handleHotspot(hs) {
    switch (hs.action) {
      case "inspect":
        document.getElementById("desc-text").textContent = hs.text;
        if (hs.addNote) addNote(hs.addNote);
        if (hs.addItem) addItem(hs.addItem);
        break;

      case "dialog":
        startDialog(hs.dialogId);
        break;

      case "accuse":
        handleAccusation(hs.suspect, hs.condition);
        break;
    }
  }

  // ── DİYALOG SİSTEMİ ────────────────────────────────
  function startDialog(dialogId) {
    const lines = STORY.dialogs[dialogId];
    if (!lines) return;

    state.dialogQueue = lines;
    state.dialogIndex = 0;
    showDialog();
  }

  function showDialog() {
    const box = document.getElementById("dialog-box");
    const line = state.dialogQueue[state.dialogIndex];

    if (!line) {
      box.classList.add("hidden");
      return;
    }

    box.classList.remove("hidden");
    document.getElementById("dialog-speaker").textContent = line.speaker;
    document.getElementById("dialog-text").textContent = line.text;

    const choicesEl = document.getElementById("dialog-choices");
    choicesEl.innerHTML = "";
    const nextBtn = document.getElementById("dialog-next");

    if (line.addNote) addNote(line.addNote);
    if (line.addItem) addItem(line.addItem);

    if (line.choices && line.choices.length) {
      nextBtn.classList.add("hidden");
      line.choices.forEach(ch => {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = ch.text;
        btn.addEventListener("click", () => {
          if (STORY.dialogs[ch.next]) {
            state.dialogQueue = STORY.dialogs[ch.next];
            state.dialogIndex = 0;
            showDialog();
          } else {
            document.getElementById("dialog-box").classList.add("hidden");
          }
        });
        choicesEl.appendChild(btn);
      });
    } else {
      nextBtn.classList.remove("hidden");
    }
  }

  function nextDialog() {
    state.dialogIndex++;
    showDialog();
  }

  // ── ENVANTER ───────────────────────────────────────
  function addItem(name) {
    if (state.inventory.includes(name)) return;
    state.inventory.push(name);
    renderInventory();
  }

  function renderInventory() {
    const el = document.getElementById("inventory-slots");
    el.innerHTML = "";
    if (!state.inventory.length) {
      el.innerHTML = `<p class="empty-inv">— boş —</p>`;
      return;
    }
    state.inventory.forEach(item => {
      const div = document.createElement("div");
      div.className = "inv-item" + (state.selectedItem === item ? " selected" : "");
      div.textContent = item;
      div.addEventListener("click", () => {
        state.selectedItem = state.selectedItem === item ? null : item;
        renderInventory();
      });
      el.appendChild(div);
    });
  }

  // ── NOTLAR ─────────────────────────────────────────
  function addNote(text) {
    if (state.notes.includes(text)) return;
    state.notes.push(text);
    renderNotes();
  }

  function renderNotes() {
    const el = document.getElementById("notes-list");
    el.innerHTML = "";
    if (!state.notes.length) {
      el.innerHTML = `<li class="empty-inv">— henüz bir şey yok —</li>`;
      return;
    }
    state.notes.forEach(n => {
      const li = document.createElement("li");
      li.textContent = n;
      el.appendChild(li);
    });
  }

  // ── KARAKTERLERİ ÇIZDIR ────────────────────────────
  function renderChars() {
    const el = document.getElementById("chars-list");
    el.innerHTML = "";
    Object.values(STORY.characters).forEach(ch => {
      if (ch.name === "Dedektif Sivri") return;
      const div = document.createElement("div");
      div.className = "char-card";
      div.innerHTML = `<div class="char-name">${ch.name}</div><div class="char-role">${ch.role}</div>`;
      el.appendChild(div);
    });
  }

  // ── NAVİGASYON ─────────────────────────────────────
  function renderNav(sceneIds) {
    const bar = document.getElementById("nav-bar");
    bar.innerHTML = "";

    sceneIds.forEach(id => {
      const scene = STORY.scenes[id];
      if (!scene) return;
      const btn = document.createElement("button");
      btn.className = "nav-btn" + (id === state.currentScene ? " active-scene" : "");
      btn.textContent = "→ " + scene.name;
      btn.addEventListener("click", () => loadScene(id));
      bar.appendChild(btn);
    });
  }

  // ── SUÇLAMA ────────────────────────────────────────
  function handleAccusation(suspect, condition) {
    // Yeterli kanıt kontrolü
    if (suspect === "kenan" && condition) {
      const hasEvidence = state.notes.includes(condition.note);
      if (!hasEvidence) {
        document.getElementById("desc-text").textContent =
          "Kenan Bey'i suçlamak istiyorum ama yeterli kanıtım yok. Daha fazla araştırmalıyım.";
        return;
      }
    }

    const result = STORY.accusations[suspect];
    if (!result) return;

    const endTitle = document.getElementById("end-title");
    const endText = document.getElementById("end-text");

    endTitle.textContent = result.title;
    endTitle.style.color = result.correct ? "#2e8b57" : "#c0392b";
    endText.textContent = result.text;

    showScreen("end");
  }

  // ── PUBLIC API ─────────────────────────────────────
  return { start, restart, nextDialog };

})();
