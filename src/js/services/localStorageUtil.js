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

export {setProduct, getProduct};