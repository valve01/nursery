import List from 'list.js';

var monkeyList = new List('test-list', {
	valueNames: ['name','category'],
	page: 12,
	pagination: true,
});

const funcPrevent = () => {
	const pages = document.querySelectorAll('.page');

	for (let i = 0; i < pages.length; i++) {
		const element = pages[i];

		element.addEventListener('click', (e) => {
		
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

const categuryLinksForList = document.querySelectorAll('.popular__categories-link');
categuryLinksForList.forEach((link) => {
	link.addEventListener('click', () => {
	

		monkeyList.filter(function (item) {
			console.log(item)
			if (item.values().category == 'Плодовые') {
				return true;
			} else {
				return false;
			}
		});

		// setTimeout(() => {
		// monkeyList.clear();
		// monkeyList.update();
		// monkeyList.remove('name', 'Слива Медовая');
		// monkeyList.update();
		// monkeyList.items.forEach((item, i) => {
		// 	if (i == 1) {
		// 		item.hide();
		// 	}
		// });
		// monkeyList.update();
		// monkeyList.items.forEach((item) => {
		// 	item.show();
		// });
		// monkeyList.update();
		// }, 1000);
		// setTimeout(() => {
		// 	monkeyList.add('name', 'Слива Медовая');
		// 	monkeyList.update();
		// }, 5000);
	});
});
