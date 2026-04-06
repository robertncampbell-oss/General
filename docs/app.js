const STORAGE_KEY = "spelling-bee-showdown-custom-lists";

const builtInWords = {
  years: {
    Foundation: [
      wordEntry("cat", "A common pet with whiskers.", "The cat sat on the mat.", "Foundation", "School"),
      wordEntry("sun", "The bright star we see in the day.", "The sun warmed the playground.", "Foundation", "School"),
      wordEntry("hop", "To jump lightly.", "The rabbit can hop quickly.", "Foundation", "School"),
      wordEntry("rain", "Water that falls from clouds.", "The rain tapped the window.", "Foundation", "School"),
      wordEntry("shell", "A hard outer covering.", "We found a shell at the beach.", "Foundation", "School"),
    ],
    "Year 1": [
      wordEntry("garden", "A place where plants grow.", "Nan planted beans in the garden.", "Year 1", "School"),
      wordEntry("float", "To stay on top of water.", "The toy boat can float.", "Year 1", "School"),
      wordEntry("bright", "Full of light.", "The bright torch lit the tent.", "Year 1", "School"),
      wordEntry("thunder", "The rumbling sound in a storm.", "Thunder boomed after the flash.", "Year 1", "School"),
      wordEntry("picnic", "A meal eaten outside.", "We packed fruit for the picnic.", "Year 1", "School"),
    ],
    "Year 2": [
      wordEntry("because", "It gives a reason.", "I wore boots because it was wet.", "Year 2", "School"),
      wordEntry("library", "A place full of books.", "Our class visited the library.", "Year 2", "School"),
      wordEntry("stretch", "To reach out fully.", "Stretch before the race begins.", "Year 2", "School"),
      wordEntry("sudden", "Happening quickly.", "A sudden gust closed the door.", "Year 2", "School"),
      wordEntry("crunch", "A crisp crushing sound.", "The toast made a crunch.", "Year 2", "School"),
    ],
    "Year 3": [
      wordEntry("adventure", "An exciting experience.", "The map led to an adventure.", "Year 3", "School"),
      wordEntry("measure", "To find the size or amount.", "Measure the ribbon carefully.", "Year 3", "School"),
      wordEntry("usually", "Something that happens most of the time.", "We usually walk to school.", "Year 3", "School"),
      wordEntry("imagine", "To picture something in your mind.", "Imagine a castle on the moon.", "Year 3", "School"),
      wordEntry("natural", "Found in nature.", "The cave was formed by natural forces.", "Year 3", "School"),
    ],
    "Year 4": [
      wordEntry("disappear", "To vanish from sight.", "The rabbit seemed to disappear.", "Year 4", "School"),
      wordEntry("curiosity", "A strong desire to know more.", "Curiosity led her to the clue.", "Year 4", "School"),
      wordEntry("persuade", "To convince someone.", "Use facts to persuade the judges.", "Year 4", "School"),
      wordEntry("frequent", "Happening often.", "Frequent practice builds confidence.", "Year 4", "School"),
      wordEntry("astonish", "To surprise greatly.", "The trick will astonish the crowd.", "Year 4", "School"),
    ],
    "Year 5": [
      wordEntry("consequence", "A result that follows an action.", "Every choice has a consequence.", "Year 5", "School"),
      wordEntry("environment", "The natural world around us.", "Protect the environment every day.", "Year 5", "School"),
      wordEntry("competition", "A contest to see who performs best.", "The competition was fierce but fair.", "Year 5", "School"),
      wordEntry("mischievous", "Playfully troublesome.", "The mischievous puppy stole a sock.", "Year 5", "School"),
      wordEntry("coordinate", "To organise parts to work together.", "Coordinate the team before the game.", "Year 5", "School"),
    ],
    "Year 6": [
      wordEntry("pronunciation", "The way a word is spoken.", "Pronunciation matters in a spelling bee.", "Year 6", "School"),
      wordEntry("rhythm", "A repeated pattern of sound or movement.", "The drummer kept the rhythm steady.", "Year 6", "School"),
      wordEntry("hierarchy", "A system with levels of importance.", "The ants seemed to have a hierarchy.", "Year 6", "School"),
      wordEntry("embarrassment", "A feeling of awkwardness or shame.", "He laughed off the embarrassment.", "Year 6", "School"),
      wordEntry("vocabulary", "The words a person knows and uses.", "Reading expands your vocabulary.", "Year 6", "School"),
    ],
  },
  topics: {
    Sport: [
      wordEntry("umpire", "The official who enforces rules in a match.", "The umpire blew the whistle.", "Mixed", "Sport"),
      wordEntry("relay", "A race in which teammates take turns.", "Our house won the relay.", "Mixed", "Sport"),
      wordEntry("stadium", "A large sports venue.", "The stadium roared with cheers.", "Mixed", "Sport"),
      wordEntry("agility", "The ability to move quickly and easily.", "Agility helps in netball.", "Mixed", "Sport"),
      wordEntry("marathon", "A very long running race.", "Finishing a marathon takes grit.", "Mixed", "Sport"),
    ],
    History: [
      wordEntry("archive", "A collection of historical records.", "The museum kept an archive.", "Mixed", "History"),
      wordEntry("ancient", "Belonging to long ago.", "We studied ancient Egypt.", "Mixed", "History"),
      wordEntry("expedition", "A journey with a purpose.", "The expedition crossed the desert.", "Mixed", "History"),
      wordEntry("monument", "A structure built to remember something.", "The monument overlooked the town.", "Mixed", "History"),
      wordEntry("settlement", "A place where people establish a community.", "The settlement grew near the river.", "Mixed", "History"),
    ],
    Animals: [
      wordEntry("echidna", "An Australian animal with spines.", "The echidna shuffled into the scrub.", "Mixed", "Animals"),
      wordEntry("camouflage", "Colouring that helps something blend in.", "The moth used camouflage.", "Mixed", "Animals"),
      wordEntry("nocturnal", "Active at night.", "Possums are nocturnal animals.", "Mixed", "Animals"),
      wordEntry("habitat", "The natural home of an animal or plant.", "Wetlands are a bird's habitat.", "Mixed", "Animals"),
      wordEntry("migration", "Seasonal movement from one place to another.", "Whales begin migration in winter.", "Mixed", "Animals"),
    ],
    "Bizarre Australia": [
      wordEntry("billabong", "An Australian waterhole.", "The kookaburra watched the billabong.", "Mixed", "Bizarre Australia"),
      wordEntry("hullabaloo", "A noisy fuss.", "The galah caused a hullabaloo.", "Mixed", "Bizarre Australia"),
      wordEntry("whippersnapper", "A cheeky young person.", "That whippersnapper won the round.", "Mixed", "Bizarre Australia"),
      wordEntry("kerfuffle", "A commotion or fuss.", "A spelling kerfuffle broke out.", "Mixed", "Bizarre Australia"),
      wordEntry("wombat", "A burrowing Australian marsupial.", "The wombat waddled off proudly.", "Mixed", "Bizarre Australia"),
    ],
    "Snack Cabinet": [
      wordEntry("pistachio", "A green nut in a shell.", "He cracked a pistachio carefully.", "Mixed", "Snack Cabinet"),
      wordEntry("chutney", "A savoury condiment.", "The sandwich needed chutney.", "Mixed", "Snack Cabinet"),
      wordEntry("liquorice", "A chewy black sweet.", "Liquorice can be divisive.", "Mixed", "Snack Cabinet"),
      wordEntry("croissant", "A flaky French pastry.", "The croissant left crumbs everywhere.", "Mixed", "Snack Cabinet"),
      wordEntry("capsicum", "The Australian word for bell pepper.", "Dice the capsicum finely.", "Mixed", "Snack Cabinet"),
    ],
    "Space Oddities": [
      wordEntry("galaxy", "A vast system of stars.", "Our galaxy is the Milky Way.", "Mixed", "Space Oddities"),
      wordEntry("asteroid", "A small rocky object in space.", "The asteroid zoomed past safely.", "Mixed", "Space Oddities"),
      wordEntry("nebula", "A cloud of gas and dust in space.", "The nebula glowed in the picture.", "Mixed", "Space Oddities"),
      wordEntry("gravity", "The force that pulls objects together.", "Gravity keeps us grounded.", "Mixed", "Space Oddities"),
      wordEntry("telescope", "A tool for seeing faraway objects.", "The telescope pointed to Saturn.", "Mixed", "Space Oddities"),
    ],
  },
  advanced: [
    wordEntry("conscientious", "Careful, thorough, and hardworking.", "A conscientious student checks every answer.", "Advanced", "Advanced"),
    wordEntry("onomatopoeia", "A word that imitates a sound.", "Buzz is an example of onomatopoeia.", "Advanced", "Advanced"),
    wordEntry("bureaucracy", "A complex system of administration.", "The paperwork vanished into bureaucracy.", "Advanced", "Advanced"),
    wordEntry("miscellaneous", "Made up of many different kinds.", "The drawer held miscellaneous treasures.", "Advanced", "Advanced"),
    wordEntry("sesquipedalian", "Characterised by very long words.", "It was a gloriously sesquipedalian speech.", "Advanced", "Advanced"),
  ],
};

