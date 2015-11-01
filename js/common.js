$(document).ready(function() {
	
	
$(function() {
    $("#form").validate({
        messages: {
            email: {
                required: "Пожалуйста, введите адрес, соответствующий формату 'mail@site.com'"
            },
            user_name: {
                required: "Пожалуйста, введите свое имя"
            },
            question: {
                required: "Пожалуйста, напишите свой вопрос"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "mail.php",
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
$(document).ready(function(){ // По умолчанию выбраны все
    $('#all').addClass('current-li');
    $('nav > ul > li').click(function(){
        show(this.id);
    });
});

function scaleDown() { // Заменяем классы у выделенных элементов, и удаляем класс у текущей категории
    $('.work > figure').removeClass('selected').addClass('not-selected');
    $('nav > ul > li').removeClass('current-li');
}

function show(category) { // Добавляем класс к категории,  меняем классы у выбранных работ
    scaleDown();
    $('#' + category).addClass('current-li');
    $('.' + category).removeClass('not-selected');
    $('.' + category).addClass('selected');
    if (category == "all") { // Если выбраны все работы
        $('nav > ul > li').removeClass('current-li');
        $('#all').addClass('current-li');
        $('.work > figure').removeClass('selected, not-selected');
    }
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