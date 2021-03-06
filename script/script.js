let count = Math.floor(document.querySelector(".swiper-container").offsetWidth / 250); // ширина слайдов 

//slider
var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: count,
	centeredSlides: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

//tabs
let triggers = document.querySelectorAll(".js-trigger"); // считываем все табы

triggers.forEach((item) => {
	item.addEventListener("click", function () {	//на каждый вешаем событие
		let id = this.getAttribute("data-tab");	// узнаем какой таб был нажат
		let content = document.querySelector('.js-content[data-tab="' + id + '"]'); // и какой текст ему соответствует
		let img = document.querySelector('.options__phone-block img[data-tab="' + id + '"]');

		let active_trigger = document.querySelector(".js-trigger.active"); // находим активный в данный момент таб
		let active_content = document.querySelector(".js-content.active"); // и текст
		let active_img = document.querySelector(".js-img.active");

		active_trigger.classList.remove("active");	//переназначаем классы с активного таба и текста на выбранные
		item.classList.add("active");

		active_content.classList.remove("active");
		active_content.classList.remove("animate__fadeInRight"); // удаление класса анимации
		content.classList.add("active");
		content.classList.add("animate__fadeInRight"); // добавление класса анимации

		active_img.classList.remove("active");
		active_img.classList.remove("animate__fadeInRight");
		img.classList.add("active");
		img.classList.add("animate__fadeInRight");
	})
})

//modals
let modals_button = document.querySelectorAll(".openModal");

modals_button.forEach((item) => {
	item.addEventListener("click", function () {
		document.querySelector(".modal__wrap").style.display = "flex";
	})
})

document.querySelector(".closeModal").addEventListener("click", () => {
	document.querySelector(".modal__wrap").style.display = "none";
})
