import { server } from "../services/server";

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
		title: 'Product ' + urlPageTitle,
		description: '. / pages / product.html '
	},

};

const handleLocation = () => {

	let path = window.location.hash.replace('#', '');

	const hash = window.location.hash;

	if (hash == "") {
		path = 'main';
	};

	const route = routes[path] || routes[404];

	server(route.template).then((html) => {

		const parent = document.querySelector('.content');

		parent.innerHTML = html;
	});

	document.title = route.title;

	document.querySelector('meta[name = "description"]')
		.setAttribute('content', route.description);

	cards(parent, html);

}


export {handleLocation};