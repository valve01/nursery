import { isEmail } from 'validator';
import showPopup from './sweetAlarm';
import hideForm from './hideForm';

const mailInput = document.querySelector('.mail-form__user-mail');
const submitBtn = document.querySelector('.mail-form__form .read-btn');

submitBtn.addEventListener('click', (e) => {
	if (isEmail(mailInput.value)) {
		mailInput.classList.remove('invalid-value');
		mailInput.classList.remove('valid-value');
		hideForm(e);
		showPopup();
	} else {
		mailInput.value = '';
		mailInput.setAttribute('placeholder', 'Invalid Email');
		mailInput.classList.add('invalid-value');
		e.preventDefault();
	}
});

mailInput.addEventListener('input', () => {
	mailInput.setAttribute('placeholder', 'Email Address');
	if (isEmail(mailInput.value)) {
		mailInput.classList.add('valid-value');
	} else {
		mailInput.classList.remove('valid-value');
	}
});
