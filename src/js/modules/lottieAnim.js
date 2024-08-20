import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

import { DotLottie } from '@lottiefiles/dotlottie-web';
const lottieEl = document.querySelector('#dotlottie-canvas');
let dotLottie = new DotLottie({
	// autoplay: true,
	// loop: true,
	canvas: lottieEl,
	src: './img/icons/userAnim.json', 
});

lottieEl.addEventListener('mouseover', () => {
	dotLottie.play();
	// dotLottie.loop('true');
});


