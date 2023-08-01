import {router} from "./modules/router";

document.addEventListener("DOMContentLoaded", function () {

	window.addEventListener('hashchange',router);

	router();

});
