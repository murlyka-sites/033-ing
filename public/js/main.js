let vm = new Vue({
	el: '#app',
	data: {
		lang: {
			current: 'eng',
			list: ['eng', 'rus', 'ukr'],
			labels: {
				eng: 'Eng',
				rus: 'Рус',
				ukr: 'Укр'
			}
		},
		langSwitcherOpen: false
	}
});

let sliderPriory = new Swiper ('.swiper-container[data-slider="priory"]', {
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination[data-pagination="priory"]',
		clickable: true
	}
});

let sliderSuccessStory = new Swiper ('.swiper-container[data-slider="story"]', {
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination[data-pagination="story"]',
		clickable: true
	}
});