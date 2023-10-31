
export function productPage(){

	const page = document.createElement('div');
	page.classList.add('product');

	const content = `<div class="conteiner">

	<div class="card"></div>
	
</div>`;

page.innerHTML = content;

return page;
};