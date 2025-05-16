// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Nadia Yasin
//Date: 15 May 2025



//Function that takes text and randomizes it 
function generateRandomText() {
  const text = `I know that you're tired of the war and bloodshed. Tell me, is this how we're supposed to live? Look at how you grip your sword, enough said. Why should we take when we could give? You could show a person that you trust them. When you stop and lower your guard. Here we have a chance for some adjustment. Give it a try, it's not that hard, I'm telling you, This life is amazing when you greet it with open arms. Whatever we face, we'll be fine if we're leading from the heart. No matter the place, we can light up the world, here's how to start. Greet the world with open arms. Greet the world with open arms. `;
  const min = 3;
  const max = 150;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;

  // Get a random starting index and adjust to nearest whitespace boundary
  let randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  while (randStart > 0 && text[randStart - 1] !== ' ') {
    randStart--;
  }

  // Set the end index and adjust to nearest whitespace boundary
  let endIdx = randStart + randLen;
  while (endIdx < text.length && text[endIdx] !== ' ') {
    endIdx++;
  }

  // Generate the random text, breaking at the nearest whitespace boundaries
  let selectedText = text.slice(randStart, endIdx).trim();

  // Capitalize the first letter of the selected text
  return selectedText.charAt(0).toUpperCase() + selectedText.slice(1);
}


$("#action").click(
    function(){

      // get new fake dialogue using above function
      const newText = generateRandomText();

      //append the output to a new div with the class called "text" that takes the generated text 
      // from the function "generateRandomText" and puts it in a <p>
      $("#output").append('<div class="text"> <p>' + newText + '</p> </div>');
    }
);
