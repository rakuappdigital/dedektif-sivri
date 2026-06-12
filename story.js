// ══════════════════════════════════════════════════════
//  STORY.JS  —  Hikaye, sahneler, karakterler, bulmacalar
// ══════════════════════════════════════════════════════

const STORY = {

  // ── KARAKTERLER ────────────────────────────────────
  characters: {
    sivri: {
      name: "Dedektif Sivri",
      role: "Sen",
      color: "#1a1a1a"
    },
    usta: {
      name: "Ustam Ramazan",
      role: "Dönercinin sahibi",
      color: "#8B4513"
    },
    komsu: {
      name: "Neriman Hanım",
      role: "Komşu / şüpheli",
      color: "#6a0572"
    },
    garson: {
      name: "Volkan",
      role: "Garson",
      color: "#2e4057"
    },
    sagci: {
      name: "Kenan Bey",
      role: "Rakip lokanta sahibi",
      color: "#c0392b"
    }
  },

  // ── SAHNELER ───────────────────────────────────────
  scenes: {

    // 1. SAHNE: BÜRO
    buro: {
      id: "buro",
      name: "Sivri'nin Bürosu",
      description: "Kadıköy'ün arka sokaklarında, üçüncü kattaki büronda sabah 08:47. Islak bir sigara izmariti, dolu bir not defteri ve soğumuş bir çay bardağı. Hayat bu.",
      art: `
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="background:#f5f0e8">
          <!-- Zemin -->
          <rect x="0" y="240" width="600" height="80" fill="#d4c9a8"/>
          <!-- Duvar çizgileri -->
          <line x1="0" y1="240" x2="600" y2="240" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Pencere -->
          <rect x="380" y="30" width="160" height="180" fill="#b8d4e8" stroke="#1a1a1a" stroke-width="3"/>
          <line x1="460" y1="30" x2="460" y2="210" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="380" y1="120" x2="540" y2="120" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Yağmur damlaları -->
          <text x="390" y="80" font-size="20" fill="#7bafd4" opacity="0.6">/ / /</text>
          <text x="415" y="140" font-size="16" fill="#7bafd4" opacity="0.5">/ / /</text>
          <!-- Masa -->
          <rect x="80" y="190" width="320" height="55" fill="#8B6914" stroke="#1a1a1a" stroke-width="3"/>
          <rect x="100" y="240" width="20" height="60" fill="#6B4F10" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="360" y="240" width="20" height="60" fill="#6B4F10" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Dosyalar masa üstü -->
          <rect x="100" y="175" width="80" height="18" fill="#f5f0e8" stroke="#1a1a1a" stroke-width="2" transform="rotate(-3,140,184)"/>
          <rect x="105" y="172" width="80" height="18" fill="white" stroke="#1a1a1a" stroke-width="2" transform="rotate(1,145,181)"/>
          <!-- Çay bardağı -->
          <rect x="310" y="175" width="24" height="20" rx="3" fill="#c8a060" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="334" y1="182" x2="342" y2="182" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Koltuk -->
          <rect x="140" y="200" width="90" height="12" rx="4" fill="#4a3728" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="148" y="212" width="74" height="40" rx="3" fill="#3d2e20" stroke="#1a1a1a" stroke-width="2"/>
          <!-- SİVRİ karakteri (basit siluet) -->
          <circle cx="185" cy="170" r="20" fill="#2c2c2c" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="165" y="190" width="40" height="50" rx="4" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Dedektif şapkası -->
          <rect x="160" y="155" width="50" height="10" rx="2" fill="#111"/>
          <rect x="168" y="140" width="34" height="18" rx="3" fill="#111"/>
          <!-- Soru işareti balonu -->
          <ellipse cx="230" cy="145" rx="22" ry="16" fill="white" stroke="#1a1a1a" stroke-width="2"/>
          <text x="223" y="151" font-size="18" font-weight="bold" fill="#c0392b">?</text>
          <!-- Duvar lambası -->
          <rect x="50" y="50" width="10" height="30" fill="#8B6914" stroke="#1a1a1a" stroke-width="2"/>
          <polygon points="30,80 80,80 65,120 45,120" fill="#f5d020" stroke="#1a1a1a" stroke-width="2" opacity="0.9"/>
          <!-- Raflar -->
          <rect x="0" y="60" width="30" height="5" fill="#6B4F10" stroke="#1a1a1a" stroke-width="1"/>
          <rect x="0" y="90" width="30" height="5" fill="#6B4F10" stroke="#1a1a1a" stroke-width="1"/>
          <rect x="2" y="40" width="8" height="22" fill="#c0392b" stroke="#1a1a1a" stroke-width="1"/>
          <rect x="12" y="44" width="6" height="18" fill="#2e4057" stroke="#1a1a1a" stroke-width="1"/>
          <rect x="20" y="42" width="7" height="20" fill="#6a0572" stroke="#1a1a1a" stroke-width="1"/>
        </svg>
      `,
      hotspots: [
        {
          id: "dosyalar",
          label: "Dosyalar",
          style: "left:14%;top:50%;width:14%;height:20%",
          action: "inspect",
          text: "Masanın üzerinde dağınık dosyalar. En üsttekinde kocaman harflerle yazıyor: 'ACİL — KAYIP DÖNER VAKASI'. İşte bu sabahki görevin."
        },
        {
          id: "cay",
          label: "Soğumuş çay",
          style: "left:50%;top:50%;width:8%;height:20%",
          action: "inspect",
          text: "Soğumuş çay. Tam senin hayatın gibi: bir zamanlar sıcaktı, şimdi sadece acı."
        },
        {
          id: "telefon_buro",
          label: "Telefon",
          style: "left:2%;top:55%;width:6%;height:20%",
          action: "dialog",
          dialogId: "telefon_mesaj"
        }
      ],
      navigation: ["donerci"],
      onEnter: null
    },

    // 2. SAHNE: DÖNERCİ
    donerci: {
      id: "donerci",
      name: "Ramazan'ın Dönerci Dükkanı",
      description: "Yirmi yıldır aynı yerde duran döner şişi... yok. Şiş boş. Kahramanımız bir cinayet mağduru gibi orada öylece duruyor.",
      art: `
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="background:#f5f0e8">
          <!-- Zemin -->
          <rect x="0" y="260" width="600" height="60" fill="#d4c9a8"/>
          <line x1="0" y1="260" x2="600" y2="260" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Tezgah -->
          <rect x="160" y="160" width="280" height="100" fill="#c8a060" stroke="#1a1a1a" stroke-width="3"/>
          <rect x="160" y="155" width="280" height="12" fill="#8B6914" stroke="#1a1a1a" stroke-width="2"/>
          <!-- DÖNER ŞİŞİ BOOOŞ -->
          <rect x="290" y="50" width="8" height="180" fill="#888" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Şiş tabanı -->
          <ellipse cx="294" cy="230" rx="24" ry="8" fill="#555" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Soru işareti şiş üzerinde -->
          <text x="270" y="120" font-size="48" fill="#c0392b" font-weight="bold" opacity="0.3">?</text>
          <!-- Ramazan karakteri -->
          <circle cx="460" cy="140" r="24" fill="#c8a060" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="438" y="164" width="44" height="60" rx="4" fill="#fff" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Önlük -->
          <rect x="446" y="170" width="28" height="50" fill="#e8e0d0" stroke="#1a1a1a" stroke-width="1"/>
          <!-- Bıyık -->
          <path d="M450 152 Q460 158 470 152" stroke="#1a1a1a" stroke-width="2.5" fill="none"/>
          <!-- Kep -->
          <rect x="436" y="116" width="48" height="12" rx="3" fill="#fff" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="448" y="104" width="24" height="14" rx="2" fill="#fff" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Ağlayan göz çizgileri -->
          <path d="M452 146 Q453 152 452 156" stroke="#7bafd4" stroke-width="1.5" fill="none"/>
          <path d="M468 146 Q469 152 468 156" stroke="#7bafd4" stroke-width="1.5" fill="none"/>
          <!-- Konuşma balonu -->
          <rect x="310" y="60" width="130" height="55" rx="6" fill="white" stroke="#1a1a1a" stroke-width="2"/>
          <polygon points="390,115 400,130 380,115" fill="white" stroke="#1a1a1a" stroke-width="1"/>
          <text x="320" y="82" font-size="10" fill="#1a1a1a">Yirmi yıllık dönerim</text>
          <text x="320" y="96" font-size="10" fill="#1a1a1a">KAYBOLDU! Dün gece</text>
          <text x="320" y="110" font-size="10" fill="#c0392b" font-weight="bold">biri çaldı!</text>
          <!-- Menü tabelası -->
          <rect x="30" y="40" width="120" height="80" fill="#c0392b" stroke="#1a1a1a" stroke-width="3"/>
          <text x="44" y="65" font-size="10" font-weight="bold" fill="white">RAMAZAN'IN</text>
          <text x="50" y="80" font-size="10" font-weight="bold" fill="white">DÖNERCİSİ</text>
          <text x="36" y="98" font-size="8" fill="#f5d020">★ TAM PORSIYON ★</text>
          <text x="40" y="112" font-size="8" fill="white">1982'den beri</text>
          <!-- Tablo / fiyat listesi -->
          <rect x="30" y="130" width="120" height="100" fill="#f5f0e8" stroke="#1a1a1a" stroke-width="2"/>
          <text x="38" y="148" font-size="8" fill="#1a1a1a">Tam Porsiyon...25₺</text>
          <text x="38" y="162" font-size="8" fill="#1a1a1a">Yarım Pors.....15₺</text>
          <text x="38" y="176" font-size="8" fill="#1a1a1a">Ekmek Arası...12₺</text>
          <text x="38" y="190" font-size="8" fill="#1a1a1a">Ayran.........5₺</text>
          <text x="38" y="210" font-size="8" fill="#c0392b">BUGÜN KAPALI</text>
        </svg>
      `,
      hotspots: [
        {
          id: "sis_bos",
          label: "Boş döner şişi",
          style: "left:44%;top:10%;width:8%;height:70%",
          action: "inspect",
          text: "Şiş bomboş. Yüz kiloluk döner gece yarısı kaybolmuş. Peki döner kendi kendine yürümez... ya da yürür mü? Hayır, yürümez. Birileri çalmış.",
          addNote: "Döner şişi boş — dün gece çalındı"
        },
        {
          id: "ramazan",
          label: "Ramazan Usta",
          style: "left:70%;top:30%;width:18%;height:50%",
          action: "dialog",
          dialogId: "ramazan_ilk"
        },
        {
          id: "tezgah",
          label: "Tezgah",
          style: "left:26%;top:48%;width:46%;height:25%",
          action: "inspect",
          text: "Tezgahın üzerinde bir şeyler var. Bir çatal, bir peçete ve... sarımsaklı yoğurt lekesi. Taze. Bu sabah bırakılmış."
        },
        {
          id: "menu_tabelasi",
          label: "Menü tabelası",
          style: "left:2%;top:10%;width:22%;height:60%",
          action: "inspect",
          text: "Fiyat listesinde ilginç bir not: 'Bugün kapalı'. Ama kapı açık. Ramazan Usta ne gizliyor?"
        }
      ],
      navigation: ["buro", "komsu_evi", "rakip_lokanta"],
      onEnter: "ramazan_giris"
    },

    // 3. SAHNE: KOMŞU EVİ
    komsu_evi: {
      id: "komsu_evi",
      name: "Neriman Hanım'ın Balconu",
      description: "Dönerci dükkanının tam karşısındaki apartman. Üçüncü kat. Neriman Hanım burada her şeyi görür. Ve bilmesini de sever.",
      art: `
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="background:#f5f0e8">
          <!-- Bina cephesi -->
          <rect x="80" y="20" width="440" height="300" fill="#e8dfc8" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Balkon -->
          <rect x="200" y="100" width="200" height="130" fill="#d4c9a8" stroke="#1a1a1a" stroke-width="3"/>
          <rect x="190" y="220" width="220" height="10" fill="#b0a080" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Balkon korkulukları -->
          <line x1="210" y1="220" x2="210" y2="100" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="240" y1="220" x2="240" y2="100" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="270" y1="220" x2="270" y2="100" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="300" y1="220" x2="300" y2="100" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="330" y1="220" x2="330" y2="100" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="360" y1="220" x2="360" y2="100" stroke="#1a1a1a" stroke-width="1.5"/>
          <!-- Dürbün -->
          <rect x="340" y="145" width="50" height="16" rx="4" fill="#888" stroke="#1a1a1a" stroke-width="2"/>
          <circle cx="343" cy="153" r="7" fill="#7bafd4" stroke="#1a1a1a" stroke-width="1.5"/>
          <circle cx="387" cy="153" r="7" fill="#7bafd4" stroke="#1a1a1a" stroke-width="1.5"/>
          <!-- NERİMAN karakteri -->
          <circle cx="270" cy="130" r="20" fill="#f0d0b0" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="250" y="150" width="40" height="60" rx="3" fill="#6a0572" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Saç -->
          <ellipse cx="270" cy="115" rx="22" ry="14" fill="#555" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Küpe -->
          <circle cx="250" cy="132" r="3" fill="#f5d020" stroke="#1a1a1a" stroke-width="1"/>
          <circle cx="290" cy="132" r="3" fill="#f5d020" stroke="#1a1a1a" stroke-width="1"/>
          <!-- Konuşma balonu -->
          <rect x="80" y="60" width="150" height="60" rx="6" fill="white" stroke="#1a1a1a" stroke-width="2"/>
          <polygon points="190,120 210,140 175,120" fill="white" stroke="#1a1a1a" stroke-width="1"/>
          <text x="90" y="82" font-size="9.5" fill="#1a1a1a">Dün gece 02:00'de</text>
          <text x="90" y="96" font-size="9.5" fill="#1a1a1a">birisini gördüm ama</text>
          <text x="90" y="110" font-size="9.5" fill="#c0392b">söylemem!</text>
          <!-- Diğer pencereler -->
          <rect x="100" y="50" width="60" height="70" fill="#b8d4e8" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="440" y="50" width="60" height="70" fill="#b8d4e8" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="100" y="160" width="60" height="70" fill="#b8d4e8" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="440" y="160" width="60" height="70" fill="#b8d4e8" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Çiçek saksıları balkon -->
          <rect x="205" y="208" width="16" height="14" fill="#c0392b" stroke="#1a1a1a" stroke-width="1.5"/>
          <ellipse cx="213" cy="204" rx="10" ry="6" fill="#2e8b57"/>
          <rect x="375" y="208" width="16" height="14" fill="#f5d020" stroke="#1a1a1a" stroke-width="1.5"/>
          <ellipse cx="383" cy="204" rx="10" ry="6" fill="#2e8b57"/>
        </svg>
      `,
      hotspots: [
        {
          id: "neriman",
          label: "Neriman Hanım",
          style: "left:38%;top:28%;width:16%;height:50%",
          action: "dialog",
          dialogId: "neriman_ilk"
        },
        {
          id: "durbun",
          label: "Dürbün",
          style: "left:54%;top:40%;width:16%;height:25%",
          action: "inspect",
          text: "Pahalı bir dürbün. Kılıfında 'N.H.' yazıyor. Neriman Hanım burada saatlerce gözlem yapıyor olmalı. Her şeyi görmüştür.",
          addNote: "Neriman Hanım dürbünle sokağı izliyor"
        }
      ],
      navigation: ["donerci", "rakip_lokanta"],
      onEnter: null
    },

    // 4. SAHNE: RAKİP LOKANTA
    rakip_lokanta: {
      id: "rakip_lokanta",
      name: "Kenan Bey'in Lokantası",
      description: "On metre ötede, parlak tabelasıyla duruyor: 'KENAN'IN LAHMACUNCULUĞU'. Ramazan Usta'nın en büyük rakibi.",
      art: `
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="background:#f5f0e8">
          <!-- Zemin -->
          <rect x="0" y="270" width="600" height="50" fill="#d4c9a8"/>
          <line x1="0" y1="270" x2="600" y2="270" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Bina -->
          <rect x="40" y="30" width="520" height="250" fill="#fff5e6" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Tabela -->
          <rect x="80" y="30" width="440" height="60" fill="#f5d020" stroke="#1a1a1a" stroke-width="3"/>
          <text x="130" y="55" font-size="16" font-weight="bold" fill="#1a1a1a">KENAN'IN</text>
          <text x="105" y="76" font-size="15" font-weight="bold" fill="#c0392b">LAHMACUNCULUĞU</text>
          <!-- Vitrin -->
          <rect x="60" y="100" width="480" height="170" fill="#e8f4fc" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Masa içerde -->
          <rect x="200" y="180" width="200" height="60" fill="#c8a060" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="160" y="190" width="40" height="40" fill="#c8a060" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="400" y="190" width="40" height="40" fill="#c8a060" stroke="#1a1a1a" stroke-width="2"/>
          <!-- KENAN karakteri -->
          <circle cx="380" cy="145" r="22" fill="#f0d0b0" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="358" y="167" width="44" height="65" rx="3" fill="#c0392b" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Dolar işareti gözlerinde (hırslı ifade) -->
          <text x="369" y="146" font-size="10" fill="#1a1a1a" font-weight="bold">$  $</text>
          <!-- Kaş çatık -->
          <line x1="368" y1="132" x2="377" y2="136" stroke="#1a1a1a" stroke-width="2.5"/>
          <line x1="383" y1="136" x2="392" y2="132" stroke="#1a1a1a" stroke-width="2.5"/>
          <!-- Bıyık (ince, kibar) -->
          <path d="M372 152 Q380 155 388 152" stroke="#1a1a1a" stroke-width="1.5" fill="none"/>
          <!-- Konuşma balonu -->
          <rect x="410" y="90" width="160" height="60" rx="6" fill="white" stroke="#1a1a1a" stroke-width="2"/>
          <polygon points="418,150 400,165 432,150" fill="white" stroke="#1a1a1a" stroke-width="1"/>
          <text x="420" y="112" font-size="9" fill="#1a1a1a">Ben mi? Ben döner</text>
          <text x="420" y="126" font-size="9" fill="#1a1a1a">çalmam. Lahmacun</text>
          <text x="420" y="140" font-size="9" fill="#2e8b57" font-weight="bold">daha karlı zaten!</text>
          <!-- Şüpheli koli kasada -->
          <rect x="90" y="200" width="60" height="50" fill="#c8a060" stroke="#1a1a1a" stroke-width="2"/>
          <line x1="90" y1="225" x2="150" y2="225" stroke="#1a1a1a" stroke-width="1.5"/>
          <line x1="120" y1="200" x2="120" y2="250" stroke="#1a1a1a" stroke-width="1.5"/>
          <text x="95" y="218" font-size="8" fill="#c0392b">?</text>
        </svg>
      `,
      hotspots: [
        {
          id: "kenan",
          label: "Kenan Bey",
          style: "left:56%;top:28%;width:18%;height:55%",
          action: "dialog",
          dialogId: "kenan_ilk"
        },
        {
          id: "koli",
          label: "Şüpheli koli",
          style: "left:12%;top:58%;width:13%;height:28%",
          action: "inspect",
          text: "Kasanın yanında büyük bir koli. Üzerinde 'ÖZEL' yazıyor ve yoğurt kokuyor. Tuhaf. Lahmacuncuda neden yoğurt koli olsun?",
          addNote: "Kenan Bey'in kasasında yoğurt kokan şüpheli koli var",
          addItem: "Koli notu"
        }
      ],
      navigation: ["donerci", "komsu_evi", "cozum"],
      onEnter: null
    },

    // 5. SAHNE: ÇÖZÜM
    cozum: {
      id: "cozum",
      name: "Çözüm Zamanı — Dönerci Dükkanı",
      description: "Tüm ipuçları toplandı. Sır şu: döner kaybolmadı, gizlendi. Ama kim? Neden?",
      art: `
        <svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" style="background:#f5f0e8">
          <!-- Zemin -->
          <rect x="0" y="260" width="600" height="60" fill="#d4c9a8"/>
          <line x1="0" y1="260" x2="600" y2="260" stroke="#1a1a1a" stroke-width="3"/>
          <!-- Sahne: tüm karakterler bir arada -->
          <!-- RAMAZAN -->
          <circle cx="120" cy="160" r="20" fill="#c8a060" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="100" y="180" width="40" height="55" rx="3" fill="#fff" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="108" y="186" width="24" height="45" fill="#e8e0d0" stroke="#1a1a1a" stroke-width="1"/>
          <rect x="98" y="142" width="44" height="10" rx="2" fill="#fff" stroke="#1a1a1a" stroke-width="1.5"/>
          <rect x="108" y="132" width="24" height="12" rx="2" fill="#fff" stroke="#1a1a1a" stroke-width="1.5"/>
          <text x="100" y="248" font-size="8" text-anchor="middle" fill="#1a1a1a">Ramazan</text>
          <!-- NERİMAN -->
          <circle cx="240" cy="155" r="20" fill="#f0d0b0" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="220" y="175" width="40" height="60" rx="3" fill="#6a0572" stroke="#1a1a1a" stroke-width="2"/>
          <ellipse cx="240" cy="141" rx="22" ry="14" fill="#555" stroke="#1a1a1a" stroke-width="2"/>
          <text x="240" y="248" font-size="8" text-anchor="middle" fill="#1a1a1a">Neriman</text>
          <!-- SİVRİ (ortada) -->
          <circle cx="360" cy="140" r="24" fill="#2c2c2c" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="338" y="164" width="44" height="65" rx="3" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="334" y="126" width="52" height="10" rx="2" fill="#111"/>
          <rect x="342" y="110" width="36" height="18" rx="3" fill="#111"/>
          <!-- Sivri'nin parmağı işaret ediyor -->
          <line x1="380" y1="175" x2="450" y2="165" stroke="#c0392b" stroke-width="3"/>
          <polygon points="452,162 460,168 450,172" fill="#c0392b"/>
          <text x="360" y="248" font-size="8" text-anchor="middle" fill="#c0392b" font-weight="bold">SİVRİ</text>
          <!-- KENAN (suçlu ilan edilen) -->
          <circle cx="490" cy="155" r="20" fill="#f0d0b0" stroke="#1a1a1a" stroke-width="2"/>
          <rect x="470" y="175" width="40" height="60" rx="3" fill="#c0392b" stroke="#1a1a1a" stroke-width="2"/>
          <!-- Terleyen Kenan -->
          <text x="484" y="154" font-size="9" fill="#7bafd4">~ ~</text>
          <path d="M480 144 Q490 148 500 144" stroke="#1a1a1a" stroke-width="2" fill="none"/>
          <text x="490" y="248" font-size="8" text-anchor="middle" fill="#c0392b">Kenan!</text>
          <!-- Işık efekti sivri üzerinde -->
          <ellipse cx="360" cy="100" rx="40" ry="15" fill="#f5d020" opacity="0.25"/>
          <!-- Soru işareti bulut -->
          <rect x="130" y="50" width="200" height="70" rx="10" fill="white" stroke="#1a1a1a" stroke-width="2"/>
          <text x="150" y="75" font-size="9" fill="#1a1a1a">Peki ama Kenan Bey</text>
          <text x="150" y="90" font-size="9" fill="#1a1a1a">döner neden çaldı?</text>
          <text x="150" y="105" font-size="9" fill="#c0392b" font-weight="bold">Cevap: Tarif için!</text>
        </svg>
      `,
      hotspots: [
        {
          id: "itham_kenan",
          label: "Kenan Bey'i suçla",
          style: "left:72%;top:30%;width:20%;height:55%",
          action: "accuse",
          suspect: "kenan",
          condition: { note: "Kenan Bey'in kasasında yoğurt kokan şüpheli koli var" }
        },
        {
          id: "itham_neriman",
          label: "Neriman'ı suçla",
          style: "left:34%;top:32%;width:15%;height:50%",
          action: "accuse",
          suspect: "neriman"
        },
        {
          id: "itham_ramazan",
          label: "Ramazan'ı suçla",
          style: "left:13%;top:35%;width:15%;height:45%",
          action: "accuse",
          suspect: "ramazan"
        }
      ],
      navigation: ["donerci"],
      onEnter: null
    }
  },

  // ── DİYALOGLAR ─────────────────────────────────────
  dialogs: {

    telefon_mesaj: [
      { speaker: "Telefon Mesajı", text: "Bip... 'Sivri Bey, ben Ramazan. Dönerim kayboldu. Yirmi yıllık döner. Gelin lütfen. Sabah 9'a kadar gelirseniz ücretsiz ekmek arası söz.' — Bip..." },
      { speaker: "Dedektif Sivri", text: "Bedava ekmek arası. Bu benim için yeterli motivasyon." }
    ],

    ramazan_giris: [
      { speaker: "Ramazan Usta", text: "Dedektif Sivri! Geldiniz! Yirmi yıldır her sabah 06:00'da şişe takılan dönerim... sabah geldiğimde YOK. Şiş bomboş." },
      { speaker: "Dedektif Sivri", text: "Sakin ol Ramazan Usta. Her yerde bir iz bırakılır. Özellikle yüz kiloluk döner taşıyorken." }
    ],

    ramazan_ilk: [
      { speaker: "Ramazan Usta", text: "Nerede başlayalım bilmiyorum. Dün gece kapıyı kilitledim, sabah açık buldum." },
      {
        speaker: "Dedektif Sivri", text: "Şüphelendiğin biri var mı?",
        choices: [
          { text: "Rakibin Kenan Bey hakkında ne düşünüyorsun?", next: "ramazan_kenan" },
          { text: "Dün gece burada başka biri var mıydı?", next: "ramazan_gece" },
          { text: "Dönerinin tarifi yazılı mı bir yerde?", next: "ramazan_tarif" }
        ]
      }
    ],

    ramazan_kenan: [
      { speaker: "Ramazan Usta", text: "Kenan! O alçak! Geçen ay 'dönerinin sırrını öğrenirim' demişti. Baharatlarımı almak istedi, vermedim. Ama döner çalacak kadar alçalmaz... değil mi?" },
      { speaker: "Dedektif Sivri", text: "Şimdilik not aldım. Devam." }
    ],

    ramazan_gece: [
      { speaker: "Ramazan Usta", text: "Volkan! Garsonumuz Volkan temizliğe kalmıştı. Ama geç çıkmış, komşular görmüş. Normal bu, her gece temizler." },
      { speaker: "Dedektif Sivri", text: "Volkan burada mı şu an?", addNote: "Garson Volkan dün gece geç kalmış" },
      { speaker: "Ramazan Usta", text: "Hayır. Bu sabah gelmedi. Telefon da açmıyor..." }
    ],

    ramazan_tarif: [
      { speaker: "Ramazan Usta", text: "Tarif kafamdadır! Yazılı değil. Ama... aaa! Dün gece Volkan 'usta tarifi bir yere not edelim' demişti. Ben 'gerek yok' dedim ama o ısrar etti..." },
      { speaker: "Dedektif Sivri", text: "Çok ilginç. Volkan baharatları da biliyor muydu?", addNote: "Ramazan Usta tarifi kafasında tutuyor ama Volkan sormuş" },
      { speaker: "Ramazan Usta", text: "Tabii ki! Yıllardır yanımda çalışıyor. Her şeyi biliyor..." }
    ],

    neriman_ilk: [
      { speaker: "Neriman Hanım", text: "Buyrun dedektif bey. Oturun. Çay koyayım mı? Ben her şeyi görürüm bu balkondan, her şeyi." },
      {
        speaker: "Dedektif Sivri", text: "Dün gece dönerci dükkanında bir şey gördünüz mü?",
        choices: [
          { text: "Gece 2'de bahsettiğiniz kişi kim?", next: "neriman_gece" },
          { text: "Dürbünle mi bakıyorsunuz?", next: "neriman_durbun" },
          { text: "Volkan'ı tanıyor musunuz?", next: "neriman_volkan" }
        ]
      }
    ],

    neriman_gece: [
      { speaker: "Neriman Hanım", text: "Saat 02:17'ydi. Kesin söylerim çünkü ilaçlarımı o saat alırım. Dükkanın önünde bir kamyonet durdu. İki kişi büyük bir şey taşıdı." },
      { speaker: "Dedektif Sivri", text: "Yüzlerini gördünüz mü?", addNote: "Gece 02:17'de kamyonetle 2 kişi dükkanı soydu" },
      { speaker: "Neriman Hanım", text: "Birinin suratı gördüm. Genç, sarışın saçlı. Garson mu ne... tanımıyorum tam ama dükkan tarafından geliyordu hep." }
    ],

    neriman_durbun: [
      { speaker: "Neriman Hanım", text: "Bu dürbün güvenlik amaçlı! Mahalle bekçisi benim ben. Kim ne zaman nereye giriyor, ben bilirim." },
      { speaker: "Dedektif Sivri", text: "Anlıyorum. Ve bu... tamamen normal." }
    ],

    neriman_volkan: [
      { speaker: "Neriman Hanım", text: "Volkan! Sarışın çocuk. Hm. Aslında... dükkanı erken kapayan günlerde onu kamyonetle birine binerken gördüm birkaç kez.", addNote: "Neriman: Volkan bilinmeyen bir kamyonete biniyordu" },
      { speaker: "Dedektif Sivri", text: "Plaka hatırlıyor musunuz?", },
      { speaker: "Neriman Hanım", text: "34 ile başlıyordu. Geri kalanı görmedim. Ama kamyonetin yanında büyük bir..." },
      { speaker: "Neriman Hanım", text: "...lahmacun tabelası vardı. 'KENAN' yazıyordu." }
    ],

    kenan_ilk: [
      { speaker: "Kenan Bey", text: "Dedektif miydiniz? Ben kimseyle konuşmam. Avukatım var." },
      {
        speaker: "Dedektif Sivri", text: "Sadece birkaç soru.",
        choices: [
          { text: "Dün gece neredeydiniz?", next: "kenan_gece" },
          { text: "Şu koli ne içeriyor?", next: "kenan_koli" },
          { text: "Volkan'ı tanıyor musunuz?", next: "kenan_volkan" }
        ]
      }
    ],

    kenan_gece: [
      { speaker: "Kenan Bey", text: "Evdeydim. Uyudum. Saat 10'da yatarım ben." },
      { speaker: "Dedektif Sivri", text: "Kamyonetiniz var mı?", addNote: "Kenan Bey gece 10'da yattığını iddia ediyor" },
      { speaker: "Kenan Bey", text: "Var. Malzeme taşırım onunla. Normal ticaret." }
    ],

    kenan_koli: [
      { speaker: "Kenan Bey", text: "O? O... yoğurt. Büyük sipariş. Menüye yeni sos ekledim." },
      { speaker: "Dedektif Sivri", text: "Sarımsaklı yoğurt sosu mu?", addNote: "Kenan'ın kolisi yoğurt içeriyor — sarımsaklı döner sosu bahanesi" },
      { speaker: "Kenan Bey", text: "Eeee... evet. Ne var bunda?" },
      { speaker: "Dedektif Sivri", text: "Hiç. Ama lahmacun yanında sarımsaklı yoğurt olmaz. Bu döner sosu. Ve onu Ramazan Usta'nın tarifinden öğrendiniz." }
    ],

    kenan_volkan: [
      { speaker: "Kenan Bey", text: "Volkan mı? Neden sorasınız..." },
      { speaker: "Dedektif Sivri", text: "Çünkü kamyonetinizde gördüler onu.", addNote: "Kenan Bey Volkan'ı tanıyor — kamyonette görülmüş" },
      { speaker: "Kenan Bey", text: "Peki! Tamam! Volkan benim... yeğenim. Ama bu suç değil!" },
      { speaker: "Dedektif Sivri", text: "Elbette değil. Peki yeğeninize iş teklif etmiş miydiniz?" },
      { speaker: "Kenan Bey", text: "..." }
    ]
  },

  // ── SUÇLAMA SONUÇLARI ───────────────────────────────
  accusations: {
    kenan: {
      correct: true,
      title: "VAKAYI ÇÖZDÜNÜZ!",
      text: "Kenan Bey, yeğeni Volkan'ı işe almak için önce Ramazan Usta'nın yanına yerleştirdi. Volkan yıllarca tariften baharat oranlarını öğrendi. Son adım: dönerle birlikte Kenan'ın deposuna taşınarak 'kopya üretime' başlamak. Plan tutunamadı — Dedektif Sivri karşılarına çıktı. Döner geri döndü, Volkan itirafçı oldu, Kenan para cezasına çarptırıldı. Ve Ramazan Usta teşekkür olarak tam porsiyon ısmarlada."
    },
    neriman: {
      correct: false,
      title: "YANLIŞ SUÇLAMA!",
      text: "Neriman Hanım suçsuz! O sadece mahalle bekçisiydi — dürbünüyle her şeyi izliyordu ama suç işlemiyordu. Yanlış suçlama yaptınız. Gerçek suçlu güldü, döner hâlâ kayıp. Yeniden deneyin!"
    },
    ramazan: {
      correct: false,
      title: "YANLIŞ SUÇLAMA!",
      text: "Ramazan Usta kendi dönerini çalar mı?! Adam ağlıyordu! Olmaz böyle şey. Yanlış suçlama. Dedektifliğinizi gözden geçirin. Yeniden deneyin!"
    }
  }
};
