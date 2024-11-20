import swal from 'sweetalert';
const mailInput = document.querySelector('.email__input');

const showPopup = () => {
	swal({
		title: 'Спасибо что подписались на нашу рассылку',
		text: `Теперь мы будем присылать вам интересные письма на адрес: ${mailInput.value} `,
		icon: 'success',
		button: 'Ок, жду',
	});
};

export default showPopup;
