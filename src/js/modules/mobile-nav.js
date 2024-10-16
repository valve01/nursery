function mobileNav() {
	// Mobile nav button
	const navLinks = document.querySelectorAll('.mobile-nav__link');
	const navBtn = document.querySelector('.mobile-burger__btn');
	const nav = document.querySelector('.mobile-nav__wrapper');
	const closeBtn = document.querySelector('.mobile-nav__close-btn');
	
	navLinks.forEach((link) => {
		link.onclick = function () {
			nav.classList.remove('mobile-nav--active');
		};
	});
	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--active');
		// document.body.classList.toggle('no-scroll');
	};
	closeBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--active');
		// document.body.classList.toggle('no-scroll');
	};
}
export default mobileNav;
