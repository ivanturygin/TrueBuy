import {router} from "./modules/router";

document.addEventListener("DOMContentLoaded", function () {

	window.addEventListener('hashchange',router);

	router();

/*	slider({

		content: '.card__item',

		conteiner: '.slider__item',

		slides: '.slider__item',

		slider: '.product',

		prev: '.nav-prev',

		next: '.nav-next',

		wrapper: '.slider__wrapper',

		field: '.slider__inner',

		width: window.getComputedStyle(wrapper).width,

		nav: '.slider__nav'

	});*/

});
