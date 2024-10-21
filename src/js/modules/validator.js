import { isEmail } from 'validator';
import showPopup from './sweetAlarm';
// import hideForm from './hideForm';

const mailInput = document.querySelector('.email__input');
const submitBtn = document.querySelector('.email__btn');


submitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (isEmail(mailInput.value)) {
		mailInput.classList.remove('invalid-value');
		mailInput.classList.remove('valid-value');
		
		// hideForm(e);
		
		showPopup();
	} else {
		mailInput.value = '';
		mailInput.setAttribute('placeholder', 'Invalid Email');
		mailInput.classList.add('invalid-value');
		// e.preventDefault();
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
