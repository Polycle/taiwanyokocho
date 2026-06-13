const seating = {
  first: [
    ["三浦万弥", "小林翼", "吉村吏功", "八木皓有", "杉山直哉", "阿部翔汰郎", "松島凜", "渡辺萌愛", "奈良日菜子", "徳竹優子"],
    ["阿部慎之介", "山田康輔", "安井逢紀人", "小川小次郎", "林楚凌", "毛謙鎧", "古永慶弥", "橋本芽生", "若松花音", "森井菜月"],
    ["宮嶋優志", "篠原亜水", "佐伯楓", "玉城愛希", "青柳芽", "八柳翔空", "山田美海華", "佐々木華", "西村歩珠美", "村上蒔志", "鈴木鴻之介"],
    ["田中禅", "今村雛乃", "上原多一陽", "芹川ひかり", "中村崇真", "橋口けい", "渋谷祐名", "森優咲", "具志堅未來", "篠田沙羅"],
    ["吉岡智也", "布施帆海", "松島碧", "山﨑瑞紀", "植田杏", "板橋紗英", "溝口悠貴", "東風平美玲", "有阪早紀子", "澤田穂香", "松尾咲音"],
    ["柴崎優", "守屋利浩", "上田愛可", "池田大将", "ほなみ", "鹿島浩市", "横江ひなみ", "千輪柊菜", "神田大翔", "李洋", "松尾天音"],
  ],
  second: [
    ["三浦万弥", "渡辺萌愛", "篠原亜水", "有阪早紀子", "杉山直哉", "森優咲", "若松花音", "玉城愛希", "上田愛可", "古永慶弥"],
    ["阿部慎之介", "森井菜月", "中村崇真", "鹿島浩市", "吉村吏功", "李洋", "山田美海華", "青柳芽", "鈴木鴻之介", "八柳翔空"],
    ["宮嶋優志", "八木皓有", "吉岡智也", "渋谷祐名", "松島凜", "山﨑瑞紀", "溝口悠貴", "橋口けい", "村上蒔志", "守屋利浩"],
    ["今村雛乃", "徳竹優子", "山田康輔", "林楚凌", "松尾咲音", "佐々木華", "千輪柊菜", "松島碧", "篠田沙羅", "阿部翔汰郎", "橋本芽生"],
    ["上原多一陽", "板橋紗英", "神田大翔", "松尾天音", "布施帆海", "植田杏", "奈良日菜子", "佐伯楓", "小川小次郎", "毛謙鎧"],
    ["柴崎優", "安井逢紀人", "池田大将", "ほなみ", "小林翼", "澤田穂香", "具志堅未來", "芹川ひかり", "東風平美玲", "田中禅"],
  ],
};

const tableLayout = [
  { table: 1, x: 30, y: 29 },
  { table: 2, x: 68, y: 18 },
  { table: 3, x: 71, y: 42 },
  { table: 4, x: 29, y: 53 },
  { table: 5, x: 72, y: 69 },
  { table: 6, x: 38, y: 84 },
];

const participants = [
  { name: "上原多一陽", label: "たいよう" },
  { name: "澤田穂香", label: "ほのか" },
  { name: "中村崇真", label: "そうま" },
  { name: "柴崎優", label: "すてぃーぶ" },
  { name: "三浦万弥", label: "まや" },
  { name: "鈴木鴻之介", label: "Kenny" },
  { name: "西村歩珠美", label: "りさ" },
  { name: "松島凜", label: "りん" },
  { name: "小林翼", label: "つばさ" },
  { name: "今村雛乃", label: "ヒナノ" },
  { name: "篠原亜水", label: "Amy" },
  { name: "山田康輔", label: "カンフー" },
  { name: "芹川ひかり", label: "せりひか" },
  { name: "鹿島浩市", label: "かしま" },
  { name: "溝口悠貴", label: "ゆうき" },
  { name: "宮嶋優志", label: "ゆーじ" },
  { name: "毛謙鎧", label: "けん" },
  { name: "横江ひなみ", label: "Hina" },
  { name: "阿部慎之介", label: "しんちゃん" },
  { name: "若松花音", label: "かのん" },
  { name: "吉岡智也", label: "トモヤ" },
  { name: "林楚凌", label: "りんご" },
  { name: "奈良日菜子", label: "ヒナコ" },
  { name: "具志堅未來", label: "くるみ" },
  { name: "有阪早紀子", label: "さきこ☺︎" },
  { name: "吉村吏功", label: "りく" },
  { name: "八柳翔空", label: "とあ" },
  { name: "松尾天音", label: "あまね" },
  { name: "松尾咲音", label: "さきね" },
  { name: "橋口けい", label: "橋口けい" },
  { name: "村上蒔志", label: "マキシ" },
  { name: "板橋紗英", label: "さえ" },
  { name: "李洋", label: "りやん" },
  { name: "森優咲", label: "優咲" },
  { name: "安井逢紀人", label: "ふぉんじ" },
  { name: "渋谷祐名", label: "しぶしぶ" },
  { name: "田中禅", label: "ゼン" },
  { name: "佐々木華", label: "はな" },
  { name: "阿部翔汰郎", label: "しゃんたいらん" },
  { name: "山田美海華", label: "ミミカ" },
  { name: "八木皓有", label: "コウ" },
  { name: "玉城愛希", label: "愛希" },
  { name: "青柳芽", label: "芽" },
  { name: "上田愛可", label: "あいか" },
  { name: "植田杏", label: "あん" },
  { name: "橋本芽生", label: "めい" },
  { name: "渡辺萌愛", label: "もあ" },
  { name: "徳竹優子", label: "ゆーこ" },
  { name: "森井菜月", label: "なつき" },
  { name: "佐伯楓", label: "でんちゃん" },
  { name: "千輪柊菜", label: "しゅーちゃん" },
  { name: "松島碧", label: "あおい" },
  { name: "東風平美玲", label: "ミレイ" },
  { name: "神田大翔", label: "やまと" },
  { name: "守屋利浩", label: "とし" },
  { name: "杉山直哉", label: "なおや" },
  { name: "小川小次郎", label: "Koji" },
  { name: "山﨑瑞紀", label: "山﨑瑞紀" },
  { name: "古永慶弥", label: "けいや" },
  { name: "篠田沙羅", label: "さらぼー" },
  { name: "布施帆海", label: "ほなみ" },
  { name: "池田大将", label: "ひろまさ" },
  { name: "ほなみ", label: "Fanfan" },
];

