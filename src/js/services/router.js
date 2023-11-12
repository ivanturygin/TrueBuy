import Navigo from "navigo";
import {render} from "./render";
import {pageContent} from "./render";
import {removeHandler} from "../utility/removeHandler";
import {cart} from "../components/cart";
import {appState} from "./state";

// навигация

export const router = new Navigo('/');

// снимаем обработчики событий

	router.hooks({

		before: ((done, params) => {

			if (params.url === 'product') {

				console.log('product');

			removeHandler(appState.handler.handleClick)

			};

			if (params.url === 'cart') {

				console.log('cart');

				removeHandler(appState.handler.handleClick)

			};

			done();

		})

	});

// route главная

router.on('/', () => {

	pageContent.innerHTML = '';

	render.main();
});

// route товары

router.on('/product', () => {

	pageContent.innerHTML = '';

   render.product();

});

// route о нас

router.on('/about', () => {

	pageContent.innerHTML = '';

	render.about();

});

// route корзина

router.on('/cart', () => {

	pageContent.innerHTML = '';

	render.cart();

});

// route страница не найдена

router.notFound(function (query) {

	console.error('Маршрут не найден:', query);

});





