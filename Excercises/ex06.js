var count = 0;
var colors= ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click( function(){
    count++; 

let reminder=count % colors.length; 

$("#needy-button").html( "Clicks: " + count + " Color: " + colors[reminder] );

$("body").css ("background-color", colors[reminder]);

count=count+1;




});