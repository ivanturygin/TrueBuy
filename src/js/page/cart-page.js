import {appState} from "../services/state";
import {form} from "../components/form";

export function cartPage(cart, noProduct){

	const element = document.createElement('div');

	element.classList.add('cart');

	const content = `
	<div class="conteiner">
		<div class="cart__inner">

			<div class="cart__top">
			
			${appState.cart.length > 0 ? cart.renderItem() : noProduct()}

				<div class="cart__price">

					<div class="line"></div>
					<div class="cart__price-text">Итого товаров на сумму:</div>
					<div class="cart__price-sum">46990 ₽ </div>
					<div class="line"></div>
				</div>
			</div>

			${form()}
			
		</div>
	</div>
	`;

	element.insertAdjacentHTML('afterbegin', content)

	return element

};