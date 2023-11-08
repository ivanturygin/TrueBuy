
export function cartPage(cart, noProduct, appState){

	const element = document.createElement('div');

	element.classList.add('cart');

	const content = `
	<div class="conteiner">
		<div class="cart__inner">

			<div class="cart__top">
			
			${cart.renderItem(appState)}

				<div class="cart__price">

					<div class="line"></div>
					<div class="cart__price-text">Итого товаров на сумму:</div>
					<div class="cart__price-sum">46990 ₽ </div>
					<div class="line"></div>
				</div>
			</div>


      <form method="post" action="./../../file/sandmail.php" enctype="multipart/form-data" class="form cart__form">

			<div class="form__input">
				<div class="form__input-title">Имя</div>
				<div class="error-text"></div>
				<div class="form__input-text">
					<input class="form__input-inp _name" type="text" name="name" placeholder="ФИО"></div>
			</div>

			<div class="form__input">
				<div class="form__input-title">Телефон</div>
				<div class="error-text"></div>
				<div class="form__input-text">
            <input class="form__input-inp _tel" type="text" name="tel" placeholder="+7 (___) ___ __ __">
				</div>
			</div>

			<div class="form__input">
				<div class="form__input-title">Почта</div>
				<div class="error-text"></div>
				<div class="form__input-text">
            <input class="form__input-inp _email" type="text" name="email" placeholder="name@mail.ru">
				</div>
			</div>

			<div class="form__input">
				<div class="form__input-title">Адрес</div>
				<div class="error-text"></div>
				<div class="form__input-text">
					<input class="form__input-inp _adds" type="text" name="adds" placeholder="город, улица, дом, этаж, квартира">
				</div>
			</div>

			<div class="button form__button">
				<button type="submit" class="button__btn form__button-btn">Оформить заказ</button>
			</div>

		</form>
		</div>
	</div>
	`;

	element.innerHTML = content;

	return element

};