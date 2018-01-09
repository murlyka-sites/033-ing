lang = '';	

$(".ui-lang-switcher__current").click(function() {

	let $b = $(this).closest(".ui-lang-switcher");
	console.log($b)
	let $list = $b.find(".ui-lang-switcher__list");

	$list.toggleClass("hidden")
})

$(".ui-lang-switcher__item").click(function() {

});

$(".menu").click(function() {
	$(this).toggleClass("menu_cross");
})