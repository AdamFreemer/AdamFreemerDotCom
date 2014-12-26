$(document).ready(function(){

	$("a").hover(function() {
	   	$(this).animate({'opacity':'0.2'}, 500);
	},
	function(){
	   	$(this).animate({'opacity':'0.8'}, 50);
	});


	// Photo Slider
	$('.bxslider').bxSlider({
	  infiniteLoop: false,
	  hideControlOnEnd: true,
	  controls: true

	});


	// Smooth Scroll
	function scrollToDiv(element,navheight){
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;   
 
    $('body,html').animate({scrollTop: totalScroll}, 250)};
	$('nav ul li a').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
     
    scrollToDiv(elWrapped,40);
    return false;
	});




	// Contact Form
	$("#form1").validate({
		submitHandler: function() {
			//submit the form
			$.post("<?php echo $_SERVER[PHP_SELF]; ?>", //post
				$("#form1").serialize(), 
				function(data){
				  //if message is sent
				  if (data == 'Sent') {
				    $("#message").fadeIn(); //show confirmation message
				    $("#form1")[0].reset(); //reset fields
				}
				//
			});
			return false; //don't let the page refresh on submit.
		}
	}); //validate the form




});