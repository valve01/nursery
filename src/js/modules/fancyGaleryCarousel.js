import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.css';

const allGalerySlides = document.querySelectorAll('.galery .galery__item');

const addSlideClass = (array) => {
	array.forEach((slide) => {
		slide.classList.add('f-carousel__slide');
	});
};

addSlideClass(allGalerySlides);

const galeryCarouselContainer = document.getElementById('galeryCarousel');
const galeryCarouselOptions = {
	infinite: false,
	Dots: {
		dynamicFrom: 50,
	},

	slidesPerPage: 1,
	center: false,
};
new Carousel(galeryCarouselContainer, galeryCarouselOptions);
