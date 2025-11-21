
/*
 * 회사 메인
 */

// 퀵메뉴 스크롤버튼 화면 이동
window.addEventListener('load', function () {
	const quickMenu = document.querySelector('.corp .quick-menu');
  const scrollBtn = document.querySelector('.corp .quick-menu .btn-scroll');
  const section1 = document.querySelector('.corp .main-cont01-wrap');
  const section2 = document.querySelector('.corp .main-cont02-wrap'); 

  if (!quickMenu || !scrollBtn || !section2) {
    console.warn('quickMenu, scrollBtn, 또는 section2 요소를 찾을 수 없습니다.');
    return;
  }

   scrollBtn.addEventListener('click', function () {
    quickMenu.classList.toggle('show');
    const y = section2.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  });
});


// ---------------------------
// 회사 메인 페이지 공통 세팅 (GSAP ScrollTrigger만 사용)
// ---------------------------
function initCompanyMain() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  ScrollTrigger.defaults({
    scroller: document.body,
    markers: false,
  });
}


// ---------------------------
// 회사 메인 텍스트 (.main-section-heading)
// ---------------------------
function initCompanyText() {
  document.querySelectorAll(".main-section-heading").forEach((headingEl) => {
    const titleEl = headingEl.querySelector(".tx01");
    const descEl = headingEl.querySelector(".tx02");
    const ctaEl = headingEl.querySelector(".btn-more");

    if (!titleEl || !descEl) return;

    // SplitText 먼저 만든다
    const splitDesc = new SplitText(descEl, {
      type: "lines, words",
      linesClass: "__line",
      wordsClass: "__word",
    });

    // 초기 상태 강제 세팅 (근데 CSS랑 동일하기 때문에 FOUC 없이 자연스럽게 덮어쓰기)
    gsap.set(titleEl, { yPercent: 120, opacity: 0 });
    gsap.set(splitDesc.words, { yPercent: 120, opacity: 0 });
    if (ctaEl) gsap.set(ctaEl, { opacity: 0, y: "2rem" });
    // descEl 자체는 이미 opacity:0이라 추가로 안 만져도 됨

    const runSectionAnim = () => {
      const tl = gsap.timeline();

      // 제목
      tl.to(titleEl, {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "quart.out",
      });

      // 설명 (라인 단위 stagger)
      tl.to(
        descEl,
        {
          opacity: 1,
          duration: 0.01,
        },
        0 // 타이틀 시작과 동시에 desc 자체는 보여지게만 (깜빡임 방지)
      );

      splitDesc.lines.forEach((line, i) => {
        tl.to(
          line.querySelectorAll(".__word"),
          {
            opacity: 1,
            yPercent: 0,
            duration: 1.4,
            ease: "quart.out",
          },
          i * 0.15 + 0.2
        );
      });

      // 버튼
      if (ctaEl) {
        tl.to(
          ctaEl,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "quart.out",
          },
          "-=1.0"
        );
      }
    };

    ScrollTrigger.create({
      trigger: headingEl,
      start: "top 80%",
      once: true,
      onEnter: runSectionAnim,
    });
  });
}


// ---------------------------
// 1~2 섹션 리스트 fade-up (.bx-cont-r > ul > li)
// ---------------------------
function initCompanyListBoxes() {
  const sections = document.querySelectorAll(
    ".main-cont01-wrap.main-section, .main-cont02-wrap.main-section"
  );

  sections.forEach((section) => {
    const items = section.querySelectorAll(".bx-cont-r > ul > li");
    if (!items.length) return;

    gsap.set(items, { opacity: 0, y: 80 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.5,
        });
      },
    });
  });
}


// ---------------------------
// 공통 Swiper 생성 함수 (반응형 대응)
// ---------------------------
function createResponsiveSwiper(selector, optionsPC, optionsMO) {
  let swiperInstance = null;
  let resizeTimer = null;

  function initSwiper() {
    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    const isPC = window.innerWidth >= 1024;
    const options = isPC ? optionsPC : optionsMO;
    swiperInstance = new Swiper(selector, options);
  }

  // 최초 실행
  initSwiper();

  // 리사이즈 대응
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initSwiper, 300);
  });

  return () => swiperInstance; // instance getter 반환 (선택사항)
}


