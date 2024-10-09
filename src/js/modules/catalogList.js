import List from 'list.js';

var cardsList = new List('list-container', {
	valueNames: ['name', 'category'],
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

cardsList.on('updated', () => {
	setTimeout(() => {
		funcPrevent();
	}, 0);
});

const categuryLinksForList = document.querySelectorAll('.catalog__categories-link');
categuryLinksForList.forEach((link) => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const currentCat = e.target.dataset['cat'];
		categuryLinksForList.forEach((item) => {
			item.classList.remove('catalog__categories-link--active');
		});
		link.classList.add('catalog__categories-link--active');
		cardsList.filter(function (item) {
			if (item.values().category == currentCat || currentCat == 'all') {
				return true;
			} else {
				return false;
			}
		});
	});
});

const clearInputBtn = document.querySelector('.search-and-pagination-wrapper .cross-search');
const catalogInputSearch = document.querySelector('.search-and-pagination-wrapper .search');
clearInputBtn.addEventListener('click', () => {
	catalogInputSearch.value = '';
	cardsList.search();
});
