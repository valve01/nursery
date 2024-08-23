const reviewsItems = document.querySelectorAll('.reviews__item');

const reviewsItemsList = document.querySelector('.reviews__item');
let { top } = reviewsItemsList.getBoundingClientRect();
let clientHeightValue = window.scrollY;

window.addEventListener('scroll', () => {
	clientHeightValue = window.scrollY + 600;
	console.log(top, clientHeightValue);
	if (top < clientHeightValue) {
		reviewsItems.forEach((item) => {
			item.classList.add('visible');
		});
	}
});
