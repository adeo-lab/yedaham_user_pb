
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.in-nav .gnb-text');
    const sections = document.querySelectorAll('.nav-layer .gnb-list > .gnb-item');
    const scrollContainer = document.querySelector('.inner-bx');
    const navContainer = document.querySelector('.in-nav'); // 네비게이션 컨테이너를 상수로 미리 정의

    const onScroll = () => {
        // ### --- 이 부분에 조건을 추가합니다. --- ###
        // 현재 브라우저 뷰포트의 너비가 1023px 초과이면 함수 실행을 즉시 종료합니다.
        if (window.innerWidth > 1023) {
            return;
        }

        let currentSectionId = '';
        const scrollTop = scrollContainer.scrollTop;
        const containerHeight = scrollContainer.clientHeight;
        const centerPoint = scrollTop + (containerHeight / 2);

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            const isVisible = (scrollTop + containerHeight) > sectionTop && scrollTop < (sectionTop + sectionHeight);
            
            if (isVisible) {
                if (centerPoint >= sectionTop && centerPoint < (sectionTop + sectionHeight)) {
                    currentSectionId = section.id;
                    break;
                }
            }
        }

        navLinks.forEach(link => {
            link.classList.remove('on');
        });
        
        if (currentSectionId) {
            const matchingLink = document.querySelector(`.in-nav li.gnb-item#${currentSectionId} .gnb-text`);
            if (matchingLink) {
                matchingLink.classList.add('on');
                
                const activeGnbItem = matchingLink.closest('.gnb-item');
                
                if (activeGnbItem && navContainer) {
                    const itemLeft = activeGnbItem.offsetLeft;
                    const targetScroll = itemLeft - 16;
                    
                    navContainer.scrollTo({
                        left: targetScroll,
                        behavior: 'smooth'
                    });
                }
            }
        }
    };

    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', onScroll);
        // 페이지 로드 시에도 초기 상태를 설정하기 위해 한 번 호출합니다.
        onScroll();
    }

    // 브라우저 크기 변경 시에도 `onScroll` 함수가 다시 실행되도록 이벤트 리스너를 추가합니다.
    window.addEventListener('resize', onScroll);
});
/*
document.addEventListener('DOMContentLoaded', () => {
    // 메뉴 항목, 섹션 요소, 스크롤 컨테이너를 가져옵니다.
    const navLinks = document.querySelectorAll('.in-nav .gnb-text');
    const sections = document.querySelectorAll('.nav-layer .gnb-list > .gnb-item');
    const scrollContainer = document.querySelector('.inner-bx');

    const onScroll = () => {
        let currentSectionId = '';
        const scrollTop = scrollContainer.scrollTop;
        const containerHeight = scrollContainer.clientHeight;
        const centerPoint = scrollTop + (containerHeight / 2);

        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            const isVisible = (scrollTop + containerHeight) > sectionTop && scrollTop < (sectionTop + sectionHeight);
            
            if (isVisible) {
                if (centerPoint >= sectionTop && centerPoint < (sectionTop + sectionHeight)) {
                    currentSectionId = section.id;
                    break;
                }
            }
        }

        navLinks.forEach(link => {
            link.classList.remove('on');
        });
        
        if (currentSectionId) {
            const matchingLink = document.querySelector(`.in-nav li.gnb-item#${currentSectionId} .gnb-text`);
            if (matchingLink) {
                matchingLink.classList.add('on');

                // ### --- 이 부분에 코드를 수정합니다. --- ###
                // 가로 스크롤을 담당하는 컨테이너를 가져옵니다.
                const navContainer = document.querySelector('.in-nav');
                const activeGnbItem = matchingLink.closest('.gnb-item');
                
                if (activeGnbItem && navContainer) {
                    // 활성화된 아이템의 왼쪽 위치를 가져옵니다.
                    const itemLeft = activeGnbItem.offsetLeft;
                    
                    // 목표 스크롤 위치를 계산합니다. 아이템의 왼쪽 위치에서 16px을 뺍니다.
                    const targetScroll = itemLeft - 16;
                    
                    // navContainer를 계산된 위치로 부드럽게 스크롤합니다.
                    navContainer.scrollTo({
                        left: targetScroll,
                        behavior: 'smooth'
                    });
                }
            }
        }
    };

    if (scrollContainer) {
        scrollContainer.addEventListener('scroll', onScroll);
        onScroll();
    }
});
*/