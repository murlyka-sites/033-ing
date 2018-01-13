let vm = new Vue({
	el: '#app',
	data: {
		lang: {
			current: 'eng',
			list: ['Eng', 'Рус']
		},
		langSwitcherOpen: false,

		investorOpen: 0,
		load: false,

		mapLayer: 1,
		mapsTab: 1
	}
});

let sliderPriory = new Swiper ('.swiper-container[data-slider="priory"]', {
	effect: 'fade',
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination[data-pagination="priory"]',
		clickable: true
	},
	autoplay: {
		delay: 12000
	},
	fadeEffect: {
		crossFade: true
	}
});

let sliderSuccessStory = new Swiper ('.swiper-container[data-slider="story"]', {
	effect: 'fade',
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination[data-pagination="story"]',
		clickable: true
	},
	autoplay: {
		delay: 12000
	},
	fadeEffect: {
		crossFade: true
	}
});

window.onload = function () {
	document.querySelector('.section-main__bg').classList.add('animation')
}