const state = {
  selectedName: "",
  view: "first",
};

const participantByName = new Map(participants.map((participant) => [participant.name, participant]));
const people = Array.from(new Set([...seating.first.flat(), ...seating.second.flat()])).sort((a, b) => a.localeCompare(b, "ja"));

const nameSearch = document.querySelector("#nameSearch");
const suggestions = document.querySelector("#suggestions");
const clearButton = document.querySelector("#clearButton");
const seatMap = document.querySelector("#seatMap");
const tabFirst = document.querySelector("#tabFirst");
const tabSecond = document.querySelector("#tabSecond");
const floorPlan = document.querySelector("#floorPlan");
const layoutMode = document.querySelector("#layoutMode");
const layoutHint = document.querySelector("#layoutHint");

const summaryName = document.querySelector("#summaryName");
const firstSeat = document.querySelector("#firstSeat");
const secondSeat = document.querySelector("#secondSeat");

function normalize(value) {
  return value.replace(/\s/g, "").toLowerCase();
}

function displayName(name) {
  return participantByName.get(name)?.label ?? name;
}

function tableFor(name, mode) {
  const index = seating[mode].findIndex((table) => table.includes(name));
  return index >= 0 ? index + 1 : null;
}

function searchKeys(participant) {
  return [participant.label].map(normalize);
}

function findExactParticipants(value) {
  const keyword = normalize(value);
  if (!keyword) return [];
  return participants.filter((participant) => searchKeys(participant).includes(keyword));
}

function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[a.length][b.length];
}

function closeParticipants(value) {
  const keyword = normalize(value);
  if (keyword.length < 3) return [];

  return participants
    .map((participant) => ({
      participant,
      distance: Math.min(...searchKeys(participant).map((key) => editDistance(keyword, key))),
    }))
    .filter(({ distance }) => distance === 1)
    .slice(0, 3)
    .map(({ participant }) => participant);
}

function hideSuggestions() {
  suggestions.classList.add("hidden");
  nameSearch.setAttribute("aria-expanded", "false");
}

function nicknameCandidates(value) {
  const keyword = normalize(value);
  if (!keyword) return [];

  const matches = participants
    .filter((participant) => normalize(participant.label).includes(keyword))
    .sort((a, b) => {
      const aLabel = normalize(a.label);
      const bLabel = normalize(b.label);
      const aStarts = aLabel.startsWith(keyword) ? 0 : 1;
      const bStarts = bLabel.startsWith(keyword) ? 0 : 1;
      return aStarts - bStarts || a.label.localeCompare(b.label, "ja");
    });

  if (matches.length) return matches.slice(0, 8);
  return closeParticipants(value);
}

function renderNicknameSuggestions(filter = "") {
  suggestions.innerHTML = "";
  const matches = nicknameCandidates(filter);
  if (!matches.length) {
    hideSuggestions();
    return;
  }

  matches.forEach((participant) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("role", "option");
    button.textContent = participant.label;
    button.addEventListener("click", () => {
      nameSearch.value = participant.label;
      selectName(participant.name);
      hideSuggestions();
    });
    suggestions.append(button);
  });

  suggestions.classList.remove("hidden");
  nameSearch.setAttribute("aria-expanded", "true");
}

