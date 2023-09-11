		class Cart {

			constructor(setProduct, getProduct, removeStorage) {

				this.setProduct = setProduct;
				this.getProduct = getProduct;
				this.removeStorage = removeStorage;

				this.removeHendler = (action) => {

						window.addEventListener('popstate', () =>  {

							window.removeEventListener('click', action);

					})};

						this.sumProduct = (price) => {

                    for (let priceString of price){

							const price = parseFloat(priceString)

							  console.log(price);
						  }

						

						  
						}

			};


			counter() {

				let counter;

				const handlerCounter = (e) => {

					if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {

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

					};
				};


				window.addEventListener('click', handlerCounter);

				this.removeHendler(handlerCounter);

			};

			counterProduct() {

				const counterProduct = document.querySelector('.count'),
					   countProductText = counterProduct.querySelector('.count__text');

			let count =	this.getProduct();

			countProductText.innerText = count.length;

			if(count.length === 0 ){

				counterProduct.style.display = 'none';
			};

			};


			addProductToCart() {

				const hendleClick = (e) => {

					if (e.target.hasAttribute('data-cart')) {

						const card = e.target.closest('.card__item');

						const id = card.getAttribute('data-id'),

							img = card.querySelector('.slider__img').getAttribute('src'),

							title = card.querySelector('.card__title').textContent,

							price = card.querySelector('.card__old-price').textContent,

							btn = card.querySelector('.card__button-btn');

						const productInfo = {

							id: id,

							img: img,

							title: title,

							price: price

						};

						this.setProduct(productInfo);

						btn.classList.add('cart-add');

						if (btn.classList.contains('cart-add')) {

							btn.disabled = true;

							btn.innerText = 'Товар в корзине'
						}
					};
				};

				window.addEventListener('click', hendleClick); 

            this.removeHendler(hendleClick);

			};


			renderCart(parent) {

				let data = this.getProduct();

				console.log(parent);

				data.forEach(({
					id,
					img,
					title,
					price
				}) => {

					this.sumProduct(price);

					const element = document.createElement('div');

					element.classList.add('cart__item');

					element.dataset.id = id;

					element.innerHTML = `<div class="cart__item-image">
               		<img src=${img} alt="">
               	</div>

               	<div class="cart__item-content">

               		<div class="close">
               			<div class="close__inner">
               				<span class="close__text">Удалить</span>
               				<div class="close__img" data-action='del'></div>
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

					parent.append(element);

				});

			};


			removeProduct() {

				const handleRemoveProduct = (e) => {

					if (e.target.dataset.action === 'del') {

						const elementParent = e.target.closest('.cart__item');

						const id = elementParent.getAttribute('data-id');

						elementParent.remove();

						this.removeStorage(id);

						document.querySelector('cart-add').remove();

					};

				};

				window.addEventListener('click', handleRemoveProduct);

				removeHendler(removeProduct);

			};


			};
		




export {Cart};
