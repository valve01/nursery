import { isEmail } from 'validator';
import showPopup from './sweetAlarm';
// import hideForm from './hideForm';

const mailInput = document.querySelector('.email__input');
const submitBtn = document.querySelector('.email__btn');
const checkBox=document.querySelector('.email__checkbox-descr')


submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (isEmail(mailInput.value)) {
		mailInput.classList.remove('invalid-value');
		mailInput.classList.remove('valid-value');
		showPopup();
	} else {
		mailInput.value = '';
		mailInput.setAttribute('placeholder', 'Укажите корректный адрес');
		mailInput.classList.add('invalid-value');
	}
});

mailInput.addEventListener('input', () => {
	mailInput.setAttribute('placeholder', 'Ваш электронный адрес');
	if (isEmail(mailInput.value)) {
		submitBtn.removeAttribute('disabled');
		mailInput.classList.add('valid-value');
	} else {
		submitBtn.setAttribute('disabled', 'true');
		mailInput.classList.remove('valid-value');
	}
});
