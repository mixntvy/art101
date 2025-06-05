// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Nadia Yasin
//Date: 5 June 2025



//ajax object
const ajaxObj ={
  url: "https://xkcd.com/info.0.json",
  data: {
    api_key: "ftYwJofhE3Deu3fWhjU7q3RyJo4RgHkO3MW0tGYW",
    count: 1
  },
  type: "GET",
  dataType: "JSON"
  
}

//button listener 
$("button").click(function(){
  
  //call ajax
  $.ajax(ajaxObj)

  //success callback 
  .done(function(data){
    console.log(data);
  
    //pull out relevant data from results 
    let title = data[0].title;
    let date = data[0].date;
    let explanation = data[0].explanation;
    let imageURL = data[0].url;
    
    //put data in output
    $("#output").html(`<h2>${title}</h2>`);
    $("#output").append(`<img src='${imageURL}'/>`);
    $("#output").append(`<p class='date'>${date}</p>`);
    $("#output").append(`<p class='exp'>${explanation}</p>`);
    
  })
  //fail callback 
  .fail(function(xhr, status, error) { 
    console.error(error); 
  })
})