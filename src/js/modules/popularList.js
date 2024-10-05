import List from 'list.js';

var monkeyList = new List('test-list', {
	valueNames: ['name'],
	page: 3,
	pagination: true,
});



const funcPrevent = () => {
	const pages = document.querySelectorAll('.page');
	console.log(pages);
	for (let i = 0; i < pages.length; i++) {
		const element = pages[i];
		console.log(element);
		element.addEventListener('click', (e) => {
			console.log('wtf');
			e.preventDefault();
		});
	}
};
funcPrevent();


monkeyList.on('updated', () => {
	setTimeout(() => {
		funcPrevent();
	}, 0);
});
