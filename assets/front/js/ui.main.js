/*
 * FO_Y_MA_001 리뷰 리스트 무한 롤링 처리
 */
document.querySelectorAll('.home .main-cont03.pc .main-review-list .bx-wrap-l, .home .main-cont03.pc .main-review-list .bx-wrap-r').forEach((wrap) => {
	const target = wrap.querySelector('.home .main-cont03.pc .main-review-list .in-bx-wrap');
	const moveWrap = document.createElement('div');

	moveWrap.classList.add('move-wrap');
	moveWrap.appendChild(target);

	const clone = target.cloneNode(true);

	moveWrap.appendChild(clone);
	wrap.appendChild(moveWrap);
});



/*
 * FO_C_MA_001 리뷰 리스트 무한 롤링 처리
 */
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

    // SplitText 적용
    const splitDesc = new SplitText(descEl, {
      type: "lines, words",
      linesClass: "__line",
      wordsClass: "__word",
    });

    // 초기 상태 세팅 ✅ (이 부분이 함수 안에 있어야 함)
    gsap.set(titleEl, { yPercent: 120 });
    if (ctaEl) gsap.set(ctaEl, { opacity: 0, y: "2rem" });
    gsap.set(splitDesc.words, { yPercent: 120 });

    // 등장 애니메이션
    const runSectionAnim = () => {
      const tl = gsap.timeline({
        onComplete: () => splitDesc.revert(),
      });

      tl.to(titleEl, { yPercent: 0, duration: 1, ease: "quart.out" });

      splitDesc.lines.forEach((line, i) => {
        tl.to(
          line.querySelectorAll(".__word"),
          {
            yPercent: 0,
            duration: 1.6,
            ease: "quart.out",
          },
          i * 0.2 + 0.2
        );
      });

      if (ctaEl) {
        tl.to(
          ctaEl,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "quart.out",
          },
          "-=1.2"
        );
      }
    };

    // ScrollTrigger 연결
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
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.2,
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

    console.log(`[Swiper] ${selector} initialized (${isPC ? "PC" : "MOBILE"})`);
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
  const nextBtn = section.querySelector(".swiper-button-next");
  const prevBtn = section.querySelector(".swiper-button-prev");
  if (!listEl) return;

  let swiper3 = null;
  let currentMode = null; // 'pc' | 'mo'

  const createSwiper = (isPC) => {
    if (isPC) {
      nextBtn?.classList.remove("hidden");
      prevBtn?.classList.remove("hidden");
    } else {
      nextBtn?.classList.add("hidden");
      prevBtn?.classList.add("hidden");
    }

    swiper3 = new Swiper(listEl, {
      slidesPerView: "auto",
      spaceBetween: 16,
    //   loop: true,
      watchOverflow: false,
	  breakpoints: {
			1024: {
				spaceBetween: 24, // 🖥 PC일 때 슬라이드 간격
			},
			0: {
				spaceBetween: 16, // 📱 모바일일 때 간격
			},
		},
      navigation: isPC
        ? { nextEl: nextBtn, prevEl: prevBtn }
        : false,
      on: {
        init() {
          if (isPC && this.navigation) {
            this.navigation.nextEl?.classList.remove("swiper-button-disabled", "swiper-button-lock");
            this.navigation.prevEl?.classList.remove("swiper-button-disabled", "swiper-button-lock");
            this.navigation.update();
          }
          console.log(`[Company Section 03] Swiper initialized (${isPC ? "PC" : "MO"})`);
        },
      },
    });
  };

  const destroySwiper = () => {
    if (swiper3) {
      swiper3.destroy(true, false);
      swiper3 = null;
      console.log("[Company Section 03] Swiper destroyed");
    }
  };

  const updateSwiper = () => {
    const isPC = window.innerWidth >= 1024;
    const newMode = isPC ? "pc" : "mo";
    if (newMode !== currentMode) {
      destroySwiper();
      createSwiper(isPC);
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

  // ✅ fade-up 애니메이션
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
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
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

  // ✅ Swiper 생성 함수
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
          // ✅ 버튼 수동 unlock 보정
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
          console.log(`[Company Section 04] Swiper initialized (${isPC ? "PC" : "MO"})`);
        },
      },
    });
  };

  // ✅ Swiper 제거 함수 (스타일 보존)
  const destroySwiper = () => {
    if (swiper4) {
      swiper4.destroy(true, false); // ⚠️ cleanStyles=false → 구조 보존
      swiper4 = null;
      console.log("[Company Section 04] Swiper destroyed");
    }
  };

  // ✅ 모드 변경 감지 + 재생성
  const updateSwiper = () => {
    const isPC = window.innerWidth >= 1024;
    const newMode = isPC ? "pc" : "mo";

    if (newMode !== currentMode) {
      destroySwiper();
      createSwiper(isPC);
      currentMode = newMode;
    } else if (swiper4) {
      // ✅ 같은 모드일 때는 높이만 업데이트
      swiper4.update();
    }
  };

  // ✅ 최초 실행 + 리사이즈 대응
  updateSwiper();
  window.addEventListener("resize", () => {
    clearTimeout(section._resizeTimer);
    section._resizeTimer = setTimeout(updateSwiper, 400);
  });

  // ✅ fade-up 애니메이션 (공통)
  const slides = section.querySelectorAll(".main-vis04-list .swiper-slide");
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
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.15,
        });
      },
    });
  }

  console.log("[Company Section 04] Responsive fade-up ready");
}






