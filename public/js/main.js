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

let sliderPriory = new Swiper ('.swiper-container', {
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
});