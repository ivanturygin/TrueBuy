				class Cart {

			constructor(setProduct, getProduct, removeStorage, state) {

				this.setProduct = setProduct;
				this.getProduct = getProduct;
				this.removeStorage = removeStorage;
				this.stateCart = state.cart;
				this.stateCounter = state.counter;

				this.removeHendler = (action) => {

						window.addEventListener('popstate', () =>  {

							window.removeEventListener('click', action);

					})};


				this.btnText = (element,checkStateId) => {

					const btn = element.querySelector('.card__button-btn');

					if (!checkStateId) {

						btn.innerText = 'Товар в корзине';

					}else{

						btn.innerText = 'В корзину';

					};

				};


				this.elementCheckId = (elementId) => {

				const arrayState =	this.stateCart.map(({id}) => id);

				const arrayElement =  arrayState.some(item => {

				return	item === elementId

				});

				return arrayElement

				};

			};


			checkElements(element) {

					if (Object.keys(element).length > 0){

						element.forEach((item) => {

							const itemElement = item;

							const id = item.getAttribute('data-id');

						  const checkId = this.elementCheckId(id);

						  if (checkId){

							this.btnText(item);

							item.classList.toggle('cart-add');

						  };

						});

					};

					this.addProductToCart();

			};


			totalPrice(data){

			let totalPrice = data.reduce((totalPrice, item) => {

					if (typeof item.price === 'number') {

						return totalPrice + item.price;

					} else if (typeof item.price === 'string') {

						const numericPrice = parseFloat(item.price);


						if (!isNaN(numericPrice)) {

							return totalPrice + numericPrice;

						};

					};

					return totalPrice;

				}, 0);

				const elementSum = document.querySelector('.cart__price-sum');

				elementSum.innerText = totalPrice + '' + '₽';

				};
			


			counter() {

				let counter;

				const handlerCounter = (e) => {

					if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {

						const counterParent = e.target.closest('.caunter');

						counter = counterParent.querySelector('[data-counter]');

						const itemParent = e.target.closest('.cart__item');

						const id = itemParent.getAttribute('data-id')

this.stateCart.forEach((item) => {


						if (e.target.dataset.action === 'plus') {

							counter.value = ++counter.value;

							counter = counter.value;

							item.pcs = item.pcs + (1)

							console.log(item.pcs)

						};
						

						if (e.target.dataset.action === 'minus') {

							if (item.pcs > 1) {

								counter.value = --counter.value;

								item.pcs = item.pcs - (1)

							}else {

								counter.value = 1;

								item.pcs = 1;
								
							};

						};

					});

					};

				};


				window.addEventListener('click', handlerCounter);

				this.removeHendler(handlerCounter);

			};

			counterProduct() {

				const counterProduct = document.querySelector('.count'),
					countProductText = counterProduct.querySelector('.count__text'),
						noproduct = document.querySelector('.noproduct');
         
						let count = this.stateCart.length;

						let pcs = this.stateCart.pcs;

						if (pcs > 1){

							console.log('hello');
						}

						this.stateCounter = count;

						countProductText.innerText = this.stateCounter;

							if (count === 0) {

								counterProduct.classList.add('count_clear');

							noproduct ? noproduct.classList.remove('noproduct_clear') : '';

							} else {

								counterProduct.classList.remove('count_clear');

								noproduct ? noproduct.classList.add('noproduct_clear') : '';

							};


			};


			addProductToCart() {

				const hendleClick = (e) => {

					if (e.target.hasAttribute('data-cart')) {

						const card = e.target.closest('.card__item');

						const id = card.getAttribute('data-id'),

							img = card.querySelector('.slider__img').getAttribute('src'),

							title = card.querySelector('.card__title').textContent,

							price = card.querySelector('.card__price-text').textContent;

						const productInfo = {

							id: id,

							img: img,

							title: title,

							price: price,

							pcs: 1

						};

						const checkStateId = this.elementCheckId(id);


						if(!checkStateId){

							this.stateCart.push(productInfo);

							this.setProduct(productInfo);

							this.counterProduct();


							this.btnText(card, checkStateId);

						}else{

							this.btnText(card, checkStateId);

							this.removeProduct(card, id);

						}

							card.classList.toggle('cart-add');

					};
				};

				window.addEventListener('click', hendleClick); 

            this.removeHendler(hendleClick);

			};


			renderCart(parent) {

				let data = this.stateCart;
            
				data.forEach(({
					id,
					img,
					title,
					price
				}) => {
               

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


				this.counterProduct();

				this.totalPrice(this.stateCart);


			};


			removeProduct(element, id) {

				const remove = (id) => {

					this.removeStorage(id);

						for (let i = 0; i < this.stateCart.length; i++) {

							if (this.stateCart[i].id === id) {

								this.stateCart.splice(i, 1);

							};

							this.counterProduct();

						};
				};

				const handleRemoveProduct = (e) => {


					if (e.target.dataset.action === 'del') {

						const elementParent = e.target.closest('.cart__item');

						const id = elementParent.getAttribute('data-id');

						remove(id);

						elementParent.remove();

						this.totalPrice(this.stateCart);

					};

				};

				window.addEventListener('click', handleRemoveProduct);

				this.removeHendler(handleRemoveProduct);


				if (element && element.classList.contains('cart-add')){

					remove(id);

				};

			};

			};
		

export {Cart};
