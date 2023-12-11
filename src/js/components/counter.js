import {appState} from "../services/state";

export function counter() {

	const counter = document.createElement('div');

	counter.classList.add('count');

	const content = `

		<span class = "count__text"></span>

	`;

	counter.innerHTML = content;

	const outer = counter.outerHTML;

   return outer
};



export const counterProduct = () => {

	const counterProduct = document.querySelector(".count"),
		countProductText = counterProduct.querySelector(".count__text"),
		noproduct = document.querySelector(".noproduct");

		let stateCart = appState.cart;

		let stateCounter = appState.counter;

		stateCounter = stateCart.length;

		stateCart.forEach(({pcs}) => {

	if (pcs > 1){

	stateCounter =	(stateCounter + pcs) - 1;

	};
	
		});



	countProductText.innerText = stateCounter;

	if (stateCounter === 0) {
		counterProduct.classList.add("count_clear");

	} else {
		counterProduct.classList.remove("count_clear");

	}
};