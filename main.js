const box = document.querySelector('article');

box.addEventListener('click', () => {
	console.log('test');
	new Anime(
		box,
		{ left: 300, backgroundColor: '#ff69b4' },
		{
			duration: 1000,
			easeType: 'linear',
			callback: () => {
				new Anime(box, { top: 300, backgroundColor: '#000000' });
			},
		}
	);
});
