const storageKey = "phonecheckState";
const checklistKey = "phonecheckChecklist";
const lastStep = 4;
const totalSteps = 5;
const fixedModelName = "갤럭시25 울트라";

const checklistItems = [
  "24개월 총비용을 확인했나요?",
  "요금제 유지 기간을 확인했나요?",
  "부가서비스가 필수인지 확인했나요?",
  "할부 원금이 얼마인지 확인했나요?",
  "견적을 문자나 사진으로 남겼나요?",
  "오늘 바로 계약하지 않아도 된다는 점을 기억했나요?",
];

const carrierOptions = ["SKT", "KT", "알뜰폰", "상관없음"];

const stores = [
  {
    category: "직영점",
    name: "SK텔레콤 가능대리점 민락2지구직영점",
    mapUrl: "https://naver.me/Gsj6ODGZ",
    carriers: ["SKT"],
    storage: ["256GB", "512GB", "1TB"],
    data: ["5GB 이하", "10GB 이하", "30GB 이하", "100GB 이하", "무제한 필요"],
    planHold: "원하는 요금제 선택 가능",
    extraService: "부가서비스 가입 의무 없음",
    contractMonths: 24,
    offers: [
      {
        carrier: "SKT",
        label: "기기변경",
        monthlyMax: 89000,
        devicePrice: 1350000,
        totalPrice: 3486000,
      },
    ],
  },
  {
    category: "직영점",
    name: "kt직영매장 의정부로데오직영점",
    mapUrl: "https://naver.me/Gn0FmU7S",
    carriers: ["KT"],
    storage: ["256GB"],
    data: ["5GB 이하", "10GB 이하", "30GB 이하", "100GB 이하", "무제한 필요"],
    planHold: "원하는 요금제 선택 가능",
    extraService: "부가서비스 가입 의무 없음",
    contractMonths: 24,
    offers: [
      {
        carrier: "KT",
        label: "기기변경",
        monthlyMax: 80000,
        devicePrice: 1400000,
        totalPrice: 3320000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 옆커폰 의정부호원점",
    mapUrl: "https://naver.me/5PVTBSYn",
    carriers: ["KT"],
    storage: ["256GB"],
    data: ["무제한 필요"],
    planHold: "10만9000원 요금제 6개월 사용 후 5만원까지 하향 가능",
    extraService: "부가서비스 4개월 사용 의무",
    contractMonths: 24,
    offers: [
      {
        carrier: "KT",
        label: "기기변경",
        monthlyMax: 109000,
        devicePrice: 490000,
        totalPrice: 2044000,
      },
    ],
  },
  {
    category: "성지",
    name: "의정부 휴대폰 성지",
    mapUrl: "https://naver.me/I5yhlxTs",
    storage: ["256GB"],
    carriers: ["SKT", "KT"],
    data: ["무제한 필요"],
    planHold: "11만원 요금제 6개월 사용 후 5만5000원 이상 요금제로 변경 가능",
    extraService: "부가서비스 2개월 사용 의무",
    contractMonths: 24,
    offers: [
      {
        carrier: "SKT",
        label: "번호이동",
        monthlyMax: 110000,
        devicePrice: 580000,
        totalPrice: 2230000,
      },
      {
        carrier: "KT",
        label: "기기변경",
        monthlyMax: 110000,
        devicePrice: 690000,
        totalPrice: 2340000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰 성지 싸당 의정부점",
    mapUrl: "https://naver.me/x9zGAU3h",
    carriers: ["SKT", "KT"],
    storage: ["256GB"],
    data: ["무제한 필요"],
    planHold: "188일간 고가 요금제 사용 필수",
    extraService: "부가서비스 정보 확인 필요",
    contractMonths: 24,
    offers: [
      {
        carrier: "SKT",
        label: "번호이동",
        monthlyMax: 109000,
        devicePrice: 670000,
        totalPrice: 3286000,
      },
      {
        carrier: "SKT",
        label: "기기변경",
        monthlyMax: 109000,
        devicePrice: 1210000,
        totalPrice: 3826000,
      },
      {
        carrier: "KT",
        label: "기기변경",
        monthlyMax: 110000,
        devicePrice: 0,
        totalPrice: 2640000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 폰통령 고산점",
    mapUrl: "https://naver.me/Gj7FCPKv",
    storage: ["256GB"],
    carriers: ["SKT", "KT"],
    data: ["무제한 필요"],
    planHold: "10만9000원 요금제 183일 사용 후 5만원대 요금제로 변경 가능",
    extraService: "부가서비스 가입 의무 없음",
    contractMonths: 24,
    offers: [
      {
        carrier: "SKT",
        label: "기기변경",
        monthlyMax: 109000,
        devicePrice: 980000,
        totalPrice: 2624000,
      },
      {
        carrier: "KT",
        label: "번호이동",
        monthlyMax: 109000,
        devicePrice: 420000,
        totalPrice: 2064000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 씽씽텔레콤",
    mapUrl: "https://naver.me/5bVmVYze",
    storage: ["256GB"],
    carriers: ["SKT"],
    data: ["무제한 필요"],
    planHold: "10만원 요금제 6개월 사용 후 5만원 이상 요금제로 변경 가능",
    extraService: "부가서비스 3개월 사용 의무",
    contractMonths: 24,
    offers: [
      {
        carrier: "SKT",
        label: "번호이동",
        monthlyMax: 100000,
        devicePrice: 540000,
        totalPrice: 2040000,
      },
      {
        carrier: "SKT",
        label: "기기변경",
        monthlyMax: 100000,
        devicePrice: 1180000,
        totalPrice: 2680000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 폰슐랭 의정부점",
    mapUrl: "https://naver.me/GlJly3te",
    storage: ["256GB"],
    carriers: ["KT"],
    data: ["무제한 필요"],
    planHold: "24개월 동안 10만원 이상 요금제 유지 조건",
    extraService: "부가서비스 가입 의무 없음",
    contractMonths: 24,
    offers: [
      {
        carrier: "KT",
        label: "기기변경",
        monthlyMax: 100000,
        devicePrice: 480000,
        totalPrice: 2880000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 옆커폰 의정부민락점",
    mapUrl: "https://naver.me/5pw1u52P",
    carriers: ["SKT", "KT"],
    storage: ["256GB"],
    data: ["무제한 필요"],
    planHold: "10만9000원 요금제 6개월 사용 후 7개월차부터 4만5000원 이상 요금제 18개월 사용",
    extraService: "부가서비스 정보 확인 필요",
    contractMonths: 24,
    offers: [
      {
        carrier: "KT",
        label: "기기변경",
        monthlyMax: 109000,
        devicePrice: 870000,
        totalPrice: 2334000,
      },
      {
        carrier: "KT",
        label: "삼성카드 구매",
        monthlyMax: 109000,
        devicePrice: 370000,
        totalPrice: 1834000,
      },
      {
        carrier: "SKT",
        label: "기기변경",
        monthlyMax: 109000,
        devicePrice: 1200000,
        totalPrice: 2664000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 옆커폰 의정부금오점",
    mapUrl: "https://naver.me/F6ngN8yd",
    carriers: ["KT"],
    storage: ["256GB"],
    data: ["무제한 필요"],
    planHold: "10만원 요금제 6개월 사용 후 5만원까지 하향 가능",
    extraService: "부가서비스 4개월 사용 의무",
    contractMonths: 24,
    offers: [
      {
        carrier: "KT",
        label: "기기변경",
        monthlyMax: 100000,
        devicePrice: 1200000,
        totalPrice: 2400000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰 성지 홈서비스 아정당 의정부 직영점",
    mapUrl: "",
    storage: ["256GB"],
    carriers: ["SKT", "KT"],
    data: ["무제한 필요"],
    planHold: "10만9000원 요금제 6개월 후 6만원대 요금제로 변경 가능",
    extraService: "보험과 부가서비스 선택 가능",
    contractMonths: 24,
    offers: [
      {
        carrier: "SKT",
        label: "홈상담",
        monthlyMax: 109000,
        devicePrice: 450000,
        totalPrice: 2184000,
      },
      {
        carrier: "KT",
        label: "홈상담",
        monthlyMax: 109000,
        devicePrice: 620000,
        totalPrice: 2354000,
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 망월사역점",
    mapUrl: "",
    storage: ["256GB"],
    carriers: ["SKT", "KT"],
    data: ["무제한 필요"],
    planHold: "고가 요금제 4개월 사용 후 5만원까지 하향 가능",
    extraService: "부가서비스 1개월 사용 의무",
    contractMonths: 24,
    offers: [
      {
        carrier: "SKT",
        label: "기기변경",
        monthlyMax: 99000,
        devicePrice: 750000,
        totalPrice: 2146000,
      },
      {
        carrier: "KT",
        label: "번호이동",
        monthlyMax: 99000,
        devicePrice: 300000,
        totalPrice: 1696000,
      },
    ],
  },
  {
    category: "알뜰폰 자급제폰",
    name: "아정당 공식 사이트",
    carriers: ["알뜰폰"],
    storage: ["256GB"],
    data: ["5GB 이하", "10GB 이하", "30GB 이하", "100GB 이하", "무제한 필요"],
    planHold: "약정 없는 요금제 선택 가능",
    extraService: "부가서비스 가입 의무 없음",
    contractMonths: 24,
    offers: [
      {
        carrier: "알뜰폰",
        label: "자급제",
        monthlyMax: 49000,
        devicePrice: 1180000,
        totalPrice: 2356000,
      },
    ],
  },
  {
    category: "알뜰폰 자급제폰",
    name: "모요",
    carriers: ["알뜰폰"],
    storage: ["256GB"],
    data: ["5GB 이하", "10GB 이하", "30GB 이하", "100GB 이하", "무제한 필요"],
    planHold: "월별 요금제 변경 가능",
    extraService: "부가서비스 가입 의무 없음",
    contractMonths: 24,
    offers: [
      {
        carrier: "알뜰폰",
        label: "자급제",
        monthlyMax: 33000,
        devicePrice: 1260000,
        totalPrice: 2052000,
      },
    ],
  },
  {
    category: "알뜰폰 자급제폰",
    name: "다나와",
    carriers: ["알뜰폰"],
    storage: ["256GB"],
    data: ["5GB 이하", "10GB 이하", "30GB 이하", "100GB 이하"],
    planHold: "기계 구매 후 원하는 요금제 선택 가능",
    extraService: "부가서비스 가입 의무 없음",
    contractMonths: 24,
    offers: [
      {
        carrier: "알뜰폰",
        label: "자급제",
        monthlyMax: 45000,
        devicePrice: 1280000,
        totalPrice: 2360000,
      },
    ],
  },
  {
    category: "알뜰폰 자급제폰",
    name: "kt공식 온라인샵",
    carriers: ["KT"],
    storage: ["256GB"],
    data: ["5GB 이하", "10GB 이하", "30GB 이하", "100GB 이하", "무제한 필요"],
    planHold: "원하는 요금제 선택 가능",
    extraService: "부가서비스 가입 의무 없음",
    contractMonths: 24,
    offers: [
      {
        carrier: "KT",
        label: "기계구매",
        monthlyMax: 69000,
        devicePrice: 1330000,
        totalPrice: 2986000,
      },
    ],
  },


];

const state = loadState();

const onboarding = document.querySelector("#onboarding");
const appScreen = document.querySelector("#appScreen");
const standardsView = document.querySelector("#tab-standards");
const saveCompleteScreen = document.querySelector("#saveCompleteScreen");
const screenTitle = document.querySelector("#screenTitle");
const headerNote = document.querySelector("#headerNote");
const customBudgetField = document.querySelector("#customBudgetField");
const customBudgetInput = document.querySelector("#customBudgetInput");
const customDeviceBudgetField = document.querySelector("#customDeviceBudgetField");
const customDeviceBudgetInput = document.querySelector("#customDeviceBudgetInput");
const budgetTotalPreview = document.querySelector("#budgetTotalPreview");
const summaryBudget = document.querySelector("#summaryBudget");
const summaryDeviceBudget = document.querySelector("#summaryDeviceBudget");
const summaryBudgetTotal = document.querySelector("#summaryBudgetTotal");
const summaryModels = document.querySelector("#summaryModels");
const summaryCarriers = document.querySelector("#summaryCarriers");
const summaryStorage = document.querySelector("#summaryStorage");
const summaryPattern = document.querySelector("#summaryPattern");
const summaryDataUsage = document.querySelector("#summaryDataUsage");
const summaryAvoid = document.querySelector("#summaryAvoid");
const prevStepButton = document.querySelector("#prevStepButton");
const nextStepButton = document.querySelector("#nextStepButton");
const checkList = document.querySelector("#checkList");
const storeList = document.querySelector("#storeList");
const compareEditButton = document.querySelector("#compareEditButton");
const compareEditCloseButton = document.querySelector("#compareEditCloseButton");
const compareEditor = document.querySelector("#compareEditor");
const compareCustomBudgetField = document.querySelector("#compareCustomBudgetField");
const compareCustomBudgetInput = document.querySelector("#compareCustomBudgetInput");
const compareCustomDeviceBudgetField = document.querySelector("#compareCustomDeviceBudgetField");
const compareCustomDeviceBudgetInput = document.querySelector("#compareCustomDeviceBudgetInput");
const compareSummaryCarriers = document.querySelector("#compareSummaryCarriers");
const compareSummaryStorage = document.querySelector("#compareSummaryStorage");
const compareSummaryDataUsage = document.querySelector("#compareSummaryDataUsage");
const compareSummaryBudget = document.querySelector("#compareSummaryBudget");
const compareSummaryDeviceBudget = document.querySelector("#compareSummaryDeviceBudget");
const compareSummaryBudgetTotal = document.querySelector("#compareSummaryBudgetTotal");
const compareSummaryAvoid = document.querySelector("#compareSummaryAvoid");

document.querySelector("#startButton").addEventListener("click", () => {
  state.started = true;
  saveState();
  showApp();
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.tabTarget);
  });
});

document.querySelectorAll(".action-card").forEach((button) => {
  button.addEventListener("click", () => {
    const currentView = button.closest(".tab-view");
    const panelId = button.dataset.panelTarget;

    currentView.querySelectorAll(".action-card").forEach((card) => card.classList.remove("is-active"));
    currentView.querySelectorAll(".content-panel").forEach((panel) => panel.classList.remove("is-open"));

    button.classList.add("is-active");
    document.querySelector(`#${panelId}`).classList.add("is-open");
  });
});

prevStepButton.addEventListener("click", () => {
  state.step = Math.max(0, state.step - 1);
  saveState();
  renderStep();
});

nextStepButton.addEventListener("click", () => {
  state.step = Math.min(lastStep, state.step + 1);
  saveState();
  renderStep();
});

document.querySelector("#goConsultButton").addEventListener("click", () => {
  saveState();
  showSaveComplete();
});

document.querySelector("#goConsultNextButton").addEventListener("click", () => {
  showSavedCard();
  switchTab("tab-stores");
});

compareEditButton?.addEventListener("click", () => {
  setCompareEditorOpen(compareEditor.classList.contains("is-hidden"));
});

compareEditCloseButton?.addEventListener("click", () => {
  setCompareEditorOpen(false);
});

compareEditor?.addEventListener("click", (event) => {
  if (event.target === compareEditor) {
    setCompareEditorOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && compareEditor && !compareEditor.classList.contains("is-hidden")) {
    setCompareEditorOpen(false);
  }
});

document.querySelectorAll('[data-choice-group="budget"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    state.budget = button.dataset.value;

    if (state.budget !== "직접 입력") {
      state.customBudget = "";
      customBudgetInput.value = "";
      if (compareCustomBudgetInput) {
        compareCustomBudgetInput.value = "";
      }
    }

    saveState();
    renderChoices();
    updateSummary();
  });
});

customBudgetInput.addEventListener("input", () => {
  state.budget = "직접 입력";
  state.customBudget = customBudgetInput.value.trim();
  if (compareCustomBudgetInput) {
    compareCustomBudgetInput.value = state.customBudget;
  }
  saveState();
  renderChoices();
  updateSummary();
});

compareCustomBudgetInput?.addEventListener("input", () => {
  state.budget = "직접 입력";
  state.customBudget = compareCustomBudgetInput.value.trim();
  customBudgetInput.value = state.customBudget;
  saveState();
  renderChoices();
  updateSummary();
});

document.querySelectorAll('[data-choice-group="deviceBudget"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    state.deviceBudget = button.dataset.value;

    if (state.deviceBudget !== "직접 입력") {
      state.customDeviceBudget = "";
      customDeviceBudgetInput.value = "";
      if (compareCustomDeviceBudgetInput) {
        compareCustomDeviceBudgetInput.value = "";
      }
    }

    saveState();
    renderChoices();
    updateSummary();
  });
});

customDeviceBudgetInput.addEventListener("input", () => {
  state.deviceBudget = "직접 입력";
  state.customDeviceBudget = customDeviceBudgetInput.value.trim();
  if (compareCustomDeviceBudgetInput) {
    compareCustomDeviceBudgetInput.value = state.customDeviceBudget;
  }
  saveState();
  renderChoices();
  updateSummary();
});

compareCustomDeviceBudgetInput?.addEventListener("input", () => {
  state.deviceBudget = "직접 입력";
  state.customDeviceBudget = compareCustomDeviceBudgetInput.value.trim();
  customDeviceBudgetInput.value = state.customDeviceBudget;
  saveState();
  renderChoices();
  updateSummary();
});

document.querySelectorAll('[data-choice-group="pattern"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    state.pattern = button.dataset.value;
    saveState();
    renderChoices();
    updateSummary();
  });
});

document.querySelectorAll('[data-choice-group="dataUsage"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    state.dataUsage = button.dataset.value;
    saveState();
    renderChoices();
    updateSummary();
  });
});

document.querySelectorAll('[data-choice-group="carriers"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    updateMultiSelect(state.carriers, button.dataset.value, "상관없음");
    saveState();
    renderChoices();
    updateSummary();
  });
});

