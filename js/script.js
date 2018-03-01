$(document).ready(function() {
	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 30) {
			$('#header-nav').addClass('fixed');
			$('#nav-list a').css("color", "black");
			$('.navbar-brand h1').css("color", "black");
			$('.navbar-toggle span').css("border", "1px solid black");
		} 
		else 
		{
			$('#header-nav').removeClass('fixed');
			$('#nav-list a').css("color", "#eee");
			$('.navbar-brand h1').css("color", "#eee");
			$('.navbar-toggle span').css("border", "1px solid #fff");
		}
	});
});