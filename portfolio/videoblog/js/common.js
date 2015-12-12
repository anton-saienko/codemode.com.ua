





/*каруселька*/
$(document).ready(function() {
     
    $("#owl").owlCarousel({
    items:1,
    loop:true,
	video:true,
    nav: true, // Show next and prev buttons
	navText : ["",""],
	dots: false


    });
	
});



/*спрятать плейсхолдер в инпутах при выборе*/
$(function () {
    $('input').focus(function () {
        $(this).data('placeholder', $(this).attr('placeholder'))
               .attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).data('placeholder'));
    });
});
