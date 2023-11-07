
export function removeHendler(action) {

	window.addEventListener("popstate", () => {

		window.removeEventListener("click", action);

	});

};