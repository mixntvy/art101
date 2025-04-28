// index.js - Creating Arrays and Objects
// Author: Nadia Yasin
// Date: 28 Apr 2025

// Define Variables
myTransport = ["my Mazda"," the bus"," rides from friends", " and walking."];

// Create object for main ride
myMainRide = {
  make: "Mazda",
  model: "M3",
  color: "Dark Gray",
  year: "2019",
  age: function(){
    return 2025 - this.year;
  }
}

// Output
document.writeln("The transportation I use is ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
