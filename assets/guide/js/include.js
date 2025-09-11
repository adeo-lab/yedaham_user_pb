const headerTemplate = function () {
	let headerContent =
		`<div class="g-navi-logo">
			<h1 class="navi-logo">
				<a href="./../intro/index.html" class="logo">
					<img src="../../../assets/guide/images/app/favicon.ico" alt=""예다함 style="width: 20px;" />
					<span class="logo-text">Guide</span>
				</a>
			</h1>
		</div>
		<div class="g-navi-func">
			<button class="btn btn-menu" type="button" onclick="checkedWithin(this, '.g-navi-func')">메뉴</button>
		</div>
		<div class="g-navi-list">
			<div class="g-navi-item guide" data-navi="g-guide">
				<button type="button" class="g-navi-subject">Guide</button>
				<ul class="g-sub-list">
					<li class="g-sub-item modules">
						<dl class="g-sub-wrap">
							<dt class="g-sub-title">Style</dt>
							<dd class="g-sub-name"><a href="../snippet/style.html#gContainer" class="g-sub-link">Layout</a></dd>
							<dd class="g-sub-name"><a href="../snippet/style.html#typography" class="g-sub-link">Typography</a></dd>
							<dd class="g-sub-name"><a href="../snippet/style.html#color" class="g-sub-link">Color</a></dd>
							<dd class="g-sub-name"><a href="../snippet/style.html#icon" class="g-sub-link">Icon</a></dd>
						</dl>
						<dl class="g-sub-wrap">
							<dt class="g-sub-title">Component</dt>
							<dd class="g-sub-name"><a href="../snippet/structure.html" class="g-sub-link">Structure</a></dd>
							<dd class="g-sub-name"><a href="../snippet/button.html" class="g-sub-link">Button</a></dd>
							<dd class="g-sub-name"><a href="../snippet/form.html" class="g-sub-link">Form</a></dd>
							<dd class="g-sub-name"><a href="../snippet/tab.html" class="g-sub-link">Tab</a></dd>
							<dd class="g-sub-name"><a href="../snippet/table.html" class="g-sub-link">Table</a></dd>
							<dd class="g-sub-name"><a href="../snippet/popup.html" class="g-sub-link">Popup</a></dd>
							<dd class="g-sub-name"><a href="../snippet/etc.html" class="g-sub-link">Etc</a></dd>
						</dl>
					</li>
				</ul>
			</div>
			<div class="g-navi-item page" data-navi="g-pages">
				<button type="button" class="g-navi-subject">Pages</button>
				<a href="../pages/front.html" class="g-sub-full">전체 메뉴보기</a>
				${headerNavigation(true)}
			</div>
		</div>`;

	return `
        <div class="g-navi-wrap">${headerContent}</div>
    `;
}

