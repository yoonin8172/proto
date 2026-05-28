const storageKey = "phonecheckState";
const checklistKey = "phonecheckChecklist";
const lastStep = 4;
const totalSteps = 5;

const checklistItems = [
  "24개월 총비용을 확인했나요?",
  "요금제 유지 기간을 확인했나요?",
  "부가서비스가 필수인지 확인했나요?",
  "할부 원금이 얼마인지 확인했나요?",
  "견적을 문자나 사진으로 남겼나요?",
  "오늘 바로 계약하지 않아도 된다는 점을 기억했나요?",
];

const stores = [
  {
    name: "한빛모바일 강남점",
    area: "서울 강남",
    monthlyMax: 80000,
    carriers: ["SKT", "KT"],
    storage: ["128GB", "256GB", "512GB"],
    data: ["30GB 이하", "100GB 이하", "무제한 필요"],
    cardPolicy: "제휴카드 없이 안내 가능",
    supportsNoCard: true,
    planHold: "고가 요금제 3개월 유지 조건",
    extraService: "부가서비스 선택",
    contractMonths: 24,
    contact: "견적서 문자 발송 가능",
  },
  {
    name: "청량폰 마포점",
    area: "서울 마포",
    monthlyMax: 50000,
    carriers: ["알뜰폰", "KT"],
    storage: ["64GB", "128GB", "256GB"],
    data: ["5GB 이하", "10GB 이하", "30GB 이하"],
    cardPolicy: "제휴카드 없이 안내 가능",
    supportsNoCard: true,
    planHold: "요금제 자유 선택",
    extraService: "부가서비스 없음",
    contractMonths: 24,
    contact: "전화 상담 가능",
  },
  {
    name: "스마트링크 신촌점",
    area: "서울 신촌",
    monthlyMax: 100000,
    carriers: ["SKT", "LG U+"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    data: ["100GB 이하", "무제한 필요"],
    cardPolicy: "월 실적 확인 후 제휴카드 할인 가능",
    supportsNoCard: false,
    planHold: "고가 요금제 6개월 유지 조건",
    extraService: "보험 1개월 포함",
    contractMonths: 24,
    contact: "카드 조건 별도 설명 가능",
  },
  {
    name: "동네폰 상담센터",
    area: "온라인 상담",
    monthlyMax: 110000,
    carriers: ["SKT", "KT", "LG U+", "알뜰폰"],
    storage: ["32GB", "64GB", "128GB", "256GB"],
    data: ["5GB 이하", "10GB 이하", "30GB 이하", "100GB 이하"],
    cardPolicy: "카드 발급 없이 견적 가능",
    supportsNoCard: true,
    planHold: "요금제 유지 기간 협의",
    extraService: "부가서비스 선택",
    contractMonths: 30,
    contact: "온라인 견적 비교 가능",
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
const budgetTotalPreview = document.querySelector("#budgetTotalPreview");
const modelTextInput = document.querySelector("#modelTextInput");
const summaryBudget = document.querySelector("#summaryBudget");
const summaryBudgetTotal = document.querySelector("#summaryBudgetTotal");
const summaryModels = document.querySelector("#summaryModels");
const summaryCarriers = document.querySelector("#summaryCarriers");
const summaryStorage = document.querySelector("#summaryStorage");
const summaryPattern = document.querySelector("#summaryPattern");
const summaryDataUsage = document.querySelector("#summaryDataUsage");
const summaryCardDiscount = document.querySelector("#summaryCardDiscount");
const summaryAvoid = document.querySelector("#summaryAvoid");
const prevStepButton = document.querySelector("#prevStepButton");
const nextStepButton = document.querySelector("#nextStepButton");
const checkList = document.querySelector("#checkList");
const storeList = document.querySelector("#storeList");

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

document.querySelectorAll('[data-choice-group="budget"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    state.budget = button.dataset.value;

    if (state.budget !== "직접 입력") {
      state.customBudget = "";
      customBudgetInput.value = "";
    }

    saveState();
    renderChoices();
    updateSummary();
  });
});

