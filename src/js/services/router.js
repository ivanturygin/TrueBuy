import Navigo from "navigo";
import {render} from "./render";
import {pageContent} from "./render";
import {removeHandler} from "../utility/removeHandler";
import {cart} from "../components/cart";
import {appState} from "./state";
import {checking} from "../utility/checking_elements";

// навигация

export const router = new Navigo('/');

// снимаем обработчики событий

	router.hooks({

		before: ((done) => {

			removeHandler(appState.handler);

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

   checking.items('.card__item');

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

  // checking.items('.cart__item', params.url)

checking.cartCount('.caunter__caunt');

});

// route страница не найдена

router.notFound(function (query) {

	console.error('Маршрут не найден:', query);

});





