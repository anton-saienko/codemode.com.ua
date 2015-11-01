<!-- СЕЛЕКТ -->
var bodyTag = document.getElementsByTagName("body")[0];
bodyTag.className = bodyTag.className.replace("noJS", "hasJS");

			$(function() {
				
				$("select.custom").each(function() {					
					var sb = new SelectBox({
						selectbox: $(this),
						height: 150,
						width: 300
					});
				});
				
			});

			
			
<!-- КАРУСЕЛЬ -->		
$(function() {
	$('#carousel').carouFredSel({
		width: '100%',
		items: {
			visible: 3,
			start: -1
			},
		scroll: {
			items: 1,
			duration: 1000,
			timeoutDuration: 2000
			},
		prev: '#prev',
		next: '#next',
		pagination: {
			container: '#pager',
			deviation: 1
			}
	});
});


<!-- ВАЛИДАЦИЯ ФОРМ -->		
$().ready(function() {
	// validate signup form on keyup and submit
	$(".form").validate({
		rules: {
			user_pass: {
				required: true,
				minlength: 5
			},
			user_email: {
				required: true,
				email: true
			}
		},
		messages: {
			user_pass: {
				required: "Введите пароль.",
				minlength: "Пароль должен быть от 5-ти символов."
			},
			user_email: "Пожалуйста, введите адрес, соотвутствующий формату 'mail@site.org'"
		}
	});
});