document.querySelectorAll('[data-choice-group="storage"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    updateMultiSelect(state.storage, button.dataset.value, "용량 상관없음");
    saveState();
    renderChoices();
    updateSummary();
  });
});

document.querySelectorAll('[data-choice-group="avoid"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    updateMultiSelect(state.avoid, button.dataset.value, "잘 모르겠음");
    saveState();
    renderChoices();
    updateSummary();
  });
});

renderInitialScreen();
renderStep();
renderChoices();
updateSummary();
renderChecklist();
renderStores();

function loadState() {
  const fallback = {
    started: false,
    step: 0,
    budget: "",
    customBudget: "",
    deviceBudget: "",
    customDeviceBudget: "",
    carriers: [],
    storage: [],
    pattern: "",
    dataUsage: "",
    avoid: [],
  };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));

    return {
      ...fallback,
      ...saved,
      step: Number.isInteger(saved?.step) ? Math.min(Math.max(saved.step, 0), lastStep) : 0,
      budget: normalizeBudget(saved?.budget),
      deviceBudget: normalizeDeviceBudget(saved?.deviceBudget),
      customDeviceBudget: typeof saved?.customDeviceBudget === "string" ? saved.customDeviceBudget : "",
      carriers: normalizeCarriers(saved?.carriers),
      storage: Array.isArray(saved?.storage) ? saved.storage : [],
      dataUsage: typeof saved?.dataUsage === "string" ? saved.dataUsage : "",
      avoid: Array.isArray(saved?.avoid) ? saved.avoid : [],
    };
  } catch {
    return fallback;
  }
}