const state = {
  selectedMode: "classic",
  currentDeck: [],
  usedWords: [],
  currentWord: null,
  score: 0,
  streak: 0,
  purse: 0,
  cowardUsed: false,
  roundNumber: 0,
  revealed: false,
  customLists: loadCustomLists(),
};

const elements = {
  yearSelect: document.querySelector("#yearSelect"),
  topicSelect: document.querySelector("#topicSelect"),
  roundType: document.querySelector("#roundType"),
  advancedToggle: document.querySelector("#advancedToggle"),
  selectionSummary: document.querySelector("#selectionSummary"),
  deckPreview: document.querySelector("#deckPreview"),
  scoreTotal: document.querySelector("#scoreTotal"),
  roundLabel: document.querySelector("#roundLabel"),
  deckCount: document.querySelector("#deckCount"),
  sourceBadge: document.querySelector("#sourceBadge"),
  difficultyBadge: document.querySelector("#difficultyBadge"),
  promptWord: document.querySelector("#promptWord"),
  promptClue: document.querySelector("#promptClue"),
  roundStatus: document.querySelector("#roundStatus"),
  streakStatus: document.querySelector("#streakStatus"),
  purseStatus: document.querySelector("#purseStatus"),
  customName: document.querySelector("#customName"),
  customYear: document.querySelector("#customYear"),
  customWords: document.querySelector("#customWords"),
  customListContainer: document.querySelector("#customListContainer"),
  modeButtons: Array.from(document.querySelectorAll(".mode-card")),
  startGame: document.querySelector("#startGame"),
  shuffleDeck: document.querySelector("#shuffleDeck"),
  speakWord: document.querySelector("#speakWord"),
  showAnswer: document.querySelector("#showAnswer"),
  nextWord: document.querySelector("#nextWord"),
  markCorrect: document.querySelector("#markCorrect"),
  markIncorrect: document.querySelector("#markIncorrect"),
  useCowardCup: document.querySelector("#useCowardCup"),
  bankPoints: document.querySelector("#bankPoints"),
  saveCustom: document.querySelector("#saveCustom"),
  clearCustom: document.querySelector("#clearCustom"),
  installApp: document.querySelector("#installApp"),
  installMessage: document.querySelector("#installMessage"),
  connectionStatus: document.querySelector("#connectionStatus"),
};

