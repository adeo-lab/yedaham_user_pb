/* 탭 고정 */
document.addEventListener("DOMContentLoaded", () => {

  const tab = document.querySelector(".tab-fixed");
  if (!tab) return;

  const links = document.querySelectorAll(".btn-target-scroll");
  const sections = Array.from(links).map(link => document.querySelector(link.dataset.target));

  const isCorp = document.body.classList.contains("corp");
  const isMobile = window.matchMedia("(max-width: 1023px)").matches;

  /* 1) 헤더 높이 계산 (corp 헤더 hide 상태 반영) */
  const getHeaderOffset = () => {
    if (!isCorp) return 0; // 일반 화면은 헤더 영향 없음

    const header = document.querySelector("#header");
    if (!header) return 0;

    const isHeaderHidden = header.classList.contains("down");
    return isHeaderHidden ? 0 : header.offsetHeight;
  };

  /* 2) 탭 원래 위치 기준 고정 */
  let HEADER_OFFSET = 0;
  let originTop = 0;

  const computeOrigin = () => {
    tab.classList.remove("fixed");
    HEADER_OFFSET = getHeaderOffset();
    originTop = tab.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  };

  /* 3) 스크롤 시 탭 fixed 처리 */
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

  /* 4) IntersectionObserver - current 적용 */
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
    rootMargin: `-${HEADER_OFFSET}px 0px 0px 0px`,
    threshold: isMobile ? 0.1 : 0.2
  });

  sections.forEach(section => {
    if (section) observer.observe(section);
  });

  /* 5) 새로고침 시 현재 화면에서 가장 가까운 탭 활성화 */
  const setInitialCurrent = () => {
    let minDistance = Infinity;
    let currentSection = null;

    sections.forEach(section => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - HEADER_OFFSET);
      if (distance < minDistance) {
        minDistance = distance;
        currentSection = section;
      }
    });

    if (currentSection) {
      const id = "#" + currentSection.id;
      links.forEach(link => {
        const parent = link.closest(".tab-item");
        parent.classList.toggle("current", link.dataset.target === id);
      });
    }
  };

  window.addEventListener("load", computeOrigin);

  /* 7) 스크롤 이벤트 */
  window.addEventListener("scroll", onScroll, { passive: true });

  /* 8) 리사이즈 시 origin 재계산 (debounce) */
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      computeOrigin();
      onScroll();
    }, 120);
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

