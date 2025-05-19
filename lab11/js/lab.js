// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Nadia Yasin
//Date: 19 May 2025



// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}


// click listener for button
$("#action").click(function(){

    // getting the value of input field
    const userName = $("#user-name").val();

    // sorting the inputs from userName and sortString
    userNameSorted = sortString(userName);

    // split into words and capitalize each one  
    //credit to wesbot  
    const words = userNameSorted.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    userNameSortedCapitalized = words.join(' ');

    // capitalize it
    //userNameSortedCapitalized = userNameSorted.charAt(0).toUpperCase() + userNameSorted.slice(1).toLowerCase();

    // append a new div to our output div
    $("#output").html('<div class="text"><p>' + userNameSortedCapitalized + '</p></div>');

});