const getProduct = () => {

	const productLocalStorage = localStorage.getItem('product');

	if (productLocalStorage !== null) {

		return JSON.parse(productLocalStorage);

	}

	return [];

};

const setProduct = (data) => {

	let products = getProduct();

	products.push(data);

	localStorage.setItem('product', JSON.stringify(products))
};


const removeStorage = (id) => {

	let products = getProduct();

	let array = JSON.parse(localStorage.getItem('product'));

	array.forEach((element) => {
		if (element.id === id) {


			array.splice(array.length, 1);

       localStorage.setItem('product', JSON.stringify(array));
		}
	})

}

export {setProduct, getProduct, removeStorage};