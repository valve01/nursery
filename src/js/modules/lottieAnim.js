import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';
// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

import { DotLottie } from '@lottiefiles/dotlottie-web';
const lottieEl = document.querySelector('.dotlottie-canvas');
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


const lottiePhoneEl = document.querySelector('.dotlottie-phone');
let lottiePhoneAnim = new DotLottie({
	// autoplay: true,
	// loop: true,
	canvas: lottiePhoneEl,
	src: './img/icons/phone_2.json', 
});

lottiePhoneEl.addEventListener('mouseover', () => {
	lottiePhoneAnim.play();
	// dotLottie.loop('true');
});

const lottieMailEl = document.querySelector('.dotlottie-mail');
let lottieMailAnim = new DotLottie({
	// autoplay: true,
	// loop: true,
	canvas: lottieMailEl,
	src: './img/icons/mail.json', 
});

lottieMailEl.addEventListener('mouseover', () => {
	lottieMailAnim.play();
	// dotLottie.loop('true');
});