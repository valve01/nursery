import { Carousel } from '@fancyapps/ui/dist/carousel/carousel.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.css';
import { Autoplay } from "@fancyapps/ui/dist/carousel/carousel.autoplay.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.autoplay.css";


const container = document.getElementById('myCarousel');
const options = {
	infinite: true,
	Autoplay: {
		timeout: 3000,
	  },
	  slidesPerPage:1
};

new Carousel(container, options,{ Autoplay });
