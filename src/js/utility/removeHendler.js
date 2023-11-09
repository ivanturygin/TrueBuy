export function removeHendler(action) {

	window.addEventListener('hashchange', function () {
		console.log('hello route');
	});

};


const addProduct = (appState) => {
	const handleClick = (e) => {
		// Your event handling code here
	};

	const addProductElement = document.querySelector("#addProduct");

	const handleAddProductClick = (e) => {
		handleClick(e);

		// Remove the event listener after the click
		addProductElement.removeEventListener("click", handleAddProductClick);
	};

	addProductElement.addEventListener("click", handleAddProductClick);
};



