const stores = [
  {
    category: "직영점",
    name: "SK텔레콤 가능대리점 민락2지구직영점",
    mapUrl: "https://naver.me/Gsj6ODGZ",
    carriers: ["SKT"],
    storage: ["256GB", "512GB"],
    contractMonths: 24,
    offers: [
      createOffer("SKT", "기기변경 · 번호이동", "256GB", 50000, 1690000, 2890000, "요금제 매우 다양, 선택 가능. 3만원대 기본 요금제부터 시작하며, 총액은 월 5만원 요금제로 임의 계산", "부가서비스와 보험은 선택 조건에 따라 매장에 직접 문의 필요"),
      createOffer("SKT", "기기변경 · 번호이동", "512GB", 50000, 1840000, 3040000, "요금제 매우 다양, 선택 가능. 3만원대 기본 요금제부터 시작하며, 총액은 월 5만원 요금제로 임의 계산", "부가서비스와 보험은 선택 조건에 따라 매장에 직접 문의 필요"),
    ],
  },
  {
    category: "직영점",
    name: "kt직영매장 의정부로데오직영점",
    mapUrl: "https://naver.me/Gn0FmU7S",
    carriers: ["KT"],
    storage: ["256GB"],
    contractMonths: 24,
    offers: [
      createOffer("KT", "기기변경 · 번호이동", "256GB", 50000, 1790000, 2990000, "요금제 매우 다양, 선택 가능. 3만원대 기본 요금제부터 시작하며, 총액은 월 5만원 요금제로 임의 계산. 512GB는 현재 품절", "부가서비스와 보험은 선택 조건에 따라 매장에 직접 문의 필요"),
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 옆커폰 의정부호원점",
    mapUrl: "https://naver.me/5PVTBSYn",
    carriers: ["SKT"],
    storage: ["256GB"],
    contractMonths: 24,
    offers: [
      {
        carrier: "SKT",
        label: "기기변경",
        storage: "256GB",
        monthlyMax: 109000,
        devicePrice: 1260000,
        totalPrice: 3876000,
        planHold: "10만9000원 요금제 6개월 사용 의무, 이후 요금제는 매장에 직접 문의 필요",
        extraService: "24개월 기기값 할부 원금 90만원, 36만원은 상품권 대체 조건",
      },
    ],
  },
  {
    category: "성지",
    name: "휴대폰 성지 싸당 의정부점",
    mapUrl: "https://naver.me/x9zGAU3h",
    carriers: ["SKT", "KT"],
    storage: ["256GB", "512GB"],
    contractMonths: 24,
    offers: [
      createOffer("SKT", "번호이동", "256GB", 109000, 570000, 3186000, "188일간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("SKT", "기기변경", "256GB", 109000, 600000, 3216000, "188일간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "번호이동", "256GB", 110000, 580000, 3220000, "188일간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "기기변경", "256GB", 110000, 680000, 3320000, "188일간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("SKT", "번호이동", "512GB", 109000, 830000, 3446000, "188일간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("SKT", "기기변경", "512GB", 109000, 780000, 3396000, "188일간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "번호이동", "512GB", 110000, 870000, 3510000, "188일간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "기기변경", "512GB", 110000, 970000, 3610000, "188일간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 폰통령 고산점",
    mapUrl: "https://naver.me/Gj7FCPKv",
    carriers: ["SKT", "KT"],
    storage: ["256GB"],
    contractMonths: 24,
    offers: [
      createOffer("SKT", "번호이동", "256GB", 109000, 740000, 3356000, "185일간 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("SKT", "기기변경", "256GB", 109000, 690000, 3306000, "185일간 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "번호이동", "256GB", 110000, 600000, 3240000, "185일간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "기기변경", "256GB", 110000, 600000, 3240000, "185일간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 씽씽텔레콤",
    mapUrl: "https://naver.me/5bVmVYze",
    carriers: ["SKT", "KT"],
    storage: ["256GB"],
    contractMonths: 24,
    offers: [
      createOffer("SKT", "번호이동", "256GB", 109000, 730000, 2158000, "6개월간 109,000원 요금제 사용 의무, 이후 2년 약정 43,000원 이상 요금제 사용 필수", "부가서비스 없음"),
      createOffer("SKT", "기기변경", "256GB", 109000, 680000, 2108000, "6개월간 109,000원 요금제 사용 의무, 이후 2년 약정 43,000원 이상 요금제 사용 필수", "부가서비스 없음"),
      createOffer("KT", "번호이동", "256GB", 110000, 770000, 2276000, "6개월간 110,000원 요금제 사용 의무, 이후 47,000원 이상 요금제 사용 필수", "부가서비스 없음"),
      createOffer("KT", "기기변경", "256GB", 110000, 840000, 2346000, "6개월간 110,000원 요금제 사용 의무, 이후 47,000원 이상 요금제 사용 필수", "부가서비스 없음"),
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 폰슐랭 의정부점",
    mapUrl: "https://naver.me/GlJly3te",
    carriers: ["SKT", "KT"],
    storage: ["256GB", "512GB"],
    contractMonths: 24,
    offers: [
      createOffer("SKT", "번호이동", "256GB", 109000, 670000, 3286000, "6개월간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("SKT", "기기변경", "256GB", 109000, 650000, 3266000, "6개월간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "번호이동", "256GB", 110000, 640000, 3280000, "6개월간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "기기변경", "256GB", 110000, 660000, 3300000, "6개월간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("SKT", "번호이동", "512GB", 109000, 1000000, 3616000, "6개월간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("SKT", "기기변경", "512GB", 109000, 870000, 3486000, "6개월간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "번호이동", "512GB", 110000, 920000, 3560000, "6개월간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "기기변경", "512GB", 110000, 950000, 3590000, "6개월간 초이스 스페셜 요금제 110,000원 사용 의무", "매장에 직접 문의 필요"),
    ],
  },
  {
    category: "성지",
    name: "휴대폰 성지 옆커폰 의정부민락점",
    mapUrl: "https://naver.me/5pw1u52P",
    carriers: ["SKT", "KT"],
    storage: ["256GB"],
    contractMonths: 24,
    offers: [
      createOffer("KT", "기기변경", "256GB", 109000, 870000, 2334000, "109,000원 요금제 6개월 사용 후 7개월차부터 45,000원 이상 요금제 18개월 사용", "매장에 직접 문의 필요"),
      createOffer("KT", "기기변경 · 제휴카드 구매", "256GB", 109000, 370000, 1834000, "109,000원 요금제 6개월 사용 후 7개월차부터 45,000원 이상 요금제 18개월 사용", "매장에 직접 문의 필요"),
      createOffer("SKT", "번호이동", "256GB", 109000, 840000, 2304000, "109,000원 요금제 6개월 사용 후 7개월차부터 45,000원 이상 요금제 18개월 사용", "매장에 직접 문의 필요"),
      createOffer("SKT", "번호이동 · 제휴카드 구매", "256GB", 109000, 330000, 1794000, "109,000원 요금제 6개월 사용 후 7개월차부터 45,000원 이상 요금제 18개월 사용", "매장에 직접 문의 필요"),
    ],
  },
  {
    category: "성지",
    name: "휴대폰성지 옆커폰 의정부금오점",
    mapUrl: "https://naver.me/F6ngN8yd",
    carriers: ["KT"],
    storage: ["256GB"],
    contractMonths: 24,
    offers: [
      createOffer("KT", "기기변경", "256GB", 100000, 1200000, 2400000, "100,000원 요금제 6개월 사용 후 50,000원까지 하향 가능", "부가서비스 포함, 4개월간 사용 의무"),
    ],
  },
  {
    category: "알뜰폰 / 자급제폰",
    name: "아정당 가격비교 사이트",
    mapUrl: "",
    carriers: ["SKT", "KT"],
    storage: ["256GB", "512GB"],
    contractMonths: 24,
    offers: [
      createOffer("SKT", "번호이동", "256GB", 109000, 790000, 3416500, "185일간 5GX 프리미엄 요금제 109,000원 사용 의무", "마이스마트콜 3,500원 3개월 유지"),
      createOffer("SKT", "기기변경", "256GB", 109000, 790000, 3416500, "185일간 5GX 프리미엄 요금제 109,000원 사용 의무", "마이스마트콜 3,500원 3개월 유지"),
      createOffer("KT", "번호이동", "256GB", 110000, 800000, 3440880, "185일간 초이스 스페셜 요금제 110,000원 사용 의무", "31일간 880원 캐치콜플러스 부가서비스 필수 이용"),
      createOffer("KT", "기기변경", "256GB", 110000, 870000, 3510880, "185일간 초이스 스페셜 요금제 110,000원 사용 의무", "31일간 880원 캐치콜플러스 부가서비스 필수 이용"),
      createOffer("SKT", "번호이동", "512GB", 109000, 1050000, 3660000, "6개월간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("SKT", "기기변경", "512GB", 109000, 1020000, 3630000, "6개월간 5GX 프리미엄 요금제 109,000원 사용 의무", "매장에 직접 문의 필요"),
      createOffer("KT", "번호이동", "512GB", 110000, 1060000, 3700880, "6개월간 초이스 스페셜 요금제 110,000원 사용 의무", "31일간 880원 캐치콜플러스 부가서비스 필수 이용"),
      createOffer("KT", "기기변경", "512GB", 110000, 1130000, 3770880, "6개월간 초이스 스페셜 요금제 110,000원 사용 의무", "31일간 880원 캐치콜플러스 부가서비스 필수 이용"),
    ],
  },
];

const state = {
  storage: "전체",
  carrier: "전체",
};

const storeList = document.querySelector("#storeList");
const resultCount = document.querySelector("#resultCount");
const emptyMessage = document.querySelector("#emptyMessage");
let animationTimer;

document.querySelectorAll("[data-filter] .filter-button").forEach((button) => {
  button.addEventListener("click", () => {
    const filterName = button.closest("[data-filter]").dataset.filter;
    state[filterName] = button.dataset.value;
    renderFilters();
    renderStores(true);
  });
});

renderFilters();
renderStores();

function createOffer(carrier, label, storage, monthlyMax, devicePrice, totalPrice, planHold, extraService) {
  return {
    carrier,
    label,
    storage,
    monthlyMax,
    devicePrice,
    totalPrice,
    planHold,
    extraService,
  };
}

function renderFilters() {
  document.querySelectorAll("[data-filter] .filter-button").forEach((button) => {
    const filterName = button.closest("[data-filter]").dataset.filter;
    const isSelected = state[filterName] === button.dataset.value;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-pressed", String(isSelected));
  });
}

function renderStores(shouldAnimate = false) {
  const listings = getFilteredListings();

  storeList.replaceChildren();
  resultCount.textContent = `${listings.length}개 조건`;
  emptyMessage.classList.toggle("is-hidden", listings.length > 0);

  listings.forEach((listing) => {
    storeList.append(createStoreItem(listing));
  });

  if (shouldAnimate) {
    clearTimeout(animationTimer);
    storeList.classList.remove("is-updating");
    void storeList.offsetWidth;
    storeList.classList.add("is-updating");
    animationTimer = window.setTimeout(() => {
      storeList.classList.remove("is-updating");
    }, 300);
  }
}

function getFilteredListings() {
  return stores
    .flatMap((store, storeIndex) => store.offers.map((offer, offerIndex) => ({
      store,
      offer,
      sourceIndex: storeIndex * 100 + offerIndex,
    })))
    .filter(({ offer }) => state.storage === "전체" || offer.storage === state.storage)
    .filter(({ offer }) => state.carrier === "전체" || offer.carrier === state.carrier)
    .sort((a, b) => {
      return getOfferTotal(a.offer) - getOfferTotal(b.offer) || a.sourceIndex - b.sourceIndex;
    });
}

function createStoreItem({ store, offer }) {
  const item = document.createElement("article");
  item.className = "store-item";

  const main = document.createElement("div");
  main.className = "store-main";

  const copy = document.createElement("div");
  copy.className = "store-copy";

  const name = document.createElement("h3");
  name.className = "store-name";
  name.textContent = store.name;

  const priceBox = document.createElement("div");
  priceBox.className = "price-box";
  priceBox.innerHTML = `
    <strong class="total-price">${formatNumber(getOfferTotal(offer))}원</strong>
    <span class="price-label">24개월 예상 총액</span>
  `;

  copy.append(name);
  main.append(copy, priceBox);

  const details = createDetails(store, offer);
  item.append(main, details);
  return item;
}

function createDetails(store, offer) {
  const details = document.createElement("div");
  details.className = "store-details";

  const grid = document.createElement("div");
  grid.className = "detail-grid";
  grid.append(
    createDetailCell("통신사", offer.carrier),
    createDetailCell("가입 조건", offer.label),
    createDetailCell("약정 기간", `${store.contractMonths}개월`),
    createDetailCell("가능 용량", offer.storage),
    createDetailCell("요금제 유지", offer.planHold || "판매처 확인 필요"),
    createDetailCell("부가서비스", offer.extraService || "판매처 확인 필요")
  );

  const total = getOfferTotal(offer);
  const communicationCost = Math.max(0, total - offer.devicePrice);
  const breakdown = document.createElement("div");
  breakdown.className = "price-breakdown";
  breakdown.innerHTML = `
    <p class="breakdown-title">총액 구성</p>
    <p class="breakdown-formula">
      <span>${formatNumber(offer.devicePrice)}원(기기값)</span>
      <span>+ ${formatNumber(communicationCost)}원(통신비)</span>
    </p>
    <p class="breakdown-total">= 총 ${formatNumber(total)}원</p>
    <p class="breakdown-note">통신비는 보험 및 부가서비스를 제외한 24개월 기준 가격입니다. 실제 청구액은 요금제 변경 시점과 계약 조건에 따라 달라질 수 있습니다.</p>
  `;

  const actions = document.createElement("div");
  actions.className = "store-actions";

  const mapLink = document.createElement("a");
  mapLink.className = "map-link";
  mapLink.href = getStoreMapUrl(store);
  mapLink.target = "_blank";
  mapLink.rel = "noopener noreferrer";
  mapLink.textContent = "네이버 지도로 보기";
  actions.append(mapLink);

  details.append(grid, breakdown, actions);
  return details;
}

function createDetailCell(label, value) {
  const cell = document.createElement("div");
  cell.className = "detail-cell";

  const labelElement = document.createElement("span");
  labelElement.textContent = label;

  const valueElement = document.createElement("p");
  valueElement.textContent = value || "판매처 확인 필요";

  cell.append(labelElement, valueElement);
  return cell;
}

function getOfferTotal(offer) {
  return Number.isFinite(offer.totalPrice)
    ? offer.totalPrice
    : offer.monthlyMax * 24 + offer.devicePrice;
}

function getStoreMapUrl(store) {
  return store.mapUrl || `https://map.naver.com/p/search/${encodeURIComponent(store.name)}`;
}

function formatNumber(value) {
  return new Intl.NumberFormat("ko-KR").format(value);
}
