
export function cards(){

	const component = document.createElement('div');
	component.classList.add('card-item');
	component.dataset.id = '';

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
				<img class="slider__img" src='' alt="диван Velvet">
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
	<div class="card__content-text">
		<a class="card__title" href="#productCard"></a>
		<div class="card__price">
		<div class="card__price-text"></div>
			<span class="card__old-price"> </span>
			<div class="sale">
				<p class="sale__text"></p>
			</div>
		</div>
	</div>

	<div class="button card__button"> <button data-cart class="button__btn card__button-btn"> В корзину </button>
	</div>
</div>`;


component.innerHTML = content;

return component

};