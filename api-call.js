function callApi() {
  $.ajax({
    url: "http://api.eventful.com/json/events/search?l=Seattle&app_key=C5VJScp667pVNMHB&keywords=story+time+evening+music&date=Today",
    type: "get",
    dataType: "jsonp",
    success: function(result) { 
       var eventData = result.events.event;
       console.log(eventData);
       for(var i = 0; i < eventData.length; i++){
          var obj = {};
           var dateTime = moment(eventData[i].start_time);
           obj['fullDate'] = dateTime.format('YYYY-MM-DD');
           obj['time'] = dateTime.format('hh:mm a');
           obj['name'] = eventData[i].title;
           obj['description']= eventData[i].description;
           obj['address']= eventData[i].venue_address;
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
    $('#events').append(obj.name);
 }

  
