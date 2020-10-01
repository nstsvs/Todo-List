'use strict'

// открывает бургер-меню

var edit = document.querySelector('.header__nav-toggle');
var modal = document.querySelector('.nav');

edit.addEventListener('click', function (event) {
    event.preventDefault();
    modal.classList.toggle('nav-open');
});
