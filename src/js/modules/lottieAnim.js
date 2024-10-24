import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';
// // define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

import { DotLottie } from '@lottiefiles/dotlottie-web';

const phoneContainer = document.querySelector('.footer__phone');
const lottiePhoneEl = document.querySelector('.dotlottie-phone');
let lottiePhoneAnim = new DotLottie({
	canvas: lottiePhoneEl,
	src: './img/icons/phone_3.json',
});

phoneContainer.addEventListener('mouseover', () => {
	lottiePhoneAnim.play();
});

const emailContainer = document.querySelector('.footer__email');
const lottieMailEl = document.querySelector('.dotlottie-mail');
let lottieMailAnim = new DotLottie({
	canvas: lottieMailEl,
	src: './img/icons/mail_3.json',
});

emailContainer.addEventListener('mouseover', () => {
	lottieMailAnim.play();
});
