const headerBlankTemplate = function () {
	let headerContent =
	`
		<h1 class="logo">
			<a href="#" title="L메인으로 이동" class="logo-link">
				<img src="../../../assets/front/images/common/logo.png" alt="예다함" />
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
					<img src="../../../assets/front/images/common/logo.png" alt="예다함" />
				</a>
			</h1>
			<!-- //로고 -->
			<!-- 모바일 이전 버튼 / 타이틀 -->
			<div class="header-sub-area">
				<div class="btn-header-prev">
					<a href="#">이전</a>
				</div>
				<h2>예다함 뉴스</h2>
			</div>
			<!-- //모바일 이전 버튼 / 타이틀 -->
			<!-- gnb -->
			<nav class="gnb" id="gnb">
				<div class="gnb-list">
					<div class="mobile-menu-top-area">
						<h1 class="logo">
							<a href="#" title="예다함 메인으로 이동" class="logo-link">
								<img src="../../../assets/front/images/common/logo.png" alt="예다함" />
							</a>
						</h1>
						<div class="navi-util">
							<ul class="navi-list">
								<li class="navi-item logout"><a href="#" class="navi-text"><span class="logout"></span></a></li>
								<li class="navi-item"><a href="#" class="navi-text"><span class="search"></span></a></li>
							</ul>
						</div>
						<div class="navi-control">
							<button type="button" class="btn-navi-menu-close" title="모바일 메뉴">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M18.6308 4.23421C18.9432 3.92199 19.4493 3.92187 19.7617 4.23421C20.074 4.54656 20.0739 5.05263 19.7617 5.36507L13.1288 11.9979L19.7656 18.6346C20.078 18.947 20.078 19.454 19.7656 19.7664C19.4532 20.0787 18.9471 20.0786 18.6347 19.7664L11.998 13.1287L5.36127 19.7664C5.04885 20.0786 4.54275 20.0787 4.23041 19.7664C3.91798 19.454 3.918 18.947 4.23041 18.6346L10.8662 11.9979L4.23431 5.36507C3.92209 5.05263 3.92196 4.54656 4.23431 4.23421C4.54667 3.92187 5.05275 3.92199 5.36517 4.23421L11.998 10.867L18.6308 4.23421Z" fill="#232527"/>
								</svg>
							</button>
						</div>
					</div>
					<!-- 1104 작업 -->
					<div class="mobile-menu-content-area">
						<div class="call-area">
							<dl class="call-item day">
								<dt class="title">24시 장례접수</dt>
								<dd class="number"><a href="tel:1566-0119" class="tel">1566-0119</a></dd>
							</dl>
							<dl class="call-item corp">
								<dt class="title">고객센터</dt>
								<dd class="number"><a href="tel:1566-6644" class="tel">1566-6644</a></dd>
							</dl>
						</div>
					</div>
					<!-- //1104 작업 -->
					<div class="in-nav">
						<ul>
							<li class="gnb-item" id="mob_m1">
								<a href="#mob_m1_l" class="gnb-text on">MY</a>
							</li>
							<li class="gnb-item" id="mob_m2">
								<a href="#mob_m2_l" class="gnb-text">상품 안내</a>
							</li>
							<li class="gnb-item" id="mob_m3">
								<a href="#mob_m3_l" class="gnb-text">간편가입</a>
							</li>
							<li class="gnb-item" id="mob_m4">
								<a href="#mob_m4_l" class="gnb-text">​혜택/서비스</a>
							</li>
							<li class="gnb-item" id="mob_m5">
								<a href="#mob_m5_l" class="gnb-text">고객지원​</a>
							</li>
							<li class="gnb-item" id="mob_m6">
								<a href="#mob_m6_l" class="gnb-text">장례정보</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<!-- //gnb -->
			<div class="navi-util">
				<ul class="navi-list">
					<li class="navi-item logout">
						<a href="#" class="navi-text"><span class="logout"></span></a>
						<div class="util-list">
							<a href="#" class="util-item"><span class="util-text">로그아웃</span></a>
						</div>
					</li>
					<li class="navi-item home"><a href="#" class="navi-text"><span class="home"></span></a></li>
					<li class="navi-item search"><a href="#" class="navi-text"><span class="search"></span></a></li>
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
							<a href="#" class="gnb-text-l">MY</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">계약 현황</a></li>
								<li class="lnb-item-l"><!-- dep3 -->
									<a href="#" class="lnb-text-l">납입 현황</a>
									<!-- <ul class="lnb-list-l">
										<li class="lnb-item-l"><a href="#" class="lnb-text-l">test1</a></li>
										<li class="lnb-item-l"><a href="#" class="lnb-text-l">test2</a></li>
										<li class="lnb-item-l"><a href="#" class="lnb-text-l">test3</a></li>
										<li class="lnb-item-l"><a href="#" class="lnb-text-l">test4</a></li>
										<li class="lnb-item-l"><a href="#" class="lnb-text-l">test5</a></li>
										<li class="lnb-item-l"><a href="#" class="lnb-text-l">test6</a></li>
									</ul> -->
								</li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">증명서 발급</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">멤버십카드 발급</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">정보 변경</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">내 게시글 관리</a>
								<li class="lnb-item"><a href="#" class="lnb-text">내 알림내역</a></li>
							</ul>
						</li>
						<li class="gnb-item-l" id="mob_m2_l">
							<a href="#" class="gnb-text-l">상품 안내</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">상조 상품 안내</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">예다함 윤슬 4호</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">예다함 윤슬 6호</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">예다함 노블</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">예다함 특장점</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">상조 서비스 품목</a></li>
							</ul>
						</li>
						<li class="gnb-item-l" id="mob_m3_l">
							<a href="#" class="gnb-text">간편가입</a>
						</li>
						<li class="gnb-item-l" id="mob_m4_l">
							<a href="#" class="gnb-text-l">​혜택/서비스</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">멤버십</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">제휴카드</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">이벤트</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">부가서비스 신청</a></li>
							</ul>
						</li>
						<li class="gnb-item-l" id="mob_m5_l">
							<a href="#" class="gnb-text-l">고객지원​</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l now"><a href="#" class="lnb-text-l">예다함 뉴스</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">자주 하는 질문</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">고객 칭찬 후기</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">1:1 문의</a></li>
							</ul>
						</li>
						<li class="gnb-item-l" id="mob_m6_l">
							<a href="#" class="gnb-text-l">장례정보</a>
							<ul class="lnb-list-l">
								<li class="lnb-item-l">
									<a href="#" class="lnb-text-l">
										상조 서비스란?
										<span class="flag-new">NEW</span>
									</a>
								</li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">장례 진행</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">장례 절차 및 양식</a></li>
								<li class="lnb-item-l"><a href="#" class="lnb-text-l">제례 정보</a></li>
								<li class="lnb-item"><a href="#" class="lnb-text">장례 관련 시설</a></li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div class="bg-opa"></div>
		</div>
		<!-- //전체 메뉴 layer -->

		<!-- 통합 검색 layer -->
		<div class="search-layer"><!-- search-open -->
			<a href="#" class="btn_search_close"></a>
			<div class="search-inner-wrap">
				<div class="search-p-tit">통합검색</div>
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
								<span class="keyword-item"><a href="#">장례상품</a></span>
								<span class="keyword-item"><a href="#">간편 가입</a></span>
								<span class="keyword-item"><a href="#">상담신청</a></span>
								<span class="keyword-item"><a href="#">장례정보</a></span>
								<span class="keyword-item"><a href="#">상조</a></span>
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

		<!-- 1104 작업 -->
		<div class="mobile-menu-bottom-area">
			<div class="button-area">
				<a href="#" class="btn-shortcut"><span class="btn-text">법인</span></a>
				<a href="#" class="btn-shortcut"><span class="btn-text">회사소개</span></a>
			</div>
		</div>
		<!-- //1104 작업 -->
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
				<div>고객센터 <a href="tel:1566-6644">1566-6644</a></div><!-- //1103 작업 -->
				<div>장례접수 <a href="tel:1566-0119">1566-0119</a></div><!-- //1103 작업 -->
			</div>
			<div class="ft-cnt02">
				<ul>
					<li><a href="#">홈페이지 이용약관</a></li>
					<li class="tx-color01"><a href="#">개인정보처리방침</a></li>
					<li><a href="#">중요정보고시사항</a></li>
				</ul>
			</div>
			<div class="ft-cnt03">
				<span class="wbr">서울특별시 마포구 마포대로 86, 16층(도화동, 창강빌딩)</span>
				<span class="wbr"><span>The-K 예다함㈜</span>
				<span>대표이사 : 김도한</span></span></span>
				<span>사업자등록 번호 : 101-86-9300</span>
			</div><!-- //1103 작업 -->
			<div class="ft-cnt04">
				<div>통신판매업 신고번호 : 제 2014-서울마포-0712호</div>
				<div>전화권유판매업 신고번호 : 제 2014-서울마포-0012호</div>
			</div>
			<div class="ft-cnt05">
				<span class="wbr">Copyright © 2025 The-K Yedaham Co.</span> <span class="wbr">All Rights Reserved.</span>
			</div><!-- //1103 작업 -->
			<div class="ft-btm-logo"><a href="#" target="_blank"><img src="../../../assets/front/images/common/logo_btm.png" alt="The K 예다함" /></a></div> 
		</div>

		<div class="ft-r-side">
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
			<div class="ft-sns">
				<ul>
					<li><a href="#" class="btn-facebook" target="_blank"></a></li>
					<li><a href="#" class="btn-instagram" target="_blank"></a></li>
					<li><a href="#" class="btn-youtube" target="_blank"></a></li>
				</ul>
			</div>
			<div class="ft-mark">
				<a href="#"><img src="../../../assets/front/images/common/ft_img_ certify.png" alt="소비자 중심" /></a>
			</div>
		</div>
		`;

    return `
        <div class="footer-inner">${footerContent}</div>
    `;
}

