
$(document).ready(function() {
	
	$(function() {
		$("#form").validate({
			messages: {
				email: {
					required: "Please, print the adress in the 'mail@site.com' format"
				},
				user_name: {
					required: "Please, print your name"
				},
				question: {
					required: "Please, print your question"
				}
			},
			submitHandler: function(form) {
				$.ajax({
					type: "POST",
					url: "../mail.php",
					data: $(form).serialize()
				}).done(function() {
					$(form).find("input").val("");
						$.magnificPopup.open({
						items: {
						src: '#popup_form', 
						type: 'inline'
						}
						});
					$("#form").trigger("reset");
				});
				return false;
			}
		});  
	});
	
});


/*POPUP*/
$(document).ready(function() {
  $('.popup').magnificPopup({
	  callbacks: {
		afterClose: function() {
		$('html').css('overflow', 'visible');
		}
	 } 
  });
  
	$('#close_popup_button').click(function(){
		$.magnificPopup.close();
	});

});



/*РАЗДЕЛ ПОРТФОЛИО*/
$(document).ready( function() {
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.item'
  });

  // store filter for each group
  var filters = {};

  $('.filters').on( 'click', '.button', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.button-group');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = concatValues( filters );
    // set filter for Isotope
    $grid.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});

// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}


/* FULLPAGE */
if (document.documentElement.clientWidth > 767) {
   	$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['1Page', '2Page', '3Page', '4Page'],
				scrollOverflow: true,
				navigation: true,
				navigationPosition: 'right',
				menu: '#menu',
				responsiveWidth: 768,
				navigationTooltips: ['Главная', 'Информация', 'Портфолио','Контакты']
			});
		});
}
if (document.documentElement.clientWidth < 768) {
  	$(document).ready(function() {
			$('#fullpage').fullpage({
				anchors: ['1Page', '2Page', '3Page', '4Page'],
				scrollOverflow: false,
				navigation: true,
				navigationPosition: 'right',
				menu: '#menu',
				responsiveWidth: 768,
				navigationTooltips: ['Главная', 'Информация', 'Портфолио','Контакты']
			});
		});
}


/*Автоматическое закрытие навбара на мобильных*/		
if (document.documentElement.clientWidth <  768) {
	$(function(){
		$('a[class=nav_a]').attr('data-toggle', 'collapse');
		$('a[class=nav_a]').attr('data-target', '.navbar-collapse');
	});
}