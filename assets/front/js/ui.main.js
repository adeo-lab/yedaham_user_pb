/*
 * FO 메인
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


