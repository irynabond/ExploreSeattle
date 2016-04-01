function callApi(text) {
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

   $.ajax({
    url: "https://www.eventbriteapi.com/v3/events/search/?location.address=Seattle&start_date.keyword=today&q="+text+"&token=MO5AQ24HAYLNBP7L5WLE",
    type: "get",
    success: function(result) { 
       var eventData = result.events;
       console.log(eventData);
       for(var i = 0; i < eventData.length; i++){
          var obj = {};
           var dateTime = moment(eventData[i].start.local);
           obj['fullDate'] = dateTime.format('YYYY-MM-DD');
           obj['time'] = dateTime.format('hh:mm a');
           obj['name'] = eventData[i].name.text;
           obj['description']= eventData[i].description.text;
           obj['address']= "Please, check a link below";
           obj['url']= eventData[i].url;
           obj['city']= "Seattle";
           obj['state']= "WA";
           obj['company_name']= "Eventbrite";
           console.log(obj);
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

