
/*export const offSale = (parent, saleElement, saleContent) => {

	const elementParent = document.querySelectorAll(parent);

	elementParent.forEach(item => {

		const sale = item.querySelector(saleElement),

			saleText = sale.querySelector(saleContent).textContent,

			oldPrice = item.querySelector('.card__old-price');


		if (saleText === 'undefined') {

			sale.classList.add('hide');

			oldPrice.classList.add('hide');

		};

	})
};*/

export function sale(){

return console.log('hello sale');
}; 
