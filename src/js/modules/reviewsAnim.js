const reviewsItems = document.querySelector('.reviews__items');
let { top } = reviewsItems.getBoundingClientRect();
let clientHeightValue = window.scrollY ;

window.addEventListener('scroll', () => {
	clientHeightValue = window.scrollY + 600;
	console.log(top, clientHeightValue)
	if (top < clientHeightValue) {
		reviewsItems.classList.add('visible');
		
	}
});


