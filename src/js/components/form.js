export function form() {

	const elementForm = document.createElement('div');

	elementForm.classList.add('form','cart__form');

	elementForm.setAttribute('action', './../../file/sandmail.php');

	elementForm.setAttribute('method', 'post');

	elementForm.setAttribute('enctype', 'multipart/form-data');


	const content = `
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
			</div>`;

			elementForm.insertAdjacentHTML('afterbegin', content)

			const outer = elementForm.outerHTML;

			return outer;

}; 


export const formUtil = {

	submit: function(){

			const form = document.querySelector(".form");

			console.log(form);

			form.addEventListener("submit", (event) => {

						event.preventDefault();

						console.log('hello form');
					
	});
},
};