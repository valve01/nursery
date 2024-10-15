import { cardsList, categoryLinksForList } from './catalogList';
console.log(categoryLinksForList);
const headerRoutingLinks = document.querySelectorAll('.header a[data-sub-nav]');
// const rulesBlock = document.querySelector('.rules-block');
// const scrollToRules = () => {
// 	rulesBlock.scrollIntoView(top);
// };
const setActiveCategory = (currentHush) => {
	categoryLinksForList.forEach((categoryLink) => {
		if(categoryLink.dataset['cat']==currentHush){

			categoryLinksForList.forEach((item) => {
				item.classList.remove('catalog__categories-link--active');
			});
			categoryLink.classList.add('catalog__categories-link--active');

		}
	});
};

const selectCategory = (currentHush) => {
	cardsList.filter(function (item) {
		if (item.values().category == currentHush) {
			return true;
		} else {
			return false;
		}
	});
};

const initWhenRedirect = () => {
	setTimeout(() => {
		let currentHush = window.location.hash.substring(1);
		if (window.location.href.includes(`${currentHush}`)) {
			selectCategory(currentHush);
			setActiveCategory(currentHush);
		}
	}, 0);
};

initWhenRedirect();

headerRoutingLinks.forEach((link) => {
	link.addEventListener('click', initWhenRedirect);
});
