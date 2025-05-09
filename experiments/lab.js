// index.js - Anon Function and Callbacks
// Author: Nadia Yasin
// Date: 8 May 2025

var index=1; 

let myArray=["Squirrel","Elephant","Lion","Walrus","Giraffe"];

function makingBabies (firstAnimal) {

    let result=firstAnimal+" makes babies with "+myArray[index];

    index=index+1;

        if (index==5) { index=0; }

    return result;
};

//map is a function that tells it to do something with every element of our array
console.log(myArray.map(makingBabies));


// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(myArray.map(makingBabies));
