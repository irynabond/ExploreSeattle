  var fixed = false;

  $(document).scroll(function() {
	var top = $('#background').outerHeight();
    if( $(this).scrollTop() > top) {
        if( !fixed ) {
            fixed = true;
            $('#narrow').show();
        }
    } else {
      if( fixed ) {
          $('#searching').val("");
          $("#searching").focus();
          fixed = false;
          $('#narrow').css({display:'none'});
      }
    }
})

 function clickButton (event){
 	$("#narrow").hide();
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
}

 function scroll () {
 	 
 	 $('html, body').animate({
   		 scrollTop: $("#background").offset().top
	  }, 1000);
  
 }


$(".search-zip").submit(function() {
    clickButton($("#searching").get(0));
    return false;
});
 
