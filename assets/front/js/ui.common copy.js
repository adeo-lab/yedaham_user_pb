var uiCommon = (function() {
	const _ = {
		mobileMenuListener: null,
		onLoad: function() {
			_.popup.init();
			_.gnbMenu.init();

			_.accordion();
			_.defaultTab();
			_.emailForm();
			_.setViewportHeight();
			_.onInput();
			_.passwordVisible();
			_.scrollToTop();
			_.slider();
			_.scrollStart();
			_.toggleButtons();
		},
		onResize: function() {
			_.gnbMenu.init(); 
			
			_.setViewportHeight();
			_.slider();
		},
		onScroll: function() {
			_.scrollToTop();
		},
		// set vh
		setViewportHeight: function () {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		},
		//scroll
		scrollStart: function () {
			const scrollTop = window.scrollY || 0;
			window.addEventListener('scroll', function(){
				window.scrollY > 0 ? this.document.querySelector('html').classList.add('active-scroll-start') : this.document.querySelector('html').classList.remove('active-scroll-start');
				window.scrollY > scrollTop ? window.document.querySelector('html').classList.add('active-scroll-down') : this.document.querySelector('html').classList.remove('active-scroll-down');
			});
		},
		// gnb 
		gnbMenu: {
			init: function() {
				_.gnbMenu.cleanup();

				if (window.innerWidth > 1023) {
					_.gnbMenu.pc();
				} else {
					_.gnbMenu.mo();
				}
			},
			cleanup: function() {
                const naviMenuBtn = document.querySelector('.btn-navi-menu');
                if (naviMenuBtn && _.mobileMenuListener) {
                    naviMenuBtn.removeEventListener('click', _.mobileMenuListener);
                    _.mobileMenuListener = null;
                }
            },
			pc: function() {
				const header = document.getElementById('header');
				const gnbMenus = document.querySelectorAll('.gnb-list');
				const gnbLinks = document.querySelectorAll('.gnb-list .gnb-item > .gnb-text');
				const gnbSubMenus = document.querySelectorAll('.gnb-list .gnb-item .lnb-list');
				
				gnbMenus.forEach(function(gnbMenu) {
					gnbMenu.addEventListener('mouseenter', function() {
						header.classList.add('active');
						gnbMenu.classList.add('active');
						gnbMenu.querySelector('.lnb-list').classList.add('active');
					});

					gnbMenu.addEventListener('mouseleave', function() {
						header.classList.remove('active');
                        gnbMenu.classList.remove('active');
                        gnbMenu.querySelector('.lnb-list').classList.remove('active');
					});

					const lastGnbItem = gnbMenu.querySelector('.gnb-item:last-child');
					if (lastGnbItem) {
						const lastLnbText = lastGnbItem.querySelector('.lnb-list > .lnb-item > .lnb-text:last-child');
						if (lastLnbText) {
							lastLnbText.addEventListener('focusout', function() {
								header.classList.remove('focused');
								gnbMenu.classList.remove('focused');
								gnbSubMenus.forEach(function(gnbSubMenu) {
									gnbSubMenu.classList.remove('focused');
								});
							});
						}
					}
				});
				
				gnbLinks.forEach(function(gnbLink) {
					gnbLink.addEventListener('focus', function() {
						gnbSubMenus.forEach(function(gnbSubMenu) {
							gnbSubMenu.closest('.gnb-list').classList.add('focused');
						});
					});	

					gnbLink.addEventListener('blur', function() {
						gnbSubMenus.forEach(function(gnbSubMenu) {
							gnbSubMenu.closest('.gnb-list').classList.remove('focused');
						});
					});	
				});
			},
			mo: function() {
				const naviMenuBtn = document.querySelector('.btn-navi-menu');
				const navilMenu = document.querySelector('#header .gnb-list');
				const header = document.querySelector('#header');

				if (!(naviMenuBtn && navilMenu)) return;
				
				_.mobileMenuListener = function() {
					if (!this.classList.contains('active')) {
						this.classList.add('active');
						navilMenu.classList.add('active');
						header.classList.add('open');
						document.body.classList.add('hidden');
					} else { 
						this.classList.remove('active');
						navilMenu.classList.remove('active');
						header.classList.remove('open');
						document.body.classList.remove('hidden');
					}
				};
				
				naviMenuBtn.addEventListener('click', _.mobileMenuListener);
			}
		},
		// popup
		popup: {
			init: function() {
				_.popup.open();
				_.popup.close();
				_.popup.key();
			},
			open: function() {
				const popupOpenBtns = document.querySelectorAll('.btn-popup-open');
				popupOpenBtns.forEach(function(_a) {
					_a.addEventListener('click', function(e) {
						const target = this.getAttribute('data-popup-target');
						_a.setAttribute('tabindex', '-1');
						_.popup.popupOpen(target);
						
						e.preventDefault();
					});
                });

				_.popup.toast();
			},
			popupOpen: function(dataName) {
				const dataTarget = document.querySelector(`[data-popup="${dataName}"]`);
				// const target = document.querySelector('[data-popup]');
				const popupContent = document.querySelector('.popup-wrap');
				if (!dataTarget) return;
				
				document.querySelector('body').classList.add('hidden');
				dataTarget.setAttribute('aria-hidden', 'false');
				dataTarget.classList.add('active');
				setTimeout(() => {
					dataTarget.classList.add('active');
				},150);

				_.popup.toast();
			},
			close: function() {
				const popupCloseBtns = document.querySelectorAll('.btn-popup-close');
				popupCloseBtns.forEach(function(_b) {
					_b.addEventListener('click', function(e) {
						const dataTarget = _b.closest('[data-popup]');

						_.popup.popupClose(dataTarget);

						if (dataTarget) {
                            dataTarget.classList.remove('active');
							dataTarget.setAttribute('aria-hidden', 'true');
                        }

						const popupOpenBtn = document.querySelector(`[data-popup-target="${dataTarget.getAttribute('data-popup')}"]`);
						if (popupOpenBtn) popupOpenBtn.focus();

						e.preventDefault();
                    });
				});
			},	
			popupClose: function(target) {
				if (!target) return;
				const targets = document.querySelectorAll('[data-popup]');
				const popupOpened = [...targets].filter(target => target.classList.contains('active'));
				const popupOpenLength = popupOpened.length;

				if (popupOpenLength === 1) {
					document.querySelector('body').classList.remove('hidden');
                }

				target.setAttribute('aria-hidden', 'true');
				target.classList.remove('active');

				setTimeout(() => {
					target.classList.remove('active');
				},150);
			},
			toast: () => {
				const toastTargets = document.querySelectorAll('[data-popup="toastPopup"]');
				toastTargets.forEach(function(toast) {
					if (toast.classList.contains('active')) {
						setTimeout(function () {
							_.popup.popupClose(toast);
						}, 2000);
					}
				});
			},
			key: function() {
				document.addEventListener('keydown', function(e) {
					if (e.key === 'Escape') {
						const activePopups = document.querySelectorAll('[data-popup].active');
						activePopups.forEach(function(activePopup) {
							_.popup.popupClose(activePopup);

							const popupOpenBtn = document.querySelector(`[data-popup-target="${activePopup.getAttribute('data-popup')}"]`);
							if (popupOpenBtn) popupOpenBtn.focus();
						});
					}
				});
			},
		},
		accordion: function() {
			const accordionItems = document.querySelectorAll('.accordion-list .btn-accordion');
			accordionItems.forEach(_item => {
				_item.addEventListener('click', function(event) {
                    const accordionContent = this.closest('.accordion-item');
                    accordionItems.forEach(_siblings => {
                        if (_siblings!== this) {
                            _siblings.closest('.accordion-item').classList.remove('active');
                        }
                    });
					accordionContent.classList.toggle('active');

					event.preventDefault();
					event.stopPropagation();
					return false;
				});
			});	
		},
		// tab
		defaultTab: function() {
			const tabs = document.querySelectorAll('.tab-display[data-tab="defaultTab"] .tab-text');
			const tabContents = document.querySelectorAll('.tab-content');

			tabs.forEach(tab => {
                tab.addEventListener('click', function(e) {
                    tabs.forEach(t => t.parentElement.classList.remove('current'));
                    this.parentElement.classList.add('current');

					tabContents.forEach(tc => tc.classList.remove('on'));
                    const targetTab = this.getAttribute('data-type');
                    document.getElementById(targetTab).classList.add('on');
					e.preventDefault();
                });
            });
		},
		emailForm: function () {
			const emailInputs = document.querySelectorAll('input[type="email"]');
			emailInputs.forEach(function(mail) {
				new Awesomplete('input[type="email"]', {
					list: ["naver.com", "gmail.com", "daum.net", "kakao.kr"],
					data: function (text, input) {
						return input.slice(0, input.indexOf("@")) + "@" + text;
					},
					filter: Awesomplete.FILTER_STARTSWITH
				});
			});
		},
		onInput: function () {
			const handleInput = (e) => {
				const form = e.target.closest('.form');
                if (!form) return;
				const input = e.target;
				const hasValue = input.value.trim().length > 0;
				form.classList.toggle('typed', hasValue);
			};

			const textInputs = document.querySelectorAll('input[type="text"]');
			textInputs.forEach(function(input) {
				const form = input.closest('.form');
				if (!form) return;
				const hasValue = input.value.trim().length > 0;
				form.classList.toggle('typed', hasValue);
				input.addEventListener('input', handleInput);
			});
		},
		// password
		passwordVisible: function() {
			const passwordToggles = document.querySelectorAll('.btn-password');
			
			passwordToggles.forEach(elem => {	
				elem.addEventListener('click', function() {
					const passwordInput = elem.closest('.password').querySelector('.form-elem');
					passwordInput.type = passwordInput.type === 'password'? 'text' : 'password';
					elem.classList.toggle('shown');
				});
			});
		},
		scrollToTop: function () {
			let quickMenu = document.querySelector('.quick-menu'),
				btnTop = document.querySelector('.quick-menu .btn-to-top');
				// footer = document.querySelector('#footer');

			if (btnTop) {
				btnTop.addEventListener('click', function() {
					window.scrollTo({ top: 0, behavior:'smooth' });
				});

				window.addEventListener('scroll', function() {
					if (window.scrollY > 100) {
						btnTop.classList.add('show');
					} else {
						btnTop.classList.remove('show');
					}
	
					// if (window.innerWidth < 1024) {
					//     btnTop.style.display = 'none';
					// } else {
					//     btnTop.style.display = 'block';
					// }
					// if (window.innerWidth < 768) {
					//     quickMenu.classList.remove('show');
					// }
				});
			}
		},
		slider : function () {
			const initSwiper = function(selector, option) {
				const elem = document.querySelector(selector);
				if (elem) { 
					return new Swiper(elem, option);
				}
				return null;
			}

			// 갤러리 상세
			var galleryBoardView = initSwiper('.board-view-slides', {
				watchOverflow: true,
				slidesPerView: 'auto',
				spaceBetween: 12,
				navigation: false,
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				breakpoints: {
					1024: {
						spaceBetween: 30,
					}
				}
			});

			// 갤러리 상세 팝업
			var galleryModalView = initSwiper('.history-view-slides', {
				watchOverflow: true,
				slidesPerView: 1,
				// autoHeight: true,
				// spaceBetween: 12,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				pagination: {
					el: ".swiper-pagination",
					type: "fraction",
				}
			});
		},
		// toggle buttons
		toggleButtons: function() {
			const toggleButtons = document.querySelectorAll('[data-toggle]');
			const toggleTargets = document.querySelectorAll('[data-toggle-target]');

            toggleButtons.forEach(btn => {
                btn.addEventListener('click', function(event) {
					const btnValue = this.getAttribute('data-toggle');
					this.classList.add('active');

					toggleTargets.forEach(target => {
                        if (target.getAttribute('data-toggle-target') === btnValue) {
                            target.classList.add('active');
                        } else {
                            target.classList.remove('active');
                        }
                    });

					event.stopPropagation();
                });

				btn.addEventListener('focus', function() {
					const btnValue = this.getAttribute('data-toggle');
					toggleTargets.forEach(target => {
						if (target.getAttribute('data-toggle-target') === btnValue) {
							target.classList.add('active'); 
						}
					});
				});

				toggleTargets.forEach(target => {
					const lastChild = target.lastElementChild;

					if (lastChild && lastChild.tagName === 'A') {
						lastChild.addEventListener('focusout', function(event) {
							// target.classList.remove('active');
							if (!event.relatedTarget || !target.contains(event.relatedTarget)) {
								target.classList.remove('active');
							}
						});
					}
				});
            });

			toggleTargets.forEach(target => {
				target.addEventListener('click', function(event) {
					event.stopPropagation();
				});
			});

			document.addEventListener('click', function(event) {
				toggleButtons.forEach(btn => btn.classList.remove('active'));
				toggleTargets.forEach(target => target.classList.remove('active'));
			});
		},
	};

	return _;
})();

window.addEventListener('load', function() {
	uiCommon.onLoad();
});

window.addEventListener('resize', function() {
	uiCommon.onResize();
});

window.addEventListener('scroll', function() {
	uiCommon.onScroll();
});

function uiToggleClass(selector, className, callBack) {
	!selector.classList.contains(className) ? selector.classList.add(className) : selector.classList.remove(className);
	if (callBack != undefined && typeof callBack == 'function') callBack();
}
// window.uiToggleClass = uiToggleClass;
