var count = 0;
let colorCount = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];


function makeImage (imageName) {

 if (colors[colorCount] == imageName) {
       $("body").append("<img width=50 src='images/" + imageName + ".png'>");
   }

}

function changeBackground (newColor) {
   $("body").css("background-color", newColor);
 }

$(".color-button").click( function () {
 
   changeBackground(this.id);

});


function moody (moodyCount){
   let mood="";
   if (moodyCount < 5) { mood = "gresh and happy"; }
   else if ((moodyCount >= 5) && (moodyCount < 10)) { mood = "keep pushing"; }
   else { mood = "so tired"; }

   return mood;
}

// the button part
$("#needy-button").click(function () {

// move the mood deciding code outside as a seperate function and then call it from here, and use the result of the function for the button message
   let moodMessage=moody(count);

   $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount] + " " + moodMessage);

   changeBackground( colors[colorCount] );

   makeImage("Coral"); 
   makeImage("Orchid"); 
   makeImage("HotPink");
   makeImage("Plum"); 


   count = count + 1;
   colorCount = colorCount + 1;
   if (colorCount == 4) { colorCount = 0; }


});

// Get references to the audio and button elements
const myAudio = document.getElementById('myAudio');
const playPauseButton = document.getElementById('playPauseButton');

// Function to toggle play/pause
function togglePlayPause() {
    if (myAudio.paused) {
        myAudio.play();
        playPauseButton.textContent = 'Pause'; // Update button text
    } else {
        myAudio.pause();
        playPauseButton.textContent = 'Play'; // Update button text
    }
}

// Add an event listener to the button
playPauseButton.addEventListener('click', togglePlayPause);

// Optional: Update button text when the song ends
myAudio.addEventListener('ended', () => {
    playPauseButton.textContent = 'Play';
});