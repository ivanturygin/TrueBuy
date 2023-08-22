import {router} from "./services/router";
import cart from "./modules/cart";

document.addEventListener("DOMContentLoaded", function () {

	window.addEventListener('hashchange',router);

	router();

	cart();

});
