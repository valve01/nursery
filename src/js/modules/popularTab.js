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
