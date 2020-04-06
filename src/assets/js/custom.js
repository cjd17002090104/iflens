var recaptcha_active = false;

$(document).ready(function(){

	$("#closealert").click(function(){
		$("#divAlert").fadeOut("slow");
	});
	
	$("#closeerror").click(function(){
		$("#divError").fadeOut("slow");
	});
	
	$("#tabs a").click(function(e) {
		if ($(this).attr('href') == '#tab-review' && recaptcha_active) reviews();
		if ($(this).attr('href') == '#tab-friend' && recaptcha_active) tell_a_friend();
	});
	
	/******** Account Navigation Menu **********/
	$('#menuaccount > span').click(function () {
		  $(this).toggleClass("active");  
		  $(this).parent().find("> ul").slideToggle('medium');
		});
	
	/******** Accordion **********/
	$('.accordion-heading, .checkout-heading').on('click', function() {
		$('.accordion-content, .checkout-content').slideUp('slow');
		$(this).parent().find('.accordion-content, .checkout-content').slideDown('slow');
	});


	/******** Tabs **********/
	if (jQuery().tabs) {
		$('#tabs a').tabs();
	}
	
	/******** plus minus button in qty **********/
	$(".qtyBtn").click(function(){
		if($(this).hasClass("plus")){
			var qty = $("#qty").val();
			qty++;
			$("#qty").val(qty);
		}else{
			var qty = $("#qty").val();
			qty--;
			if(qty>0){
				$("#qty").val(qty);
			}
		}
	});
	
	$('#menuaccount ul > li > a + div').each(function(index, element) {
		// IE6 & IE7 Fixes
		if ($.browser.msie && ($.browser.version == 7 || $.browser.version == 6)) {
			var category = $(element).find('a');
			var columns = $(element).find('ul').length;
			
			$(element).css('width', (columns * 143) + 'px');
			$(element).find('ul').css('float', 'left');
		}		
		
		var menu = $('#menuaccount').offset();
		var dropdown = $(this).parent().offset();
		
		i = (dropdown.left + $(this).outerWidth()) - (menu.left + $('#menuaccount').outerWidth());
		
		if (i > 0) {
			$(this).css('margin-left', '-' + (i + 5) + 'px');
		}
	});
		
	/******** Carousel **********/
	if (jQuery().jcarousel) {
		$('#carousel ul').jcarousel({
			vertical: false,
			visible: 5,
			scroll: 3
		});
	}
});