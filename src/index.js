'use strict';

import menuPopUp from './modules/menuPopUp';
import toggleMenu from './modules/toggleMenu';
import burgerFixed from './modules/burgerFixed';
import arrowShow from './modules/arrowShow';
import togglePopUp from './modules/togglePopUp';
import mainSlider from './modules/mainSlider';
//import servicesSlider from './modules/servicesSlider';
//import gallerySlider from './modules/gallerySlider';

//меню выбора клуба
toggleMenu();

//всплывающее меню
menuPopUp();

//фиксация меню
burgerFixed();

//стрелка прокрутки вверх 
arrowShow();

//всплывающее окно с промокодом
togglePopUp();

//основной слайдер
mainSlider();

//слайдер карусель
//servicesSlider();

//слайдер галереи
//gallerySlider();