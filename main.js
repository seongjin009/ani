const main = document.querySelector('main');
const [top, right, bottom, left, open, content] = main.children;
const close = content.querySelector('.close');
const h2 = content.querySelector('h2');
const speed = 500;

splitText(h2, 0.1, 1);

open.addEventListener('click', () => {
	new Anime(
		top,
		{ width: '100%' },
		{
			duration: speed,
			callback: () => {
				new Anime(
					right,
					{ height: '100%' },
					{
						duration: speed,
						callback: () => {
							new Anime(
								bottom,
								{ width: '100%' },
								{
									duration: speed,
									callback: () => {
										new Anime(
											left,
											{ height: '100%' },
											{
												duration: speed,
												callback: () => {
													content.classList.add('on');
													open.classList.add('off');
												},
											}
										);
									},
								}
							);
						},
					}
				);
			},
		}
	);
});

close.addEventListener('click', () => {
	content.classList.remove('on');

	setTimeout(() => {
		new Anime(top, { width: '0%' });
		new Anime(bottom, { width: '0%' });
		new Anime(left, { height: '0%' });
		new Anime(right, { height: '0%' });
		open.classList.remove('off');
	}, 1000);
});

function splitText(selector, interval = 0, delay = 0) {
	let count = 0;
	const txt = selector.innerText;
	selector.innerHTML = '';
	for (const el of txt) {
		const span = document.createElement('span');
		span.innerText = el;
		span.style.transitionDelay = `${interval * count + delay}s`;
		span.style.display = 'inline-block';
		selector.append(span);
		count++;
	}
}
