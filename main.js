/*
  window/scrollY : 브라우저 스크롤시 스크롤되는 거리값 (동적)
  DOM.offsetTop : 전체 페이지에 특정 DOM의 세로 위치값 (정적)
*/

const secs = document.querySelectorAll('section');
const h1 = secs[0].querySelector('h1');
const h2 = secs[1].querySelector('h1');
//baseLine은 박스의 모션 시작시점을 기존 박스 영역에서 300만큼 위로 올림
const baseLine = -window.innerHeight / 2;

const initScroll = 0;

window.addEventListener('scroll', () => {
	h1.style.transform = `translateX(${setScroll(secs[0])}px)`;
	h2.style.transform = `translateX(${setScroll(secs[1], -window.innerHeight / 2) / 2}px)`;
});

function setScroll(frame, baseLine = 0) {
	const scroll = window.scrollY;
	let scroll2 = 0;
	scroll >= frame.offsetTop + baseLine
		? (scroll2 = scroll - frame.offsetTop - baseLine)
		: (scroll2 = 0);
	return scroll2;
}
