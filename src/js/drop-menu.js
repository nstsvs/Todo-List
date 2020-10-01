'use strict'

// открывает боковое выпадающее меню

var menuElem = document.querySelector('.filter__button-arrow');
var titleElem = document.querySelector('.filter__drop-menu');

menuElem.addEventListener('click', function (event) {
  event.preventDefault();
  titleElem.classList.toggle('filter-open');
});

menuElem.addEventListener('click', function (event) {
  event.preventDefault();
  menuElem.classList.toggle('filter__button-arrow--open');
});