let deferredInstallPrompt = null;

initialise();

function initialise() {
  populateSelects();
  bindEvents();
  renderCustomLists();
  rebuildDeck();
  updateScoreboard();
  updateActionAvailability();
  registerPwaSupport();
  updateConnectionStatus();
}

function populateSelects() {
  const yearOptions = ["All year levels", ...Object.keys(builtInWords.years), ...state.customLists.map((list) => list.name)];
  const topicOptions = ["All topics", ...Object.keys(builtInWords.topics), "Custom only"];

  elements.yearSelect.innerHTML = yearOptions
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");

  elements.topicSelect.innerHTML = topicOptions
    .map((option) => `<option value="${option}">${option}</option>`)
    .join("");
}

function bindEvents() {
  elements.yearSelect.addEventListener("change", rebuildDeck);
  elements.topicSelect.addEventListener("change", rebuildDeck);
  elements.roundType.addEventListener("change", rebuildDeck);
  elements.advancedToggle.addEventListener("change", rebuildDeck);

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedMode = button.dataset.mode;
      elements.modeButtons.forEach((item) => item.classList.toggle("active", item === button));
      updateRoundStatus();
      updateActionAvailability();
    });
  });

  elements.startGame.addEventListener("click", startGame);
  elements.shuffleDeck.addEventListener("click", () => {
    state.currentDeck = shuffle([...state.currentDeck]);
    updateDeckPreview();
    updateRoundStatus("Deck reshuffled.");
  });
  elements.nextWord.addEventListener("click", drawNextWord);
  elements.speakWord.addEventListener("click", speakCurrentWord);
  elements.showAnswer.addEventListener("click", revealAnswer);
  elements.markCorrect.addEventListener("click", () => resolveCurrentWord(true));
  elements.markIncorrect.addEventListener("click", () => resolveCurrentWord(false));
  elements.useCowardCup.addEventListener("click", useCowardCup);
  elements.bankPoints.addEventListener("click", bankPurse);
  elements.saveCustom.addEventListener("click", saveCustomList);
  elements.clearCustom.addEventListener("click", clearCustomForm);
  elements.installApp.addEventListener("click", installApp);

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    elements.installApp.hidden = false;
    elements.installMessage.textContent =
      "This device can install the app directly. Use the install button for a cleaner full-screen version.";
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    elements.installApp.hidden = true;
    elements.installMessage.textContent =
      "Installed. The app should now appear on your Home Screen for quick offline-friendly access.";
  });

  window.addEventListener("online", updateConnectionStatus);
  window.addEventListener("offline", updateConnectionStatus);
}

