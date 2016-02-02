// Mobile phones

enquire.register("screen and (min-width: 320px) and (max-width: 767px)", function() {
    
    // If mobile Toggle menu slide

    var slideout = new Slideout({
		'side': 'right',
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 280,
		'tolerance': 70,
		'touch': true,
	});

	slideout.on('beforeopen', function() {
		$(".header__toggle-menu #toggle").addClass("on");
	});

	slideout.on('beforeclose', function() {
		$(".header__toggle-menu #toggle").removeClass("on");
	});

	$('.toggle').on('click', function() {
		slideout.toggle();
		// $(".header__toggle-menu #toggle").toggleClass("on");
	});

	$(".header__search").click(function() {
		$(".search-box").fadeToggle();
		if ($('html').hasClass("slideout-open"))
		{
			slideout.toggle();
		}
	});
});

// Tablets and Desctops

enquire.register("screen and (min-width: 768px)", function() {

	// If tablet toggle menu fade

	$(".header__toggle-menu").click(function() {
		$(".header__toggle-menu #toggle").toggleClass("on");
		$(".big-menu").fadeToggle();
		// Checking visibility
		if ($('.search-box').is(":visible"))
		{
			$('.search-box').fadeOut();
		}
	});

	$(".header__search").click(function() {
		$(".search-box").fadeToggle();

		if ($('.big-menu').is(":visible"))
		{
			$('.big-menu').fadeToggle();
			$(".header__menu-link #toggle-big").toggleClass("on");
			$(".header__toggle-menu #toggle").toggleClass("on");
		}
	});
});
