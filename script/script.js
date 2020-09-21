let count = Math.floor(document.querySelector(".swiper-container").offsetWidth / 250);
var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: count,
	centeredSlides: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})