function rebuildDeck() {
  state.currentDeck = shuffle(composeDeckFromSelections());
  state.usedWords = [];
  state.currentWord = null;
  state.revealed = false;

  updateSelectionSummary();
  updateDeckPreview();
  refreshPrompt();
  updateScoreboard();
  updateRoundStatus("Deck rebuilt. Start a new round when you're ready.");
  updateActionAvailability();
}

function startGame() {
  state.currentDeck = shuffle(composeDeckFromSelections());
  if (!state.currentDeck.length) {
    updateRoundStatus("No words are loaded yet. Choose a source or add a custom list.");
    return;
  }

  state.score = 0;
  state.streak = 0;
  state.purse = 0;
  state.cowardUsed = false;
  state.roundNumber += 1;
  state.usedWords = [];
  state.currentDeck = shuffle([...state.currentDeck]);
  drawNextWord();
  updateScoreboard();
  updateRoundStatus("Round started. Say the word out loud, then score it together.");
}

function drawNextWord() {
  if (!state.currentDeck.length) {
    state.currentWord = null;
    refreshPrompt("Round complete", "You have used every word in this deck. Shuffle or start another round.");
    updateRoundStatus("Deck finished. Start a new round or rebuild the deck.");
    updateActionAvailability();
    return;
  }

  state.currentWord = state.currentDeck.pop();
  state.usedWords.push(state.currentWord);
  state.revealed = false;
  refreshPrompt("Spell this word", state.currentWord.clue);
  updateRoundStatus("Word ready. Use the clue, then decide whether to reveal or mark the result.");
  updateActionAvailability();
}

function speakCurrentWord() {
  if (!state.currentWord || !("speechSynthesis" in window)) {
    return;
  }

  const utterance = new SpeechSynthesisUtterance(
    `${state.currentWord.word}. ${state.currentWord.sentence || ""}`
  );
  utterance.rate = 0.9;
  utterance.lang = "en-AU";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function revealAnswer() {
  if (!state.currentWord) {
    return;
  }

  state.revealed = true;
  refreshPrompt(state.currentWord.word, `${state.currentWord.clue} ${state.currentWord.sentence}`);
  updateRoundStatus("Answer revealed. Mark it correct or incorrect, then move on.");
  updateActionAvailability();
}

function resolveCurrentWord(correct) {
  if (!state.currentWord) {
    return;
  }

  const points = scoreForCurrentWord();

  if (correct) {
    state.streak += 1;
    if (state.selectedMode === "purse") {
      state.purse += points;
    } else {
      state.score += points;
    }
    updateRoundStatus(`Correct. ${points} points ${state.selectedMode === "purse" ? "added to purse" : "scored"}.`);
  } else {
    state.streak = 0;
    if (state.selectedMode === "purse") {
      state.purse = 0;
    }
    updateRoundStatus("Incorrect. The streak resets, and purse points vanish if you were risking them.");
  }

  updateScoreboard();
  drawNextWord();
}

function useCowardCup() {
  if (state.selectedMode !== "coward" || state.cowardUsed || !state.currentWord) {
    return;
  }

  state.cowardUsed = true;
  updateRoundStatus(`Coward's Cup used on "${state.currentWord.word}". No penalty, but that lifeline is gone.`);
  drawNextWord();
}

function bankPurse() {
  if (state.selectedMode !== "purse" || state.purse === 0) {
    return;
  }

  state.score += state.purse;
  state.purse = 0;
  updateScoreboard();
  updateRoundStatus("Points banked safely in the purse.");
  updateActionAvailability();
}

function saveCustomList() {
  const name = elements.customName.value.trim();
  const year = elements.customYear.value;
  const rawWords = elements.customWords.value.trim();

  if (!name || !rawWords) {
    updateRoundStatus("Give the custom list a name and at least one word.");
    return;
  }

  const entries = rawWords
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [word, clue, sentence] = line.split("|").map((part) => part?.trim() || "");
      return wordEntry(
        word,
        clue || "Custom practice word.",
        sentence || `Please spell ${word}.`,
        year,
        name
      );
    });

  const existingIndex = state.customLists.findIndex((list) => list.name === name);
  const newList = { name, year, entries };

  if (existingIndex >= 0) {
    state.customLists.splice(existingIndex, 1, newList);
  } else {
    state.customLists.push(newList);
  }

  persistCustomLists();
  populateSelects();
  renderCustomLists();
  rebuildDeck();
  clearCustomForm();
  updateRoundStatus(`Saved custom list "${name}" with ${entries.length} words.`);
}

