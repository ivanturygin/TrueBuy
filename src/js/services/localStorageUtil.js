
	class LocalStorageUtil {

		constructor() {
			this.keyName = 'product';
		}

		getProduct() {

			const productLocalStorage = localStorage.getItem(this.keyName);

			if (productLocalStorage !== null) {

				return JSON.parse(productLocalStorage);

			}

			return [];

		};

		setProduct(data) {

			let products = this.getProduct();

				products.push(data);
			
			localStorage.setItem(this.keyName, JSON.stringify(products))
		}
	};

	export{LocalStorageUtil};