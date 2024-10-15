const btnsBuy = document.querySelectorAll('.catalog__item-btn-buy');
const btnsInCart = document.querySelectorAll('.catalog__item-btn-in-cart');

btnsBuy.forEach((btnBuy) => {
	btnBuy.addEventListener('click', () => {
		btnBuy.classList.add('none');
		btnBuy.closest('.catalog__item-btn-block').children[1].classList.remove('none');
	});
});

btnsInCart.forEach((btnInCart) => {
	btnInCart.addEventListener('click', () => {
		btnInCart.classList.add('none');
		btnInCart.closest('.catalog__item-btn-block').children[0].classList.remove('none');
	});
});
