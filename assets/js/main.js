const chars = [
  [
    "이준우",
    "주인공",
    "#f2f2f2",
    "공부도 외모도 성격도 뭐든 잘하는 남학생. 책임감이 강하지만, 잘하고 싶은 마음이 '실수하면 안 된다'는 강박으로 변해 간다.",
  ],
  [
    "장현주",
    "베프",
    "#f2f2f2",
    "어릴 때부터 함께한 친구이자 같은 영재학교 동기. 누구보다 빨리 준우의 가면을 알아본다.",
  ],
  [
    "곽승주",
    "악역",
    "#f2f2f2",
    "질투가 아니라, 준우를 통해 자기 노력이 인정받는 일이 반복되며 쌓인 열등감. '좋은 사람 준우'라는 이미지 자체가 불편하다.",
  ],
  [
    "김서현",
    "미래 여친",
    "#f2f2f2",
    "처음엔 승주의 부탁으로 준우에게 다가가지만, 가까이 지낼수록 생각이 달라지고 죄책감을 느낀다.",
  ],
  [
    "문휘석",
    "현자",
    "#f2f2f2",
    "게임도, 운동도 하고 시험도 망친다. 한 번 크게 무너져 본 뒤로 중요한 것들을 '전부'로 만들지 않는 법을 배웠다.",
  ],
  [
    "조병진",
    "룸메이트",
    "#f2f2f2",
    "기숙사 룸메이트. 현실적인 학교생활과 웃음을 담당하고, 자기 부족함을 비교적 쉽게 인정한다.",
  ],
  [
    "이나림",
    "여친 친구",
    "#f2f2f2",
    "미래 여친 곁에서 상황을 지켜보며 때로는 등을 밀어 주는 친구.",
  ],
  [
    "민경현",
    "기쁨이",
    "#f2f2f2",
    "준우를 기쁘게 해주고 싶었던 마음. 조종대를 잡으면 가장 먼저 사람들에게 인사한다.",
  ],
  [
    "장재혁",
    "불안이",
    "#f2f2f2",
    "여기서 잘할 수 있을까, 성적이 떨어지면 어쩌나. 가장 먼저 걱정부터 꺼내는 목소리.",
  ],
  [
    "여은수",
    "버럭이",
    "#f2f2f2",
    "준우가 화를 내지 않으니 대신 화를 내 주는 감정. 사실은 가장 먼저 준우 편에 서 있다.",
  ],
  [
    "장은서",
    "낭만이",
    "#f2f2f2",
    "오래 자리를 비웠다가 돌아와 고등학교 생활에 낭만을 불어넣는 감정.",
  ],
  [
    "고상원",
    "완벽이",
    "#f2f2f2",
    "악역이 아니다. 준우를 지키려고 '더 잘하면 돼'를 반복하던 존재, 그리고 2%쯤 부족해져 보기로 하는 존재.",
  ],
];
const scenes = [
  [
    "입학",
    "봄의 쌀쌀한 입학식 날, 설렘과 불안을 안고 같은 반 친구들과 처음 인사를 나눈다.",
  ],
  [
    "학교 생활의 시작",
    "영재학교의 하루가 시작되고, 준우의 '다 잘하고 싶은 마음'이 본격적으로 움직인다.",
  ],
  [
    "조별과제",
    "조별과제에서 열심히 하는 준우와 적당히 하자는 친구들 사이의 온도 차가 드러난다.",
  ],
  [
    "미래 여친의 등장",
    "승주의 말만 듣고 준우를 오해하던 한 사람이 복도 모퉁이에서 준우와 부딪힌다.",
  ],
  [
    "봄이 오려나 봄",
    "자습시간, 준우의 다정함과 섬세함이 누군가의 마음에 조용히 들어간다.",
  ],
  [
    "잔잔한 바다",
    "시험 3주 전, 부탁을 거절하지 못하는 준우와 그런 준우를 답답해하는 친구들.",
  ],
  [
    "갈등의 고조",
    "시험 직전의 마지막 조별과제. 피로가 쌓인 조원들 사이에서 준우는 또 혼자 떠안는다.",
  ],
  [
    "고백",
    "솔직한 마음이 다가온 밤, 감정들은 난리가 나고 조종대는 '지금은 안 된다'를 선택한다.",
  ],
  [
    "하이라이트",
    "시험 이후, 친구와의 다툼 끝에 무너진 준우. 완벽이가 조종대를 놓고 준우를 안아 준다.",
  ],
  [
    "마음의 여유",
    "돌아온 낭만이와 현자와의 밤 대화. 준우는 쉬어 가는 법을 배운다.",
  ],
  [
    "어른이 될 준비",
    "조별과제에서 한결 느슨해진 준우가 사과하고, 화해하고, 다시 마음을 전한다.",
  ],
  [
    "어른이 될 시간",
    "입학식과 닮은 졸업식. 여전히 잘하고 싶지만, 이제는 조금 부족해도 괜찮다.",
  ],
];
const cards = document.getElementById("cards"),
  cover = document.getElementById("cover"),
  sl = document.getElementById("scenes");
