import {header} from "../components/header";
import {footer} from "../components/footer";
import {cardsProduct} from "../db";
import {mainPage} from "../page/main";
import {productPage} from "../page/product";
import {aboutPage} from "../page/about";

import slider from "../modules/slider";

// ищем родительские элементы приложения

const app = document.querySelector('.app');

// создаем контейнер для страниц

export const pageContent = document.createElement('div');

pageContent.classList.add('content');

export const render = {

	// контейнер

	pageConteiner: ()=>{

		app.append(pageContent);

	},

	// шапка сайта 

	header: ()=> {

			app.append(header());
	},

	// подвал сайта

		footer: () => {

			app.append(footer());
		},

	// главная страница

	main: ()=> {

	pageContent.append(mainPage());

	},

	// страница товаров

	product: ()=> {

		pageContent.append(productPage(cardsProduct));

		// подключаем слайдер

		const cardItem = document.querySelectorAll('.card__item');

		for (const item of cardItem){

			slider({
				parentElement: item,
				slide: '.slider__item',
				prevArrow: '.nav-prev',
				nextArrow: '.nav-next',
				wrapperElement: '.slider__wrapper',
				fieldSlides: '.slider__inner',
				navElement: '.slider__nav'
			});
		}
	},

	// страница о нас

	about: () => {

		pageContent.append(aboutPage());

	},


};