function renderCustomLists() {
  if (!state.customLists.length) {
    elements.customListContainer.innerHTML = "<p>No custom packs saved yet.</p>";
    return;
  }

  elements.customListContainer.innerHTML = state.customLists
    .map(
      (list) => `
        <article class="saved-list-card">
          <h4>${escapeHtml(list.name)}</h4>
          <p>${list.entries.length} words · ${escapeHtml(list.year)}</p>
          <button type="button" data-load-list="${escapeHtml(list.name)}">Load this pack</button>
        </article>
      `
    )
    .join("");

  elements.customListContainer.querySelectorAll("[data-load-list]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.yearSelect.value = button.dataset.loadList;
      rebuildDeck();
    });
  });
}

function clearCustomForm() {
  elements.customName.value = "";
  elements.customYear.value = "Custom";
  elements.customWords.value = "";
}

async function installApp() {
  if (!deferredInstallPrompt) {
    elements.installMessage.textContent =
      "On iPhone or iPad, open this in Safari and choose Share then Add to Home Screen.";
    return;
  }

  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
  elements.installApp.hidden = true;
}

function updateSelectionSummary() {
  const parts = [
    elements.yearSelect.value || "All year levels",
    elements.topicSelect.value || "All topics",
    elements.advancedToggle.checked ? "Advanced included" : "Standard difficulty",
    `Mode: ${labelForMode(state.selectedMode)}`,
  ];

  elements.selectionSummary.textContent = parts.join(" · ");
}

function composeDeckFromSelections() {
  const selectedYear = elements.yearSelect.value || "All year levels";
  const selectedTopic = elements.topicSelect.value || "All topics";
  const selectedRound = elements.roundType.value || "classic";
  let deck = [];

  if (selectedYear === "All year levels") {
    deck.push(...Object.values(builtInWords.years).flat());
    deck.push(...state.customLists.flatMap((list) => list.entries));
  } else if (state.customLists.find((list) => list.name === selectedYear)) {
    const matchingCustom = state.customLists.find((list) => list.name === selectedYear);
    deck.push(...matchingCustom.entries);
  } else if (builtInWords.years[selectedYear]) {
    deck.push(...builtInWords.years[selectedYear]);
  }

  if (selectedTopic === "Custom only") {
    deck = state.customLists.flatMap((list) => list.entries);
  } else if (selectedTopic !== "All topics") {
    deck = mergeUnique(deck, builtInWords.topics[selectedTopic] || []);
  } else if (selectedYear === "All year levels") {
    deck = mergeUnique(deck, Object.values(builtInWords.topics).flat());
  }

  if (elements.advancedToggle.checked) {
    deck = mergeUnique(deck, builtInWords.advanced);
  }

  if (selectedRound === "lightning") {
    deck = deck.slice(0, Math.min(deck.length, 12));
  }

  if (selectedRound === "quirky") {
    deck = mergeUnique(deck, builtInWords.topics["Bizarre Australia"]);
    deck = mergeUnique(deck, builtInWords.topics["Snack Cabinet"]);
  }

  return deck;
}

function updateDeckPreview() {
  const preview = state.currentDeck.slice(0, 5).map((entry) => entry.word);
  elements.deckPreview.textContent = state.currentDeck.length
    ? `${preview.join(", ")}${state.currentDeck.length > 5 ? "..." : ""}`
    : "No words in this deck.";
  elements.deckCount.textContent = `${state.currentDeck.length} words`;
}

