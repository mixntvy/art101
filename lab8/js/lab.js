// index.js - Anon Function and Callbacks
// Author: Nadia Yasin
// Date: 8 May 2025

//creates a function that checks if x is divisible by 3 and returns 
//the value 0 if its true
function isDivisibleByThree(x) {
    return (x % 3 == 0);
}

//testing fucntion
console.log("Is 9 divisible by three?", isDivisibleByThree(9));
console.log("Is 22 divisible by three?", isDivisibleByThree(22));

//creating an array and naming it 'My Array'
array = [100,99,709,33,24,76,1];
console.log("My Array", array);

//creating a var for the results of the array when checked 
var result = array.map(isDivisibleByThree);
console.log("Test to see which numbers in the array are divisible by three", result);
//should return [false,true,false,true,true,false,false]

//multiplies each value in the array by 5
var result = array.map(function(x) {
    return x *5;
})
console.log("Array Multiplied by 5:", result);
