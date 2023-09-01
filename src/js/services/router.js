import cards from "../modules/cards";
import cart from "../modules/cart";
import {addToLocalStorage} from "../modules/cart";
import { deleteHendler } from "../modules/cart";

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



		if(route === routes.product){
			cards('.card');
			addToLocalStorage();

			console.log('card');
		}

		if(route === routes.cart){
			cart();
			deleteHendler();
		};

};

export {router};