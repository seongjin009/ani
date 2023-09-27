/*
  window/scrollY : 브라우저 스크롤시 스크롤되는 거리값 (동적)
  DOM.offsetTop : 전체 페이지에 특정 DOM의 세로 위치값 (정적)
*/

const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');
const h2 = secs[1].querySelector('h1');
//baseLine은 박스의 모션 시작시점을 기존 박스 영역에서 300만큼 위로 올림
const baseLine = -300;

const initScroll = 0;

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;
	//박스에 실 적용되는 스크롤 수치값을 반대로 300만큼 더해줘야됨
	const scroll2 = scroll - secs[1].offsetTop - baseLine;
	h1.style.transform = `translate(${scroll}px) rotate(${scroll}deg) scale(${1 + scroll / 300})`;
	h1.style.opacity = 1 - scroll / 300;
	console.log(scroll);
	if (scroll > secs[1].offsetTop + baseLine) {
		h2.style.transform = `translate(${scroll2}px) rotate(${scroll2}deg) scale(${
			1 + scroll2 / 300
		})`;
		h2.style.opacity = 1 - scroll2 / 300;
	} //원래위치로 스크롤시 조금씩 오차범위가 발행하기 때문에 원래값이 강제 보정처리
	else {
		h2.style.transform = `translate(${initScroll}px) rotate(${initScroll}deg) scale(${
			1 + initScroll / 300
		})`;
		h2.style.opacity = 1 - initScroll / 300;
	}
});
