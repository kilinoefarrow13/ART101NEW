let totalNumber = 0; 



//add a button titled click me 

$("#needy-button").click( function() {

   totalNumber = totalNumber + 3;

   let sentence = "I was clicked"; 
   let totalNumbers= sentence + totalNumber;

   $("#needy-button").html ("I was clicked " + totalNumber + " times!!!");
});


// when it is clicked 

//show how many times 
// add one to the total number 
//shpw the total number 
//on our button 
//show "clicked total number times"

// a top limit 

//