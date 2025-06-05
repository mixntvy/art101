// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Nadia Yasin
//Date: 5 June 2025



//ajax object
const ajaxObj ={
    // asked chat gpt for a bit of help with the CORS error and suggested this edit to the url line
  url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json"),
//   data: {
//     api_key: "ftYwJofhE3Deu3fWhjU7q3RyJo4RgHkO3MW0tGYW",
//     count: 1
//   },
  type: "GET",
  dataType: "JSON"
  
}

//button listener 
$("#action").click(function(){
  
  //call ajax
  $.ajax(ajaxObj)

  //success callback 
  .done(function(response){
    //asked chat gpt for a bit of help with the CORS error i was getting in the 
    // console and it suggested i add this line 
    const data = JSON.parse(response.contents);

    console.log(data);
  
    //pull out relevant data from results 
    let title = data.title;
    let date = `${data.year}-${data.month}-${data.day}`;
    let explanation = data.transcript;
    let imageURL = data.img;
    
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