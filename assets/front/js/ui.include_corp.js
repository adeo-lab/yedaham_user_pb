const headerBlankTemplate = function () {
	let headerContent =
	`
		<h1 class="logo">
			<a href="#" title="L메인으로 이동" class="logo-link">
				<img src="../../../../assets/front/images/corp/logo_corp_wh.png" alt="The K 예다함" />
			</a>
		</h1>
	`;

	return `
        <div class="header-inner">${headerContent}</div>
    `;
}		

const headerTemplate = function () {
	let headerContent =
		`
			<!-- 로고 -->
			<h1 class="logo">
				<a href="#" title="메인으로 이동" class="logo-link">
					The K 예다함
					<!-- <img src="../../../../assets/front/images/corp/logo_corp.png" alt="The K 예다함" /> -->
				</a>
			</h1>
			<!-- //로고 -->
			<!-- 모바일 이전 버튼 / 타이틀\
			<div class="header-sub-area">
				<div class="btn-header-prev">
					<a href="#">이전</a>
				</div>
				<h2>공지사항</h2>
			</div>
			//모바일 이전 버튼 / 타이틀 -->
			<!-- gnb -->
			<nav class="gnb" id="gnb">
				<div class="gnb-list">
					<div class="mobile-menu-top-area">
						<h1 class="logo">
							<a href="#" title="예다함 회사소개 메인으로 이동" class="logo-link">
								The K 예다함
								<!-- <img src="../../../../assets/front/images/corp/logo_corp.png" alt="The K 예다함" /> -->
							</a>
						</h1>
						<!-- <div class="navi-util">
							<ul class="navi-list">
								<li class="navi-item logout"><a href="#" class="navi-text"><span class="logout"></span></a></li>
								<li class="navi-item"><a href="#" class="navi-text"><span class="search"></span></a></li>
							</ul>
						</div> -->
						<div class="navi-control">
							<button type="button" class="btn-navi-menu-close" title="모바일 메뉴">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M18.6308 4.23421C18.9432 3.92199 19.4493 3.92187 19.7617 4.23421C20.074 4.54656 20.0739 5.05263 19.7617 5.36507L13.1288 11.9979L19.7656 18.6346C20.078 18.947 20.078 19.454 19.7656 19.7664C19.4532 20.0787 18.9471 20.0786 18.6347 19.7664L11.998 13.1287L5.36127 19.7664C5.04885 20.0786 4.54275 20.0787 4.23041 19.7664C3.91798 19.454 3.918 18.947 4.23041 18.6346L10.8662 11.9979L4.23431 5.36507C3.92209 5.05263 3.92196 4.54656 4.23431 4.23421C4.54667 3.92187 5.05275 3.92199 5.36517 4.23421L11.998 10.867L18.6308 4.23421Z" fill="#232527"/>
								</svg>
							</button>
						</div>
					</div>
					<div class="in-nav">
						<ul>
							<li class="gnb-item" id="mob_m1">
								<a href="#mob_m1_l" class="gnb-text">예다함소개</a>
							</li>
							<li class="gnb-item" id="mob_m2">
								<a href="#mob_m2_l" class="gnb-text">경영현황</a>
							</li>
							<li class="gnb-item" id="mob_m3">
								<a href="#mob_m3_l" class="gnb-text">지속가능경영</a>
							</li>
							<li class="gnb-item" id="mob_m4">
								<a href="#mob_m4_l" class="gnb-text">홍보센터</a>
							</li>
							<li class="gnb-item" id="mob_m5">
								<a href="#mob_m5_l" class="gnb-text">인재채용<span class="flag-new">모집중</span></a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<!-- //gnb -->
			<div class="navi-util">
				<ul class="navi-list">
					<!-- <li class="navi-item logout">
						<a href="#" class="navi-text"><span class="logout"></span></a>
						<div class="util-list">
							<a href="#" class="util-item"><span class="util-text">로그아웃</span></a>
						</div>
					</li> -->
					<li class="navi-item home"><a href="#" class="navi-text"><span class="home"></span></a></li>
					<!-- <li class="navi-item search"><a href="#" class="navi-text"><span class="search"></span></a></li> -->
					<li class="navi-item type-btn"><a href="#" class="navi-text"><span class="em tp-btn">법인</span></a>
					</li>
					<li class="navi-item type-btn"><a href="#" class="navi-text"><span class="em tp-btn">회사소개</span></a></li>
				</ul>
			</div>
			<!-- 모바일 메뉴 -->
			<div class="navi-control">
				<button type="button" class="btn-navi-menu" title="모바일 메뉴">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path d="M20.999 17.2002C21.4408 17.2002 21.7987 17.5583 21.7988 18C21.7988 18.4418 21.4409 18.7998 20.999 18.7998H2.99902C2.55729 18.7997 2.19922 18.4418 2.19922 18C2.19932 17.5583 2.55735 17.2003 2.99902 17.2002H20.999ZM20.999 11.2002C21.4408 11.2002 21.7987 11.5583 21.7988 12C21.7988 12.4418 21.4409 12.7998 20.999 12.7998H2.99902C2.55729 12.7997 2.19922 12.4418 2.19922 12C2.19932 11.5583 2.55735 11.2003 2.99902 11.2002H20.999ZM20.999 5.2002C21.4408 5.2002 21.7987 5.55826 21.7988 6C21.7988 6.44183 21.4409 6.7998 20.999 6.7998H2.99902C2.55729 6.7997 2.19922 6.44176 2.19922 6C2.19932 5.55833 2.55735 5.2003 2.99902 5.2002H20.999Z" fill="#232527"/>
					</svg>
				</button>
			</div>
			<!-- //모바일 메뉴 -->
		`;

	return `
        <div class="header-inner">${headerContent}</div>
		<!-- 전체 메뉴 layer -->
		<div class="nav-layer">
			<div class="nav-inner-wrap">
				<div class="inner-bx-l">
					<ul class="gnb-list-l">
						<li class="gnb-item-l" id="mob_m1_l">
							<a href="#" class="gnb-text-l">예다함소개</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">CEO 인사말</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">예다함 WAY 2.0</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">주요 연혁</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">The-K 가족소개</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">조직도</a>
								<li class="lnb-item"><a href="#" class="lnb-text">오시는 길</a></li>
							</ul>
						</li>
						<li class="gnb-item-l" id="mob_m2_l">
							<a href="#" class="gnb-text-l">경영현황</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">주요 재무현황</a></li>
							</ul>
						</li>
						<li class="gnb-item-l" id="mob_m3_l">
							<a href="#" class="gnb-text-l">지속가능경영</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">윤리경영</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">소비자중심 경영(CCM)</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">사랑(愛)다함</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">안전보건 경영</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">비윤리신고센터</a></li>
							</ul>
						</li>
						<li class="gnb-item-l" id="mob_m4_l">
							<a href="#" class="gnb-text-l">홍보센터</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">광고/홍보</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">보도자료</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">CI/BI</a></li>
							</ul>
						</li>
						<li class="gnb-item-l" id="mob_m5_l">
							<a href="#" class="gnb-text-l">인재채용</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l now"><a href="#" class="lnb-text-l">예다함 人<span class="flag-new">모집중</span></a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">인사제도</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">직무소개</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">복리후생</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">채용공고</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">나의 지원서</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- //전체 메뉴 layer -->

		<!-- 통합 검색 layer -->
		<div class="search-layer"><!-- search-open -->
			<a href="#" class="btn_search_close"></a>
			<div class="search-inner-wrap">
				<div class="search-inner-bx">
					<div class="s-title">쉽고 빠르게 원하는 정보를 찾아 보세요.</div>
					<div class="search-word">
						<label for="searchAllWord" class="blind">검색어 입력</label>
						<div class="search-form">
							<span class="form search-input">
								<input type="text" class="form-elem" id="searchAllWord" name="searchAllWord" placeholder="궁금하신 점을 검색해보세요.">
								<span class="form-btn">
									<button type="button" class="btn-cancel" title="삭제"></button>
								</span>
							</span>
							<button class="btn-search"><span class="btn-name blind">검색</span></button>
						</div>
					</div>
					<div class="keyword-wrap">
						<div class="keyword-inner-bx">
							<p class="s-tit-l">추천 검색어</p>
							<div class="keyword-r">
								<span class="keyword-item">장례상품</span>
								<span class="keyword-item">간편 가입</span>
								<span class="keyword-item">상담신청</span>
								<span class="keyword-item">장례정보</span>
								<span class="keyword-item">상조</span>
							</div>
						</div>
					</div>
					<div class="btm-info-wrap">
						<div class="bx-left-side">
							<p class="tx01"><span class="tx-stit">24시 장례접수</span> <span class="tx-num">1566-0119</span></p>
							<p class="tx02"><span class="tx-stit">고객센터</span> <span class="tx-num">1566-6644</span></p>
						</div>
						<div class="bx-right-side">
							<p>무엇을 도와드릴까요?</p>
							<a href="#" class="btn-inquiry">1:1 문의하기</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- //통합 검색 layer -->
		<!-- //모바일 버튼 영역 -->
		<div class="mobile-menu-bottom-area">
			<div class="button-area">
				<a href="#" class="btn-shortcut"><span class="btn-text">개인</span></a>
				<a href="#" class="btn-shortcut"><span class="btn-text">법인</span></a>
			</div>
		</div>
		<!-- //모바일 버튼 영역 -->
    `;
}

