 $('#show-events-btn').on('click', function(){
 	var text = $('#searching').val();
 	$('ul').empty();
    callApi(text);
   });
 