function normalizeBudget(value) {
  const budgetMap = {
    "5만 원 이하": "3~5만 원",
    "7만 원 이하": "6~8만 원",
    "10만 원 이하": "9~10만 원",
  };

  return budgetMap[value] || value || "";
}

function normalizeDeviceBudget(value) {
  const deviceBudgetMap = {
    "20만 원 이하": "50만 원 이하",
    "120만 원 이하": "50만 원 이하",
    "150만 원 이하": "100만 원 이하",
    "180만 원 이하": "130만 원 이하",
  };

  return deviceBudgetMap[value] || value || "";
}

function normalizeCarriers(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((carrier) => carrier === "통신사 상관없음" ? "상관없음" : carrier)
    .filter((carrier) => carrierOptions.includes(carrier));
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function setCompareEditorOpen(isOpen) {
  if (!compareEditor) {
    return;
  }

  compareEditor.classList.toggle("is-hidden", !isOpen);
  compareEditButton?.setAttribute("aria-expanded", String(isOpen));
}

function renderInitialScreen() {
  onboarding.classList.remove("is-hidden");
  appScreen.classList.add("is-hidden");
}

function showApp() {
  onboarding.classList.add("is-hidden");
  appScreen.classList.remove("is-hidden");
}

function switchTab(targetId) {
  const targetView = document.querySelector(`#${targetId}`);

  if (targetId === "tab-standards" && standardsView.classList.contains("is-saved")) {
    showSavedCard();
  }

  document.querySelectorAll(".tab-button").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.tabTarget === targetId);
  });
  document.querySelectorAll(".tab-view").forEach((view) => {
    view.classList.toggle("is-active", view.id === targetId);
  });

  const noteText = targetId === "tab-standards" ? `${state.step + 1} / ${totalSteps}` : targetView.dataset.note;

  screenTitle.textContent = targetView.dataset.title;
  headerNote.textContent = noteText;
  headerNote.classList.toggle("is-hidden", !noteText);

  if (targetId === "tab-stores") {
    renderStores();
  }
}

