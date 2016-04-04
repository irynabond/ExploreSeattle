 $('#show-events-btn').on('click', function(){
 	$("#loading").show();
 	var text = $('#searching').val();
 	$("#header").empty();
 	$('ul').empty();
 	callApi(text);
 	setTimeout(function(){
    $('#header').append('<span class = "event-header">Here you go! Check out these events in Seattle. </span>');
    $("#loading").hide();
 		$('html, body').animate({
   		 scrollTop: $(".events-content").offset().top
			}, 1000);
 	 }, 2500);
   
 });
 