
export function noProduct () {

	const element = document.createElement('div');
	
	element.classList.add("noproduct");

	const content = `
	<img class="noproduct__img" src="./../../img/icons8-корзина-100.png" alt="корзина пуста">
						<p class="noproduct__text">Корзина пуста</p>
	`

element.innerHTML = content;

const outer = element.outerHTML;

return outer

};