const headerNavigation = function (useFullLink) {
	return  `
		<ul class="g-sub-list">
			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">공통</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<!-- 
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">시스템 점검​</span></p>
							${createMenuLink("common/FO_Y_ZA_001.html", useFullLink)}
						</div>
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">ERROR 404 (페이지 없음​)</span></p>
							${createMenuLink("common/FO_Y_ZA_002.html", useFullLink)}
						</div>
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">ERROR 500 (통합오류 에러)</span></p>
							${createMenuLink("common/FO_Y_ZA_002.html", useFullLink)}
						</div>
						<div class="g-sub-wrap" data-status="">
								<p class="g-sub-title"><span class="em">홈페이지 이용약관</span></p>
								${createMenuLink("common/FO_Y_ZB_001.html", useFullLink)}
						</div>
					-->
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">가입상담 신청 (레이어 팝업)</span></p>
						${createMenuLink("common/FO_Y_ZC_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">개인정보 처리 동의 및 안내 (레이어 팝업)</span></p>
						${createMenuLink("common/FO_Y_ZO_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">통합 검색 (레이어)</span></p>
						<p class="g-sub-text"><span class="em">버튼에 적용</span></p>
						${createMenuLink("common/FO_Y_ZD_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">검색 결과</span></p>
						${createMenuLink("common/FO_Y_ZE_001.html", useFullLink)}
					</div>
					<!--
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">검색 결과 (검색 결과 존재 안함)</span></p>
							${createMenuLink("common/FO_Y_ZE_001.html", useFullLink)}
						</div>
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">전체메뉴 (레이어 팝업)</span></p>
							${createMenuLink("common/BO_ZC_001_L.html", useFullLink)}
						</div>
					-->
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">자주 하는 질문 상세 (레이어 팝업)</span></p>
						${createMenuLink("common/FO_Y_ZL_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">고객 칭찬 후기 등록 (레이어 팝업)</span></p>
						${createMenuLink("common/FO_Y_ZM_001_L.html", useFullLink)}
					</div>
					<!--
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">개인정보 처리 동의 및 안내</span></p>
							${createMenuLink("common/FO_Y_ZO_001_L.html", useFullLink)}
						</div>
					-->
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">고객 칭찬 후기 상세 (레이어 팝업)</span></p>
						${createMenuLink("common/FO_Y_ZM_002_L.html", useFullLink)}
					</div>
					<!--
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">1:1문의 등록</span></p>
							${createMenuLink("common/FO_Y_ZN_001_L.html", useFullLink)}
						</div>
					-->
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">로그인 연장 (레이어 팝업)</span></p>
						${createMenuLink("common/FO_Y_ZN_001_L.html", useFullLink)}
					</div>
					<!--
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">로그인 연장 (레이어 팝업)</span></p>
							${createMenuLink("common/FO_Y_ZM_001_L.html", useFullLink)}
						</div>
					-->
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">개인정보 마케팅 활용 동의 (레이어 팝업)</span></p>
						${createMenuLink("common/FO_Y_ZP_001_L.html", useFullLink)}
					</div>
					<!--
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">마케팅 수신 동의 (레이어 팝업)</span></p>
							${createMenuLink("common/FO_Y_ZQ_001_L.html", useFullLink)}
						</div>
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">이미지 미리보기 (레이어 팝업)</span></p>
							${createMenuLink("common/FO_Y_ZR_001_L.html", useFullLink)}
						</div>
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">동영상 미리보기 (레이어 팝업)</span></p>
							${createMenuLink("common/FO_Y_ZS_001_L.html", useFullLink)}
						</div>
						<div class="g-sub-wrap" data-status="">
							<p class="g-sub-title"><span class="em">1:1문의 답변 메일</span></p>
							${createMenuLink("common/PC_ZN_002.html", useFullLink)}
						</div>
					-->
					<div class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">SNS 공유하기</span></p>
						${createMenuLink("common/FO_Y_ZK_002_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">SNS 공유하기</span></p>
						<p class="g-sub-text"><span class="em">레이어 팝업에서 열린 경우</span></p>
						${createMenuLink("common/.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">메인</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">메인</span></p>
						${createMenuLink("main/FO_Y_MA_001.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">고객지원</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">공지사항</span><span class="em">목록</span></p>
						${createMenuLink("customer/FO_Y_CE_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">공지사항</span><span class="em">상세</span></p>
						${createMenuLink("customer/FO_Y_CE_002.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">자주하는 질문​</span></p>
						${createMenuLink("customer/FO_Y_CB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">고객 칭찬 후기​​</span></p>
						${createMenuLink("customer/FO_Y_CC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">1:1문의</span><span class="em">목록</span></p>
						${createMenuLink("customer/FO_Y_CD_001.html", useFullLink)}
					</dl>
					<!-- <dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">1:1문의</span><span class="em">안내</span></p>
						${createMenuLink("customer/PC_ND_01.html", useFullLink)}
					</dl> -->
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">상품안내</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">상조 상품 안내</span></p>
						${createMenuLink("product/FO_Y_PA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">상조 상품 안내 (레이어 팝업)</span></p>
						${createMenuLink("product/FO_Y_PA_002_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">예다함 윤슬 4호</span></p>
						${createMenuLink("product/FO_Y_PB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">예다함 윤슬 6호</span></p>
						${createMenuLink("product/FO_Y_PC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">예다함 노블</span></p>
						${createMenuLink("product/FO_Y_PD_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">상조 서비스 품목</span></p>
						${createMenuLink("product/FO_Y_PF_001_L.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">간편가입</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">상품 선택 (상품 미선택)</span></p>
						${createMenuLink("easy/FO_Y_DA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">상품 선택 (선택)</span></p>
						${createMenuLink("easy/FO_Y_DA_001_02.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">상품 선택 (일시납)</span></p>
						${createMenuLink("easy/FO_Y_DA_001_03.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">본인 인증 / 정보 입력</span></p>
						${createMenuLink("easy/FO_Y_DB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">상품 변경</span></p>
						${createMenuLink("easy/FO_Y_DP_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">정보입력/계약내용 확인​</span></p>
						${createMenuLink("easy/FO_Y_DC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">결제 진행​</span></p>
						${createMenuLink("easy/FO_Y_DD_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">계약 완료​</span></p>
						${createMenuLink("easy/FO_Y_DE_001.html", useFullLink)}
					</dl>
				</div>
			</li>
		</ul>
	`;
}

const createMenuLink = function(link, use) {
	let href = use ? `../pages/pages.html?page=${link}` : `./../../front/${link}`;
	let name = href.split('/').pop(); // 경로에서 마지막 파일명만 추출
	let target = href.startsWith('./') ? 'target="_blank"' : '';
	return `<a href="${href}" class="g-sub-link" ${target}>${name}</a>`
}

