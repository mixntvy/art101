// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Nadia Yasin
//Date: 19 May 2025

//create a button that takes value and prints it in the html
$("#button").click (
    function(){
      
    //sets var "name" to equal the value of input
     let name=$("#input").val();
      console.log("name");
      
      //make var to store length of user input 
      let nameLength = name.length;
      console.log("namelength")
      
      //makes a var to call a function 
       let sort = getSortedLoser(nameLength);
      console.log("sort");
      
      //prints the output of sort in the html
      $("#output").html("<h1>" + sort + "</h1>");
      
      
      //create conditional for whether or not input is in the input field
      if (nameLength>0) {
        let result = getSortedLoser(nameLength);
        $("#output").html(result);
      }
      else {
        $("#output").html("Please Enter a Name");
      }

  }
);


function getSortedLoser(num) {
  
  let remainder = num % 4;
  let str ="";
  
  //check to see if namelength has a specfic remainder after being divided by 4
  if (remainder == 0) {
    str = "You are a Zora! They are an aquatic folk who possess fish and amphibian like traits, including fins, webbed feet and gills, which allow them to swim and thrive underwater. Zora can come in many shapes and sizes, but are most commonly depicted as humanoids with long tail fins on their heads and finned appendages on their arms and legs. They are protectors of water.";
    console.log("fish")
  } else if (remainder == 1) {
    str = "You are a Rito! They are a people who possess avian features, including wings which give them the ability of flight. The Rito are a proud tribe and they use their island as a Post Office for everyone who lives on the Great Sea.";
  console.log("bird")
  } else if (remainder == 2) {
    str = "You are a Goron! They are a race of rock people inhabiting Hyrule, Termina, and several other countries, typically living in mountain ranges. They have the capability to thrive in any environment, and in times of crisis, have survived by migrating to different climes.";
  console.log("rock")
  } else if (remainder == 3) {
    str = "You are a Gerudo! They are a reclusive tribe of humanoids that consists almost entirely of women. The Gerudo race have dark skin, golden eyes, red hair, and sharp bird-like nose. These warriors frequently wield glaive-like weapons and scimitars.";
  console.log("warrior")
  }
 return str;
}
