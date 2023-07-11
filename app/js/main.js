'use strict';

document.addEventListener("DOMContentLoaded", function () {

	// router

	const urlPageTitle = '';

	const routes = {

		404: {
			template: './views/404.html',
			title: '404 ' + urlPageTitle,
			description: 'Page not found'
		},

		main: {
			template: './views/main.html',
			title: 'Home ' + urlPageTitle,
			description: 'This is the homepage'
		},

		product: {
			template: './views/card.html',
			title: 'Product ' + urlPageTitle,
			description: 'This is the productpage'
		},

	};

	const handleLocation = async () => {

		let path = window.location.hash.replace('#', '');

		const hash = window.location.hash;

		if (hash == "") {
			path = 'main';
		};

		const route = routes[path] || routes[404];

		const html = await fetch(route.template).then((data) => data.text());

		const parent = document.querySelector('.content');

		parent.innerHTML = html;

		document.title = route.title;

		document.querySelector('meta[name = "description"]')
			.setAttribute('content', route.description);

		cards()
		slider();

	};

	window.addEventListener('hashchange', handleLocation);

	handleLocation();

	// slider

	function slider() {

		const content = document.querySelector('.content'),
			conteiner = content.querySelector('.slider__item'),
			slides = content.querySelectorAll('.slider__item'),
			slider = content.querySelector('.product'),
			prev = content.querySelector('.nav-prev'),
			next = content.querySelector('.nav-next'),
			wrapper = content.querySelector('.slider__wrapper'),
			field = content.querySelector('.slider__inner'),
			width = window.getComputedStyle(wrapper).width,
			nav = content.querySelector('.slider__nav');

		let slideIndex = 1;
		let offset = 0;

		const indicators = document.createElement('ol');

		dots = [];

		indicators.classList.add('slider__indicator');

		nav.append(indicators);

		for (let i = 0; i < slides.length; i++) {

			const dot = document.createElement('li');

			dot.setAttribute('data-slide-to', i + 1);

			dot.classList.add('slider__indicator-dot');

			if (i == 0) {
				dot.style.opacity = 1;
			};

			indicators.append(dot);

			dots.push(dot);

		};

		next.addEventListener('click', () => {

			if (offset == (deleteNotDigits(width) * (slides.length - 1))) {

				offset = 0;

			} else {

				offset += deleteNotDigits(width);

			};

			field.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == slides.length) {
				slideIndex = 1;
			} else {
				slideIndex++;
			};

			dots.forEach(dot => dot.style.opacity = '.5');
			dots[slideIndex - 1].style.opacity = 1;

		})

		prev.addEventListener('click', () => {

			if (offset == 0) {
				offset = deleteNotDigits(width) * (slides.length - 1)
			} else {
				offset -= deleteNotDigits(width);
			};

			field.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == 1) {
				slideIndex = slides.length;
			} else {
				slideIndex--;
			};

			dots.forEach(dot => dot.style.opacity = '.5');
			dots[slideIndex - 1].style.opacity = 1;

		})

		dots.forEach(dot => {
			dot.addEventListener('click', (e) => {
				const sliderTo = e.target.getAttribute('data-slide-to');

				slideIndex = sliderTo;

				offset = deleteNotDigits(width) * (sliderTo - 1);

				field.style.transform = `translateX(-${offset}px)`;

				dots.forEach(dot => dot.style.opacity = '.5');
				dots[slideIndex - 1].style.opacity = 1;

			});

		});

		function deleteNotDigits(str) {
			return +str.replace(/\D/g, '')
		};

	};

	// Cards

	const cardsProduct = [

		{
			'img': "../images/product/4442541.jpg",

			'productName': 'Диван Velvet',

			'price': 46990,

			'oldPrice': 77990,

			'sale': 40,

			'url': ''
		},

		{
			'img': "../images/product/4340118.jpg",

			'productName': 'Диван Navy Blue',

			'price': 66990,

			'oldPrice': 97990,

			'sale': 30,

			'url': ''
		},

		{
			'img': "../images/product/4200315.jpg",

			'productName': 'Кресло Emerald',

			'price': 20990,

			'oldPrice': 25990,

			'sale': 20,

			'url': ''
		}


	];

	function cards() {

		class ProductCard {

			constructor(img, productName, price, oldPrice, sale, url, parentSelector) {
				this.img = img;
				this.productName = productName;
				this.price = price;
				this.oldPrice = oldPrice;
				this.sale = sale;
				this.url = url;
				this.parent = document.querySelector(parentSelector);
			}
	

	render() {

		const element = document.createElement('div');
		element.innerHTML = `
	
		<div class = "card__image">
		<div class = "slider">
		<div class = "slider__wrapper">
		<div class = "slider__nav">

		<div class = "slider__nav-item nav-prev">

		<img class = "slider__nav-img "src = "./../images/icon/slider_nav.png" alt = "" ></div>

		<div class = "slider__nav-item nav-next">
		<a href = "#" > </a> 
		<img class = "slider__nav-img" src = "./../images/icon/slider_nav.png"
	alt = "#"></div> </div> <div class = "slider__inner">
		<div class = "slider__item">
		<img class = "slider__img"
	src = ${this.img}
	alt = "диван Velvet" >
		</div>

		<div class = "slider__item">
		<img class = "slider__img"
	src = ${this.img}
	alt = "диван Velvet" >
		</div>

		<div class = "slider__item">
		<img class = "slider__img"
	src = "../images/product/4442540.jpg"
	alt = "диван Velvet" >
		</div> 
		</div> 
		</div> 
		</div> 
		</div> 
		<div class = "card__content">
		<div class = "card__content-text">
		<a class = "card__title"
	href = "${this.url}" > ${this.productName} </a> <div class = "card__price" >
		${this.price}₽ <span class = "card__old-price">${this.oldPrice}₽ </span> 
		<div class = "sale">
		<p class = "sale__text"> -${this.sale}% </p> </div> 
		</div> 
		</div>
	<div class = "button card__button" ><button class = "button__btn card__button-btn"> В корзину </button> 
	</div> 
	</div> `;
	
	this.parent.append(element);
	}

}

const content =  () => {
	cardsProduct.forEach(({
		img,
		productName,
		price,
		oldPrice,
		sale,
		url
	}) => {

		new ProductCard(img, productName, price, oldPrice, sale, url, '.card').render()
	})
}

content();
	}

});