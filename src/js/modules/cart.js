import {LocalStorageUtil} from "../services/localStorageUtil";

function cart(){

	let localStorage = new LocalStorageUtil();

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

			const card = e.target.closest('.card__item');

			const id = card.getAttribute('data-id'),

			      img = card.querySelector('.slider__img').getAttribute('src'),

					title = card.querySelector('.card__title').textContent,

					price = card.querySelector('.card__old-price').textContent;

					const productInfo = {

						id:id,

						img:img,

						title:title,

						price:price

					};

			localStorage.setProduct(productInfo);

		}

});


const renderToCart = () => {

	const parentElement = document.querySelector('.cart__list');

	console.log(parentElement);

let data = 	localStorage.getProduct();

data.forEach(({
			id,
			img,
			title,
			price
		}) => {

			const element = document.createElement('div');

			element.classList.add('cart__item');

			element.innerHTML = `<div class="cart__item-image">
               		<img src=${img} alt="">
               	</div>

               	<div class="cart__item-content">

               		<div class="close">
               			<div class="close__inner">
               				<span class="close__text">Удалить</span>
               				<div class="close__img"></div>
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

			parentElement.append(element);

})

};


renderToCart();


};

export default cart;