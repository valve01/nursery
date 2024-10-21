import swal from 'sweetalert';
const mailInput = document.querySelector('.mail-form__user-mail');

const showPopup = () => {
	swal({
		title: 'Message sent successfully',
		text: `We will reply to you at: ${mailInput.value} `,
		icon: 'success',
		button: "I'm so excited!",
	});
};

export default showPopup;
