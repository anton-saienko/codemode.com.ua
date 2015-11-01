/* -----CAROUSEL----- */
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
				}
			});
		});
/* -----end of carousel----- */	

/* -----FORMSTYLER----- */
	(function($) {
		$(function() {
			$('input, select').styler();
		});
	})(jQuery);
/* -----end of formstyler----- */

/* -----VALIDATE----- */
$().ready(function() {
	$("#calculate_profit").validate({
		rules: {
			number_field_1: {
				required: true,
				number: true
			},
			number_field_2: {
				required: true,
				number: true
			},
			number_field_3: {
				required: true,
				number: true
			}
		},
		
		messages: {
			number_field_1: {
				required: "Ошибка! Это поле может содержать лишь цифры"
			},
			number_field_2: {
				required: "Ошибка! Это поле может содержать лишь цифры"
			},
			number_field_3: {
				required: "Ошибка! Это поле может содержать лишь цифры"
			}		
		}
	});
});
/* -----end of validate----- */

/* -----РАСЧЕТ ЭКОНОМИИ----- */
$(document).ready(function () {
    $(".count1").on('change',calculate);
    $(".count2").on('input',calculate);
    function calculate() {
        var agriculture = +$("#agriculture").val(),
            number_field_1 = +$("#number_field_1").val(),
            number_field_2 = +$("#number_field_2").val(),
            number_field_3 = +$("#number_field_3").val(),
	total = Math.round((((number_field_1*0.001)*agriculture)*number_field_2) +(number_field_3*number_field_2)),
        total2 = Math.round((((number_field_1*0.001)*agriculture)*number_field_2) +((number_field_3*0.5)*number_field_2)),
        total3 = total - total2;
        $('span.total').text(total);
        $('span.alternative').text(total2);
        $('span.economy2').text(total3);
    }
});