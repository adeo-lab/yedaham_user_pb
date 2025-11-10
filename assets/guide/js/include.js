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
		<div style="font-weight: 600; font-size: 30px; padding:30px 0 0 0;">예다함</div>
		<ul class="g-sub-list">
			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">공통</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">시스템 점검</span></p>
						${createMenuLink("common/FO_Y_ZA_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">404 에러</span></p>
						${createMenuLink("common/FO_Y_ZA_002.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">505 에러</span></p>
						${createMenuLink("common/FO_Y_ZA_003.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">약관* > 홈페이지 이용약관(19p)</span></p>
						${createMenuLink("common/FO_Y_ZB_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">약관 > 개인정보처리방침</span></p>
						${createMenuLink("common/FO_Y_ZB_002.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">약관* > 중요정보 고시사항(21p)</span></p>
						${createMenuLink("common/FO_Y_ZB_006.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">가입상담 신청</span></p>
						${createMenuLink("common/FO_Y_ZC_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">통합 검색</span></p>
						${createMenuLink("common/FO_Y_ZD_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">검색 결과</span></p>
						${createMenuLink("common/FO_Y_ZE_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">검색 결과 > 결과 없음</span></p>
						${createMenuLink("common/FO_Y_ZE_001_nodata.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상품 한 눈에 비교하기</span></p>
						${createMenuLink("product/BO_ZC_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">자주 하는 질문 상세</span></p>
						<p class="g-sub-text"><span class="em">스와이프 제거 필요 / 개발페이지에 제거 적용</span></p>
						${createMenuLink("common/FO_Y_ZL_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">고객 칭찬 후기 등록</span></p>
						${createMenuLink("common/FO_Y_ZM_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">고객 칭찬 후기 상세</span></p>
						<p class="g-sub-text"><span class="em">스와이프 제거 필요 / 개발페이지에 제거 적용</span></p>
						${createMenuLink("common/FO_Y_ZM_002_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">1:1문의 등록*</span></p>
						${createMenuLink("common/FO_Y_ZZ_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">1:1문의 상세* > 미답변</span></p>
						${createMenuLink("common/FO_Y_ZZ_001_L_02.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">1:1문의 상세* > 답변완료</span></p>
						${createMenuLink("common/FO_Y_ZZ_001_L_03.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">개인정보 처리 동의 및 안내</span></p>
						${createMenuLink("common/FO_Y_ZO_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">개인정보 수집 및 이용 동의</span></p>
						${createMenuLink("common/FO_Y_ZP_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">마케팅 수신 동의* (40p)</span></p>
						${createMenuLink("common/FO_Y_ZQ_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">이미지 미리보기* (41p)</span></p>
						${createMenuLink("common/FO_Y_ZR_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">동영상 미리보기* (42p)</span></p>
						${createMenuLink("common/FO_Y_ZS_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메일 >  1:1문의 답변</span></p>
						${createMenuLink("common/FO_Y_ZG_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메일* > 온라인 법률 상담 답변</span></p>
						${createMenuLink("common/FO_Y_ZG_002.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메일* > 증명서 발급</span></p>
						${createMenuLink("common/FO_Y_ZG_003.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">본인인증</span></p>
						${createMenuLink("common/FO_Y_ZH_001_P.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">SNS 공유하기</span></p>
						${createMenuLink("common/FO_Y_ZK_002_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">로그인 연장</span></p>
						${createMenuLink("common/FO_Y_ZN_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">접속 종료* (38p)</span></p>
						${createMenuLink("common/FO_Y_ZT_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메인, 공통 팝업(팝업빌더)</span></p>
						${createMenuLink("common/FO_Y_ZU_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">멤버십 카드 재발급(윈도우 팝업)</span></p>
						${createMenuLink("common/FO_Y_ZJ_001_P.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">생년월일 인증*</span></p>
						${createMenuLink("common/FO_Y_ZR_001_P.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">알럿</span></p>
						${createMenuLink("common/alert.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">토스트</span></p>
						${createMenuLink("common/toast.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">메인</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메인</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1103, 1107, 1110 작업</span></p>
						${createMenuLink("main/FO_Y_MA_001.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">MY</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메인</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1106 작업</span></p>
						${createMenuLink("my/FO_Y_YA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">계약 현황</span><span class="em">목록</span></p>
						${createMenuLink("my/FO_Y_YB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">계약 현황</span><span class="em">상세</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104, 1106 작업</span></p>
						${createMenuLink("my/FO_Y_YB_002.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">납입현황</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1106 작업</span></p>
						${createMenuLink("my/FO_Y_YC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">증명서 발급*</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1106, 1107 작업</span></p>
						${createMenuLink("my/FO_Y_YD_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">멤버십 카드</span></p>
						${createMenuLink("my/FO_Y_YE_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">결제 정보 관리* > 신용카드</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104, 1106 작업</span></p>
						${createMenuLink("my/FO_Y_YF_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">결제정보 관리* > 계좌이체</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104, 1106, 1107 작업</span></p>
						${createMenuLink("my/FO_Y_YF_001_2.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">결제정보 관리* nodata</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1106 작업</span></p>
						${createMenuLink("my/FO_Y_YF_001_nodata.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">개인 정보 관리*</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("my/FO_Y_YF_002.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">상품안내</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상조 상품 안내</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("product/FO_Y_PA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상조 상품 안내* > 바로 의전</span></p>
						${createMenuLink("product/FO_Y_PA_002_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상조 상품 안내* > 윤슬 5호</span></p>
						${createMenuLink("product/FO_Y_PA_002_L2.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상품 상세 : 예다함 윤슬 4호</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104, 1110 작업</span></p>
						${createMenuLink("product/FO_Y_PB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상품 상세 : 예다함 윤슬 6호</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104, 1110 작업</span></p>
						${createMenuLink("product/FO_Y_PC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상품 상세 : 예다함 노블</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104, 1110 작업</span></p>
						${createMenuLink("product/FO_Y_PD_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상조 서비스 품목*</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1106, 1107, 1110 작업</span></p>
						${createMenuLink("product/FO_Y_PF_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">상품 한 눈에 비교하기*</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104, 1110 작업</span></p>
						${createMenuLink("product/BO_ZC_001_L.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">간편가입</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step01. 상품선택 (상품 미선택)</span></p>
						<p class="g-sub-text"><span class="em">모바일 레이어 : 윤슬 4호에 적용</span></p>
						${createMenuLink("direct/FO_Y_DA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step01. 상품선택 (선택)</span></p>
						<p class="g-sub-text"><span class="em">모바일 레이어 : 윤슬 4호에 적용</span></p>
						${createMenuLink("direct/FO_Y_DA_001_02.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step01. 상품선택 (일시납)</span></p>
						<p class="g-sub-text"><span class="em">모바일 레이어 : 윤슬 4호에 적용</span></p>
						${createMenuLink("direct/FO_Y_DA_001_03.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step02. 약관동의 > 정보 입력</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("direct/FO_Y_DB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step03. 정보입력* > 계약내용 확인​</span></p>
						${createMenuLink("direct/FO_Y_DC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step03. 정보입력* > 계약내용 확인2</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1107 작업</span></p>
						${createMenuLink("direct/FO_Y_DC_001_02.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step04. 결제진행​* > 신용카드</span></p>
						${createMenuLink("direct/FO_Y_DD_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step04. 결제진행* > 계좌이체 (14p)</span></p>
						${createMenuLink("direct/FO_Y_DD_001_2.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료*</span></p>
						${createMenuLink("direct/FO_Y_DE_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료 > 혜택 안내 (16p)</span></p>
						${createMenuLink("direct/FO_Y_DF_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료* > 개인정보 수집 및 이용 동의 (17p)</span></p>
						${createMenuLink("direct/FO_Y_DG_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료* > 개인정보 제3자 제공 동의 (18p)</span></p>
						${createMenuLink("direct/FO_Y_DH_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료* > 개인정보 제공에 대한 게재 (19p)</span></p>
						${createMenuLink("direct/FO_Y_DI_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료* > 구성품목 확인 (20p)</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("direct/FO_Y_DJ_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">Step05. 계약완료 > 청약서 확인​</span></p>
						${createMenuLink("direct/FO_Y_DK_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료* > 회원계약내용 확인 (22p)</span></p>
						<p class="g-sub-text"><span class="em">모바일 임의 작업</span></p>
						${createMenuLink("direct/FO_Y_DL_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">Step05. 계약완료 > 출금이체 신청서​​</span></p>
						${createMenuLink("direct/FO_Y_DM_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료 > 출금이체 신청서​​ > 서명하기</span></p>
						${createMenuLink("direct/FO_Y_DM_001_L_01.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료* > [제3자 제공에 관한 선택적 동의] 개인정보 수집 이용에 대한 동의 (24p)</span></p>
						${createMenuLink("direct/FO_Y_DN_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료 > 상품 변경</span></p>
						${createMenuLink("direct/FO_Y_DP_001_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">Step05. 계약완료 > 상담 안내</span></p>
						${createMenuLink("direct/FO_Y_DQ_001_L.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">혜택/서비스​</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">멤버십 > 목록​</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1103, 1107 작업</span></p>
						${createMenuLink("benefit/FO_Y_BA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">멤버십 > 상세</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1103, 1110 작업</span></p>
						${createMenuLink("benefit/FO_Y_BA_002_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">제휴카드 > 목록</span></p>
						${createMenuLink("benefit/FO_Y_BB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">제휴카드 > 상세</span></p>
						${createMenuLink("benefit/FO_Y_BB_002_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">이벤트 > 목록​</span></p>
						${createMenuLink("benefit/FO_Y_BC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">이벤트 > 상세</span></p>
						<p class="g-sub-text"><span class="em">모바일 임의 작업</span></p>
						${createMenuLink("benefit/FO_Y_BC_002.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">부가서비스(15p)</span></p>
						${createMenuLink("benefit/FO_Y_BD_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">부가서비스* > 온라인 법률상담</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("benefit/FO_Y_BD_002.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">부가서비스* > 온라인 법률 상담 등록 (24p~25p)</span></p>
						<p class="g-sub-text"><span class="em">모바일 임의 작업</span></p>
						${createMenuLink("benefit/FO_Y_BD_003_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">부가서비스* > 온라인 법률 상담 상세 (24p~25p)</span></p>
						<p class="g-sub-text"><span class="em">모바일 임의 작업</span></p>
						${createMenuLink("benefit/FO_Y_BD_003_L2.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">부가서비스 > 온라인 법률 상담 예시 보기​​</span></p>
						${createMenuLink("benefit/FO_Y_BD_004_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">전환서비스 상담 신청* (18p)</span></p>
						<p class="g-sub-text"><span class="em">모바일 임의 작업</span></p>
						${createMenuLink("benefit/FO_Y_ZC_001_L.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">고객지원</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 소식 > 목록</span></p>
						${createMenuLink("cs/FO_Y_CE_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 소식 > 글 없는 경우</span></p>
						${createMenuLink("cs/FO_Y_CE_001_nodata.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 소식 > 상세</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1105, 1107 작업</span></p>
						${createMenuLink("cs/FO_Y_CE_002.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">자주하는 질문​ > 목록</span></p>
						${createMenuLink("cs/FO_Y_CB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">고객 칭찬 후기​ > 목록​​</span></p>
						${createMenuLink("cs/FO_Y_CC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">고객 칭찬 후기 > 글 없는 경우 (10p)</span></p>
						${createMenuLink("cs/FO_Y_CC_001_nodata.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">1:1문의 > 목록</span></p>
						${createMenuLink("cs/FO_Y_CD_001.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">장례정보</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 상조의 필요성</span></p>
						${createMenuLink("info/FO_Y_FA_001_L_01_01.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 상조납입금 안전책임 시스템​​​</span></p>
						${createMenuLink("info/FO_Y_FA_001_L_02_01.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 국가자격증 보유 장례지도사</span></p>
						${createMenuLink("info/FO_Y_FA_001_L_02_02.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 전국 직영 운영 시스템</span></p>
						${createMenuLink("info/FO_Y_FA_001_L_02_03.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 100% Payback</span></p>
						${createMenuLink("info/FO_Y_FA_001_L_02_04.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 투명경영감독</span></p>
						${createMenuLink("info/FO_Y_FA_001_L_02_05.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 서비스 이용절차</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("info/FO_Y_FA_001_L_03_01.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">장례진행</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1105, 1110 작업</span></p>
						${createMenuLink("info/FO_Y_FB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">제례정보</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("info/FO_Y_FC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">자료 다운로드 (26p~30p)</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("info/FO_Y_FD_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">장례 관련 시설</span></p>
						${createMenuLink("info/FO_Y_FE_001.html", useFullLink)}
					</dl>
				</div>
			</li>
		</ul>

		<div style="font-weight: 600; font-size: 30px; padding:30px 0 0 0;">회사</div>
		<ul class="g-sub-list">
			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">공통</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">YAC 센터*</span></p>
						${createMenuLink("corp/common/FO_C_ZA_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">이미지 미리보기*</span></p>
						${createMenuLink("corp/common/FO_C_ZC_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">동영상 미리보기*</span></p>
						${createMenuLink("corp/common/FO_C_ZC_001_L2.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메일* > YAC 신고 등록</span></p>
						${createMenuLink("corp/common/FO_C_ZD_001.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">메인</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메인</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1103 1104 작업</span></p>
						${createMenuLink("corp/main/FO_C_MA_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메인</span></p>
						<p class="g-sub-text"><span class="em">채용공고 없을 경우</span></p>
						${createMenuLink("corp/main/FO_C_MA_001_2.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">예다함 소개</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em"> CEO 인사말</span></p>
						${createMenuLink("corp/about/FO_C_IA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 WAY 2.0</span></p>
						<p class="g-sub-text" style="color: red;"><span class="em">이미지 화살표 움직임?</span></p>
						${createMenuLink("corp/about/FO_C_IB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">주요 연혁​</span></p>
						${createMenuLink("corp/about/FO_C_IC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">The-K 가족소개​​</span></p>
						<p class="g-sub-text" style="color: red;"><span class="em">오픈 컨텐츠</span></p>
						${createMenuLink("corp/about/FO_C_ID_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">조직도</span></p>
						${createMenuLink("corp/about/FO_C_IE_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">오시는 길(본부)</span></p>
						${createMenuLink("corp/about/FO_C_IF_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">오시는 길(지부)</span></p>
						${createMenuLink("corp/about/FO_C_IF_001_02.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">경영현황​</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">주요 재무현황</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104 작업</span></p>
						${createMenuLink("corp/financials/FO_C_DA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">주요재무현황* >  감사보고서 (7p)</span></p>
						${createMenuLink("corp/financials/FO_C_DA_001_2.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">주요재무현황* > 감사보고서 미리보기 (8p)</span></p>
						${createMenuLink("corp/financials/FO_C_DB_001_L.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">지속가능경영</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">윤리경영</span></p>
						${createMenuLink("corp/sustainability/FO_C_SA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">소비자중심 경영(CCM)</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104, 1105, 1110 작업</span></p>
						${createMenuLink("corp/sustainability/FO_C_SB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">사랑다함(12p~19p)</span> > 사랑(愛)다함 이란?</p>
						${createMenuLink("corp/sustainability/FO_C_SC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">사랑다함* > 사회공헌활동 > 목록 (14p, 18p)</span></p>
						${createMenuLink("corp/sustainability/FO_C_SC_002.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">사랑다함* > 사회공헌활동 > 상세 (15p, 19p)</span></p>
						${createMenuLink("corp/sustainability/FO_C_SC_003.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">안전보건 경영</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1105 작업</span></p>
						${createMenuLink("corp/sustainability/FO_C_SD_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">비윤리신고센터</span></p>
						${createMenuLink("corp/sustainability/FO_C_SE_001.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">홍보센터</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">광고 > 목록</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1105 작업</span></p>
						${createMenuLink("corp/media/FO_C_PA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">광고 > 상세</span></p>
						${createMenuLink("corp/media/FO_C_PA_002.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">보도자료* (9p~11p) > 목록</span></p>
						${createMenuLink("corp/media/FO_C_PB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">보도자료* (9p~11p) > 상세</span></p>
						${createMenuLink("corp/media/FO_C_PB_002.html", useFullLink)}
					</dl>
					<!-- <dl class="g-sub-wrap" data-status="진행">
						<p class="g-sub-title"><span class="em">CI/BI</span></p>
						<p class="g-sub-text" style="color: red;"><span class="em">비주얼 모션 1</span></p>
						${createMenuLink("corp/media/FO_C_PC_001.html", useFullLink)}
					</dl> -->
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">CI/BI</span></p>
						${createMenuLink("corp/media/FO_C_PC_001_02.html", useFullLink)}
					</dl>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">인재채용</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 人</span></p>
						${createMenuLink("corp/careers/FO_C_EA_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">인사제도</span></p>
						${createMenuLink("corp/careers/FO_C_EB_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">직무소개 (9p)</span></p>
						${createMenuLink("corp/careers/FO_C_EC_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">직무소개 > 상세 (10p)</span></p>
						${createMenuLink("corp/careers/FO_C_EC_002_L.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">복리후생 (11p)</span></p>
						${createMenuLink("corp/careers/FO_C_EC_003.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">채용공고* > 목록</span></p>
						${createMenuLink("corp/careers/FO_C_EE_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">채용공고 > 상세</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1110 작업</span></p>
						${createMenuLink("corp/careers/FO_C_EE_002.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">채용공고* > Step1 약관동의 및 본인인증</span></p>
						${createMenuLink("corp/careers/FO_C_EE_003.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">채용공고* > Step2 인적사항</span></p>
						${createMenuLink("corp/careers/FO_C_EE_004.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">채용공고* > Step2 인적사항 추가</span></p>
						${createMenuLink("corp/careers/FO_C_EE_004_2.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">채용공고* > Step3 경력사항</span></p>
						${createMenuLink("corp/careers/FO_C_EE_005.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">채용공고* > Step4 자기소개서</span></p>
						${createMenuLink("corp/careers/FO_C_EE_006.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">채용공고* > Step5 지원서 제출완료</span></p>
						${createMenuLink("corp/careers/FO_C_EE_007.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">나의지원서</span></p>
						${createMenuLink("corp/careers/FO_C_ED_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">나의지원서 > 없을 때</span></p>
						${createMenuLink("corp/careers/FO_C_ED_001_no.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">나의지원서* > 서류제출</span></p>
						${createMenuLink("corp/careers/FO_C_EZ_001.html", useFullLink)}
					</dl>
					<dl class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">접속연장안내</span></p>
						${createMenuLink("corp/careers/FO_C_EZ_002.html", useFullLink)}
					</dl>
				</div>
			</li>
		</ul>

		<div style="font-weight: 600; font-size: 30px; padding:30px 0 0 0;">법인/제휴사</div>
		<ul class="g-sub-list">
			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">공통</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">법인 가입상담 신청*</span></p>
						${createMenuLink("ltd/FO_Y_ZA_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">자주 하는 질문* > 상세</span></p>
						${createMenuLink("ltd/FO_Y_ZB_001_L.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">개인정보 처리 동의 및 안내*</span></p>
						${createMenuLink("ltd/FO_Y_ZC_001_L.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">메인</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">메인</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1103, 1107 작업</span></p>
						${createMenuLink("ltd/FO_L_MA_001.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">법인 상조서비스</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">법인 상조서비스</span></p>
						${createMenuLink("ltd/FO_L_IA_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 상조납입금 안전책임 시스템​​​</span></p>
						${createMenuLink("ltd/FO_Y_FA_001_L_02_01.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 국가자격증 보유 장례지도사</span></p>
						${createMenuLink("ltd/FO_Y_FA_001_L_02_02.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 전국 직영 운영 시스템</span></p>
						${createMenuLink("ltd/FO_Y_FA_001_L_02_03.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 100% Payback</span></p>
						${createMenuLink("ltd/FO_Y_FA_001_L_02_04.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">예다함 상조서비스 > 왜 예다함인가? > 투명경영감독</span></p>
						${createMenuLink("info/FO_Y_FA_001_L_02_05.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">법인 가입방법​</span></p>
						${createMenuLink("ltd/FO_L_EA_001.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">법인 상품</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">법인 상품</span></p>
						<p class="g-sub-edit"><span class="em">주석: 1104 작업</span></p>
						${createMenuLink("ltd/FO_L_PA_001.html", useFullLink)}
					</div>
					<!-- <div class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">맞춤형 상품</span><span class="em">상세</span></p>
						${createMenuLink("ltd/FO_L_PA_002.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">맞임원용춤형 상품</span><span class="em">상세</span></p>
						${createMenuLink("ltd/FO_L_PA_003.html", useFullLink)}
					</div> -->
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">자주 하는 질문</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">자주 하는 질문 > 목록</span></p>
						${createMenuLink("ltd/FO_L_FA_001.html", useFullLink)}
					</div>
				</div>
			</li>

			<li class="g-sub-item">
				<div class="g-sub-head">
					<p class="g-sub-subject">제휴사</p>
					<a href="#" class="btn-g-open">모두 열기</a>
				</div>
				<div class="g-sub-body">
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">제휴사 상담신청</span></p>
						${createMenuLink("ltd/FO_P_MA_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="완료">
						<p class="g-sub-title"><span class="em">The-K 교직원나라 > 소개화면(7p)</span></p>
						<p class="g-sub-subtitle"><span class="em" style="color: red;">*모바일 없음</span></p>
						${createMenuLink("ltd/FO_P_MB_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">개인 상담신청</span></p>
						<p class="g-sub-text"><span class="em">제휴사 상담신청 동일 페이지</span></p>
						${createMenuLink("ltd/FO_P_MA_001.html", useFullLink)}
					</div>
					<div class="g-sub-wrap" data-status="">
						<p class="g-sub-title"><span class="em">법인 상담신청</span></p>
						<p class="g-sub-text"><span class="em">제휴사 상담신청 동일 페이지</span></p>
						${createMenuLink("ltd/FO_P_MA_001.html", useFullLink)}
					</div>
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
