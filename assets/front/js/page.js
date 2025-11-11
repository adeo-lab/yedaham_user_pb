/* 탭 고정 */
document.addEventListener("DOMContentLoaded", () => {

  const tab = document.querySelector(".tab-fixed");
  const wrap = document.querySelector(".tab-wrap");
  if (!tab) return;

  const links = document.querySelectorAll(".btn-target-scroll");
  const sections = Array.from(links).map(link => document.querySelector(link.dataset.target));

  const isCorp = document.body.classList.contains("corp");

  /* wrap 높이 유지 → 레이아웃 튐 방지 */
  const updateHeight = () => {
    if (wrap) wrap.style.setProperty("--tab-h", `${tab.offsetHeight}px`);
  };
  updateHeight();

  /* 탭의 원래 위치 계산 */
  let originTop = 0;
  const computeOrigin = () => {
    tab.classList.remove("fixed", "entering", "ready");
    originTop = tab.getBoundingClientRect().top + window.scrollY;
  };

  /* 붙을 때만 부드럽게 */
  let isFixed = false;
  const onScroll = () => {
    const HEADER_OFFSET = window.matchMedia("(max-width: 1023px)").matches ? 72 : 100;
    const nowFixed = window.scrollY >= originTop - HEADER_OFFSET;

    if (nowFixed && !isFixed) {
      isFixed = true;
      tab.classList.add("fixed", "entering");
      requestAnimationFrame(() => {
        tab.classList.remove("entering");
        tab.classList.add("ready");
      });
    }
    else if (!nowFixed && isFixed) {
      isFixed = false;
      tab.classList.remove("fixed", "ready");
    }
  };

  /* IntersectionObserver - current 탭 동기 */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = "#" + entry.target.id;
      links.forEach(link => {
        const parent = link.closest(".tab-item");
        parent.classList.toggle("current", link.dataset.target === id);
      });
    });
  }, {
    root: null,
    rootMargin: "0px 0px -50% 0px", // 스크롤 자연스러운 잡힘
    threshold: 0
  });

  sections.forEach(section => section && observer.observe(section));

  /* 이벤트 등록 */
  window.addEventListener("scroll", onScroll, { passive: true });

  /* 리사이즈 시 재계산 */
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateHeight();
      computeOrigin();
      onScroll();
    }, 150);
  });

  /* 모바일 새로고침 / 주소창 변동 대응 */
  window.addEventListener("load", () => {
    updateHeight();
    computeOrigin();
    onScroll();
  });

});





/* title 고정 */
document.addEventListener("DOMContentLoaded", () => {
  const tab = document.querySelector(".title-fixed");
  if (!tab) return;

  const THRESHOLD = 100;
  // 요소의 문서 상 위치(초기)를 계산
  let originTop = tab.getBoundingClientRect().top + window.scrollY;

  // 윈도우 높이나 레이아웃 변경 시 원위치 재계산
  const recomputeOrigin = () => {
    originTop = tab.getBoundingClientRect().top + window.scrollY;
  };

  const onScroll = () => {
    // 스크롤 위치가 originTop - THRESHOLD 이상이면 고정
    if (window.scrollY >= originTop - THRESHOLD) {
      tab.classList.add("fixed");
    } else {
      tab.classList.remove("fixed");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", recomputeOrigin);
  window.addEventListener("load", recomputeOrigin);

  // 초기 실행
  recomputeOrigin();
  onScroll();
});

