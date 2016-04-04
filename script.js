 $('#show-events-btn').on('click', function(){
 	var text = $('#searching').val();
 	$('ul').empty();
 	$('#header').append('<span class = "event-header">Here you go! Check out these events in Seattle. </span>')
    callApi(text);
   });
 