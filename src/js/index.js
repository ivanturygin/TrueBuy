import {router} from "./services/router";
import {server} from "./services/server";
import cart from "./modules/cart";

document.addEventListener("DOMContentLoaded", function () {

	window.addEventListener('hashchange',router);

	router();

server('./../files/db.json').then(data => {
		data.cards.forEach(element => {
			dataBase = element
		});
	})

});
