import {router} from "./services/router";
import {server} from "./services/server";
import {setState} from "./services/localStorageUtil";

document.addEventListener("DOMContentLoaded", function () {

	setState();

	window.addEventListener('hashchange',router);

	router();

server('./../files/db.json').then(data => {
		data.cards.forEach(element => {
			dataBase = element
		});
	})

});
