function callApi(text) {
  console.log(text)
  $.ajax({
    url: "http://api.eventful.com/json/events/search?l=Seattle&date=today&keywords="+ text + "&app_key=C5VJScp667pVNMHB",
    type: "get",
    dataType: "jsonp",
    success: function(result) { 
       var eventData = result.events.event;
       for(var i = 0; i < eventData.length; i++){
          var obj = {};
           var dateTime = moment(eventData[i].start_time);
           obj['fullDate'] = dateTime.format('YYYY-MM-DD');
           obj['time'] = dateTime.format('hh:mm a');
           obj['name'] = eventData[i].title;
           obj['description']= eventData[i].description;
           if (eventData[i].venue_address!==null) {
            obj['address']= eventData[i].venue_address;
           } else {
             obj['address']= "Please, check a link below";
           }
           obj['url']= eventData[i]["url"];
           obj['city']= eventData[i].city_name;
           obj['state']= eventData[i].region_abbr;
           obj['zip']= eventData[i].postal_code;
           obj['company_name']= "Eventful";
           showEventfulData(obj);
        }       
      } 
  })
}


function showEventfulData(obj) {
    $('ul').append('<li>' +
          '<div class = "content">' +
            '<p id = "title">' + obj.name + '</p>' +
            '<p class = "details">Date and time: </p>' + 
            '<p class = "data-details">' +  obj.fullDate + " " + obj.time + '</p>' + 
            '<p class = "details"> Address: </p>' +
            '<p class = "data-details">' + obj.address + ", " + obj.city + '</p>' +
            '<p class ="link"> Open on <a href=' + obj.url+ '>' + obj.company_name + '</a></p>' +
          '</div>'+
    '</li>');
 }