// ---------------------------
// 3 섹션: Swiper + fade-up
// ---------------------------
function initCompanySection03() {
  const section = document.querySelector(".main-cont03-wrap.main-section");
  if (!section) return;

  const listEl = section.querySelector(".main-vis04-img-list");
  if (!listEl) return;

  const nextBtn = section.querySelector(".swiper-button-next");
  const prevBtn = section.querySelector(".swiper-button-prev");

  let swiper3 = null;
  let currentMode = null; // 'pc' | 'mo'

  // 스와이퍼 생성 (모바일 전용)
  const createSwiper = () => {
    swiper3 = new Swiper(listEl, {
      slidesPerView: "auto",
      spaceBetween: 16,
      watchOverflow: true,
      breakpoints: {
        1024: {
          spaceBetween: 24,
        },
        0: {
          spaceBetween: 16,
        },
      },
      navigation: false,
    });
  };

  // 스와이퍼 제거
  const destroySwiper = () => {
    if (swiper3) {
      swiper3.destroy(true, false);
      swiper3 = null;
    }
  };

  // 화면 크기 감지 후 스와이퍼 상태 갱신
  const updateSwiper = () => {
    const isPC = window.innerWidth >= 1024;
    const newMode = isPC ? "pc" : "mo";

    if (newMode !== currentMode) {
      if (isPC) {
        destroySwiper();
        nextBtn?.classList.remove("hidden");
        prevBtn?.classList.remove("hidden");
      } else {
        nextBtn?.classList.add("hidden");
        prevBtn?.classList.add("hidden");
        createSwiper();
      }
      currentMode = newMode;
    } else if (swiper3) {
      swiper3.update();
    }
  };

  // 초기 실행 + 리사이즈 감시
  updateSwiper();

  window.addEventListener("resize", () => {
    clearTimeout(section._resizeTimer);
    section._resizeTimer = setTimeout(updateSwiper, 400);
  });

  // fade-up 애니메이션
  const slides = section.querySelectorAll(".main-vis04-img-list .swiper-slide");
  if (slides.length) {
    gsap.set(slides, { opacity: 0, y: 60 });
    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(slides, {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          stagger: 0.2,
          delay: 0.5,
        });
      },
    });
  }
}

// ---------------------------
// 4 섹션: Vertical Swiper + fade-up
// ---------------------------
// 4섹션 Swiper 초기화
function initCompanySection04() {
  const section = document.querySelector(".main-cont04-wrap.main-section");
  if (!section) return;

  let swiper4 = null;
  let currentMode = null; // "pc" | "mo"

  // Swiper 생성 함수
  const createSwiper = (isPC) => {
    const listEl = document.querySelector(".main-vis04-list");
    const nextBtn = document.querySelector(".main-vis04-list-wrap .swiper-button-next");
    const prevBtn = document.querySelector(".main-vis04-list-wrap .swiper-button-prev");

    // 모바일일 경우 버튼 숨김
    if (isPC) {
      nextBtn?.classList.remove("hidden");
      prevBtn?.classList.remove("hidden");
    } else {
      nextBtn?.classList.add("hidden");
      prevBtn?.classList.add("hidden");
    }

    swiper4 = new Swiper(listEl, {
      direction: isPC ? "vertical" : "horizontal",
      slidesPerView: "auto",
      centeredSlides: !isPC,
      autoHeight: true,
      loop: true,
      watchOverflow: false,
      spaceBetween: isPC ? 96 : 10,
      navigation: isPC
        ? {
            nextEl: nextBtn,
            prevEl: prevBtn,
          }
        : false,
      on: {
        init() {
          // 버튼 수동 unlock 보정
          if (isPC && this.navigation) {
            this.navigation.nextEl?.classList.remove(
              "swiper-button-disabled",
              "swiper-button-lock"
            );
            this.navigation.prevEl?.classList.remove(
              "swiper-button-disabled",
              "swiper-button-lock"
            );
            this.navigation.update();
          }
        },
      },
    });
  };

  // Swiper 제거 함수 (스타일 보존)
  const destroySwiper = () => {
    if (swiper4) {
      swiper4.destroy(true, false); // cleanStyles=false → 구조 보존
      swiper4 = null;
    }
  };

  // 모드 변경 감지 + 재생성
  const updateSwiper = () => {
    const isPC = window.innerWidth >= 1024;
    const newMode = isPC ? "pc" : "mo";

    if (newMode !== currentMode) {
      destroySwiper();
      createSwiper(isPC);
      currentMode = newMode;
    } else if (swiper4) {
      // 같은 모드일 때는 높이만 업데이트
      swiper4.update();
    }
  };

  // 최초 실행 + 리사이즈 대응
  updateSwiper();
  window.addEventListener("resize", () => {
    clearTimeout(section._resizeTimer);
    section._resizeTimer = setTimeout(updateSwiper, 400);
  });

  // fade-up 애니메이션 (공통)
  const slides = section.querySelectorAll(".main-vis04-list .swiper-slide");
  const buttonBox = section.querySelector(".main-vis04-list-wrap .button-bx");

  if (slides.length) {
    // 초기 상태 설정
    gsap.set(slides, { opacity: 0, y: 60 });
    if (buttonBox) gsap.set(buttonBox, { opacity: 0, y: 40 }); // 버튼 박스도 미리 숨김

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      once: true,
      onEnter: () => {
        // 슬라이드 순차 등장
        gsap.to(slides, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
        });

        // 버튼 박스 등장 (슬라이드 이후 살짝 딜레이)
        if (buttonBox) {
          gsap.to(buttonBox, {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
            delay: 0.8,
          });
        }
      },
    });
  }

}


