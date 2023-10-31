
export function mainPage(){

	const page = document.createElement('div');
	page.classList.add('main');

	const content = `<section class="section-top">

			<div class="conteiner">
				<div class="section-top__inner">
					<div class="section-top__content">
						<div class="section-top__item">
							<div class="section-top__title-wrapper">
								<h1 class="section-top__title">Теперь Покупка Мебели Стала Проще</h1>
								<span class="line"></span>
							</div>
							<div class="search">
								<input class="search__input" type="text" placeholder="Search your product here">
								<button class="search__button">search</button>
							</div>
						</div>
						<div class="section-top__item">
							<div class="section-top__text">У Нас Есть Мебель, Необходимая Для Вашего Нового Дома. Получите
								Большие Скидки На Все, От Столов До Ламп!</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="section-content">
			<div class="conteiner">

				<div class="categories">
					<div class="categories__inner">
						<h3 class="categories__title">Популярные категории</h3>
						<div class="categories__list">

							<div class="categories__item">
								<div class="categories__img">
									<div class="categories__img-inner">
                           <img class="categories__img-images categories__chair" src="../../img/Chair.png" alt="Chair">
									</div>
								</div>
								<p class="categories__text">Диваны</p>
								<button class="categories__btn"></button>
							</div>

							<div class="categories__item">
								<div class="categories__img">
									<div class="categories__img-inner">
                        <img class="categories__img-images categories__cabinet" src=".../../img/cabinet.png"
                        	alt="Chair">
									</div>
                     
								</div>
								<p class="categories__text">Шкафы</p>
								<button class="categories__btn"></button>
							</div>

							<div class="categories__item">
								<div class="categories__img">
								<div class="categories__img-inner">
                     <img class="categories__img-images categories__lamp" src="../../img/lamp.png" alt="Chair">
								</div>
								</div>
								<p class="categories__text">Лампы</p>
								<button class="categories__btn"></button>
							</div>

							<div class="categories__item">
								<div class="categories__img">
									<div class="categories__img-inner">
                        	<img class="categories__img categories__table" src="../../img/table.png" alt="Chair"></div>
									</div>
								<p class="categories__text">Столы</p>
								<button class="categories__btn"></button>
							</div>
						</div>

						<div class="present">
							<div class="present__content">
								<h3 class="present__content-title">Современный дом начинается с Truebuy.</h3>
								<p class="present__content-text">У нас вы Найдете Идеальную Мебель Для Дома,на любой вкус.</p>
								<img class="present__content-img" src="../../img/present.jpg" alt="">
							</div>

							<ul class="present__list">
								<li class="present__item">
									<p class="present__item-title">Быстрая доставка</p>
									<p class="present__item-text">Доставка за 1 день в 19 городах Росии!</p>
								</li>
								<li class="present__item">
									<p class="present__item-title">Конкурентные цены</p>
									<p class="present__item-text">Стоимость Большинства Наших Продуктов Составляет менее 20 000
										рублей!</p>
								</li>
							</ul>

						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="design">
			<div class="conteiner">
				<div class="design__inner">
					<div class="design__content">
						<p class="design__title">Спроектируйте дом своей мечты с идеальной мебелью.</p>
						<p class="design__text">Мы поможем вам с покупкой идеальной мебели.</p>
						<button class="design__buttom">Перейти в коталог</button>
					</div>
					<div class="design__image">
						<img class="design__img" src="../../img/design.png" alt="foto">
						<div class="design__image-behind"></div>
					</div>
				</div>
			</div>
		</section>

		<section class="section-reviews">
			<div class="conteiner">
				<h3 class="section-reviews__title">Отзывы</h3>
				<div class="section-reviews__inner">

					<div class="reviews">
						<div class="reviews__top">
							<div class="reviews__name">Иван Т</div>
							<div class="reviews__img">
								<img src="../../img/3663-bay.jpg" alt=""></div>
						</div>
						<div class="reviews__grade">
							<img src="../../img/icon/star.png" alt="star">
						</div>
						<div class="reviews__text">Понравился сервис и диван отличный!!!
							Быстрая доставка, всё на высоте!!! Рекомендую этот магазин.
						</div>
					</div>

					<div class="reviews">
						<div class="reviews__top">
							<div class="reviews__name">Анна П</div>
							<div class="reviews__img">
								<img src="../../img/images.jpg" alt=""></div>
						</div>
						<div class="reviews__grade">
							<img src="../../img/icon/star.png" alt="star">
						</div>
						<div class="reviews__text">Хочу отметить блестящую работу менеджеров и курьеров. Не к чему придраться )
							Буду
							заказывать еще что-то здесь.
						</div>
					</div>

					<div class="reviews">
						<div class="reviews__top">
							<div class="reviews__name">Никита С</div>
							<div class="reviews__img">
								<img src="../../img/qLjmzhDX8vo-e1487760557956-300x298.jpg" alt=""></div>
						</div>
						<div class="reviews__grade">
							<img src="../../img/icon/star.png" alt="star">
						</div>
						<div class="reviews__text">Лучший магазин мебели. Модные новинки всегда.
						</div>
					</div>
				</div>
			</div>
		</section>

		<section class="discount">
			<div class="conteiner">
				<div class="discount__inner">
					<div class="discount__gradient"></div>
					<div class="discount__content">
						<h3 class="discount__title">Скидка до 50% на первый заказ!</h3>
						<button class="discount__buttom">Перейти в каталог</button>
					</div>
				</div>
			</div>
		</section>`;

		page.innerHTML = content;

		return page

};