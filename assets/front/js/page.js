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

  let HEADER_OFFSET = getHeaderOffset();
  let originTop = 0;

  /* 2) 탭 고정 기준 재계산 */
  const recomputeOrigin = () => {
    HEADER_OFFSET = getHeaderOffset();
    originTop = tab.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  };

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", () => {
      recomputeOrigin();
      onScroll(); // 추가: 즉시 상태 반영
    });
    window.visualViewport.addEventListener("scroll", () => {
      recomputeOrigin();
      onScroll();
    });
  }

  /* 3) 스크롤 시 탭 fixed */
  const onScroll = () => {
    if (window.scrollY >= originTop) {
      tab.classList.add("fixed");
    } else {
      tab.classList.remove("fixed");
    }
  };

  /* 4) IntersectionObserver - current 이동 */
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

  /* 5) 새로고침 시 현재 화면에서 가장 가까운 섹션 current 적용 */
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

  /* 6) 초기 실행은 레이아웃 계산이 끝난 후 → 2프레임 지연 */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      recomputeOrigin();
      onScroll();
      setInitialCurrent();
    });
  });

  window.addEventListener("scroll", () => {
    onScroll();
  }, { passive: true });

  window.addEventListener("resize", () => {
    recomputeOrigin();
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

