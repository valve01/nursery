import swal from 'sweetalert';
const mailInput = document.querySelector('.email__input');

const showPopup = () => {
	swal({
		title: 'Сообщение успешно отправлено',
		text: `Мы пришлем вам ответ на электронный адрес: ${mailInput.value} `,
		icon: 'success',
		button: "Ок, жду",
	});
};

export default showPopup;
