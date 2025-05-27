// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
//Requirements: jQuery must be loaded for this script to work.
//Author: Nadia Yasin
//Date: 26 May 2025


$("#action").click(function(){
    //credit to W3Schools lines 9-11
    var outputElement = document.getElementById('output');

    var data = boomBopBam();
    
    // credit to wesbot lines 14-18
    var html = '';
    for (var i = 0; i < data.length; i++) {
        html += '<p>' + data[i] + '</p>';
    }
    outputElement.innerHTML = html;
});

 
function boomBopBam () {
    const logArray = [];
    for (i = 1; i <= 200; i++) {
        if (i % 15 == 0) {
            logArray.push("BoomBopBam");
        } else if (i % 3 == 0) {
            logArray.push("Boom");
        } else if (i % 5 == 0) {
            logArray.push("Bop");
        } else if (i % 7 == 0) {
            logArray.push("Bam");
        } else {	
            logArray.push(i);
        }
    } 
    return(logArray);
}






