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
    const header = document.querySelector("#header");
    if (!header) return 0;
    if (isCorp) {
      const isHeaderHidden = header.classList.contains("down");
      return isHeaderHidden ? 0 : header.offsetHeight;
    }
    return header.offsetHeight;
  };

  /* CSS 변수에 헤더 높이 반영 */
  const updateHeaderHeightVar = () => {
    document.documentElement.style.setProperty("--header-height", `${HEADER_OFFSET}px`);
  };

  let HEADER_OFFSET = getHeaderOffset();
  let originTop = 0;

  /* ✅ placeholder: fixed 시 높이 유지 */
  let tabHeight = 0;
  const placeholder = document.createElement("div");
  placeholder.style.height = "0px";
  tab.insertAdjacentElement("afterend", placeholder);

  const updateTabHeight = () => {
    tabHeight = tab.offsetHeight;
    placeholder.style.height = tab.classList.contains("fixed") ? `${tabHeight}px` : "0px";
  };

  /* 2) 탭 고정 기준 재계산 */
  const recomputeOrigin = () => {
    HEADER_OFFSET = getHeaderOffset();
    updateHeaderHeightVar();      // CSS 변수 갱신
    originTop = tab.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    updateTabHeight();            // 탭 높이 갱신
  };

  /* 3) 스크롤 시 탭 fixed */
  const onScroll = () => {
    if (window.scrollY >= originTop) {
      tab.classList.add("fixed");
    } else {
      tab.classList.remove("fixed");
    }
    updateTabHeight(); // 항상 높이 보정
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

  /* 5) 새로고침 시 현재 위치 섹션 current */
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

  /* 6) 초기 실행 (레이아웃 안정 후 실행) */
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      recomputeOrigin();
      onScroll();
      setInitialCurrent();
    });
  });

  /* ✅ 모바일 사파리 / 네이버앱 주소창 변화 대응 */
  if (window.visualViewport) {
  // 주소창이 완전히 열리거나 닫힐 때만 실행됨 → 깜빡임 없음
    window.visualViewport.addEventListener("resize", () => {
      recomputeOrigin();
      onScroll();
    });
  }


  window.addEventListener("scroll", onScroll, { passive: true });
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

