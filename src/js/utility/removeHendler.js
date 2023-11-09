import {router} from '../services/router'

export function removeHendler(action) {

	router.hooks({

		after: console.log('hello router')
	});

	window.addEventListener("popstate", (e) => {

		window.removeEventListener("click", action)


	});

};