const skipTemplate = function () {
	let skipContent =
		`<a href="#g-nav">메뉴 바로가기</a>
		<a href="#g-container">본문 바로가기</a>`;

	return `
        <div class="skip-wrap">${skipContent}</div>
    `;
}

const naviEvent = function () {
	let toggleBtns = document.querySelectorAll('.g-navi-subject');
	let subToggleLinks = document.querySelectorAll('.g-sub-link');
	
	toggleBtns.forEach(function (toggleBtn) {
		toggleBtn.addEventListener('click', function () {
			let toggleTarget = toggleBtn.closest('.g-navi-item');
			let siblingElems = toggleTarget.parentElement.children;

			Array.from(siblingElems).forEach(function (sibling) {
				if (sibling !== toggleTarget) {
					sibling.classList.remove('active');
				}
			});
			
			toggleTarget.classList.toggle('active');
		});
	});

	subToggleLinks.forEach(subToggleLink => {
		subToggleLink.addEventListener('click', function (event) {
			let targetUrl = this.getAttribute('href'); 
			let [url, hash] = targetUrl.split('#');

			if (hash) {
				event.preventDefault();
				if (window.location.pathname.includes(url)) {
					let targetElement = document.getElementById(hash);
					if (targetElement) {
						let elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
						window.scrollTo({
							top: elementPosition,
							behavior: "smooth"
						});
					}
				} else {
					window.location.href = targetUrl;
				}
			}
		});
	});
}

const naviCurrent = function() {
	let naviItems = document.querySelectorAll('.g-navi-item.page .g-sub-link');
	naviItems.forEach(naviItem => {
		naviItem.addEventListener('click', function() {
			let naviTarget = naviItem.closest('.g-sub-wrap');
			let clickedHref = naviItem.getAttribute('href');
			sessionStorage.setItem('clickedLinkHref', clickedHref);
			naviTarget.classList.add('current');
		});
	});

	let clickedHref = sessionStorage.getItem('clickedLinkHref');
	if (clickedHref) {
		let clickedItem = document.querySelector(`.g-sub-link[href="${clickedHref}"]`);

		if (clickedItem) {
			let naviItemCurrent = clickedItem.closest('.g-sub-wrap');
			naviItemCurrent.classList.add('current');

			naviItemCurrent.scrollIntoView({
				behavior: 'smooth',
				block: 'center'
			});
		}
	}

	let fullButton = document.querySelector('.g-sub-full');
	fullButton.addEventListener('click', clearSession);

	let guideButtons = document.querySelectorAll('.g-navi-item.guide .g-sub-link');
	guideButtons.forEach(elem => {
		elem.addEventListener('click', clearSession);
	});
};

function clearSession() {
	sessionStorage.clear();
}

function activateGnb() {
	var contentDiv = document.querySelector('.g-content');
	var contentClassList = contentDiv ? contentDiv.classList : [];
	var targetClass = contentClassList[1];
	
	if (!targetClass) return;

	var setElems  = document.querySelectorAll('.g-navi-item');

	setElems.forEach(function(setElem) {
		var dataNavi = setElem.getAttribute('data-navi');

		if(targetClass === dataNavi) {
			setElem.classList.add('active');
		} else {
			setElem.classList.remove('active');
		}
	});
}

function openButton() {
	let openAllbtns = document.querySelectorAll('.btn-g-open');
	openAllbtns.forEach(btn => btn.addEventListener('click', (e) => {
		let items = btn.closest('.g-sub-item');
		let links = items.querySelectorAll('.g-sub-link');

		links.forEach(link => {
			let url = link.getAttribute('href');
			window.open(url, '_blank');
		});

		e.preventDefault();
	}));
}

function toggleEvent() {
	var toggleBtns = document.querySelectorAll('.g-toggle .btn-toggle');
	
	toggleBtns.forEach(function (toggleBtn) {
		toggleBtn.addEventListener('click', function () {
			var toggleTarget = toggleBtn.closest('.g-toggle');
			toggleTarget.classList.toggle('active');
		});
	});
}

function checkedWithin(selector, closestSelector) {
	if (selector.type == 'button') {
		selector.closest(closestSelector).classList.toggle("checked-within");
	}
}

window.onload = function () {
	const naviElement = document.querySelector('#gNavi');
	if (naviElement) {
		naviElement.insertAdjacentHTML('afterbegin', headerTemplate());
	}

	const menuElement = document.querySelector('#gMenulistFull');
	if (menuElement) {
		menuElement.insertAdjacentHTML('afterbegin', headerNavigation(false));
    }

	const skipElement = document.querySelector('#skip');
	if (skipElement) {
		skipElement.insertAdjacentHTML('afterbegin', skipTemplate());
	}
	
	toggleEvent();
	naviEvent();
	activateGnb();
	openButton();
	naviCurrent();
};
