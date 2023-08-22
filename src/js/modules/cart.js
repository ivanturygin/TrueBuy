import { src } from "gulp";

function cart(){

	// counter

	let counter;

window.addEventListener('click', (e) =>{

	if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus'){

			const counterParent = e.target.closest('.caunter')

			counter = counterParent.querySelector('[data-counter]')


			 if (e.target.dataset.action === 'plus') {

			 	counter.value = ++counter.value;

			 };

			 if (e.target.dataset.action === 'minus') {

			 	counter.value = --counter.value;

			 };

			 if (counter.value < 0) {

			 	counter.value = 0
			 };

	}

});

// cart

window.addEventListener('click', (e) => {

		if (e.target.hasAttribute('data-cart')){

			const card = e.target.closest('.card__item')

			const productInfo = {

				id: card.dataset.id,

				img: card.querySelector('.slider__img').getAttribute(src),

				title: card.querySelector('.slider__img').innerText,
			}
		}
	
})

};

export default cart;