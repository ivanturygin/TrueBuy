export function header (){

	const header = document.createElement('header');
	header.classList.add('header');

	const content = `<div class="conteiner">

		<div class="header__inner">
			<a class="header__logo"href="/" data-navigo>
				True<span>Buy</span>
			</a>
			<nav class="nav">
				<div class="nav__wrapper">

					<div class="nav__item">
						<a class="nav__link" href="/product" data-navigo>Товары</a>
					</div>


					<div class="nav__item">
						<a class="nav__link" href="#">Идеи и тренды</a>
					</div>

					<div class="nav__item">
						<a class="nav__link" href="/about" data-navigo>О компании</a>
					</div>

				</div>
			</nav>

			<div class="header__icon">
				<button class="header__buttom">
					<div class="count">
						<span class="count__text"></span>
					</div>
					<a class="header__link" href = "/cart" data-navigo>
					<img class="icon" src="../../img/icon/Group.png" alt="logo">
					</a>
				</button>
			

				<button class="header__buttom">
					<img class="icon" src="../../img/icon/fa_user.png" alt="logo">
				</button>
			</div>

		</div>
	</div>`;

	header.innerHTML = content;

	return header
};