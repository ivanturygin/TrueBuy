const cardsProduct = [

	{
		'img': "../../img/product/4442541.jpg",

		'productName': 'Диван Velvet',

		'price': '46990 ₽',

	   'oldPrice': '97990 ₽',

     

		'url': '#product/velvet'
	},

	{
		'img': "../../img/product/4340118.jpg",

		'productName': 'Диван Navy Blue',

		'price': '66990 ₽',

		'oldPrice': '97990 ₽',

		'sale': '-30%',

		'url': '#product/navy'
	},

	{
		'img': "../../img/product/4200315.jpg",

		'productName': 'Кресло Emerald',

		'price': '20990 ₽',

		'oldPrice': '97990 ₽',

		'sale': '-30%',

		'url': '#product/emerald'
	},

];

function cards(parent) {

	class ProductCard {

		constructor(img, productName, price, oldPrice, sale, url, parent) {
			this.img = img;
			this.productName = productName;
			this.price = price;
			this.oldPrice = oldPrice;
			this.sale = sale;
			this.url = url;
			this.parent = document.querySelector(parent);
		}


		render() {

			const element = document.createElement('div');
			element.classList.add('card__item');

			element.innerHTML = `<div class="card__image">

	<div class="slider">
		<div class="slider__wrapper">
			<div class="slider__nav">

				<div class="slider__nav-item nav-prev">

					<img class="slider__nav-img" src="../../img/icon/slider_nav.png" alt=""></div>

				<div class="slider__nav-item nav-next">
					<a href="#"> </a>
					<img class="slider__nav-img" src="../../img/icon/slider_nav.png" alt="#"></div>
			</div>
			<div class="slider__inner">
				<div class="slider__item">
					<img class="slider__img" src=${this.img} alt="диван Velvet">
				</div>

				<div class="slider__item">
					<img class="slider__img" src="${this.img}" alt="диван Velvet">
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
		<a class="card__title" href="${this.url}">${this.productName}</a>
		<div class="card__price">
			${this.price} <span class="card__old-price"> ${this.oldPrice}</span>
			<div class="sale">
				<p class="sale__text">${this.sale}</p>
			</div>
		</div>
	</div>
	<div class="button card__button"><button class="button__btn card__button-btn"> В корзину </button>
	</div>
</div>`;

			this.parent.append(element);

			//img = document.querySelector('.slider__img')

			this.slider()

		}


		slider() {
			this.abc;
		}

	};

	const content = () => {
		cardsProduct.forEach(({
			img,
			productName,
			price,
			oldPrice,
			sale,
			url
		}) => {


			new ProductCard(img, productName, price, oldPrice, sale, url, parent).render();

		});

	};

		content();

	const offSale = (parent, saleElement, saleContent) => {

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
	}

	offSale('.card__item ', '.sale', '.sale__text');

}

export default cards;