chars.forEach((c, i) => {
  cards.insertAdjacentHTML(
    "beforeend",
    `<article class="card${i ? "" : " current"}" data-number="${String(i + 1).padStart(2, "0")}" style="--c:${c[2]}"><div class="role">${c[0]}</div><h3>${c[1]}</h3><p>${c[3]}</p></article>`,
  );
  cover.insertAdjacentHTML(
    "beforeend",
    `<div class="layer${i ? "" : " on"}" style="background:${c[2]}"><b>${c[1]}</b><small>${c[0].split(" · ")[0]}</small></div>`,
  );
});
scenes.forEach((s, i) =>
  sl.insertAdjacentHTML(
    "beforeend",
    `<li class="fadeTrg"><span class="n fw">${i + 1}</span><h3 class="fw">${s[0]}</h3><p class="fw">${s[1]}</p></li>`,
  ),
);

const root = document.documentElement;
const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
let started = false,
  scrolled = false,
  ticking = false;
function onScroll() {
  if (!scrolled) {
    scrolled = true;
    root.classList.add("scroll_start");
  }
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    update();
  });
}
function begin() {
  if (started) return;
  started = true;
  root.classList.add("start");
  scrollTo(0, 0);
  setTimeout(() => root.classList.add("opening_delay"), reduce ? 0 : 3300);
  setTimeout(() => {
    update();
    addEventListener("scroll", onScroll, { passive: true });
  }, 600);
}
if (document.readyState === "complete") setTimeout(begin, reduce ? 0 : 1300);
else addEventListener("load", () => setTimeout(begin, reduce ? 0 : 1300));
// failsafe: never leave the page blank if the load event is delayed (slow font/network)
setTimeout(begin, 6000);

const layers = [...cover.children],
  cardEls = [...cards.children],
  fades = [...document.querySelectorAll(".fadeTrg")];
const cardsCurrent = document.getElementById("cardsCurrent"),
  cardsTotal = document.getElementById("cardsTotal"),
  cardsProgress = document.getElementById("cardsProgress"),
  cardsProgressFill = cardsProgress.querySelector(".cards-progress-track span");
cardsTotal.textContent = String(cardEls.length).padStart(2, "0");
let cardsScrollTicking = false,
  cur = 0;
