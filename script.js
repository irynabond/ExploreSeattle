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



$(document).on("click", ".content", function(e) {
  var target = $(e.target).closest('.content');
  var title = target.find('.title');

  var descr = target.data(title.text()).event;
  if (descr===null) {
    descr = "Sorry, there is no description for this event provided. To learn more, follow the event link and contact to organizer. Thank you.";
  }
  bootbox.dialog({
        title: '<p class = "popup-title"><strong>' + title.text() + '</strong></p>',
        message: '<p class = "popup-desc">' +descr + '</p>',
        buttons: {
          success: {
              label: "Close",
              className: "btn-success",
              callback: function () {
                 console.log("ok")
              }
          }
        }
    });
});


 function clickButton (event){
  if ($('#searching').val()!=="") {

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
  } else {
    bootbox.dialog({
        title: '<p class = "popup-title"><strong>Hello friend!</strong></p>',
        message: '<p class = "popup-desc">Use an input field to tell which type of event you\'d like to attend. For example: "dancing", "hiking", "music", "art", "learning". Hope you\'ll enjoy the experience.</p>',
        buttons: {
            success: {
                label: "OK",
                className: "btn-success",
                callback: function () {
                   console.log("ok")
                }
            }
        }
    });
  }
}

function searchKeyPress(e) {
  // look for window.event in case event isn't passed in
  e = e || window.event;
  if (e.keyCode == 13) {
    document.getElementById('show-events-btn').click();
    return false;
  }
  return true;
}

 function scroll () {
 	 $('html, body').animate({
   		 scrollTop: $("#background").offset().top
	  }, 1000); 
 }

