var uiCommon = (function() {
	const _ = {
		offsetPC: 120,
    	offsetMobile: 72,
		mobileMenuListener: null,
		onLoad: function() {
			_.popup.init();
			_.gnbMenu.init();
			// 초기 상태 한 번 세팅
			_.scrollHeader();

			_.accordion();
			_.defaultTab();
			_.emailForm();
			_.setViewportHeight();
			_.onInput();
			_.passwordVisible();
			_.scrollToTop();
			setTimeout(_.scrollToTop, 100);
			_.slider();
			_.scrollStart();
			// _.scrollHeader();
			_.toggleButtons();
			_.familySite();
			_.totalSearch();
			_.targetScroll(); // 251022 작업
			_.tooltip();
			_.dropdown(".dropdown-menu");
		},
		onResize: function() {
			_.gnbMenu.init(); 
			
			_.setViewportHeight();
			_.slider();
		},
		onScroll: function() {
			_.scrollToTop();
			_.scrollHeader();
		},
		// set vh
		setViewportHeight: function () {
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		},
		//scroll
		scrollStart: function () {
			// const scrollTop = window.scrollY || 0;
			// window.addEventListener('scroll', function(){
			// 	window.scrollY > 0 ? this.document.querySelector('html').classList.add('active-scroll-start') : this.document.querySelector('html').classList.remove('active-scroll-start');
			// 	window.scrollY > scrollTop ? window.document.querySelector('html').classList.add('active-scroll-down') : this.document.querySelector('html').classList.remove('active-scroll-down');
			// });

			let lastScrollTop = 0;
			const html = document.documentElement;

			window.addEventListener('scroll', function () {
				const scrollTop = window.scrollY || window.pageYOffset;
				const scrollHeight = document.documentElement.scrollHeight;
				const windowHeight = window.innerHeight;
				const scrollBottom = scrollHeight - windowHeight;

				// 스크롤 시작 (상단 벗어남)
				if (scrollTop > 0) html.classList.add('active-scroll-start');
				else html.classList.remove('active-scroll-start');

				// 스크롤 방향 감지
				if (scrollTop > lastScrollTop) {
					html.classList.add('active-scroll-down');
					html.classList.remove('active-scroll-up');
				} else if (scrollTop < lastScrollTop) {
					html.classList.add('active-scroll-up');
					html.classList.remove('active-scroll-down');
				}

				// 최상단 감지
				if (scrollTop <= 0) {
					html.classList.add('active-scroll-top');
				} else {
					html.classList.remove('active-scroll-top');
				}

				// 최하단 감지
				if (scrollTop >= scrollBottom - 2) {
					html.classList.add('active-scroll-bottom');
				} else {
					html.classList.remove('active-scroll-bottom');
				}

				lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 음수 방지
			});
		},
		// handleScroll: function () {
		// 	const header = document.querySelector(".main #header");
		// 	if (!header) return;

		// 	const scrollTop = window.scrollY || document.documentElement.scrollTop;

		// 	if (scrollTop <= 0) {
		// 		header.classList.add("top");
		// 	} else {
		// 		header.classList.remove("top");
		// 	}

		// 	// 마지막 스크롤 위치 저장
		// 	// lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
		// },
		scrollHeader: function () {
			const header = document.querySelector('body.corp header');
			if (!header) return;

			if (header.classList.contains('open')) {
				return;
			}
			
			let lastScrollTop = _.lastScrollTop || 0;
			const threshold = 0;
			const scrollTop = window.scrollY || window.pageYOffset;
			const scrollHeight = document.documentElement.scrollHeight;
			const windowHeight = window.innerHeight;
			const scrollBottom = scrollHeight - windowHeight;

			// 메인 페이지 판별
			const isMain = document.querySelector('body > #wrap.main') !== null;

			// 새로고침 직후 or 첫 실행 시 invert, up 기본 세팅
			if (!_.initialized) {
				header.classList.remove('down');

				if (isMain && scrollTop <= 0) {
					// 메인 최상단이면 invert 제거
					header.classList.add('up');
					header.classList.remove('invert');
				} else {
					// 그 외는 기본 invert up
					header.classList.add('invert', 'up');
				}

				_.initialized = true;
				_.lastScrollTop = scrollTop;
				return;
			}

			// 맨 위
			if (scrollTop <= 0) {
				header.classList.remove('down');
				header.classList.add('up');

				// 메인일 때만 invert 제거
				if (isMain) {
					header.classList.remove('invert');
				} else {
					header.classList.add('invert');
				}
			}

			// 맨 아래
			else if (scrollTop >= scrollBottom - 1) {
				header.classList.add('up', 'invert');
				header.classList.remove('down');
			}

			// 중간 구간
			else {
				header.classList.add('invert'); // 항상 invert 유지 (메인 포함)

				// 방향 감지
				if (Math.abs(scrollTop - lastScrollTop) > threshold) {
					if (scrollTop > lastScrollTop) {
						header.classList.add('down');
						header.classList.remove('up');
					} else {
						header.classList.add('up');
						header.classList.remove('down');
					}
				}
			}

			_.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
				const naviMenuCloseBtn = document.querySelector('.btn-navi-menu-close');

				if (naviMenuBtn && _.openMenuListener) {
					naviMenuBtn.removeEventListener('click', _.openMenuListener);
					_.openMenuListener = null;
				}
				if (naviMenuCloseBtn && _.closeMenuListener) {
					naviMenuCloseBtn.removeEventListener('click', _.closeMenuListener);
					_.closeMenuListener = null;
				}
			},
			/*
			pc: function() {
				const header = document.getElementById('header');
				const gnbMenus = document.querySelectorAll('.gnb-list');
				const gnbLinks = document.querySelectorAll('.gnb-list .gnb-item > .gnb-text');
				const gnbSubMenus = document.querySelectorAll('.gnb-list .gnb-item .lnb-list');

				// 변경된 부분: 이벤트 리스너를 header에 직접 추가
				if (header) {
					header.addEventListener('mouseenter', function() {
						header.classList.add('active');
					});

					header.addEventListener('mouseleave', function() {
						header.classList.remove('active');
						// 마우스가 떠날 때 모든 서브메뉴 비활성화
						gnbMenus.forEach(function(gnbMenu) {
							gnbMenu.classList.remove('active');
							const lnbList = gnbMenu.querySelector('.lnb-list');
							if (lnbList) {
								lnbList.classList.remove('active');
							}
						});
					});
				}

				// 기존의 forEach 루프는 주석 처리하거나 제거
				// gnbMenus.forEach(function(gnbMenu) {
				//     gnbMenu.addEventListener('mouseenter', function() {
				//         header.classList.add('active');
				//         gnbMenu.classList.add('active');
				//         const lnbList = gnbMenu.querySelector('.lnb-list');
				//         if (lnbList) {
				//             lnbList.classList.add('active');
				//         }
				//     });
				//
				//     gnbMenu.addEventListener('mouseleave', function() {
				//         header.classList.remove('active');
				//         gnbMenu.classList.remove('active');
				//         const lnbList = gnbMenu.querySelector('.lnb-list');
				//         if (lnbList) {
				//             lnbList.classList.remove('active');
				//         }
				//     });
				// });

				// 각 메뉴 항목에 마우스가 올라갈 때 해당 서브메뉴만 활성화
				gnbMenus.forEach(function(gnbMenu) {
					gnbMenu.addEventListener('mouseenter', function() {
						gnbMenus.forEach(function(menu) { // 모든 메뉴의 active 클래스 제거
							menu.classList.remove('active');
							const lnbList = menu.querySelector('.lnb-list');
							if (lnbList) {
								lnbList.classList.remove('active');
							}
						});
						gnbMenu.classList.add('active'); // 현재 메뉴만 활성화
						const lnbList = gnbMenu.querySelector('.lnb-list');
						if (lnbList) {
							lnbList.classList.add('active');
						}
					});
				});

				// 기존의 접근성 관련 코드는 그대로 유지
				gnbMenus.forEach(function(gnbMenu) {
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

				const dep3Links = document.querySelectorAll('.lnb-item-l.dep3 > .lnb-text-l');
				dep3Links.forEach(function(dep3Link) {
					dep3Link.addEventListener('click', function(event) {
						event.preventDefault();
						this.closest('.lnb-item-l.dep3').classList.toggle('on');
					});
				});
			},*/
			pc: function () {
				const header     = document.getElementById('header');
				const gnbArea    = document.querySelector('.gnb');
				const navLayer   = document.querySelector('.nav-inner-wrap');

				const gnbMenus   = document.querySelectorAll('.gnb-list'); // 1depth 컨테이너(사용하신 구조 유지)
				const gnbLinks   = document.querySelectorAll('.gnb-list .gnb-item > .gnb-text'); // 1depth 링크
				const gnbSubMenus= document.querySelectorAll('.gnb-list .gnb-item .lnb-list'); // 2depth 컨테이너

				// ---------- 유틸 ----------
				const isInGnbOrLayer = (node) => {
					if (!node) return false;
					return (gnbArea && gnbArea.contains(node)) || (navLayer && navLayer.contains(node));
				};

				const activateHeader = () => {
					header && header.classList.add('active');
				};

				const closeAllMenus = () => {
					gnbMenus.forEach(menu => menu.classList.remove('active', 'focused'));
					gnbSubMenus.forEach(sub => sub.classList.remove('active', 'focused'));
				};

				const deactivateHeaderIfOutside = (event) => {
					const related = event.relatedTarget;
					if (!isInGnbOrLayer(related)) {
					header && header.classList.remove('active');
					closeAllMenus();
					}
				};

				const openMenu = (menuEl) => {
					if (!menuEl) return;
					// 하나만 활성화
					gnbMenus.forEach(menu => {
					menu.classList.toggle('active', menu === menuEl);
					const lnb = menu.querySelector('.lnb-list');
					if (lnb) lnb.classList.toggle('active', menu === menuEl);
					});
				};

				// ---------- 마우스(PC) : .gnb / .nav-layer 진입/이탈 ----------
				if (gnbArea) {
					gnbArea.addEventListener('mouseenter', activateHeader);
					gnbArea.addEventListener('mouseleave', deactivateHeaderIfOutside);
				}
				if (navLayer) {
					navLayer.addEventListener('mouseenter', activateHeader);
					navLayer.addEventListener('mouseleave', deactivateHeaderIfOutside);
				}

				// ---------- 마우스(PC) : 개별 1depth 메뉴 hover 시 해당 서브메뉴만 열기 ----------
				gnbMenus.forEach((gnbMenu) => {
					gnbMenu.addEventListener('mouseenter', () => {
					activateHeader();
					openMenu(gnbMenu);
					});
				});

				// ---------- 키보드 접근성 ----------
				// nav 내부로 포커스가 들어오면 header 활성 + 해당 1depth 열기
				document.addEventListener('focusin', (e) => {
					const t = e.target;
					const inside = isInGnbOrLayer(t);
					if (inside) {
					activateHeader();

					const parentMenu = t.closest('.gnb-list');
					if (parentMenu) {
						openMenu(parentMenu);
						parentMenu.classList.add('focused');
						const lnb = parentMenu.querySelector('.lnb-list');
						lnb && lnb.classList.add('focused');
					}
					} else {
					// nav 바깥으로 포커스가 나가면 모두 닫기
					header && header.classList.remove('active');
					closeAllMenus();
					}
				});

				// 1depth 링크 개별 포커스 시 해당 메뉴에만 focused 표시(간소화)
				gnbLinks.forEach((gnbLink) => {
					gnbLink.addEventListener('focus', () => {
					const parentMenu = gnbLink.closest('.gnb-list');
					if (parentMenu) {
						activateHeader();
						openMenu(parentMenu);
						parentMenu.classList.add('focused');
					}
					});
				});

				// ---------- 3depth 토글(.lnb-item-l.dep3 > .lnb-text-l) ----------
				const dep3Links = document.querySelectorAll('.lnb-item-l.dep3 > .lnb-text-l');
				dep3Links.forEach((dep3Link) => {
					dep3Link.addEventListener('click', function (e) {
					e.preventDefault();
					// 클릭한 해당 dep3 아이템만 펼침/닫힘
					const item = this.closest('.lnb-item-l.dep3');
					item && item.classList.toggle('on');
					});
				});

				// ---------- 안전장치: 창 밖으로 마우스가 빠질 때 닫기 ----------
				// (옵션) 필요 없으면 제거해도 됨
				document.addEventListener('mouseleave', () => {
					header && header.classList.remove('active');
					closeAllMenus();
				});
			},
			mo: function() {
				const naviMenuBtn = document.querySelector('.btn-navi-menu');
				const naviMenuCloseBtn = document.querySelector('.btn-navi-menu-close');
				const navilMenu = document.querySelector('#header .gnb-list');
				const header = document.querySelector('#header');

				// 1. 모바일 메뉴 열기/닫기 기능
				if (naviMenuBtn && navilMenu && naviMenuCloseBtn) {
					_.openMenuListener = function() {
						naviMenuBtn.classList.add('active');
						navilMenu.classList.add('active');
						header.classList.add('open');
						document.body.classList.add('hidden');
					};

					_.closeMenuListener = function() {
						naviMenuBtn.classList.remove('active');
						navilMenu.classList.remove('active');
						header.classList.remove('open');
						document.body.classList.remove('hidden');
						resetMenuState();
					};

					naviMenuBtn.addEventListener('click', _.openMenuListener);
					naviMenuCloseBtn.addEventListener('click', _.closeMenuListener);
				}
				
				if (!_.gnbInited) {
					_.gnbInited = true;
					// 2. 1차 메뉴 클릭 시 2차 메뉴 토글 기능
					const gnbLinks = document.querySelectorAll('.gnb-item-l > a.gnb-text-l');

					gnbLinks.forEach(function(gnbLink) {
						gnbLink.addEventListener('click', function(e) {
							e.preventDefault();
							const parentItem = this.closest('.gnb-item-l');
							const hasLnbList = parentItem.querySelector('.lnb-list-l');

							if (hasLnbList) {
								const siblings = parentItem.parentElement.querySelectorAll('.gnb-item-l.on');
								siblings.forEach((sib) => {
									if (sib !== parentItem) sib.classList.remove('on');
								});
								parentItem.classList.toggle('on');
							}
						});
					});
				

					// 3. 3차 메뉴 클릭 시 하위 메뉴 토글 기능
					const dep3Links = document.querySelectorAll('.lnb-item-l.dep3 > .lnb-text-l');
						dep3Links.forEach((dep3Link) => {
							dep3Link.addEventListener('click', function (e) {
							e.preventDefault();
							// 클릭한 해당 dep3 아이템만 펼침/닫힘
							const item = this.closest('.lnb-item-l.dep3');
							if (!item) return;
							const siblings = item.parentElement.querySelectorAll('.lnb-item-l.dep3.on');
								siblings.forEach((sib) => {
								if (sib !== item) sib.classList.remove('on');
							});
							item.classList.toggle('on');
							// item && item.classList.toggle('on');
						});
					});
				}

				// 4. 스크롤 위치에 따른 상단 메뉴 동기화 기능 및 자동 스크롤
				const inNavItems = document.querySelectorAll('.in-nav .gnb-item');
				const inNavLinks = document.querySelectorAll('.in-nav .gnb-text');
				const innerBxL = document.querySelector('.inner-bx-l');
				const navLayerItems = document.querySelectorAll('.inner-bx-l > .gnb-list-l > .gnb-item-l');
				const inNav = document.querySelector('.in-nav');

				if (innerBxL && navLayerItems.length > 0) {
					// const observerOptions = {
					// 	root: innerBxL,
					// 	rootMargin: '0px 0px -98% 0px',
					// 	threshold: 0
					// };

					const observerOptions = {
						root: null, // innerBxL 대신 viewport 기준
						rootMargin: '0px 0px -70% 0px',
						threshold: 0
					};

					const observer = new IntersectionObserver((entries) => {
						entries.forEach(entry => {
							// console.log('[DEBUG] isIntersecting:', entry.isIntersecting, 'target:', entry.target.id, 'ratio:', entry.intersectionRatio);
							if (entry.isIntersecting) {
								const targetId = entry.target.id;
								const correspondingNavId = targetId.replace('_l', '');
								
								inNavLinks.forEach(link => link.classList.remove('on'));
								
								const targetNavLink = document.querySelector(`.in-nav .gnb-item#${correspondingNavId} .gnb-text`);
								const targetNavItem = document.querySelector(`.in-nav .gnb-item#${correspondingNavId}`);
								
								if (targetNavLink) {
									targetNavLink.classList.add('on');
								}
								
								// on 클래스가 적용된 메뉴를 왼쪽에서 16px 떨어진 위치로 스크롤
								if (targetNavItem && inNav) {
									inNav.scrollTo({
										left: targetNavItem.offsetLeft - 16,
										behavior: 'smooth'
									});
								}
							}
						});
					}, observerOptions);
					
					navLayerItems.forEach(item => {
						observer.observe(item);
					});
				}

				function resetMenuState() {
					document.querySelectorAll('.gnb-item-l.on, .lnb-item-l.on').forEach(item => {
						item.classList.remove('on');
					});
				}
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
			const toggleAllBtn = document.querySelector('.btn-toggle-all');
			let isAllOpen = false;

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

			 // 전체열기/닫기 버튼 이벤트 (버튼이 있을 경우에만)
			if (toggleAllBtn) {
				toggleAllBtn.addEventListener('click', function(event) {
					isAllOpen = !isAllOpen;
					
					accordionItems.forEach(_item => {
						const accordionContent = _item.closest('.accordion-item');
						if (isAllOpen) {
							accordionContent.classList.add('active');
						} else {
							accordionContent.classList.remove('active');
						}
					});
					
					updateButtonText();
					event.preventDefault();
				});
			}

			// 전체 열림 상태 확인 및 업데이트
			function updateToggleAllState() {
				if (!toggleAllBtn) return;
				
				const activeCount = document.querySelectorAll('.accordion-item.active').length;
				isAllOpen = activeCount === accordionItems.length;
				
				updateButtonText();
			}

			// 버튼 텍스트 업데이트
			function updateButtonText() {
				if (!toggleAllBtn) return;
				const btnText = toggleAllBtn.querySelector('.btn-text');
				if (btnText) {
					btnText.textContent = isAllOpen ? '전체닫기' : '전체펼치기';
				}
			}
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
			// 251022 작업
			const quickMenu = document.querySelector('.quick-menu');
			const btnTop = document.querySelector('.quick-menu .btn-to-top');

			if (quickMenu) {
				if (window.scrollY > 100) {
						quickMenu.classList.add('show');
					} else {
						quickMenu.classList.remove('show');
					}
			}

			if (btnTop) {
				btnTop.addEventListener('click', function() {
					window.scrollTo({ top: 0, behavior:'smooth' });
				});
			}

			// 토글 버튼
			if (quickMenu) {
				const toggleBtn = quickMenu.querySelector('.quick-toggle');
				if (toggleBtn) {
					toggleBtn.addEventListener('click', () => {
						quickMenu.classList.toggle('active');
					});
				}
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
		// toggle buttons
		familySite: function() {
			// bx-family 클래스를 가진 요소를 찾습니다.
			const familyButton = document.querySelector('.bx-family');
			// family-layer 클래스를 가진 요소를 찾습니다.
			const familyLayer = document.querySelector('.family-layer');

			// 요소를 찾았는지 먼저 확인합니다.
			if (familyButton && familyLayer) {
				// 버튼에 클릭 이벤트 리스너를 추가합니다.
				familyButton.addEventListener('click', () => {
					// family-layer의 현재 display 스타일을 확인합니다.
					const currentDisplay = window.getComputedStyle(familyLayer).display;

					// display 속성을 토글합니다.
					if (currentDisplay === 'none') {
						familyButton.classList.add('f-open');
						familyLayer.style.display = 'block';
					} else {
						familyButton.classList.remove('f-open');
						familyLayer.style.display = 'none';
					}
				});
			} else {
				// 요소를 찾지 못했을 경우 콘솔에 에러 메시지를 출력합니다.
				console.error('`bx-family` 또는 `family-layer` 요소를 찾을 수 없습니다.');
			}
		},
		// toggle buttons
		totalSearch: function() {
			const familyButton = document.querySelector('.navi-item.search'); 
			const familyLayer = document.querySelector('.search-layer');
			const closeButton = document.querySelector('.search-layer .btn_search_close');
			const body = document.body;
			
			if (familyButton && familyLayer) {
				// 열기 버튼 클릭 → 열기
				familyButton.addEventListener('click', () => {
					familyLayer.classList.add('search-open');
            		body.classList.add('fixed');
				});
			}

			if (closeButton && familyLayer) {
				// 닫기 버튼 클릭 → 닫기
				closeButton.addEventListener('click', () => {
					familyLayer.classList.remove('search-open');
					body.classList.remove('fixed');
				});
			}
		}, 
		targetScroll: function() {
			// 251022 작업
			document.querySelectorAll('.btn-target-scroll').forEach(link => {
				link.addEventListener('click', e => {
					e.preventDefault();

					const parent = link.parentElement;
					if (!link.dataset.noCurrent) {
						const siblings = parent.parentElement.children;
						Array.from(siblings).forEach(sib => {
							sib.classList.remove('current');
						});
						parent.classList.add('current');
					}

					const selector = link.dataset.target;
					const section = document.querySelector(selector);
					if (!section) return;

					const y = section.getBoundingClientRect().top + window.scrollY;
					const isMobile = window.innerWidth <= 1023; 
					const _this = this;
					let offset = isMobile ? _this.offsetMobile : _this.offsetPC;
					// if (link.closest('.tab-fixed')) {
					// 	offset = isMobile ? _this.offsetMobile + 0 : _this.offsetPC + 60;
					// }
					if (!isMobile && link.closest('.tab-fixed')) {
						offset = _this.offsetPC + 180;
					}
					console.log('offset:', offset);

					window.scrollTo({
						top: y - offset,
						behavior: 'smooth'
					});
				});
			});
		},
		tooltip: function() {
			//개인정보처리방침
			const tipOpenBtns = document.querySelectorAll('.btn-tip-open');
			const tipCloseBtns = document.querySelectorAll('.btn-tip-close');

			tipOpenBtns.forEach(btn => {
				btn.addEventListener('click', function(event) {
					const listItem = this.closest('.list-item');
					const tooltip = listItem.querySelector('.tooltip');
					const closeBtn = tooltip.querySelector('.btn-tip-close');
					
					// 다른 열린 툴팁 모두 닫기
					document.querySelectorAll('.list-item').forEach(item => {
						if (item !== listItem) {
							item.classList.remove('active');
						}
					});
					
					// 현재 툴팁 토글
					const isOpening = !listItem.classList.contains('active');
					listItem.classList.toggle('active');
					
					// 툴팁이 열릴 때 포커스 이동
					if (isOpening && closeBtn) {
						setTimeout(() => {
							closeBtn.focus();
						}, 100);
					}
					
					event.preventDefault();
					event.stopPropagation();
				});
			});

			// 툴팁 닫기
			tipCloseBtns.forEach(btn => {
				btn.addEventListener('click', function(event) {
					const listItem = this.closest('.list-item');
					const openBtn = listItem.querySelector('.btn-tip-open');
					
					listItem.classList.remove('active');
					
					// 툴팁 닫을 때 열기 버튼으로 포커스 복귀
					if (openBtn) {
						setTimeout(() => {
							openBtn.focus();
						}, 100);
					}
					
					event.preventDefault();
					event.stopPropagation();
				});
			});

			document.querySelectorAll('.tooltip').forEach(tooltip => {
				tooltip.addEventListener('click', function(event) {
					event.stopPropagation();
				});
			});

			// 툴팁 외부 클릭 시 닫기
			document.addEventListener('click', function(event) {
				if (!event.target.closest('.list-item') && !event.target.closest('.tooltip')) {
					document.querySelectorAll('.list-item.active').forEach(item => {
						item.classList.remove('active');
					});
				}
			});

			// 목차 이동 버튼
			const targetScrollBtns = document.querySelectorAll('.btn-tooltip-scroll');
			targetScrollBtns.forEach(btn => {
				btn.addEventListener('click', function(event) {
					const targetId = this.dataset.target;
					const targetElement = document.querySelector(targetId);
					
					if (targetElement) {
						const headerHeight = 110; // 헤더 높이 100px
						const y = targetElement.getBoundingClientRect().top + window.scrollY;

						window.scrollTo({
							top: y - headerHeight,
							behavior: 'smooth'
						});
						
						// 툴팁 닫기
						const listItem = this.closest('.list-item');
						listItem.classList.remove('active');
					}
					
					event.preventDefault();
				});
			});
		},
		dropdown: function(selector) {
			const elems = document.querySelectorAll(selector);
			if (!elems || elems.length === 0) return;

			elems.forEach((elem) => {
				const selectBtn = elem.querySelector(".btn-select");
				const selectedValue = elem.querySelector(".btn-text");
				const optionsList = elem.querySelectorAll(".dropdown-list li .form-txt");

				const checkedOption = elem.querySelector(".dropdown-list li input:checked");
				if (checkedOption) {
					selectedValue.textContent = checkedOption.closest("label").querySelector(".form-txt").textContent;
				}

				const toggleDropdown = () => {
					elem.classList.toggle("active");
					selectBtn.setAttribute(
						"aria-expanded",
						selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
					);
				};

				const closeDropdown = (event) => {
					if (elem.classList.contains("active") && !elem.contains(event.target)) {
						elem.classList.remove("active");
					}
				};

				const handleOptionClick = function(event) {
					if (event.type === "click" && event.clientX !== 0 && event.clientY !== 0) {
						selectedValue.textContent = this.textContent;
						elem.classList.remove("active");
					}
				};

				selectBtn.addEventListener("click", toggleDropdown);
				document.addEventListener("mouseup", closeDropdown);
				optionsList.forEach((option) => {
					option.addEventListener("click", handleOptionClick);
				});
			});
		}
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