customBudgetInput.addEventListener("input", () => {
  state.budget = "직접 입력";
  state.customBudget = customBudgetInput.value.trim();
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

modelTextInput.addEventListener("input", () => {
  state.modelText = modelTextInput.value.trim();
  saveState();
  updateSummary();
});

document.querySelectorAll('[data-choice-group="carriers"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    updateMultiSelect(state.carriers, button.dataset.value, "통신사 상관없음");
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

document.querySelectorAll('[data-choice-group="cardDiscount"] .choice-button').forEach((button) => {
  button.addEventListener("click", () => {
    state.cardDiscount = button.dataset.value;
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
    modelText: "",
    carriers: [],
    storage: [],
    pattern: "",
    dataUsage: "",
    cardDiscount: "",
    avoid: [],
  };

  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));

    return {
      ...fallback,
      ...saved,
      step: Number.isInteger(saved?.step) ? Math.min(Math.max(saved.step, 0), lastStep) : 0,
      budget: normalizeBudget(saved?.budget),
      modelText: typeof saved?.modelText === "string" ? saved.modelText : getLegacyModelText(saved),
      carriers: Array.isArray(saved?.carriers) ? saved.carriers : [],
      storage: Array.isArray(saved?.storage) ? saved.storage : [],
      dataUsage: typeof saved?.dataUsage === "string" ? saved.dataUsage : "",
      cardDiscount: typeof saved?.cardDiscount === "string" ? saved.cardDiscount : "",
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

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function renderInitialScreen() {
  if (state.started) {
    showApp();
  }
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

  screenTitle.textContent = targetView.dataset.title;
  headerNote.textContent = targetId === "tab-standards" ? `${state.step + 1} / ${totalSteps}` : targetView.dataset.note;

  if (targetId === "tab-stores") {
    renderStores();
  }
}

function showSaveComplete() {
  standardsView.classList.add("is-saved");
  saveCompleteScreen.classList.remove("is-hidden");
  headerNote.textContent = "저장 완료";
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
  updateSummary();
}

function renderChoices() {
  document.querySelectorAll('[data-choice-group="budget"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.value === state.budget);
  });

  customBudgetField.classList.toggle("is-hidden", state.budget !== "직접 입력");
  customBudgetInput.value = state.customBudget || "";
  modelTextInput.value = state.modelText || "";

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

  document.querySelectorAll('[data-choice-group="cardDiscount"] .choice-button').forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.value === state.cardDiscount);
  });
}

function updateSummary() {
  summaryBudget.textContent = getBudgetText();
  budgetTotalPreview.textContent = getBudgetTotalText();
  summaryBudgetTotal.textContent = getBudgetTotalText();
  renderTextTag(summaryModels, state.modelText);
  renderTags(summaryCarriers, state.carriers);
  renderTags(summaryStorage, state.storage);
  summaryPattern.textContent = state.pattern || "아직 정하지 않았어요";
  summaryDataUsage.textContent = state.dataUsage || "아직 정하지 않았어요";
  summaryCardDiscount.textContent = state.cardDiscount || "아직 정하지 않았어요";
  renderTags(summaryAvoid, state.avoid);
  renderStores();
}

function renderStores() {
  if (!storeList) {
    return;
  }

  storeList.innerHTML = "";

  stores.forEach((store) => {
    const comparison = compareStore(store);
    const card = document.createElement("article");
    card.className = "store-card";

    const header = document.createElement("div");
    header.className = "store-card-header";
    header.innerHTML = `
      <div>
        <h2>${store.name}</h2>
        <p>${store.area} · ${store.contact}</p>
      </div>
      <strong>${comparison.score}/${comparison.total}</strong>
    `;

    const rows = document.createElement("div");
    rows.className = "match-list";

    comparison.rows.forEach((row) => {
      const item = document.createElement("div");
      item.className = `match-row ${row.ok ? "is-match" : "needs-check"}`;
      item.innerHTML = `
        <span>${row.ok ? "맞음" : "확인"}</span>
        <div>
          <strong>${row.label}</strong>
          <p>${row.message}</p>
        </div>
      `;
      rows.append(item);
    });

    const note = document.createElement("p");
    note.className = "store-note";
    note.textContent = `${store.planHold} · ${store.extraService}`;

    card.append(header, rows, note);
    storeList.append(card);
  });
}

function compareStore(store) {
  const rows = [
    compareBudget(store),
    compareCarriers(store),
    compareStorage(store),
    compareData(store),
    compareCardPolicy(store),
    compareAvoidRules(store),
    compareContractMonths(store),
  ];
  const score = rows.filter((row) => row.ok).length;

  return {
    rows,
    score,
    total: rows.length,
  };
}

function compareBudget(store) {
  const budget = getBudgetMonthlyValue();

  if (!budget) {
    return {
      label: "예산",
      ok: false,
      message: `이 매장은 월 ${formatNumber(store.monthlyMax)}원 이하 조건을 안내할 수 있습니다.`,
    };
  }

  return {
    label: "예산",
    ok: store.monthlyMax <= budget,
    message: `매장 제안 기준: 월 ${formatNumber(store.monthlyMax)}원 이하`,
  };
}

function compareCarriers(store) {
  if (!state.carriers.length || state.carriers.includes("통신사 상관없음")) {
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

function compareCardPolicy(store) {
  if (!state.cardDiscount || state.cardDiscount === "잘 모르겠음") {
    return {
      label: "제휴카드",
      ok: true,
      message: store.cardPolicy,
    };
  }

  if (state.cardDiscount === "제휴카드 없이 안내받고 싶음" || state.cardDiscount === "카드 발급은 원하지 않음") {
    return {
      label: "제휴카드",
      ok: store.supportsNoCard,
      message: store.cardPolicy,
    };
  }

  return {
    label: "제휴카드",
    ok: true,
    message: store.cardPolicy,
  };
}

function compareAvoidRules(store) {
  const avoidExpensivePlan = state.avoid.includes("비싼 요금제를 오래 유지하는 조건");
  const avoidExtras = state.avoid.includes("부가서비스 가입 조건");

  if (!avoidExpensivePlan && !avoidExtras) {
    return {
      label: "피하고 싶은 조건",
      ok: true,
      message: `${store.planHold}, ${store.extraService}`,
    };
  }

  const planOk = !avoidExpensivePlan || !store.planHold.includes("6개월");
  const extraOk = !avoidExtras || !store.extraService.includes("포함");

  return {
    label: "피하고 싶은 조건",
    ok: planOk && extraOk,
    message: `${store.planHold}, ${store.extraService}`,
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

function getBudgetTotalText() {
  const monthlyBudget = getBudgetMonthlyValue();

  if (!monthlyBudget) {
    return "선택하면 자동으로 계산됩니다";
  }

  return `${formatNumber(monthlyBudget * 24)}원`;
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

function renderChecklist() {
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
