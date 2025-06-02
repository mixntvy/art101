// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Nadia Yasin
//Date: 19 May 2025

const ajaxObj = {
  url: "https://api.chucknorris.io/jokes/random",
  //data {},
  type: "GET",
  datatype: "json"
}

$("#action").click(function(){
  console.log("click");
  
  $.ajax(ajaxObj)
  
  .done(function(data){
    console.log("success");
    console.log(data);
    
    let value = data.value;
    let imageURL = data.image;
    //let imageHTML = "<img src='" + imageURL + "'>";
    $("#output").html("<h1>" + value);
    $("#output").append(imageHTML);
    
  })
  
  .fail(function(xhr,status,errorThrown){
    console.log(errorThrown + "Status:" + status);
  });
  
})