// ---------------------------
// 5 섹션: Swiper + 하단 리스트 fade-up
// ---------------------------
function initCompanySection05() {
  const section = document.querySelector(".main-cont05-wrap.main-section");
  if (!section) return;

  const listEl = section.querySelector(".main-careers-posting");
  const nextBtn = section.querySelector(".swiper-button-next");
  const prevBtn = section.querySelector(".swiper-button-prev");

  let swiper5 = null;
  let active = false;

  // ✅ Swiper 생성
  const createSwiper = (isPC) => {
    swiper5 = new Swiper(listEl, {
      slidesPerView: "auto",
      spaceBetween: isPC ? 24 : 16,
    //   loop: true,
      watchOverflow: true,
      navigation: isPC
        ? {
            nextEl: nextBtn,
            prevEl: prevBtn,
          }
        : false,
    });
    active = true;
    console.log(`[Section 05] Swiper created (${isPC ? "PC" : "MO"})`);
  };

  // ✅ Swiper 파괴
  const destroySwiper = () => {
    if (swiper5) {
      swiper5.destroy(true, false);
      swiper5 = null;
      active = false;
      console.log("[Section 05] Swiper destroyed");
    }
  };

  // ✅ 상태 업데이트
  const updateSwiper = () => {
    const isPC = window.innerWidth >= 1024;
    if (isPC && !active) createSwiper(true);
    else if (!isPC && !active) createSwiper(false);
    else if ((isPC && swiper5?.params.spaceBetween === 16) || (!isPC && swiper5?.params.spaceBetween === 24)) {
      // ✅ 다른 모드에서 넘어왔으면 재생성
      destroySwiper();
      createSwiper(isPC);
    }
  };

  // ✅ 최초 실행 및 리사이즈 감시
  updateSwiper();
  window.addEventListener("resize", () => {
    clearTimeout(section._resizeTimer);
    section._resizeTimer = setTimeout(updateSwiper, 300);
  });

  // ✅ GSAP fade-up 애니메이션
  const topElements = section.querySelectorAll(".bx-tp .tx-btn, .bx-tp .main-careers-posting .swiper-slide");
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
        stagger: 0.15,
      });

      gsap.to(bottomItems, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.15,
        delay: 0.3,
      });
    },
  });

  console.log("[Company Section 05] fade-up ready");
}


// ---------------------------
// 실행
// ---------------------------
document.addEventListener("DOMContentLoaded", () => {
  initCompanyMain();
  initCompanyText();
  initCompanyListBoxes();
  initCompanySection03();
  initCompanySection04();
  initCompanySection05();
});