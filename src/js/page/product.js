import {cardsItem} from "../components/cards-item";


export function productPage(cardsProduct){

	const page = document.createElement('div');
	page.classList.add('product');

	const content = `<div class="conteiner">

	<div class="card">

	${cardsItem(cardsProduct)}

	</div>

</div>`;

page.innerHTML = content;

return page;
};