$(document).ready(function() {

	$( window ).load('index.html',function() {
		$('#social').fadeIn(3000);
		
	});


	$('#ab').click(function() {
		$('html, body').animate({
			scrollTop: $('#landing').offset().top},
		1000)
	});

	$('#sk').click(function() {
		$('html, body').animate({
			scrollTop: $('#second').offset().top},
		1000)
	});

	$('#pj').click(function() {
		$('html, body').animate({
			scrollTop: $('#third').offset().top},
		1000) 
	});

	$('#ct').click(function() {
		$('html, body').animate({
			scrollTop: $('#contact-s').offset().top},
		1000)
		});

	$('#drop-btn').click(function() {
		$('#drp').toggleClass('drp-rotate');
		$('#nav').toggle(300);
		$('#nav li').fadeIn(1000);
	});





	$(window).resize(function() {
  		if ($(window).width() > 768) {
     		$('#nav').show();
  			}
		});

});