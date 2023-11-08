
export function removeHendler(action) {

	window.addEventListener("popstate", () => {

		console.log(action);

		window.removeEventListener("click", action);

	});

};