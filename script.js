let container = document.querySelector('.container');
let editPopup = container.querySelector('.edit-popup');
let profile = container.querySelector('.profile');
let editButton = profile.querySelector('.edit-button');
let closeButton = editPopup.querySelector('.edit-popup__close')

function toggleModal() {
    editPopup.classList.toggle('edit-popup_opened')
}

editButton.addEventListener('click', toggleModal)
closeButton.addEventListener('click', toggleModal)