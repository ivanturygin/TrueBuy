
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

	const content = `<div class="card__image">
	<div class="slider">
		<div class="slider__wrapper">
			<div class="slider__nav">

				<div class="slider__nav-item nav-prev">

					<img class="slider__nav-img" src="../../img/icon/slider_nav.png" alt=""></div>

				<div class="slider__nav-item nav-next">
					<img class="slider__nav-img" src="../../img/icon/slider_nav.png" alt="#"></div>
			</div>
			<div class = "slider__inner">

				<div class = "slider__item">
				<img class="slider__img" src= ${img} alt="диван Velvet">
				</div>

				<div class="slider__item">
					<img class="slider__img" src="" alt="диван Velvet">
				</div>

				<div class="slider__item">
					<img class="slider__img" src="../../img/product/4442540.jpg" alt="диван Velvet">
				</div>
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
          <div class="product-color__item" data-color="${getColorName(colorPath)}">
            <img class="product-color__img" src="${colorPath}" alt="color">
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


export const lightSelection = () => {

	const productColor = document.querySelectorAll('.product-color__item');

	productColor.forEach(item => {


		item.addEventListener('click', (e) => {

		const elementParent = e.target.closest('.product-color');

		const itemColor = elementParent.querySelectorAll('.product-color__item');

		const imgColor = document.querySelector('.product-color__img');

		itemColor.forEach( item => {

		item.classList.remove('product-color__item_on');

		});



		if(imgColor){

		const imgParent = e.target.closest('.product-color__item');

		imgParent.classList.add('product-color__item_on');

		};

		})
	} )


}