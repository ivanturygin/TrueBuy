const cardsProduct = [

	{
		'img': "../images/product/4442541.jpg",

		'productName': 'Диван Velvet',

		'price': '46990 ₽',

		'oldPrice': '77990 ₽',

		'sale': '-30%',

		'url': '#product/velvet'
	},

	{
		'img': "../images/product/4340118.jpg",

		'productName': 'Диван Navy Blue',

		'price': '66990 ₽',

		'oldPrice': '97990 ₽',

		'url': '#product/navy'
	},

	{
		'img': "../images/product/4200315.jpg",

		'productName': 'Кресло Emerald',

		'price': '20990 ₽',

		'oldPrice': '97990 ₽',

		'sale': '-30%',

		'url': '#product/emerald'
	}


];

function cards(parent, html) {

	class ProductCard {

		constructor(html, img, productName, price, oldPrice, sale, url, parentElement, abc) {
			this.html = html;
			this.img = img;
			this.productName = productName;
			this.price = price;
			this.oldPrice = oldPrice;
			this.sale = sale;
			this.url = url;
			this.abc = abc;
			this.parent
		}


		render() {

			const element = document.createElement('div');
			element.classList.add('card__item');

			element.innerHTML = html

			parentElement.append(element);

			imgg = document.querySelector('.slider__img')

			console.log(imgg)

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

			if (sale === undefined) {

				sale = '';

			};

			new ProductCard(html, img, productName, price, oldPrice, sale, url, slider).render();

		});

	};

	offElement = (parent, saleElement, saleContent) => {

		const elementParent = document.querySelectorAll(parent);

		elementParent.forEach(item => {

			const sale = item.querySelector(saleElement)
			saleText = sale.querySelector(saleContent).textContent,
				old = item.querySelector('.card__old-price');

			if (saleText === '') {
				sale.classList.add('hide');
				old.classList.add('hide')
			}
		})
	}

	content();
	offElement('.card__item ', '.sale', '.sale__text');
}

export default cards;
