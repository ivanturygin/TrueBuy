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
		template: '',
		title: 'Product ' + urlPageTitle,
		description: 'This is the productpage'
	},

};

const handleLocation = async () => {

	let path = window.location.hash.replace('#', '');

	const hash = window.location.hash;

	if (hash == "") {
		path = 'main';
	};

	const route = routes[path] || routes[404];

	const html = await fetch(route.template).then((data) => data.text());

	const parent = document.querySelector('.content');

	console.log(html)

	parent.innerHTML = html;

	document.title = route.title;

	document.querySelector('meta[name = "description"]')
		.setAttribute('content', route.description);

	cards(parent, html);

};

export {handleLocation};