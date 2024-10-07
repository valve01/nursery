const popularCategoriesBtns = document.querySelectorAll('.popular__categories-link');
const popularCats = document.querySelectorAll('.popular__item');

popularCategoriesBtns.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		// const currentCat = e.target.dataset['cat'];
		// popularCats.forEach((cat) => {
		// 	cat.classList.remove('none');
		// 	if (cat.dataset['cat'] !== currentCat && currentCat !== 'all') {
		// 		cat.classList.add('none');
		// 	}
		// });
		e.preventDefault();
	});
});

const btnsBuy = document.querySelectorAll('.popular__item-btn-buy');
const btnsInCart = document.querySelectorAll('.popular__item-btn-in-cart');

btnsBuy.forEach((btnBuy) => {
	btnBuy.addEventListener('click', () => {
		btnBuy.classList.add('none');
		btnBuy.closest('.popular__item-btn-block').children[1].classList.remove('none');
	});
});

btnsInCart.forEach((btnInCart) => {
	btnInCart.addEventListener('click', () => {
		btnInCart.classList.add('none');
		btnInCart.closest('.popular__item-btn-block').children[0].classList.remove('none');
	});
});
