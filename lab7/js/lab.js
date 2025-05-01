// index.js - Functions
// Author: Nadia Yasin
// Date: 4 May 2025

function thePopUp (enterText){

    userSortedText = enterText.split(" ").sort().join(" ");  

    return userSortedText;
}

let userText = window.prompt("Please tell me your name :D");

let finalText = thePopUp(userText);

document.writeln("Hello " + finalText + ", </br> Welcome to my webpage!");