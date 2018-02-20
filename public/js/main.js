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

$(".article-slider").each(function() {
	let sliderSuccessStory = new Swiper ($(this).find('.swiper-container'), {
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: $(this).find('.article-slider__pagination'),
			type: 'fraction',
		},
		navigation: {
			nextEl: $(this).find('.article-slider__next'),
			prevEl: $(this).find('.article-slider__prev'),
		}
	});
});

$(".article-gallery-slider").each(function() {
	let sliderSuccessStory = new Swiper ($(this).find('.swiper-container'), {
		slidesPerView: 3,
		navigation: {
			nextEl: $(this).find('.article-slider__next'),
			prevEl: $(this).find('.article-slider__prev'),
		},
		breakpoints: {
			600: {
				slidesPerView: 2
			},
			480: {
				slidesPerView: 1
			}
		}
	});
})

window.onload = function () {
	let list = document.querySelectorAll('.section-main__bg, .section-wallpaper__bg');
	
	for(var i = 0; i < list.length; i++) {
		if(list[0] == null) continue;

		list[0].classList.add('animation');
	}
}

$(".nav-top__item").hover(function() {
	$(this).find(".ui-dropdown").addClass('ui-dropdown_open');

	return false;
},
function() {
	$(this).find(".ui-dropdown").removeClass('ui-dropdown_open');
});

$(window).on("load", function() {
	$('.nav-top').each(function() {

		let $this = $(this);



		let flat = new FlatMenu({
			wrap: $this.get(0),
			visible: $this.find('.nav-top__list').get(0),
			hidden: $this.find('.nav-top__more').get(0),
			button: $this.find('.nav-top__button').get(0),
			toStartTransform: function(item) {
				item.classList.add('nav-top__item');
				item.classList.remove('ui-dropdown__item');

				item.children[0].classList.add('nav-top__link');
				item.children[0].classList.remove('ui-dropdown__link');
			},
			
			toEndTransform: function(item) {
				item.classList.remove('nav-top__item');
				item.classList.add('ui-dropdown__item');

				item.children[0].classList.remove('nav-top__link');
				item.children[0].classList.add('ui-dropdown__link');
			}
		});

		$(window).resize(function() {
			flat.update();
		})
	});
});