const skipTemplate = function () {
	let skipContent =
		`
			<a href="#nav">메뉴 바로가기</a>
			<a href="#container">본문 바로가기</a>
			<a href="#footer">푸터 바로가기</a>
		`;

	return `
        <div class="skip-wrap">${skipContent}</div>
    `;
}

const estimateTemplate = function () {
	let skipContent =
		`
		<div class="l-side">현재 페이지의 내용과 사용 편의성에 만족하십니까?</div>
		<div class="r-side">
			<ul>
				<li class="up-m"><span>매우 만족</span></li>
				<li class="up on"><span>만족</span></li>
				<li class="nm"><span>보통</span></li>
				<li class="down"><span>불만족</span></li>
				<li class="down-m"><span>매우 불만족</span></li>
			</ul>
			<a href="#" class="btn-confirm">확인</a>
		</div>
		`;

	return `
        <div class="estimate-inner">${skipContent}</div>
    `;
}

const footerTemplate = function () {
	let footerContent =
        `
		<div class="ft-l-side">
			<div class="ft-cnt01">
				<div>고객센터  1566-6644</div>
				<div>장례접수  1566-0119</div>
			</div>
			<div class="ft-cnt02">
				<ul>
					<li><a href="#">홈페이지 이용약관</a></li>
					<li class="tx-color01"><a href="#">개인정보처리방침</a></li>
					<li><a href="#">중요정보고시사항</a></li>
				</ul>
			</div>
			<div class="ft-cnt03">
				<div>서울특별시 마포구 마포대로 86, 16층(도화동, 창강빌딩) <span>The-K 예다함㈜</span></div>
				<div>대표이사 : 김도한</div>
				<div>사업자등록 번호 : 101-86-9300</div>
			</div>
			<div class="ft-cnt04">
				<div>통신판매업 신고번호 : 제 2014-서울마포-0712호</div>
				<div>전화권유판매업 신고번호 : 제 2014-서울마포-0012호</div>
			</div>
			<div class="ft-cnt05">
				<div>Copyright © 2025 The-K Yedaham Co. All Rights Reserved.</div>
			</div>
			<div class="ft-btm-logo"><a href="#" target="_blank"><img src="../../../../assets/front/images/corp/logo_btm.png" alt="The K 예다함" /></a></div>
		</div>

		<div class="ft-r-side">
			<div class="ft-r-top">
				<div class="ft-button-area">
					<a href="#" target="_blank" class="btn-report">감사보고서</a>
				</div>
				<div class="ft-family-wrap">
					<div class="bx-family"><a href="javascript: void();">패밀리 사이트</a></div>
					<div class="family-layer">
						<ul>
							<li><a href="#" target="_blank">더케이한국교직원공제회</a></li>
							<li><a href="#" target="_blank">더케이저축은행</a></li>
							<li><a href="#" target="_blank">더케이교직원나라</a></li>
							<li><a href="#" target="_blank">더케이호텔&리조트</a></li>
							<li><a href="#" target="_blank">더케이제주호텔</a></li>
							<li><a href="#" target="_blank">더케이소피아그린</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="ft-r-bt">
				<div class="ft-sns">
					<ul>
						<li><a href="#" class="btn-facebook" target="_blank"></a></li>
						<li><a href="#" class="btn-instagram" target="_blank"></a></li>
						<li><a href="#" class="btn-youtube" target="_blank"></a></li>
					</ul>
				</div>
				<div class="ft-mark">
					<a href="#"><img src="../../../../assets/front/images/corp/ft_img_ certify.png" alt="소비자 중심" /></a>
				</div>
			</div>
		</div>
		`;

    return `
        <div class="footer-inner">${footerContent}</div>
    `;
}

