
/* 탭 고정 */
document.addEventListener("DOMContentLoaded", () => {

  const tab = document.querySelector(".tab-fixed");
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

  /* ✅ 스크롤 시 current 탭 변경 */
  const tabItems = document.querySelectorAll(".tab-item");
  const links = document.querySelectorAll(".btn-target-scroll");
  const sections = Array.from(links).map(link => {
    const selector = link.dataset.target;
    return document.querySelector(selector);
  });

  const isMobile = window.matchMedia("(max-width: 1023px)").matches;
  // const TAB_HEIGHT = 72;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = "#" + entry.target.id;

      console.log("%c[Observer]", "color: #007aff; font-weight:bold;", {
        id,
        ratio: entry.intersectionRatio.toFixed(3),
        isIntersecting: entry.isIntersecting
      });
      
      if (entry.isIntersecting) {
        // const id = "#" + entry.target.id;
        links.forEach(link => {
          const parent = link.closest(".tab-item");
          if (link.dataset.target === id) {
            parent.classList.add("current");
            console.log("%c→ current 적용:", "color:#28a745; font-weight:bold;", id);
          } else {
            parent.classList.remove("current");
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: "-72px 0px 0px 0px",
    threshold: isMobile ? 0 : 0.1
    // root: null,
    // threshold: isMobile ? 0.2 : 0.3, /* 화면에 40% 보여지면 활성화 */
    // rootMargin: `-${TAB_HEIGHT}px 0px 0px 0px`
  });

  sections.forEach(section => {
    if (section) observer.observe(section);
  });

  const setInitialCurrent = () => {
    let minDistance = Infinity;
    let currentSection = null;

    sections.forEach(section => {
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);

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
  setInitialCurrent();
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