function showSaveComplete() {
  standardsView.classList.add("is-saved");
  saveCompleteScreen.classList.remove("is-hidden");
  headerNote.textContent = "저장 완료";
  headerNote.classList.remove("is-hidden");
}

function showSavedCard() {
  standardsView.classList.remove("is-saved");
  saveCompleteScreen.classList.add("is-hidden");
  state.step = lastStep;
  saveState();
  renderStep();
}

function renderStep() {
  document.querySelectorAll(".step-page").forEach((page) => {
    page.classList.toggle("is-active", Number(page.dataset.step) === state.step);
  });

  document.querySelectorAll(".step-dots span").forEach((dot, index) => {
    dot.classList.toggle("is-active", index === state.step);
    dot.classList.toggle("is-complete", index < state.step);
  });

  prevStepButton.classList.toggle("is-hidden", state.step === 0);
  prevStepButton.disabled = state.step === 0;
  document.querySelector(".step-actions").classList.toggle("is-first-step", state.step === 0);
  nextStepButton.classList.toggle("is-hidden", state.step === lastStep);
  headerNote.textContent = `${state.step + 1} / ${totalSteps}`;
  headerNote.classList.remove("is-hidden");
  updateSummary();
}

function renderChoices() {
  document.querySelectorAll('[data-choice-group="budget"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.value === state.budget);
  });

  customBudgetField.classList.toggle("is-hidden", state.budget !== "직접 입력");
  customBudgetInput.value = state.customBudget || "";
  compareCustomBudgetField?.classList.toggle("is-hidden", state.budget !== "직접 입력");
  if (compareCustomBudgetInput) {
    compareCustomBudgetInput.value = state.customBudget || "";
  }

  document.querySelectorAll('[data-choice-group="deviceBudget"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.value === state.deviceBudget);
  });

  customDeviceBudgetField.classList.toggle("is-hidden", state.deviceBudget !== "직접 입력");
  customDeviceBudgetInput.value = state.customDeviceBudget || "";
  compareCustomDeviceBudgetField?.classList.toggle("is-hidden", state.deviceBudget !== "직접 입력");
  if (compareCustomDeviceBudgetInput) {
    compareCustomDeviceBudgetInput.value = state.customDeviceBudget || "";
  }

  document.querySelectorAll('[data-choice-group="pattern"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.value === state.pattern);
  });

  document.querySelectorAll('[data-choice-group="dataUsage"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.value === state.dataUsage);
  });

  document.querySelectorAll('[data-choice-group="carriers"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", state.carriers.includes(button.dataset.value));
  });

  document.querySelectorAll('[data-choice-group="storage"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", state.storage.includes(button.dataset.value));
  });

  document.querySelectorAll('[data-choice-group="avoid"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", state.avoid.includes(button.dataset.value));
  });

}

