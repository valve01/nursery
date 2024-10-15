import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.css';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css';

const allPopularSlides = document.querySelectorAll('.popular .catalog__item');
const allNewItemsSlides = document.querySelectorAll('.new-items .catalog__item');

const addSlideClass = (array) => {
	array.forEach((slide) => {
		slide.classList.add('f-carousel__slide');
	});
};

addSlideClass(allPopularSlides);
addSlideClass(allNewItemsSlides);

const popularCarouselContainer = document.getElementById('popularCarousel');
const popularCarouselOptions = {
	infinite: true,
	Autoplay: {
		timeout: 7000,
	},
	slidesPerPage: 1,
	center: false,
};
new Carousel(popularCarouselContainer, popularCarouselOptions, { Autoplay });

const newItemsContainer = document.getElementById('newItemsCarousel');
const newItemsOptions = {
	infinite: true,
	Autoplay: {
		timeout: 5000,
	},
	slidesPerPage: 1,
	center: false,
};
new Carousel(newItemsContainer, newItemsOptions, { Autoplay });
