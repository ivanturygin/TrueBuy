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

for (let i = 0 ; i < products.length ; i++){

	if (products[i].id === id){

		products.splice(i,1)

		localStorage.setItem('product', JSON.stringify(products));
	};
}};

export {setProduct, getProduct, removeStorage};