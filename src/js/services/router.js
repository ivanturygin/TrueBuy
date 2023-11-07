import Navigo from "navigo";
import {render} from "./render";
import {pageContent} from "./render";

// навигация

export const router = new Navigo('/');

router.on('/', () => {

	pageContent.innerHTML = '';

	render.main();
});

router.on('/product', () => {

	pageContent.innerHTML = '';

	render.product();

});

router.on('/about', () => {

	pageContent.innerHTML = '';

	render.about();

});


router.on('/cart', () => {

	pageContent.innerHTML = '';

	render.cart();

});


router.notFound(function (query) {

	console.error('Маршрут не найден:', query);

});
