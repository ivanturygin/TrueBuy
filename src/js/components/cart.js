import {removeHendler} from '../utility/removeHendler';
import {setProduct,getProduct,removeStorage,setState} from '../utility/localStorageUtil';


export const cart = {

	// добавить товар в корзину

	addProduct: (appState)=>{

		const hendleClick = (e) => {
			if (e.target.hasAttribute("data-cart")) {
				const card = e.target.closest(".card__item");

				const id = card.getAttribute("data-id"),
					img = card.querySelector(".slider__img").getAttribute("src"),
					title = card.querySelector(".card__title").textContent,
					price = card.querySelector(".card__price-text").textContent,
					checkStateId = '';

				const productInfo = {
					id: id,

					img: img,

					title: title,

					price: price,

					pcs: 1,
				};

				card.classList.toggle("cart-add");

				appState.cart.push(productInfo);

				setProduct(productInfo);

			}
		};

		window.addEventListener("click", hendleClick);

		removeHendler(hendleClick);

	},

// удалить товар из корзины

	removeProduct: (element, id) => {
			const remove = (id) => {
				removeStorage(id);

				for (let i = 0; i < stateCart.length; i++) {
					if (stateCart[i].id === id) {
						stateCart.splice(i, 1);
					}

					counterProduct();
				}
			}
		},

		renderItem: (appState) => {

			let data = appState.cart;

			const a = document.createElement('div');

			data.forEach(({
				id,
				img,
				title,
				price
			}) => {

				console.log(id);
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

				elementItem.innerHTML = content;

				a.appendChild(elementItem);
			});

			return a

		},

};