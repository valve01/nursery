import { cardsList, categoryLinksForList, setActiveCat } from './catalogList.js';
const catalogRoutingLinks = document.querySelectorAll('.header a[data-sub-nav], .footer a[data-footer-nav], products a[data-products-nav] ');

const setActiveCategory = (currentHush) => {
	categoryLinksForList.forEach((categoryLink) => {
		if (categoryLink.dataset['cat'] == currentHush) {
			setActiveCat(categoryLink);
		}
	});
};

const selectCategory = (currentHush) => {
	cardsList.filter(function (item) {
		if (item.values().category == currentHush || currentHush == '') {
			return true;
		} else {
			return false;
		}
	});
};

const initWhenRedirect = () => {
	if (window.location.href.includes('catalog')) {
		setTimeout(() => {
			let currentHush = window.location.hash.substring(1);
			if (window.location.href.includes(`${currentHush}`)) {
				selectCategory(currentHush);
				setActiveCategory(currentHush);
			}
		}, 0);
	}
};

initWhenRedirect();

catalogRoutingLinks.forEach((link) => {
	link.addEventListener('click', initWhenRedirect);
});
