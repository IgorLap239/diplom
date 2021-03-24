'use strict';

import menuPopUp from './modules/menuPopUp';
import toggleMenu from './modules/toggleMenu';
import burgerFixed from './modules/burgerFixed';
import togglePopUp from './modules/togglePopUp';
import mainSlider from './modules/mainSlider';
//import servicesSlider from './modules/servicesSlider';
//import gallerySlider from './modules/gallerySlider';

//меню выбора клуба
toggleMenu();

//всплывающее меню
menuPopUp();


burgerFixed();

//всплывающее окно с промокодом
togglePopUp();

//основной слайдер
mainSlider();

//слайдер карусель
//servicesSlider();

//слайдер галереи
//gallerySlider();