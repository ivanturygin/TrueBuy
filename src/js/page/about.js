
export function aboutPage () {

	const page = document.createElement('div');
	page.classList.add('aboutUs');

	const contentPage = `
<div class="conteiner">
	<div class="aboutUs__inner">
		<h3 class="aboutUs__title">O нас</h3>
		<div class="aboutUs__text">

			<p>Мы рады приветствовать Вас на сайте нашей компании.</p>
			
			<p>Наша компания была основана в 1993 году, а наш интернет-магазин стал одним из первых магазинов, осуществляющих
				on-line продажу мебели в регионе. Компания специализируется на оптовой и розничной продаже мебели как для дома,
				так и
				для офиса и производственных помещений, а также различной мебельной фурнитуры.</p>

			<p>На данный момент мы представляем собой крупную компанию, владеющую интернет–магазином и имеющую в своей сети
				единый
				call-центр, который регулирует всю деятельность магазина, отдел продаж, службу доставки, широкий штат
				квалифицированных сборщиков, собственный склад c постоянным наличием необходимого запаса товаров.</p>

			<p>За это время у нас сложились партнерские отношения с ведущими производителями, позволяющие предлагать
				высококачественную продукцию по конкурентоспособным ценам.</p>

		</div>
	</div>
	</div>`;

		page.insertAdjacentHTML('afterbegin', contentPage)

	return page

};