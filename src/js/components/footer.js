export function footer() {

	const footer = document.createElement('footer');
	footer.classList.add('footer');

	const content = `<div class="conteiner">
		<div class="footer__inner">

			<div class="footer__content">
				<div class="footer__title">Свяжитесь с нами</div>
				<ul class="footer__list">
					<li class="footer__item"> <a class="footer__link" href="#">+7 (999) 522-62-52</a> </li>
					<li class="footer__item"> <a class="footer__link" href="#">love.truebue.ru</a> </li>
					<li class="footer__item"> <a class="footer__link" href="#">задать вопрос</a> </li>
					<li class="footer__item"> <a class="footer__link" href="#">контакты</a> </li>
				</ul>
			</div>

			<div class="footer__content">
				<div class="footer__title">Информация для покупателей</div>
				<ul class="footer__list">
					<li class="footer__item">
						<a class="footer__link" href="#">О компании</a>
					</li>
					<li class="footer__item"> <a class="footer__link" href="#">Доставка и оплата</a> </li>
					<li class="footer__item"> <a class="footer__link" href="#">Гарантия</a> </li>
				</ul>
			</div>

			<div class="footer__content">
				<div class="footer__title">Каталог</div>
				<ul class="footer__list">
					<li class="footer__item"> <a class="footer__link" href="#">Диваны</a> </li>
					<li class="footer__item"> <a class="footer__link" href="#">Шкафы</a> </li>
					<li class="footer__item"> <a class="footer__link" href="#">Столы</a> </li>
					<li class="footer__item"> <a class="footer__link" href="#">Лампы</a> </li>
				</ul>
			</div>
			<div class="footer__content">
				<div class="footer__title">Платежные системы</div>
				<ul class="footer__list">
					<li class="footer__item"> <a class="footer__link" href="#"><img
								src="../../img/icon/8e3ad2fac3e49065a427.svg" alt=""></a> </li>
					<li class="footer__item"> <a class="footer__link" href="#"><img
								src="../../img/icon/642114b875e6c242afde.svg" alt=""></a> </li>
					<li class="footer__item"> <a class="footer__link" href="#"><img
								src="../../img/icon/f2f36f0632b5d6439493.svg" alt=""></a> </li>
				</ul>
			</div>
		</div>
	</div>`;

	footer.innerHTML = content;

	return footer
};