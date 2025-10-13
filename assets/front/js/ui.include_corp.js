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
							<a href="#" title="LG AI 청소년캠프 메인으로 이동" class="logo-link">
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
								<a href="#mob_m1_l" class="gnb-text on">예다함소개</a>
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
								<a href="#mob_m6_l" class="gnb-text">인재채용<span class="flag-new">모집중</span></a>
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
							<a href="#" class="gnb-text">지속가능경영</a>
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
								<li class="lnb-item-l now"><a href="#" class="lnb-text-l">예다함 人</a></li>
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
			<div class="bg-opa"></div>
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
			<div class="ft-btm-logo"><a href="#" target="_blank"><img src="../../../../assets/front/images/corp/logo_btm.png" alt="The K 예다함" /></a></div>
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
				<a href="#"><img src="../../../../assets/front/images/corp/ft_img_ certify.png" alt="소비자 중심" /></a>
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
			<a href="#" class="menu02">
				<div class="btn-text" style="width: 60px; height: 60px; background: #4458B0; display: flex; align-items: center; justify-content: center;">
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
					<path d="M20 3.3335V5.00016M5.00001 20.0002H3.33334M9.16668 9.16683L8.16651 8.16667M30.8333 9.16683L31.8338 8.16667M36.6667 20.0002H35M25.8333 28.1234C28.3568 26.3081 30 23.346 30 20.0002C30 14.4773 25.5229 10.0002 20 10.0002C14.4772 10.0002 10 14.4773 10 20.0002C10 23.346 11.6432 26.3081 14.1667 28.1234V31.3335C14.1667 33.2003 14.1667 34.1338 14.53 34.8468C14.8496 35.474 15.3595 35.9839 15.9867 36.3035C16.6997 36.6668 17.6332 36.6668 19.5 36.6668H20.5C22.3669 36.6668 23.3003 36.6668 24.0133 36.3035C24.6405 35.9839 25.1505 35.474 25.47 34.8468C25.8333 34.1338 25.8333 33.2003 25.8333 31.3335V28.1234Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M25.7113 23.0794C25.1127 23.0794 24.5985 22.9643 24.1687 22.7341C23.7389 22.5038 23.4089 22.179 23.1787 21.7594C22.9536 21.3399 22.841 20.8487 22.841 20.2859C22.841 19.8663 22.905 19.4852 23.0329 19.1424C23.1659 18.7996 23.3552 18.5054 23.6008 18.2598C23.8515 18.0142 24.1534 17.8274 24.5064 17.6995C24.8645 17.5665 25.2662 17.5 25.7113 17.5C25.9467 17.5 26.1897 17.5281 26.4404 17.5844C26.6962 17.6356 26.9213 17.7149 27.1158 17.8223C27.259 17.8991 27.3588 17.9963 27.4151 18.114C27.4714 18.2316 27.4893 18.3519 27.4688 18.4747C27.4534 18.5975 27.41 18.7075 27.3383 18.8047C27.2667 18.9019 27.1746 18.9684 27.062 19.0042C26.9495 19.0349 26.8267 19.017 26.6937 18.9505C26.5402 18.8789 26.3867 18.8251 26.2332 18.7893C26.0848 18.7484 25.9288 18.7279 25.765 18.7279C25.4478 18.7279 25.1818 18.7893 24.9669 18.9121C24.7571 19.0298 24.5985 19.2038 24.491 19.434C24.3836 19.6642 24.3299 19.9482 24.3299 20.2859C24.3299 20.6236 24.3836 20.9101 24.491 21.1454C24.5985 21.3757 24.7571 21.5522 24.9669 21.675C25.1818 21.7927 25.4478 21.8515 25.765 21.8515C25.8981 21.8515 26.0413 21.8362 26.1948 21.8055C26.3483 21.7696 26.4992 21.7159 26.6476 21.6443C26.8011 21.5778 26.9367 21.5599 27.0544 21.5906C27.1772 21.6213 27.2744 21.6827 27.346 21.7748C27.4227 21.8669 27.4714 21.9743 27.4918 22.0971C27.5123 22.2148 27.4944 22.3324 27.4381 22.4501C27.3869 22.5678 27.2948 22.6625 27.1618 22.7341C26.9827 22.8415 26.7602 22.9259 26.4941 22.9873C26.2332 23.0487 25.9722 23.0794 25.7113 23.0794Z" fill="white"/>
					<path d="M17.5139 23.0639C17.3553 23.0639 17.2223 23.0281 17.1149 22.9564C17.0074 22.8797 16.9409 22.7774 16.9153 22.6495C16.8897 22.5164 16.9128 22.368 16.9844 22.2043L18.8954 18.0907C18.9875 17.8912 19.1 17.7454 19.233 17.6533C19.3712 17.5612 19.5272 17.5151 19.7012 17.5151C19.8752 17.5151 20.0261 17.5612 20.154 17.6533C20.287 17.7454 20.4021 17.8912 20.4994 18.0907L22.4103 22.2043C22.4922 22.368 22.5203 22.5164 22.4948 22.6495C22.4743 22.7825 22.4103 22.8848 22.3029 22.9564C22.2006 23.0281 22.0726 23.0639 21.9192 23.0639C21.7145 23.0639 21.5559 23.0178 21.4433 22.9257C21.3359 22.8336 21.2387 22.6853 21.1517 22.4806L20.7373 21.5059L21.2745 21.8973H18.1126L18.6574 21.5059L18.243 22.4806C18.1509 22.6853 18.0563 22.8336 17.9591 22.9257C17.8618 23.0178 17.7135 23.0639 17.5139 23.0639ZM19.6858 19.0577L18.7956 21.1836L18.5807 20.8152H20.814L20.5991 21.1836L19.7012 19.0577H19.6858Z" fill="white"/>
					<path d="M14.7963 23.0639C14.5712 23.0639 14.3972 23.0025 14.2745 22.8797C14.1517 22.7518 14.0903 22.5701 14.0903 22.3348V20.2319L14.3819 21.0071L12.6167 18.4668C12.5298 18.344 12.4914 18.2084 12.5016 18.06C12.517 17.9065 12.5784 17.7786 12.6858 17.6763C12.7984 17.5689 12.957 17.5151 13.1616 17.5151C13.3049 17.5151 13.4354 17.551 13.553 17.6226C13.6707 17.6891 13.7807 17.8042 13.883 17.9679L14.9575 19.5489H14.6812L15.7557 17.9603C15.8631 17.7965 15.9731 17.6814 16.0857 17.6149C16.1982 17.5484 16.3312 17.5151 16.4847 17.5151C16.6792 17.5151 16.8301 17.5637 16.9375 17.661C17.045 17.7582 17.1013 17.881 17.1064 18.0293C17.1166 18.1777 17.0706 18.3286 16.9682 18.4821L15.2184 21.0071L15.5024 20.2319V22.3348C15.5024 22.8209 15.267 23.0639 14.7963 23.0639Z" fill="white"/>
					</svg>
				</div>
			</a>
			<button type="button" class="btn-to-top" title="상단으로 가기" style="font-size: 15px; color: #232527; line-height: 150%; background: #fff; border: 1px solid rgba(19, 21, 23, 0.15); box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.10); display: flex; flex-direction: column; justify-content: center; align-items: center;">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1568 10.8963C12.9378 11.0933 12.6006 11.0756 12.4036 10.8566L8.00001 6.63045L3.59643 10.8566C3.39939 11.0756 3.06216 11.0933 2.84323 10.8963C2.62429 10.6992 2.60654 10.362 2.80358 10.1431L7.60358 5.47642C7.70473 5.36404 7.84881 5.29986 8.00001 5.29986C8.1512 5.29986 8.29529 5.36404 8.39643 5.47642L13.1964 10.1431C13.3935 10.362 13.3757 10.6992 13.1568 10.8963Z" fill="#232527" stroke="#232527" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				Top
			</button>
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
