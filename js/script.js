$(document).ready(function() {
	// navigation onmouseover
	$('.dropdown').on('mouseover', function () {
		$('#nav-list > li:first').addClass("open");

	})

	$('.dropdown').on('mouseout', function () {
		$('#nav-list > li:first').removeClass("open");
	})

});