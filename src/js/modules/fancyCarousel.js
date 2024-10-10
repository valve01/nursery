import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.css';
import { Autoplay } from '@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.autoplay.css';

const allGalerySlides = document.querySelectorAll('.galery .galery__item');
const allPopularSlides = document.querySelectorAll('.popular .catalog__item');
const allNewItemsSlides = document.querySelectorAll('.new-items .catalog__item');

const addSlideClass = (array) => {
	array.forEach((slide) => {
		slide.classList.add('f-carousel__slide');
	});
};

addSlideClass(allGalerySlides);
addSlideClass(allPopularSlides);
addSlideClass(allNewItemsSlides);

const galeryCarouselContainer = document.getElementById('galeryCarousel');
const galeryCarouselOptions = {
	// infinite: true,
	Autoplay: {
		timeout: 7000,
	},
	slidesPerPage: 1,
	//   fill:false,
	center: false,
};
new Carousel(
	galeryCarouselContainer,
	galeryCarouselOptions,
	// { Autoplay }
);

const popularCarouselContainer = document.getElementById('popularCarousel');
const popularCarouselOptions = {
	infinite: true,
	Autoplay: {
		timeout: 7000,
	},
	slidesPerPage: 1,
	//   fill:false,
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
	//   fill:false,
	center: false,
};
new Carousel(newItemsContainer, newItemsOptions, { Autoplay });
