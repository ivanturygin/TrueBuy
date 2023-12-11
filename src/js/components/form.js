export function form() {

	const elementForm = document.createElement('form');

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

			form.addEventListener("submit", (event) => {

						event.preventDefault();

						this.validation(form);
					
	});
},

validation: function(form) {


	const formItem = form.querySelectorAll(".form__input");

	
	const removeInputError = (parentInput) => {
		parentInput.classList.remove("_error");
	};


		const errorInput = (text, errorText, parentInput) => {
		
				parentInput.classList.add("_error");
				errorText.classList.add("_on");
				errorText.textContent = text;
			
		};

	for (let i = 0; i < formItem.length; i++) {

	const element = formItem[i];

		const input = element.querySelector(".form__input-inp");

		const parentInput = element.querySelector(".form__input-text");

		const errorText = element.querySelector(".error-text");



			if (input.classList.contains("_name")) {

				const testName = /\D/.test(input.value);

				if (!testName) {

					errorInput("Введите корректное имя", errorText, parentInput);

				};

			} else if (input.classList.contains("_tel")) {

				const testTel = /^([+]?[0-9\s-\(\)]{3,25})*$/.test(input.value);

				if (!testTel) {

					errorInput("Введите корректный номер", errorText, parentInput);

				};

			} else if (input.classList.contains("_email")) {

				const testEmale = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.value);

				if (!testEmale) {

					errorInput("Введите корректный email", errorText, parentInput);

				};

			} else if (input.classList.contains("_adds")) {

				if (input.value === "") {

					errorInput("Введите корректный адрес", errorText, parentInput);

				}
			
		}

	}

},



};