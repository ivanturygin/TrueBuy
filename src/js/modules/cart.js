				class Cart {

					constructor(setProduct, getProduct, removeStorage, stateCart, stateCounter) {

						this.setProduct = setProduct;
						this.getProduct = getProduct;
						this.removeStorage = removeStorage;
						this.stateCart = stateCart;
						this.stateCounter = stateCounter;

                  this.removeHendler = (action) => {

							window.addEventListener('popstate', () => {

								window.removeEventListener('click', action);

							});
						};


						this.btnText = (element, checkStateId) => {

							const btn = element.querySelector('.card__button-btn');

							if (!checkStateId) {

								btn.innerText = 'Товар в корзине';

							} else {

								btn.innerText = 'В корзину';

							};

						};


						this.elementCheckId = (elementId) => {

							const arrayState = this.stateCart.map(({
								id
							}) => id);

							const arrayElement = arrayState.some(item => {

								return item === elementId

							});

							return arrayElement

						};

					};


					checkElements(element) {

						if (Object.keys(element).length > 0) {

							element.forEach((item) => {

								const itemElement = item;

								const id = item.getAttribute('data-id');

								const checkId = this.elementCheckId(id);

								if (checkId) {

									this.btnText(item);

									item.classList.toggle('cart-add');

								};

							});

						};

						this.addProductToCart();

					};


					totalPrice(data) {

						let totalPrice = data.reduce((totalPrice, item) => {

							const pcs = item.pcs;


							if (typeof item.price === 'number') {

								return totalPrice + item.price;

							} else if (typeof item.price === 'string') {

								const numberPrice = parseFloat(item.price);

								let numberPriceMult = numberPrice * pcs;

								if (!isNaN(numberPrice)) {

									return totalPrice + numberPriceMult;

								};

							};

							return totalPrice;

						}, 0);

						const elementSum = document.querySelector('.cart__price-sum');

						elementSum.innerText = totalPrice + ' ' + '₽';

					};


					counter() {

						let counter;

						let element = document.querySelectorAll('.cart__item');


						const setPcs = (id, quantity) => {

							this.stateCart.forEach((item) => {

								if (item.id === id) {

									item.pcs = quantity;

									this.counterProduct(item.pcs);

								};

							});
						};


						element.forEach((item) => {

							const handlerCounter = (e) => {

								if (e.target.dataset.action === 'plus' || e.target.dataset.action === 'minus') {

									const counterParent = e.target.closest('.caunter');

									const elementCounter = counterParent.querySelector('[data-counter]');

									const counterItemParent = e.target.closest('.cart__item');

									const id = counterItemParent.getAttribute('data-id');

									const price = counterItemParent.querySelector('.new').textContent;


									if (e.target.dataset.action === 'plus') {

										elementCounter.value = ++elementCounter.value;

										counter = +elementCounter.value;

										setPcs(id, counter);

										this.totalPrice(this.stateCart);

									};


									if (e.target.dataset.action === 'minus') {

										elementCounter.value = --elementCounter.value;

										counter = +elementCounter.value;

										setPcs(id, counter);

										this.totalPrice(this.stateCart);

									};

								};

							};

							item.addEventListener('click', handlerCounter);

							this.removeHendler(handlerCounter);

						});

					};


					counterProduct() {

						const counterProduct = document.querySelector('.count'),
							countProductText = counterProduct.querySelector('.count__text'),
							noproduct = document.querySelector('.noproduct');


						const pcsItem = this.stateCart.map(({pcs}) => pcs);

						const pscSum = pcsItem.reduce((acc, num) => acc + num, 0);

						this.stateCounter = pscSum;

						countProductText.innerText = this.stateCounter;

						if (pscSum === 0) {

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

									price = card.querySelector('.card__price-text').textContent,

								   checkStateId = this.elementCheckId(id);

								const productInfo = {

									id: id,

									img: img,

									title: title,

									price: price,

									pcs: 1

								};


								if (!checkStateId) {

									this.stateCart.push(productInfo);

									this.setProduct(productInfo);

									this.counterProduct();


									this.btnText(card, checkStateId);

								} else {

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


						if (element && element.classList.contains('cart-add')) {

							remove(id);

						};

					};

				};

				
				class Form extends Cart {

					constructor(stateCart) {

						super();

							this.stateCart = stateCart;

					};


					submit(){

						const form = document.querySelector('.form');

						form.addEventListener('submit', (event) => {

							event.preventDefault();

							this.validation(form);

							if (this.validation(form) === true){

								this.sendData(form);
							
								event.target.reset();

							};

						});

					};

					async sendData(form) {

						const data = new FormData(form);

				fetch("/files/sandmail.php", {
					method: "POST",
					body: data
				})

				
				.then(response => {
					if (response.ok){
						console.log('данные отправлены');
						return response.text()
					}
					throw new Error('Ответ сети был неудовлетворительным');
				})
				.then(data => {
					console.log(data);
				})
				.catch(error => {
					console.error('Возникла проблема с операцией получения данных:', error)
				});

				
					};


					validation(form) {

					let error = 0;

					let result = true;

					let trigger = false;

					const formItem = form.querySelectorAll('.form__input');



					const addInputError = (parentInput) => {

						parentInput.classList.add('_error');

					};


					const removeInputError = (parentInput) => {

						parentInput.classList.remove('_error');

					};


					const errorInput = (text, errorText, parentInput) => {

						if (parentInput.classList.contains('_error')) {

							errorText.classList.add('_on');

							errorText.textContent = text;

						}else if (trigger) {

							errorText.classList.remove('_on');
						};

					};
					



					const focusElement = (input) => {

						input.addEventListener('focus', () => {

										error = 0;

										trigger = true;

										validationStart();

						});

					};


					validationStart();


					function validationStart(){

					for (let i = 0; i < formItem.length; i++) {

						const element = formItem[i];

						const input = element.querySelector('.form__input-inp');

						const parentInput = element.querySelector('.form__input-text');

						const errorText = element.querySelector('.error-text');


						if(trigger){

							removeInputError(parentInput);

							errorInput('', errorText, parentInput)

						}else{

							if (parentInput.classList.contains('_error')) {

						   removeInputError(parentInput);

							

							};

						if (input.classList.contains('_name')) {

							const testName = /\D/.test(input.value);

							if(!testName){

								addInputError(parentInput);

								errorInput('Введите корректное имя', errorText, parentInput);

								result = false;

								error++

							};

						} else if (input.classList.contains('_tel')) {

							const testTel = /^([+]?[0-9\s-\(\)]{3,25})*$/.test(input.value);

							if(input.value === "" || !testTel){

									error++

									if (error > 1) {

										break;
									}

                    	addInputError(parentInput);

							errorInput('Введите корректный номер', errorText, parentInput);

									result = false;

							};
								
							} else if (input.classList.contains('_email')){

								const testEmale = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.value);

								if (input.value === "" || !testEmale){

										error++

									if (error > 1) {

										break;
									}

											addInputError(parentInput);

											errorInput('Введите корректный email', errorText, parentInput);

											result = false;

								}

							} else if (input.classList.contains('_adds')) {

									if (input.value === "") {

												error++

												if (error > 1) {

													break;
												}

											addInputError(parentInput);

											errorInput('Введите корректный адрес', errorText, parentInput);

											result = false;

									};

							};};

							focusElement(input, formItem);

									};

								};

								return result;
									
								};};


				export {Cart, Form};