function updateScoreboard() {
  elements.scoreTotal.textContent = String(state.score);
  elements.roundLabel.textContent = state.roundNumber ? `Round ${state.roundNumber}` : "Not started";
  elements.streakStatus.textContent = `${state.streak} correct in a row`;
  elements.purseStatus.textContent = `${state.purse} unbanked points`;
}

function updateConnectionStatus() {
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;

  elements.connectionStatus.className = "status-pill";

  if (isStandalone && navigator.onLine) {
    elements.connectionStatus.textContent = "Installed app mode";
    elements.connectionStatus.classList.add("online");
    return;
  }

  if (!navigator.onLine) {
    elements.connectionStatus.textContent = "Offline ready";
    elements.connectionStatus.classList.add("offline");
    return;
  }

  if ("serviceWorker" in navigator) {
    elements.connectionStatus.textContent = "Online and caching for trips";
    elements.connectionStatus.classList.add("online");
    return;
  }

  elements.connectionStatus.textContent = "Browser has limited offline support";
  elements.connectionStatus.classList.add("limited");
}

function updateRoundStatus(message) {
  elements.roundStatus.textContent =
    message ||
    `Mode set to ${labelForMode(state.selectedMode)}. ${
      state.selectedMode === "bravery"
        ? "Expect harder words and double points."
        : state.selectedMode === "coward"
          ? "You get one guilt-free skip."
          : state.selectedMode === "purse"
            ? "Correct answers build a risky purse."
            : "A classic no-fuss round."
    }`;
}

function updateActionAvailability() {
  const hasWord = Boolean(state.currentWord);
  elements.speakWord.disabled = !hasWord;
  elements.showAnswer.disabled = !hasWord;
  elements.nextWord.disabled = !state.currentDeck.length;
  elements.markCorrect.disabled = !hasWord;
  elements.markIncorrect.disabled = !hasWord;
  elements.useCowardCup.disabled = !hasWord || state.selectedMode !== "coward" || state.cowardUsed;
  elements.bankPoints.disabled = state.selectedMode !== "purse" || state.purse === 0;
}

function refreshPrompt(title = "Press start to load your first word", clue = "Clues and sentence prompts appear here.") {
  elements.promptWord.textContent = title;
  elements.promptClue.textContent = clue;
  elements.sourceBadge.textContent = state.currentWord
    ? `${state.currentWord.pack} · ${state.currentWord.year}`
    : "Choose a deck";
  elements.difficultyBadge.textContent = state.currentWord
    ? `${state.currentWord.difficulty} difficulty`
    : "Difficulty pending";
}

function scoreForCurrentWord() {
  if (!state.currentWord) {
    return 0;
  }

  const base = state.currentWord.difficulty === "Advanced" ? 4 : state.currentWord.word.length >= 8 ? 3 : 2;
  return state.selectedMode === "bravery" ? base * 2 : base;
}

function loadCustomLists() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function persistCustomLists() {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.customLists));
}

function wordEntry(word, clue, sentence, year, pack) {
  return {
    word,
    clue,
    sentence,
    year,
    pack,
    difficulty: year === "Advanced" ? "Advanced" : word.length >= 8 ? "Spicy" : "Core",
  };
}

function mergeUnique(base, incoming) {
  const seen = new Set(base.map((entry) => `${entry.word}-${entry.pack}`));
  const merged = [...base];

  incoming.forEach((entry) => {
    const key = `${entry.word}-${entry.pack}`;
    if (!seen.has(key)) {
      seen.add(key);
      merged.push(entry);
    }
  });

  return merged;
}

function shuffle(items) {
  const next = [...items];
  for (let index = next.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[randomIndex]] = [next[randomIndex], next[index]];
  }
  return next;
}

function labelForMode(mode) {
  return {
    classic: "Standard",
    bravery: "Bucket of Bravery",
    coward: "Coward's Cup",
    purse: "Person's Purse",
  }[mode];
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function registerPwaSupport() {
  if (!("serviceWorker" in navigator)) {
    elements.installMessage.textContent =
      "This browser supports the game, but offline install features may be limited.";
    return;
  }

  window.addEventListener("load", async () => {
    try {
      await navigator.serviceWorker.register("./service-worker.js");
      updateConnectionStatus();
    } catch {
      elements.installMessage.textContent =
        "The game loaded, but offline caching could not be enabled in this browser.";
      updateConnectionStatus();
    }
  });
}