function updateSummary() {
  summaryBudget.textContent = getBudgetText();
  summaryDeviceBudget.textContent = getDeviceBudgetText();
  budgetTotalPreview.textContent = getBudgetTotalText();
  summaryBudgetTotal.textContent = getBudgetTotalText();
  renderTextTag(summaryModels, fixedModelName);
  renderTags(summaryCarriers, state.carriers);
  renderTags(summaryStorage, state.storage);
  summaryPattern.textContent = state.pattern || "아직 정하지 않았어요";
  summaryDataUsage.textContent = state.dataUsage || "아직 정하지 않았어요";
  renderTags(summaryAvoid, state.avoid);
  renderTags(compareSummaryCarriers, state.carriers);
  renderTags(compareSummaryStorage, state.storage);
  setText(compareSummaryDataUsage, state.dataUsage || "아직 정하지 않았어요");
  setText(compareSummaryBudget, getBudgetText());
  setText(compareSummaryDeviceBudget, getDeviceBudgetText());
  setText(compareSummaryBudgetTotal, getBudgetTotalText() || "아직 정하지 않았어요");
  renderTags(compareSummaryAvoid, state.avoid);
  renderStores();
}

function renderStores() {
  if (!storeList) {
    return;
  }

  storeList.innerHTML = "";

  stores
    .flatMap((store, storeIndex) => getStoreListings(store).map((listing, listingIndex) => ({
      ...listing,
      index: storeIndex * 10 + listingIndex,
    })))
    .map((listing) => ({ ...listing, comparison: compareListing(listing) }))
    .sort((a, b) => {
      const totalA = a.offer ? getOfferTotal(a.offer) : Number.POSITIVE_INFINITY;
      const totalB = b.offer ? getOfferTotal(b.offer) : Number.POSITIVE_INFINITY;
      return b.comparison.score - a.comparison.score || totalA - totalB || a.index - b.index;
    })
    .forEach((listing) => {
      const { store, offer, comparison } = listing;
      const summary = getStoreSummaryParts(listing, comparison);
      const card = document.createElement("article");
      card.className = "store-card";
      card.classList.toggle("is-full-match", comparison.score === comparison.total);
      const offerLabel = offer ? getOfferLabel(offer) : "";

      const summaryButton = document.createElement("button");
      summaryButton.className = "store-card-summary";
      summaryButton.type = "button";
      summaryButton.setAttribute("aria-expanded", "false");
      summaryButton.innerHTML = `
          ${summary.conditionHtml}
          <span class="store-card-name">${store.name}</span>
          ${offerLabel ? `<span class="store-offer-label">${offerLabel}</span>` : ""}
          <span class="summary-total-wrap">
            <span class="summary-total">${summary.totalText}</span>
            <span class="summary-total-note">24개월 기준 총액입니다.</span>
          </span>
        `;

      const details = document.createElement("div");
      details.className = "store-card-details";

      const detailActions = document.createElement("div");
      detailActions.className = "store-detail-actions";

      const mapLink = document.createElement("a");
      mapLink.className = "store-map-link";
      mapLink.href = getStoreMapUrl(store);
      mapLink.target = "_blank";
      mapLink.rel = "noopener noreferrer";
      mapLink.textContent = "지도";

      const closeButton = document.createElement("button");
      closeButton.className = "store-close-button";
      closeButton.type = "button";
      closeButton.setAttribute("aria-label", "매장 카드 닫기");
      closeButton.textContent = "X";

      const rows = document.createElement("div");
      rows.className = "match-list";

      comparison.rows.forEach((row) => {
        const rowStatus = getRowStatus(row);
        const item = document.createElement("div");
        item.className = `match-row ${rowStatus.className}`;
        item.innerHTML = `
          <span>${rowStatus.text}</span>
          <div>
            <strong>${row.label}</strong>
            <p>${row.message}</p>
          </div>
        `;
        rows.append(item);
      });

      summaryButton.addEventListener("click", () => {
        const isOpen = card.classList.toggle("is-open");
        summaryButton.setAttribute("aria-expanded", String(isOpen));
      });

      closeButton.addEventListener("click", () => {
        card.classList.remove("is-open");
        summaryButton.setAttribute("aria-expanded", "false");
      });

      detailActions.append(mapLink);
      details.append(detailActions, rows);
      card.append(summaryButton, closeButton, details);
      storeList.append(card);
    });
}

