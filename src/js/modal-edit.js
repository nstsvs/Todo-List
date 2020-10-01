'use strict'

// открывает модальное окно "Редактирование задачи"

var edit = document.querySelector('.buttons-task__pen-icon');
var modals = document.querySelector('.modal-edit');
var closeFormEditButton = modals.querySelector('.form__button-undo');
var closeModalEditButton = modals.querySelector('.modal__close-btn');

edit.addEventListener('click', function (event) {
    event.preventDefault();
    modals.classList.add('modal__show');
});

closeFormEditButton.addEventListener('click', function (event) {
    event.preventDefault();
    modals.classList.remove('modal__show');
});

closeModalEditButton.addEventListener('click', function (event) {
  event.preventDefault();
  modals.classList.remove('modal__show');
});