// const quickTemplate = function () {
// 	let quickContent =
// 		`	
// 			<button type="button" class="btn-yac"><span class="btn-text">YAC 신고센터</span></button>
// 			<span class="button-scroll-area">
// 				<button type="button" class="btn-scroll" title="스크롤 내리기"><span class="btn-text">Scroll</span></button>
// 				<button type="button" class="btn-to-top" title="상단으로 가기"><span class="btn-text">TOP</span></button>
// 			</span>
// 		`;

// 	return `
//         <div class="quick-wrap">${quickContent}</div>
//     `;
// }
const quickTemplate = function (isMain = false) {
	let quickContent;

	if (isMain) {
        quickContent = `	
            <button type="button" class="btn-yac"><span class="btn-text">YAC 신고센터</span></button>
            <span class="button-scroll-area">
                <button type="button" class="btn-scroll" title="스크롤 내리기"><span class="btn-text">Scroll</span></button>
                <button type="button" class="btn-to-top" title="상단으로 가기"><span class="btn-text">TOP</span></button>
            </span>
        `;
    } else {
        quickContent = `	
            <button type="button" class="btn-yac"><span class="btn-text">YAC 신고센터</span></button>
			<span class="button-scroll-area">
                <button type="button" class="btn-to-top" title="상단으로 가기"><span class="btn-text">TOP</span></button>
            </span>
        `;
    }

	return `<div class="quick-wrap">${quickContent}</div>`;
}

