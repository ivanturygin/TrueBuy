
	function slider() {

		const content = document.querySelector(content),
			conteiner = content.querySelector(conteiner),
			slides = content.querySelectorAll(slides),
			slider = content.querySelector(slider),
			prev = content.querySelector(rev),
			next = content.querySelector(next),
			wrapper = content.querySelector(wrapper),
			field = content.querySelector(field),
			width = window.getComputedStyle(wrapper).width,
			nav = content.querySelector(nav);

			
		let slideIndex = 1;
		let offset = 0;

		const indicators = document.createElement('ol');

		dots = [];

		indicators.classList.add('slider__indicator');

		nav.append(indicators);

		for (let i = 0; i < slides.length; i++) {

			const dot = document.createElement('li');

			dot.setAttribute('data-slide-to', i + 1);

			dot.classList.add('slider__indicator-dot');

			if (i == 0) {
				dot.style.opacity = 1;
			};

			indicators.append(dot);

			dots.push(dot);

		};

		next.addEventListener('click', () => {

			if (offset == (deleteNotDigits(width) * (slides.length - 1))) {

				offset = 0;

			} else {

				offset += deleteNotDigits(width);

			};

			field.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == slides.length) {
				slideIndex = 1;
			} else {
				slideIndex++;
			};

			dots.forEach(dot => dot.style.opacity = '.5');
			dots[slideIndex - 1].style.opacity = 1;

		})

		prev.addEventListener('click', () => {

			if (offset == 0) {
				offset = deleteNotDigits(width) * (slides.length - 1)
			} else {
				offset -= deleteNotDigits(width);
			};

			field.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == 1) {
				slideIndex = slides.length;
			} else {
				slideIndex--;
			};

			dots.forEach(dot => dot.style.opacity = '.5');
			dots[slideIndex - 1].style.opacity = 1;

		})

		dots.forEach(dot => {
			dot.addEventListener('click', (e) => {
				const sliderTo = e.target.getAttribute('data-slide-to');

				slideIndex = sliderTo;

				offset = deleteNotDigits(width) * (sliderTo - 1);

				field.style.transform = `translateX(-${offset}px)`;

				dots.forEach(dot => dot.style.opacity = '.5');
				dots[slideIndex - 1].style.opacity = 1;

			});

		});

		function deleteNotDigits(str) {
			return +str.replace(/\D/g, '')
		};

	};

export default slider;