const popularCategoriesBtns = document.querySelectorAll('.popular__categories-link');
const popularCats = document.querySelectorAll('.popular__item');


popularCategoriesBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const currentCat = e.target.dataset['cat'];
		popularCats.forEach((cat) => {
			cat.classList.remove('none');
			if (cat.dataset['cat'] !== currentCat && currentCat !== 'all') {
				cat.classList.add('none');
			}
		});
		e.preventDefault();
	});
});
