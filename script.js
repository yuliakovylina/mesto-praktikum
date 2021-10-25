let container = document.querySelector('.container');
let editPopup = container.querySelector('.edit-popup');
let profile = container.querySelector('.profile');
let profileName = profile.querySelector('.profile__info-title');
let profileJob = profile.querySelector('.profile__info-subtitle');
let editButton = profile.querySelector('.edit-button');
let closeButton = editPopup.querySelector('.edit-popup__close');
let inputName = editPopup.querySelector('.edit-popup__inputs_name');
let inputJob = editPopup.querySelector('.edit-popup__inputs_job');
let card = container.querySelectorAll('.card');


function openModal() {
    editPopup.classList.remove('edit-popup_opened');
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
}

function closeModal() {
    editPopup.classList.add('edit-popup_opened')
}

function formSubmit(event) {
    event.preventDefault();
    inputName = '';
    inputJob = '';
    profileName.textContent = inputName.value;
    profileJob.textContent = inputJob.value;
}

function toggleLike(event) {
    event.target.classList.toggle('like-button_active')
}

editButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)
card.querySelector('.like-button').addEventListener('click', toggleLike)
editPopup.addEventListener('submit', formSubmit)
//likeButton.addEventListener('click', toggleLike)
