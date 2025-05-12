// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Nadia Yasin
//Date: 12 May 2025


//Creating buttons that change the css of the page 

    //Button 1
        // adds a button for subject section and gives the button the id "button-subject"
            $("#subject").append("<button id='button-subject'> Change it Up? </button>");

        // adds a click listener to the subject button and uses a function to add (or subtract) the "special" class to the section
            $("#button-subject").click(function(){
                $("#subject").toggleClass("special");
            });


    //Button 2
        // adds a button for challenges section and gives the button the id "button-challenges"
             $("#challenges").append("<button id='button-challenges'> Change it Up? </button>");

        // adds a click listener to the challenges button and uses a function to add (or subtract) the "special" class to the section
            $("#button-challenges").click(function(){
                $("#challenges").toggleClass("special");
             });


    //Button 3
        // adds a button for results section and gives the button the id "button-results"
            $("#results").append("<button id='button-results'> Change it Up? </button>");

        // adds a click listener to the results button and uses a function to add (or subtract) the "special" class to the section
             $("#button-results").click(function(){
                $('#results').toggleClass("special");
            });