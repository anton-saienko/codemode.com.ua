$(document).ready(function() {
	
	$(function() {
		$('#carousel').carouFredSel({

			width: '100%',
			items: {
				 visible: 1,
				start: 0,
				},
			scroll: { fx : "fade", duration: 1000},
			prev: '#prev',
			next: '#next',
			pagination: {
				container: '#pager',
				deviation: 1
				}
		});
	});


	//menu
	$("#x").click(function(){
		$(".collapse").attr("aria-expanded","false").removeClass('in');
			$(this).hide();
	});
	$(".navbar-toggle").click(function(){
		$("#x").show();
	});

});