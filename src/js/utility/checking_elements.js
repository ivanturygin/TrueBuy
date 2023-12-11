import {appState} from "../services/state";
export const checking = {

items: function(item) {

const itemElement = document.querySelectorAll(item);

for (let i = 0; i < itemElement.length; i++){

let itemId = itemElement[i].getAttribute('data-id');

let cartItem = appState.cart.find(item => item.id === itemId);


if (cartItem !== undefined) {

itemElement[i].classList.add("cart-add");

const btn =	itemElement[i].querySelector(".card__button-btn");

btn.innerText = 'Товар в корзине';

};
};
},

// сохраняет счетчик товаров в корзине при перезагрузке

cartCount: function(item) {

	const itemCount = document.querySelectorAll(item);

	for (let i = 0; i < appState.cart.length; i++) {

		const pcs = appState.cart[i].pcs + '' ;

		itemCount[i].value = pcs;

	}
}

};