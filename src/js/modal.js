'use strict'

// открывает модальное окно "Создать задачу"

var link = document.querySelector('.header__add-task');
var popup = document.querySelector('.modal');
var closeFormButton = popup.querySelector('.form__button-undo');
var closeModalButton = popup.querySelector('.modal__close-btn');

link.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.add('modal__show');
});

closeFormButton.addEventListener('click', function (event) {
    event.preventDefault();
    popup.classList.remove('modal__show');
});

closeModalButton.addEventListener('click', function (event) {
  event.preventDefault();
  popup.classList.remove('modal__show');
});




function validate() {
  var userName = document.getElementById("name");


  if(!userName.value) {
    userName.style.border = "2px solid red";
    return false;
  }

  return true;

}
