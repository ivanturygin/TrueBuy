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

	products.forEach((element) => {
		if(element.id === id){
			console.log(element.length);
		}
	})
}

export {setProduct, getProduct, removeStorage};