const quickTemplate = function () {
	let quickContent =
		`
			<ul class="quick-list">
				<li class="quick-item join"><a href="#" class="quick-text">간편가입</a></li>
				<li class="quick-item consult"><a href="#" class="quick-text">상담신청</a></li>
			</ul>
			<button type="button" class="quick-toggle" aria-label="퀵메뉴 열기/닫기">
				<svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M11.999 3C12.4408 3 12.7987 3.35807 12.7988 3.7998V11.2002H20.2002C20.6419 11.2003 20.9999 11.5583 21 12C21 12.4418 20.6419 12.7997 20.2002 12.7998H12.7988V20.2002C12.7988 20.642 12.4409 21 11.999 21C11.5573 20.9999 11.1992 20.642 11.1992 20.2002V12.7998H3.7998C3.35807 12.7997 3 12.4418 3 12C3.00011 11.5583 3.35813 11.2003 3.7998 11.2002H11.1992V3.7998C11.1993 3.35813 11.5574 3.00011 11.999 3Z" fill="white"/>
					<path d="M11.999 3V2.2H11.9988L11.999 3ZM12.7988 3.7998H13.5988V3.79961L12.7988 3.7998ZM12.7988 11.2002H11.9988C11.9988 11.642 12.357 12.0002 12.7988 12.0002V11.2002ZM20.2002 11.2002L20.2004 10.4002H20.2002V11.2002ZM21 12H21.8V11.9998L21 12ZM20.2002 12.7998V13.5998H20.2004L20.2002 12.7998ZM12.7988 12.7998V11.9998C12.357 11.9998 11.9988 12.358 11.9988 12.7998H12.7988ZM11.999 21L11.9988 21.8H11.999V21ZM11.1992 12.7998H11.9992C11.9992 12.358 11.641 11.9998 11.1992 11.9998V12.7998ZM3.7998 12.7998L3.79961 13.5998H3.7998V12.7998ZM3 12L2.2 11.9998V12H3ZM3.7998 11.2002V10.4002H3.79961L3.7998 11.2002ZM11.1992 11.2002V12.0002C11.641 12.0002 11.9992 11.642 11.9992 11.2002H11.1992ZM11.1992 3.7998L10.3992 3.79961V3.7998H11.1992ZM11.999 3V3.8L11.9988 3.8L12.7988 3.7998L13.5988 3.79961C13.5986 2.91639 12.8828 2.2 11.999 2.2V3ZM12.7988 3.7998H11.9988V11.2002H12.7988H13.5988V3.7998H12.7988ZM12.7988 11.2002V12.0002H20.2002V11.2002V10.4002H12.7988V11.2002ZM20.2002 11.2002L20.2 12.0002L20.2 12.0002L21 12L21.8 11.9998C21.7998 11.1165 21.0837 10.4004 20.2004 10.4002L20.2002 11.2002ZM21 12H20.2L20.2 11.9998L20.2002 12.7998L20.2004 13.5998C21.0836 13.5996 21.8 12.8838 21.8 12H21ZM20.2002 12.7998V11.9998H12.7988V12.7998V13.5998H20.2002V12.7998ZM12.7988 12.7998H11.9988V20.2002H12.7988H13.5988V12.7998H12.7988ZM12.7988 20.2002H11.9988L11.999 20.2V21V21.8C12.8827 21.8 13.5988 21.0839 13.5988 20.2002H12.7988ZM11.999 21L11.9992 20.2L11.9992 20.2002H11.1992H10.3992C10.3992 21.084 11.1156 21.7998 11.9988 21.8L11.999 21ZM11.1992 20.2002H11.9992V12.7998H11.1992H10.3992V20.2002H11.1992ZM11.1992 12.7998V11.9998H3.7998V12.7998V13.5998H11.1992V12.7998ZM3.7998 12.7998L3.8 11.9998L3.8 12H3H2.2C2.2 12.8838 2.91639 13.5996 3.79961 13.5998L3.7998 12.7998ZM3 12L3.8 12.0002L3.8 12.0002L3.7998 11.2002L3.79961 10.4002C2.91626 10.4004 2.20021 11.1165 2.2 11.9998L3 12ZM3.7998 11.2002V12.0002H11.1992V11.2002V10.4002H3.7998V11.2002ZM11.1992 11.2002H11.9992V3.7998H11.1992H10.3992V11.2002H11.1992ZM11.1992 3.7998L11.9992 3.8L11.9992 3.8L11.999 3L11.9988 2.2C11.1155 2.20021 10.3994 2.91626 10.3992 3.79961L11.1992 3.7998Z" fill="white"/>
				</svg>
			</button>
			<button type="button" class="btn-to-top" title="상단으로 가기"><span class="btn-text">TOP</span></button>
		`;

	return `
        <div class="quick-wrap">${quickContent}</div>
    `;
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
		quickElement.insertAdjacentHTML('afterbegin', quickTemplate());
	}	

	const pageElement = document.querySelector('.pagination');
	if (pageElement) {
		pageElement.insertAdjacentHTML('afterbegin', pageTemplate());
	}	
}