// ---------------------------
// 5 섹션: Swiper + 하단 리스트 fade-up
// ---------------------------
function initCompanySection05() {
  const section = document.querySelector(".main-cont05-wrap.main-section");
  if (!section) return;

  const swiperContainer = section.querySelector(".main-careers-posting");
  if (!swiperContainer) return;

  const isPC = window.innerWidth >= 1024;
  const slides = swiperContainer.querySelectorAll(".swiper-slide");
  const hasSlides = slides.length > 0;
  const hasNoData = section.querySelector(".main-careers-posting .bx-no-data") !== null;

  // 스와이퍼 생성
  let swiper = null;
  if (hasSlides) {
    swiper = new Swiper(swiperContainer, {
      slidesPerView: "auto",
      spaceBetween: isPC ? 0 : 16,
      centeredSlides: true,
      loop: isPC,
      autoplay: isPC
        ? { delay: 3000, disableOnInteraction: false }
        : false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      observer: true,
      observeParents: true,
    });

  // 리사이즈 시 스와이퍼 갱신만 (destroy X)
  window.addEventListener("resize", () => {
      clearTimeout(section._resizeTimer);
      section._resizeTimer = setTimeout(() => {
        swiper.update();
      }, 300);
    });
  }

  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
    console.warn("[Company Section 05] GSAP or ScrollTrigger not available");
    return;
  }

  let topElements;

  if (hasSlides) {
    topElements = section.querySelectorAll(
      ".bx-tp .tx-btn, .bx-tp .main-careers-posting .swiper-slide"
    );
  } else if (hasNoData) {
    topElements = section.querySelectorAll(
      ".bx-tp .tx-btn, .bx-tp .main-careers-posting .bx-no-data"
    );
  } else {
    return;
  }

  const bottomItems = section.querySelectorAll(".bx-bt ul > li");

  gsap.set([...topElements, ...bottomItems], { opacity: 0, y: 60 });

  ScrollTrigger.create({
    trigger: section,
    start: "top 80%",
    once: true,
    onEnter: () => {
      gsap.to(topElements, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.to(bottomItems, {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: "power3.out",
        stagger: 0.4,
        delay: 0.5,
      });
    },
  });  
}


// ---------------------------
// 실행
// ---------------------------
window.addEventListener("load", () => {
  initCompanyMain();
  initCompanyText();
  initCompanyListBoxes();
  initCompanySection03();
  initCompanySection04();
  initCompanySection05();

  // 모든 섹션이 초기화된 후 ScrollTrigger 재계산 (필수)
  ScrollTrigger.refresh();
});