export const cartUtil = {

	addProduct: ()=>{

		const hendleClick = (e) => {
			if (e.target.hasAttribute("data-cart")) {
				const card = e.target.closest(".card__item");

				const id = card.getAttribute("data-id"),
					img = card.querySelector(".slider__img").getAttribute("src"),
					title = card.querySelector(".card__title").textContent,
					price = card.querySelector(".card__price-text").textContent,
					checkStateId = '';

				const productInfo = {
					id: id,

					img: img,

					title: title,

					price: price,

					pcs: 1,
				};

				card.classList.toggle("cart-add");
			}
		};

		window.addEventListener("click", hendleClick);

	},

};