function getRowStatus(row) {
  if (row.status === "needs-review") {
    return {
      className: "needs-review",
      text: "확인 요함",
    };
  }

  return {
    className: row.ok ? "is-match" : "needs-check",
    text: row.ok ? "일치" : "불일치",
  };
}

function getStoreListings(store) {
  const offers = getCarrierOffers(store);

  if (!offers.length) {
    return [{ store, offer: null }];
  }

  return offers.map((offer) => ({ store, offer }));
}

function compareListing(listing) {
  const store = listing.store;
  const rows = [
    compareBudget(listing),
    compareCarriers(listing),
    compareStorage(store),
    compareData(store),
    compareAvoidRules(store),
  ];
  const score = rows.filter((row) => row.ok).length;

  return {
    rows,
    score,
    total: rows.length,
  };
}

function getStoreTotalText(listing) {
  if (!listing.offer) {
    return "가격 확인 필요";
  }

  return `${formatNumber(getOfferTotal(listing.offer))}원`;
}

function getStoreMapUrl(store) {
  return store.mapUrl || `https://map.naver.com/p/search/${encodeURIComponent(store.name)}`;
}

function getStoreSummaryParts(listing, comparison) {
  const mismatches = comparison.rows.filter((row) => !row.ok).map((row) => row.label);
  const totalText = getStoreTotalText(listing);

  if (!mismatches.length) {
    return {
      conditionHtml: '<span class="summary-condition is-match">모두 일치</span>',
      totalText,
    };
  }

  const conditionClass = getConditionClass(mismatches[0]);

  if (mismatches.length === 1) {
    return {
      conditionHtml: `<span class="summary-condition ${conditionClass}">${mismatches[0]} 불일치</span>`,
      totalText,
    };
  }

  return {
    conditionHtml: `<span class="summary-condition ${conditionClass}">${mismatches[0]} 외 ${mismatches.length - 1}개 불일치</span>`,
    totalText,
  };
}

function getConditionClass(label) {
  const classMap = {
    예산: "is-budget",
    통신사: "is-carrier",
    용량: "is-storage",
    데이터: "is-data",
    "피하고 싶은 조건": "is-avoid",
  };

  return classMap[label] || "is-avoid";
}

function compareBudget(listing) {
  const monthlyBudget = getBudgetMonthlyValue();
  const deviceBudget = getDeviceBudgetValue();
  const offer = listing.offer;

  if (!offer) {
    return {
      label: "예산",
      ok: false,
      message: "가격 정보 확인 필요",
    };
  }

  if (!monthlyBudget && !deviceBudget) {
    return {
      label: "예산",
      ok: false,
      message: formatOffer(offer),
    };
  }

  const monthlyOk = !monthlyBudget || offer.monthlyMax <= monthlyBudget;
  const deviceOk = !deviceBudget || offer.devicePrice <= deviceBudget;

  return {
    label: "예산",
    ok: monthlyOk && deviceOk,
    message: formatOffer(offer),
  };
}

