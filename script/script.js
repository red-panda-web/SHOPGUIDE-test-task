let count = Math.floor(document.querySelector(".swiper-container").offsetWidth / 250);

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
let img_arr = ["img/phone2_list.jpg",	// массив изображений
	"img/phone2_actions.jpg",
	"img/phone2_subsribtions.jpg",
	"img/phone2_map.jpg",
	"img/phone2_favorites.jpg"];

triggers.forEach((item) => {
	item.addEventListener("click", function () {	//на каждый вешаем событие
		let id = this.getAttribute("data-tab");	// узнаем какой таб был нажат
		let content = document.querySelector('.js-content[data-tab="' + id + '"]'); // и какой текст ему соответствует

		let active_trigger = document.querySelector(".js-trigger.active"); // находим активный в данный момент таб
		let active_content = document.querySelector(".js-content.active"); // и текст

		active_trigger.classList.remove("active");	//переназначаем классы с активного таба и текста на выбранные
		item.classList.add("active");

		active_content.classList.remove("active");
		content.classList.add("active");

		document.querySelector(".options__phone-block img").setAttribute("src", img_arr[id - 1]); // меняем изображение на соответствующее активному табу
	})
})