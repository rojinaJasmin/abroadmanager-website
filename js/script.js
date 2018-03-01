$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header-nav').addClass('fixed');
			$('#nav-list a').css("color", "black");
			$('.navbar-brand h1').css("color", "black");
		} else {
			$('#header-nav').removeClass('fixed');
			$('#nav-list a').css("color", "#eee");
			$('.navbar-brand h1').css("color", "#eee");
		}
	});
});