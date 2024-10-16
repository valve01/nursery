import { computePosition, flip, shift, offset, arrow } from '@floating-ui/dom';

const subMenu = document.querySelector('.sub-menu');
const catalogBtn = document.querySelector('.menu__item-catalog');

const subMenuService = document.querySelector('.sub-menu-service');
const serviceBtn = document.querySelector('.menu__item-service');

function update(reference, floating) {
	computePosition(reference, floating, {
		placement: 'bottom-start',
		middleware: [offset(0), flip(), shift({ padding: 5 })],
	}).then(({ x, y }) => {
		Object.assign(floating.style, {
			left: `${x}px`,
			top: `${y}px`,
		});
	});
}

function showSubService(btn, subM) {
	subM.style.display = 'block';
	update(btn, subM);
}

function hideSubService(subM) {
	subM.style.display = '';
}

const eventHandler = (btn,subM) => {
	[
		['mouseenter',()=> {showSubService(btn,subM)}],
		['mouseleave', ()=> {hideSubService(subM)}],
		['focus', ()=> {showSubService(btn,subM)}],
		['blur', ()=> {hideSubService(subM)}],
	].forEach(([event, listener]) => {
		btn.addEventListener(event, listener);
	});
};
// eventHandler(serviceBtn,subMenuService);
eventHandler(catalogBtn,subMenu);


