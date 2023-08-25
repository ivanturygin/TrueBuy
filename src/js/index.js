import {router} from "./services/router";
import cart from "./modules/cart";
import {server} from "./services/server";
import { LocalStorageUtil } from "./services/localStorageUtil";


document.addEventListener("DOMContentLoaded", function () {

	window.addEventListener('hashchange',router);

	router();

	cart();

	const localStorage = new LocalStorageUtil();



server('./../files/db.json').then(data => {
		data.cards.forEach(element => {
			dataBase = element
		});
	})

});