function renderMap() {
  seatMap.innerHTML = "";

  seating[state.view].forEach((table, index) => {
    const card = document.createElement("article");
    card.className = "table-card";
    if (table.includes(state.selectedName)) card.classList.add("highlight");

    const header = document.createElement("div");
    header.className = "table-head";
    header.innerHTML = `
      <span class="table-number">${index + 1}</span>
      <span class="table-count">${table.length}名</span>
    `;

    const tableStage = document.createElement("div");
    tableStage.className = "round-table-stage";

    const center = document.createElement("div");
    center.className = "round-table-center";
    center.innerHTML = `<span>${index + 1}</span><small>${table.length}名</small>`;

    const list = document.createElement("ol");
    list.className = "names circular-names";
    const angleStep = 360 / table.length;
    table.forEach((name, seatIndex) => {
      const item = document.createElement("li");
      const angle = -90 + angleStep * seatIndex;
      item.style.setProperty("--angle", `${angle}deg`);
      item.style.setProperty("--reverse-angle", `${-angle}deg`);
      item.textContent = displayName(name);
      if (name === state.selectedName) item.classList.add("selected");
      list.append(item);
    });

    tableStage.append(center, list);
    card.append(header, tableStage);
    seatMap.append(card);
  });
}

function renderFloorPlan() {
  floorPlan.innerHTML = `
    <span class="floor-label entrance">大門</span>
    <span class="floor-label service">ドリンクコーナー</span>
    <span class="floor-label aisle">通路</span>
  `;

  const selectedTable = state.selectedName ? tableFor(state.selectedName, state.view) : null;
  layoutMode.textContent = state.view === "first" ? "初回の座席" : "席替え後の座席";
  layoutHint.textContent = state.selectedName
    ? `${displayName(state.selectedName)}さんは${selectedTable}卓です。`
    : "名前を選ぶと、該当する円卓が赤く表示されます。";

  tableLayout.forEach(({ table, x, y }) => {
    const tableEl = document.createElement("div");
    tableEl.className = "layout-table";
    tableEl.style.setProperty("--x", x);
    tableEl.style.setProperty("--y", y);
    if (table === selectedTable) tableEl.classList.add("selected");

    const memberCount = seating[state.view][table - 1].length;
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `${table}卓を座席表で確認`);
    button.innerHTML = `<span><b>${table}</b><small>${memberCount}名</small></span>`;
    button.addEventListener("click", () => {
      document.querySelectorAll(".table-card")[table - 1]?.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    tableEl.append(button);
    floorPlan.append(tableEl);
  });
}

function updateResult() {
  if (!state.selectedName) {
    summaryName.textContent = "名前を入力してください";
    firstSeat.textContent = "初回: --";
    secondSeat.textContent = "席替え: --";
    layoutHint.textContent = "名前を選ぶと、該当する円卓が赤く表示されます。";
    return;
  }

  const first = tableFor(state.selectedName, "first");
  const second = tableFor(state.selectedName, "second");

  summaryName.textContent = displayName(state.selectedName);
  firstSeat.textContent = `初回: ${first}卓`;
  secondSeat.textContent = `席替え: ${second}卓`;
}

function selectName(name) {
  state.selectedName = name;
  if (name) nameSearch.value = displayName(name);
  updateResult();
  renderFloorPlan();
  renderMap();
}

function setView(view) {
  state.view = view;
  tabFirst.classList.toggle("active", view === "first");
  tabSecond.classList.toggle("active", view === "second");
  tabFirst.setAttribute("aria-selected", view === "first");
  tabSecond.setAttribute("aria-selected", view === "second");
  renderFloorPlan();
  renderMap();
}

nameSearch.addEventListener("input", (event) => {
  const exactMatches = findExactParticipants(event.target.value);

  if (exactMatches.length === 1) {
    selectName(exactMatches[0].name);
    hideSuggestions();
    return;
  }

  if (exactMatches.length > 1) {
    state.selectedName = "";
    updateResult();
    renderFloorPlan();
    renderMap();
    suggestions.innerHTML = '<div class="suggest-empty">同じ名札名の人がいます。もう少し入力してください。</div>';
    suggestions.classList.remove("hidden");
    nameSearch.setAttribute("aria-expanded", "true");
    return;
  }

  state.selectedName = "";
  updateResult();
  renderFloorPlan();
  renderMap();
  renderNicknameSuggestions(event.target.value);
});

nameSearch.addEventListener("focus", (event) => {
  if (!findExactParticipants(event.target.value).length) renderNicknameSuggestions(event.target.value);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".suggest-field")) {
    hideSuggestions();
  }
});

clearButton.addEventListener("click", () => {
  state.selectedName = "";
  nameSearch.value = "";
  hideSuggestions();
  updateResult();
  renderFloorPlan();
  renderMap();
});

tabFirst.addEventListener("click", () => setView("first"));
tabSecond.addEventListener("click", () => setView("second"));

updateResult();
renderFloorPlan();
renderMap();