const pageTemplate = function () {
	let pageContent =
		`
		<button type="button" class="page-btn page-first" title="첫 페이지"></button>
			<button type="button" class="page-btn page-prev" title="이전 페이지"></button>
			<div class="page-num">
				<a href="#" class="page-link"><span>1</span></a>
				<a href="#" class="page-link current"><span>2</span></a>
				<a href="#" class="page-link"><span>3</span></a>
				<a href="#" class="page-link"><span>4</span></a>
				<a href="#" class="page-link"><span>5</span></a>
				<a href="#" class="page-link"><span>6</span></a>
				<a href="#" class="page-link"><span>7</span></a>
				<a href="#" class="page-link"><span>8</span></a>
				<a href="#" class="page-link"><span>9</span></a>
				<a href="#" class="page-link"><span>10</span></a>
			</div>
			<button type="button" class="page-btn page-next" title="다음 페이지"></a>
			<button type="button" class="page-btn page-last" title="마지막 페이지"></a>
		`;

	return `
        <div class="page-wrap">${pageContent}</div>
    `;
}

window.onload = function () {
	const naviElement = document.querySelector('#header');
	if (naviElement) {
		naviElement.insertAdjacentHTML('afterbegin', headerTemplate());
	}

	const headerBlankElement = document.querySelector('.header-blank');
	if (headerBlankElement) {
		headerBlankElement.insertAdjacentHTML('afterbegin', headerBlankTemplate());
	}

	const skipElement = document.querySelector('#skip');
	if (skipElement) {
		skipElement.insertAdjacentHTML('afterbegin', skipTemplate());
	}	

	const estimateElement = document.querySelector('#estimate');
	if (estimateElement) {
		estimateElement.insertAdjacentHTML('afterbegin', estimateTemplate());
	}	

	const footerElement = document.querySelector('#footer');
	if (footerElement) {
		footerElement.insertAdjacentHTML('afterbegin', footerTemplate());
	}	

	const quickElement = document.querySelector('.quick-menu');
	if (quickElement) {
        const isMain = quickElement.classList.contains('main-quick-menu');
        quickElement.insertAdjacentHTML('afterbegin', quickTemplate(isMain));
    }

	const pageElement = document.querySelector('.pagination');
	if (pageElement) {
		pageElement.insertAdjacentHTML('afterbegin', pageTemplate());
	}	
}
