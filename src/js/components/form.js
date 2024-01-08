export function form(appState) {

	const elementForm = document.createElement('form');

	elementForm.classList.add('form','cart__form');

	elementForm.setAttribute('method', 'post');

	elementForm.setAttribute('action', './../../file/sandmail.php');

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

	submit: function(appState){

			const form = document.querySelector(".form");

			this.storage(form);

			form.addEventListener("submit", (event) => {

						event.preventDefault();
						
						this.validation(form, appState);

	});
},

// отправляем данные заказа на почту

sendData: async function(form, appState) {

	const data = new FormData(form);

	const productData = appState.cart;

	 data.append('productData', JSON.stringify(productData));

	fetch("/files/sandmail.php", {
			method: "POST",
			body: data,
		})

		.then((response) => {
			if (response.ok) {
				console.log("данные отправлены");
				return response.text();
			}
			throw new Error("Ответ сети был неудовлетворительным");
		})

		.then((data) => {

			console.log(data);

		})

		.catch((error) => {

			console.error("Возникла проблема с операцией получения данных:", error);

		});
},

// сохраняем введенные данные формы

storage: function(form){

	const formItem = form.querySelectorAll(".form__input");

	let setForm;

	let getForm = localStorage.getItem('form');

	getForm = JSON.parse(getForm);

if (getForm === null){

	setForm = {};

}else{

	setForm = getForm;


	for (let key in setForm){

		let nameElement = '_' + key;

		let elementValue = setForm[key];

		formItem.forEach(element => {

			const input = element.querySelector(".form__input-inp");

			if (input.classList.contains(nameElement)) {

				input.value = elementValue;

			};

			
		});

	};

};


	formItem.forEach(element => {
		
		const input = element.querySelector(".form__input-inp");

		input.addEventListener('change', (e) => {

			let nameKey = e.target.classList[1];

			nameKey = nameKey.replace(/_/g, "");

		setForm[nameKey] = e.target.value;

		localStorage.setItem('form', JSON.stringify(setForm))

		})

	});

},

validation: function(form, appState) {

	const formItem = form.querySelectorAll(".form__input");

	let trigger = false;

	let errors = false;


// выводим текст ошибки

		const inputError = (text, errorText, parentInput) => {
		
				parentInput.classList.add("_error");
				errorText.classList.add("_on");
				errorText.textContent = text;

				errors = true;
			
		};

// обработчик события focus

			const focusElement = (e) => {

				trigger = true;

         formLoop();

			};

// цикл валидации

const formLoop = () => {

	for (let i = 0; i < formItem.length; i++) {

	const element = formItem[i];

		const input = element.querySelector(".form__input-inp");

		const parentInput = element.querySelector(".form__input-text");

		const errorText = element.querySelector(".error-text");

      input.addEventListener('focus', focusElement)


		if(trigger){

			parentInput.classList.remove("_error");
			errorText.classList.remove("_on");

			errors = false;

		}else{

			if (input.classList.contains("_name")) {

				const testName = /\D/.test(input.value);

				if (!testName) {

					inputError("Введите корректное имя", errorText, parentInput);

				};

			} else if (input.classList.contains("_tel")) {

				const testTel = /^(\+7|8)?[0-9]{10}$/.test(input.value);

				if (!testTel) {

					inputError("Введите корректный номер", errorText, parentInput);

				};

			} else if (input.classList.contains("_email")) {

				const testEmale = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(input.value);

				if (!testEmale) {

					inputError("Введите корректный email", errorText, parentInput);

				};

			} else if (input.classList.contains("_adds")) {

				if (input.value === "") {

					inputError("Введите корректный адрес", errorText, parentInput);

				}
			
		}

	};

	}

};

formLoop();

if(!errors){

	console.log('форма отправлена');

this.sendData(form, appState);

	localStorage.clear();

	form.reset();
};

},

};