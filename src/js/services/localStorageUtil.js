
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

		setProduct(id) {

			let products = this.getProduct();

			const index = products.indexOf(id);

			if (index === -1) {
				products.push(id);
			} else {
				products.splice(index, 1)
			}

			localStorage.setItem(this.keyName, JSON.stringify(products))
		}
	};

	export{LocalStorageUtil};