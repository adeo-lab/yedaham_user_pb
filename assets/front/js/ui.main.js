const mainVisualSwiper = new Swiper('.main-visual-slides', {
	watchOverflow: true,
	// autoplay: {
	// 	delay: 3000,
	// 	disableOnInteraction: false,
	// },
	loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

window.mainVisualSwiper = mainVisualSwiper;

const mainNoticeSwiper = new Swiper('.main-notice-slides', {
	watchOverflow: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	// loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

window.mainNoticeSwiper = mainNoticeSwiper;















/* main corp */
window.addEventListener('load', function() {
    // 스와이퍼
    var swiper99 = new Swiper(".main-inner-wrap", {
        direction: "vertical",
        slidesPerView: "auto",
        mousewheel: {
            enabled: true,
            sensitivity: 1,
            forceToAxis: true,
            releaseOnEdges: true,
        },
        pagination: {
            el: ".qqqq .swiper-pagination",
            clickable: true,
        },
    });

    // swiper99.on("slideChange", () => {
    // 	console.log("index:", swiper99.activeIndex);
    // });

    // 버튼 클릭 이벤트
    const btnScroll = document.querySelector(".btn-scroll");
    const btnTop = document.querySelector(".btn-to-top");

    if (btnScroll) {
        btnScroll.addEventListener("click", () => {
            swiper99.slideTo(1);
        });
    }

    if (btnTop) {
        btnTop.addEventListener("click", () => {
            swiper99.slideTo(0); 
        });
    }

    // 화면 토글
    const quickMenu = document.querySelector('.quick-menu');
    const section1 = document.querySelector('.main-cont01-wrap');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                quickMenu.classList.remove('show');
            } else {
                quickMenu.classList.add('show');
            }
        });
    }, { threshold: 0.01 });
    observer.observe(section1);
});