function updateMobileCards() {
  cardsScrollTicking = false;
  if (innerWidth > 800 || cardEls.length === 0) return;
  const center = cards.getBoundingClientRect().left + cards.clientWidth / 2;
  const idx = cardEls.reduce((nearest, card, i) => {
    const cardCenter = card.getBoundingClientRect().left + card.offsetWidth / 2;
    const nearestCenter =
      cardEls[nearest].getBoundingClientRect().left +
      cardEls[nearest].offsetWidth / 2;
    return Math.abs(cardCenter - center) < Math.abs(nearestCenter - center)
      ? i
      : nearest;
  }, 0);
  cur = idx;
  cardEls.forEach((card, i) => card.classList.toggle("current", i === idx));
  cardsCurrent.textContent = String(idx + 1).padStart(2, "0");
  cardsProgressFill.style.transform = `scaleX(${(idx + 1) / cardEls.length})`;
}
cards.addEventListener(
  "scroll",
  () => {
    if (cardsScrollTicking) return;
    cardsScrollTicking = true;
    requestAnimationFrame(updateMobileCards);
  },
  { passive: true },
);
updateMobileCards();
const s3 = document.getElementById("sec_3"),
  hero = document.querySelector(".hero"),
  fl = [...document.querySelectorAll(".floaters i")],
  floaterPositions = fl.map((element) => ({
    element,
    current: 0,
    target: 0,
  })),
  navItems = [...document.querySelectorAll("#siteNav a")]
    .map((link) => ({
      link,
      section: document.querySelector(link.getAttribute("href")),
    }))
    .filter((item) => item.section);
let floatersAnimating = false;
function animateFloaters() {
  let moving = false;
  floaterPositions.forEach((floater) => {
    const delta = floater.target - floater.current;
    if (Math.abs(delta) > 0.1) {
      floater.current += delta * 0.24;
      moving = true;
    } else {
      floater.current = floater.target;
    }
    floater.element.style.transform = `translate3d(0, ${floater.current}px, 0)`;
  });
  if (moving) {
    requestAnimationFrame(animateFloaters);
  } else {
    floatersAnimating = false;
  }
}
function scheduleFloaterAnimation() {
  if (floatersAnimating) return;
  floatersAnimating = true;
  requestAnimationFrame(animateFloaters);
}
function update() {
  const y = scrollY,
    h = innerHeight;
  fades.forEach((el) => {
    el.getBoundingClientRect().top < h / 1.2
      ? el.classList.add("show")
      : el.classList.remove("show");
  });
  root.classList.toggle("headerShow", hero.getBoundingClientRect().bottom <= 0);
  let activeNavItem = null;
  navItems.forEach((item) => {
    if (item.section.getBoundingClientRect().top <= h * 0.38) {
      activeNavItem = item;
    }
  });
  navItems.forEach(({ link }) => {
    if (link === activeNavItem?.link) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
  if (innerWidth > 800) {
    let idx = 0;
    cardEls.forEach((c, i) => {
      const r = c.getBoundingClientRect();
      if (r.top < h * 0.55) idx = i;
    });
    if (idx !== cur) {
      cur = idx;
      cardEls.forEach((c, i) => c.classList.toggle("current", i === idx));
      layers.forEach((l, i) => l.classList.toggle("on", i === idx));
    }
  }
  if (!reduce) {
    const t3 = s3.offsetTop,
      h3 = s3.offsetHeight;
    if (y > t3 - h - 500 && y < t3 + h3 + 500) {
      const d = (h / h3) * (y - t3 + 600);
      floaterPositions.forEach((floater) => {
        floater.target = d * Number(floater.element.dataset.s);
      });
      scheduleFloaterAnimation();
    }
  }
}
let rz;
addEventListener("resize", () => {
  if (innerWidth > 800) setMenu(false);
  clearTimeout(rz);
  rz = setTimeout(() => {
    if (!started) return;
    updateMobileCards();
    update();
  }, 80);
});
addEventListener("orientationchange", () =>
  setTimeout(() => started && update(), 250),
);

/* mobile menu */
const hm = document.getElementById("headerMenu"),
  mb = document.getElementById("menuBtn");
function setMenu(open) {
  hm.classList.toggle("menuOpen", open);
  mb.setAttribute("aria-expanded", String(open));
  mb.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
}
mb.addEventListener("click", (e) => {
  e.stopPropagation();
  setMenu(!hm.classList.contains("menuOpen"));
});
hm.querySelector(".logo").addEventListener("click", () => setMenu(false));
hm.querySelectorAll("nav a").forEach((a) =>
  a.addEventListener("click", () => setMenu(false)),
);
document.addEventListener("click", (e) => {
  if (!hm.contains(e.target)) setMenu(false);
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});
