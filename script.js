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

 $('#show-events-btn').on('click', function(){
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
 });

function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('show-events-btn').click();
        return false;
    }
    return true;
}

 function scroll () {

 	 $('html, body').animate({
   		 scrollTop: $("#background").offset().top
	  }, 1000);
  /* $('#searching').val("");
   $("#searching").focus();*/
 }

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
