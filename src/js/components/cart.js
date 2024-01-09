import {setProduct,getProduct,removeStorage,setState} from '../utility/localStorageUtil';
import {appState} from '../services/state';
import {counterProduct} from './counter';


export const cart = {

	// добавить товар в корзину

	addProduct: function (appState, counterProduct) {

		const handleClick = (e) => {

			if (e.target.hasAttribute("data-cart")) {
				const card = e.target.closest(".card__item");

				const id = card.getAttribute("data-id"),
					img = card.querySelector(".slider__img").getAttribute("src"),
					title = card.querySelector(".card__title").textContent,
					price = card.querySelector(".card__price-text").textContent,
					colorName = card.querySelector('.product-color__item_on').dataset.color,
               color = card.querySelector('.product-color__img').getAttribute('src');
			
					console.log(color);

				const productInfo = {
					id: id,

					img: img,

					title: title,

					price: price,

					pcs: 1,

					colorName: colorName
				};


			const cartAdd = card.classList.toggle("cart-add");

			const btn = card.querySelector(".card__button-btn");

			if (!cartAdd) {

	      btn.innerText = 'В корзину';

			this.removeProduct(appState, id, counterProduct);

			removeStorage(id);

			}else{

					appState.cart.push(productInfo);

					setProduct(productInfo);

					counterProduct();

					btn.innerText = 'Товар в корзине';
			}

			}

		};

	window.addEventListener("click", handleClick);

	return handleClick

	},

// удалить карточку товара из корзины

	removeItem: function (counterProduct) {

	const handleRemoveProduct = (e) => {

		if (e.target.dataset.action === "del") {

			const elementParent = e.target.closest(".cart__item");

			const id = elementParent.getAttribute("data-id");

			removeStorage(id);

			elementParent.remove();

		this.removeProduct(appState, id, counterProduct)

		this.totalPrice();

		}
	};

	window.addEventListener("click", handleRemoveProduct);

return handleRemoveProduct

	},

// удаляем товар из state

	removeProduct: function (appState, id, counterProduct) {

				for (let i = 0; i < appState.cart.length; i++) {

					if (appState.cart[i].id === id) {
						appState.cart.splice(i, 1);
					}
				};

				counterProduct();
			},

// определяем сумму товаров в корзине			

				totalPrice: function(){
					let totalPrice = appState.cart.reduce((total, item) => {
						const pcs = item.pcs;

						if (typeof item.price === "number") {
							return total + item.price;
						} else if (typeof item.price === "string") {
							const numberPrice = parseFloat(item.price);

							let numberPriceMult = numberPrice * pcs;

							if (!isNaN(numberPrice)) {
								return total + numberPriceMult;
							}
						}

						return totalPrice;
					}, 0)

					const elementSum = document.querySelector(".cart__price-sum");

					elementSum.innerText = totalPrice + " " + "₽";
				},

// счетчик товаров +-

counter: function(appState){

	let counter;

	let element = document.querySelectorAll(".cart__item");

// добавляем количество товаров в appState

	const setPcs = (id, quantity) => {

		appState.cart.forEach((item) => {

			if (item.id === id) {

				item.pcs = quantity;

			};

		});
	};

	element.forEach((item) => {

		const counterValue = item.querySelector("[data-counter]").value;

		const handlerCounter = (e) => {

			if (e.target.dataset.action === "plus" || e.target.dataset.action === "minus"){

				const counterParent = e.target.closest(".caunter");

				const elementCounter = counterParent.querySelector("[data-counter]");

				const counterItemParent = e.target.closest(".cart__item");

				const id = counterItemParent.getAttribute("data-id");

				const price = counterItemParent.querySelector(".new").textContent;

				if (e.target.dataset.action === "plus") {

					elementCounter.value = ++elementCounter.value;

					counter = +elementCounter.value;

					setPcs(id, counter);

					counterProduct();

						this.totalPrice();

				};

				if (e.target.dataset.action === "minus") {

					elementCounter.value = --elementCounter.value;

					counter = +elementCounter.value;

					setPcs(id, counter);

					counterProduct();

						this.totalPrice();

				};
			};
		};

		item.addEventListener("click", handlerCounter);

	});

},


// отрисовываем добавленный товар

		renderItem: function () {

			let data = appState.cart;

			const cartList = document.createElement('div');
			cartList.classList.add('cart__list');

		
		data.forEach(({
			id,
			img,
			title,
			price,
			color
		}) => {

			const elementItem = document.createElement("div");

			elementItem.classList.add("cart__item");

			elementItem.dataset.id = id;

			const content = `<div class="cart__item-image">
               		<img src=${img} alt="">
               	</div>

               	<div class="cart__item-content">

               		<div class="close">
               			<div class="close__inner">
               				<span class="close__text">Удалить</span>
               				<div class="close__img" data-action='del'></div>
               			</div>
               		</div>

               		<div class="cart__item-title">${title}</div>
               		<div class="cart__item-saze">Размеры: 220 см x 103 см x 86 см</div>
               		<div class="cart__item-textile">Ткань: <span>Ultra Coral велюр</span></div>
							<div class="cart__item-textile">Цвет: <span>${color}</span></div>

               		<div class="cart__item-bottom">
               			<div class="caunter">
               				<div class="caunter__minus" data-action="minus">-</div>
               				<input class="caunter__caunt" value="1" data-counter>
               				<div class="caunter__plus" data-action="plus">+</div>
               			</div>

               			<div class="cart__item-price">
               				<span class="new">${price}</span>
               				<span class="old">97990 ₽</span>
               			</div>
               		</div>

               	</div>`;

			elementItem.insertAdjacentHTML('afterbegin', content)

			cartList.appendChild(elementItem);

		})

			const outer = cartList.outerHTML;

			return outer

		},

};