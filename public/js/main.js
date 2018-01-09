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




$(".menu").click(function() {
	$(this).toggleClass("menu_cross");
})