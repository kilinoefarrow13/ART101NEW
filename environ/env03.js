$(document).ready(function() {

//declare where this space is
let location = "Rio De Janeiro"; 

//declare an array with who/what populates this enviornment
let who = ["Blu", "Nigel", "Linda", "Tulio", "Birds", "People", "Monkeys", "Dogs"];

//declare Blu's characteristics
let bluBird = {
    species: "bird", 
    type: "spix's macaw", 
    color: "blue", 
    occupation: "pet", 
    belongsTo: "Linda", 
    hieght: "7 inches", 
    friends: ["Jewel", "Nico", "Pedro", "Luis", "Rafael"], 
}; 

let megaSentence; 
megaSentence = "<p>This is " + location + ", the land of birds!</p>"; 

megaSentence = megaSentence + "<p>Who lives here: " + who[0] + ", " + who[1] + ", " + who[5] +
 ", " + who[4] + ", and " + who[6] + "!" + "</p>"; 

 //introduce blue

 let introduction;
 introduction = "<p>Meet Blue: " + "Species - " + bluBird.species + ", Type - " + bluBird.type + 
 ", Color - " + bluBird.color + ", Occupation - " + bluBird.occupation + ", Belongs to - " + bluBird.belongsTo + 
 ", Friends - " + bluBird.friends[0] + " and " + bluBird.friends[1] + "</p>"; 


$("#output").html(megaSentence + introduction);
 
});

var count = 0;
var colors= ["Red", "Pink", "Yellow", "Blue", "Blue", "Purple"];

$("#needy-button").click( function(){
    count++; 

let reminder=count % colors.length; 

$("#needy-button").html(" Color: " + colors[reminder] );

$("body").css ("background-color", colors[reminder]);

count=count+1;


});


$(document).ready(function(){
    var isMoving = true;

    function bounce() {
        if(isMoving) {
            $("#bluepic").animate({left: "1000px"}, 2000)
                         .animate({left: "0px"}, 2000, bounce);
        }
    }

    $("#bluepic").click(function(){
        if(isMoving) {
            $(this).stop(true, true);
            isMoving = false;
        } else {
            isMoving = true;
            bounce();
        }
    });

    bounce();
});