function getCarrierOffers(store) {
  return Array.isArray(store.offers) ? store.offers : [];
}

function getOfferTotal(offer) {
  return Number.isFinite(offer.totalPrice) ? offer.totalPrice : offer.monthlyMax * 24 + offer.devicePrice;
}

function formatOffer(offer) {
  return `${getOfferLabel(offer)} 월 ${formatNumber(offer.monthlyMax)}원 기기 ${formatNumber(offer.devicePrice)}원 총 ${formatNumber(getOfferTotal(offer))}원`;
}

function getOfferLabel(offer) {
  const label = offer.label ? ` ${offer.label}` : "";
  return `${offer.carrier}${label}`;
}

function compareCarriers(listing) {
  const store = listing.store;
  const offer = listing.offer;

  if (offer) {
    if (!state.carriers.length || state.carriers.includes("상관없음")) {
      return {
        label: "통신사",
        ok: true,
        message: `${offer.carrier} 조건`,
      };
    }

    return {
      label: "통신사",
      ok: state.carriers.includes(offer.carrier),
      message: `${offer.carrier} 조건`,
    };
  }

  if (!store.carriers.length) {
    return {
      label: "통신사",
      ok: false,
      message: "통신사 정보 확인 필요",
    };
  }

  if (!state.carriers.length || state.carriers.includes("상관없음")) {
    return {
      label: "통신사",
      ok: true,
      message: `가능 통신사: ${store.carriers.join(", ")}`,
    };
  }

  const matched = state.carriers.filter((carrier) => store.carriers.includes(carrier));

  return {
    label: "통신사",
    ok: matched.length > 0,
    message: matched.length ? `${matched.join(", ")} 조건 가능` : `가능 통신사: ${store.carriers.join(", ")}`,
  };
}

function compareStorage(store) {
  if (!store.storage.length) {
    return {
      label: "용량",
      ok: false,
      message: "용량 정보 확인 필요",
    };
  }

  if (!state.storage.length || state.storage.includes("용량 상관없음")) {
    return {
      label: "용량",
      ok: true,
      message: `가능 용량: ${store.storage.join(", ")}`,
    };
  }

  const matched = state.storage.filter((storage) => store.storage.includes(storage));

  return {
    label: "용량",
    ok: matched.length > 0,
    message: matched.length ? `${matched.join(", ")} 가능` : `가능 용량: ${store.storage.join(", ")}`,
  };
}

function compareData(store) {
  if (store.category === "성지") {
    return {
      label: "데이터",
      ok: true,
      message: "초기 10만원 이상 요금제 유지 기간에는 무제한 사용 가능, 이후 5만원에서 6만원대 요금제로 조정 예상",
    };
  }

  if (!store.data.length) {
    return {
      label: "데이터",
      ok: false,
      message: "요금제 데이터 정보 확인 필요",
    };
  }

  if (!state.dataUsage || state.dataUsage === "잘 모르겠음") {
    return {
      label: "데이터",
      ok: true,
      message: `안내 가능: ${store.data.join(", ")}`,
    };
  }

  return {
    label: "데이터",
    ok: store.data.includes(state.dataUsage),
    message: store.data.includes(state.dataUsage) ? `${state.dataUsage} 요금제 상담 가능` : `안내 가능: ${store.data.join(", ")}`,
  };
}

function compareAvoidRules(store) {
  const avoidExpensivePlan = state.avoid.includes("비싼 요금제를 오래 유지하는 조건");
  const avoidExtras = state.avoid.includes("부가서비스 가입 조건");
  const planHold = store.planHold || "";
  const extraService = store.extraService || "";

  if (!planHold && !extraService) {
    return {
      label: "피하고 싶은 조건",
      ok: false,
      message: "유지 조건과 부가서비스 정보 확인 필요",
    };
  }

  if (!avoidExpensivePlan && !avoidExtras) {
    return {
      label: "피하고 싶은 조건",
      ok: true,
      message: [planHold, extraService].filter(Boolean).join(", "),
    };
  }

  const hasExpensivePlanHold = planHold.includes("고가 요금제") || planHold.includes("비싼 요금제") || planHold.includes("10만");
  const canLowerPlanLater = (planHold.includes("후") || planHold.includes("이후")) && (planHold.includes("하향") || planHold.includes("변경"));
  const hasLimitedHighPlanPeriod = /(\d+일|\d+개월|몇\s*일)/.test(planHold);
  const requiresHighPlanForFullTerm = planHold.includes("24개월") && hasExpensivePlanHold && !canLowerPlanLater;
  const hasNoExtraService = extraService.includes("없음");
  const needsExtraServiceCheck = extraService.includes("정보 확인 필요");
  const hasRequiredExtraService = extraService.includes("포함") || extraService.includes("의무");
  const planNeedsReview = avoidExpensivePlan && hasExpensivePlanHold && (canLowerPlanLater || hasLimitedHighPlanPeriod) && !requiresHighPlanForFullTerm;
  const planOk = !avoidExpensivePlan || !hasExpensivePlanHold || planNeedsReview;
  const extraOk = !avoidExtras || (hasNoExtraService ? true : !needsExtraServiceCheck && !hasRequiredExtraService);

  return {
    label: "피하고 싶은 조건",
    ok: planOk && extraOk,
    status: planNeedsReview && extraOk ? "needs-review" : "",
    message: planNeedsReview && extraOk
      ? `${[planHold, extraService].filter(Boolean).join(", ")}. 24개월 전체 고가 요금제 조건은 아니므로 유지 기간과 변경 가능 시점을 확인하세요.`
      : [planHold, extraService].filter(Boolean).join(", "),
  };
}

