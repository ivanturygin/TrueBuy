import { cardsProduct } from "../db";

export function cardsItem(data){

	const productList = document.createElement('div');
	productList.classList.add('card__list');

data.forEach(({
	img,
	productName,
	price,
	oldPrice,
	sale,
	id,
	color,
}) => {


	const component = document.createElement('div');
	component.classList.add('card__item');
	component.dataset.id = `${id}`;
	
	let oneElementColor = Object.values(img)[0];

	const content = `<div class="card__image">
	<div class="slider">
		<div class="slider__wrapper">
			<div class="slider__nav">

				<div class="slider__nav-item nav-prev">

					<img class="slider__nav-img" src="../../img/icon/slider_nav.png" alt=""></div>

				<div class="slider__nav-item nav-next">
					<img class="slider__nav-img" src="../../img/icon/slider_nav.png" alt="#"></div>
			</div>
			<div class="slider__inner">
			
			${oneElementColor.map(item =>
   `<div class="slider__item">
        <img class="slider__img" src="${item}" alt="диван Velvet">
    </div>`
)}
			</div>
		</div>
	</div>
</div>

<div class="card__content">
	<div class="card__content-top">
		<a class="card__title" href="#productCard">${productName}</a>
		<div class="card__price">
		<div class="card__price-text">${price}</div>
			${typeof sale !== 'undefined'? `<div class="sale"><span class="sale__old-price">${oldPrice}</span><p class="sale__text">${sale}</p></div>`: ''}
		</div>
	</div>

<div class="card__content-bottom">

	<div class="product-color"> 

	   ${color.map(colorPath =>`
          <div class="product-color__item">
            <img class="product-color__img" src="${colorPath}" data-color="${getColorName(colorPath)}" alt="color">
          </div>
        `).join('')}

	</div>

	<div class="product-details">

	</div>

	<div class="button ">
		<button data-cart class="button__btn card__button-btn"> В корзину </button>
	</div>


</div>`


component.insertAdjacentHTML('afterbegin', content)

productList.appendChild(component);

});

const outer = productList.outerHTML;

return outer

};


// получаем название цвета товара

function getColorName(path) {

	const match = path.match(/\/([^/]+)\.jpg$/);

	return match ? match[1] : '';

};

// кнопки выбора цвета

export const lightSelection = (data) => {

	const productItem = document.querySelectorAll('.card__item');

	productItem.forEach((item) => {

		const productColor = item.querySelectorAll('.product-color__item');

		// выбираем первый элемент цвета по умолчанию

		productColor.forEach((item, index) => {

			if (index === 0){

				item.classList.add('product-color__item_on')
			};

		});

		// обработчик события цвета

		item.addEventListener('click', (e) => {


		if (e.target.hasAttribute('data-color')) {

			const itemColor = item.querySelectorAll('.product-color__item'),
			      parentColor = e.target.closest('.product-color__item'),
					sliderItem = item.querySelectorAll('.slider__item'),
					colorName = e.target.getAttribute('data-color'),
					id = item.getAttribute('data-id');

			itemColor.forEach(item => {

         item.classList.remove('product-color__item_on');

			});

			parentColor.classList.add('product-color__item_on');


   let pathColor = getValuesColor(id, colorName);

	sliderItem.forEach((item, index) => {

		const img = item.querySelector('.slider__img');


		if (img) {

			img.setAttribute('src', pathColor[index]);

		};

	});

	

		};


		});

	});

}

// получаем путь к изображению товара

function getValuesColor (elementId, color) {

	let colorPath;

	cardsProduct.forEach(({id,img}) => {

			if (id === elementId){

			colorPath =  img[color];

			};

			});

			return colorPath

		};
		

