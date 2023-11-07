import {cardsItem} from "../components/cards-item";


export function productPage(cardsProduct){

	const page = document.createElement('div');
	page.classList.add('product');

	const content = `<div class="conteiner">

	<div class="card"></div>

</div>`;

page.innerHTML = content;

const element = page.querySelector('.card');

element.append(cardsItem(cardsProduct));

return page;
};