import { cardsList, categoryLinksForList, setActiveCat } from './catalogList';
const headerRoutingLinks = document.querySelectorAll('.header a[data-sub-nav]');


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
