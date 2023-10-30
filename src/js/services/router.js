import cards from "../modules/cards";
import {cart, form} from "../modules/cart";
import {setProduct, getProduct, removeStorage} from "./localStorageUtil";
import {appState} from "./state";

const urlPageTitle = '';

const routes = {

	404: {
		template: '',
		title: '404 ' + urlPageTitle,
		description: 'Page not found'
	},

	main: {
		template: './pages/main.html',
		title: 'Home ' + urlPageTitle,
		description: 'This is the homepage'
	},

	product: {
		template: './pages/product.html',
		title: 'Каталог ' + urlPageTitle,
		description: 'This is the homepage'
	},

	productCard:{
		template: './pages/product-card.html',
			title: 'Товары' + urlPageTitle,
			description: 'This is the homepage'
	},

	cart:{
		template: './pages/cart.html',
		title: 'Корзина ' + urlPageTitle,
		description: 'This is the homepage'
	},

	aboutUs: {
		template: './pages/aboutUs.html',
		title: 'О нас' + urlPageTitle,
		description: 'This is the homepage'
	}

};

const router = async () => {

	let path = window.location.hash.replace('#', '');

	const hash = window.location.hash;

	if (hash == "") {
		path = 'main';
	};

	const route = routes[path] || routes[404];

	const html = await fetch(route.template).then((data) => data.text());

	const parent = document.querySelector('.content');

	parent.innerHTML = html;

	document.title = route.title;

	document.querySelector('meta[name = "description"]')
		.setAttribute('content', route.description);

			const parentElement = document.querySelector('.cart__list');

if (route === routes.main){

cart(setProduct, getProduct, removeStorage, appState.cart, appState.counter, parentElement, route.template);
};

if (route === routes.product) {

	cards('.card');

	cart(setProduct, getProduct, removeStorage, appState.cart, appState.counter, parentElement, route.template);

};


if (route === routes.cart) {

	cart(setProduct, getProduct, removeStorage, appState.cart, appState.counter, parentElement, route.template);

	form(appState.cart);

};

};


export {router};