function compareContractMonths(store) {
  return {
    label: "24개월 기준",
    ok: store.contractMonths === 24,
    message: `${store.contractMonths}개월 기준 견적`,
  };
}

function getLegacyModelText(saved) {
  if (Array.isArray(saved?.models) && saved.models.length) {
    return saved.models.join(", ");
  }

  return "";
}

function getBudgetText() {
  if (!state.budget) {
    return "아직 정하지 않았어요";
  }

  if (state.budget === "직접 입력") {
    return state.customBudget ? `${formatNumber(Number(state.customBudget))}원 이하` : "아직 정하지 않았어요";
  }

  return state.budget;
}

function getDeviceBudgetText() {
  if (!state.deviceBudget) {
    return "아직 정하지 않았어요";
  }

  if (state.deviceBudget === "직접 입력") {
    return state.customDeviceBudget ? `${formatNumber(Number(state.customDeviceBudget))}원 이하` : "아직 정하지 않았어요";
  }

  return state.deviceBudget;
}

function getBudgetTotalText() {
  const monthlyBudget = getBudgetMonthlyValue();
  const deviceBudget = getDeviceBudgetValue();

  if (!monthlyBudget || !deviceBudget) {
    return "";
  }

  return `${formatNumber(monthlyBudget * 24 + deviceBudget)}원`;
}

function getBudgetMonthlyValue() {
  if (state.budget === "3~5만 원") {
    return 50000;
  }

  if (state.budget === "6~8만 원") {
    return 80000;
  }

  if (state.budget === "9~10만 원") {
    return 100000;
  }

  if (state.budget === "11만 원 이상") {
    return 110000;
  }

  if (state.budget === "직접 입력") {
    const parsed = Number(state.customBudget);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }

  return null;
}

function getDeviceBudgetValue() {
  if (state.deviceBudget === "50만 원 이하") {
    return 500000;
  }

  if (state.deviceBudget === "100만 원 이하") {
    return 1000000;
  }

  if (state.deviceBudget === "130만 원 이하") {
    return 1300000;
  }

  if (state.deviceBudget === "직접 입력") {
    const parsed = Number(state.customDeviceBudget);
    return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
  }

  return null;
}

function updateMultiSelect(list, value, exclusiveValue = "") {
  const index = list.indexOf(value);

  if (index >= 0) {
    list.splice(index, 1);
    return;
  }

  if (value === exclusiveValue) {
    list.splice(0, list.length, value);
    return;
  }

  const exclusiveIndex = list.indexOf(exclusiveValue);

  if (exclusiveIndex >= 0) {
    list.splice(exclusiveIndex, 1);
  }

  list.push(value);
}

function renderTags(container, values) {
  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!values.length) {
    const empty = document.createElement("span");
    empty.className = "empty-tag";
    empty.textContent = "아직 정하지 않았어요";
    container.append(empty);
    return;
  }

  values.forEach((value) => {
    const tag = document.createElement("span");
    tag.textContent = value;
    container.append(tag);
  });
}

function renderTextTag(container, value) {
  if (!container) {
    return;
  }

  container.innerHTML = "";

  if (!value) {
    const empty = document.createElement("span");
    empty.className = "empty-tag";
    empty.textContent = "아직 정하지 않았어요";
    container.append(empty);
    return;
  }

  value.split(/,|\n/).map((item) => item.trim()).filter(Boolean).forEach((item) => {
    const tag = document.createElement("span");
    tag.textContent = item;
    container.append(tag);
  });
}

function setText(element, value) {
  if (!element) {
    return;
  }

  element.textContent = value;
}

function renderChecklist() {
  if (!checkList) {
    return;
  }

  const saved = loadChecklist();
  checkList.innerHTML = "";

  checklistItems.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "check-item";

    const label = document.createElement("label");
    label.className = "check-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(saved[index]?.checked);
    checkbox.addEventListener("change", () => {
      saved[index].checked = checkbox.checked;
      localStorage.setItem(checklistKey, JSON.stringify(saved));
    });

    const text = document.createElement("span");
    text.textContent = item;

    label.append(checkbox, text);

    const memo = document.createElement("textarea");
    memo.className = "memo-input";
    memo.rows = 2;
    memo.placeholder = "메모";
    memo.value = saved[index]?.memo || "";
    memo.addEventListener("input", () => {
      saved[index].memo = memo.value;
      localStorage.setItem(checklistKey, JSON.stringify(saved));
    });

    row.append(label, memo);
    checkList.append(row);
  });
}

function loadChecklist() {
  try {
    const saved = JSON.parse(localStorage.getItem(checklistKey));
    const list = Array.isArray(saved) ? saved : [];

    return checklistItems.map((_, index) => {
      const item = list[index];

      if (typeof item === "boolean") {
        return { checked: item, memo: "" };
      }

      return {
        checked: Boolean(item?.checked),
        memo: typeof item?.memo === "string" ? item.memo : "",
      };
    });
  } catch {
    return checklistItems.map(() => ({ checked: false, memo: "" }));
  }
}

function formatNumber(value) {
  return new Intl.NumberFormat("ko-KR").format(value);
}
