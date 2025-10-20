//declare an array with my daily meals 

let myFood = ["coffee", "toast", "water", "apple", "chicken", "chips", "soup"];

//declaring an object with name myFavFoods
let myFavFoods = {
    type: "coffee", 
    flavor: "vanilla", 
    tempurature: "iced", 
    shots: "two shots",
    milkType: "oat", 
    coffeeShop: "catAndCloud", 
    baristas:["Katie!", "Lucy", "Roxi"], 
}; 

let megaSentence; 
megaSentence = "<p>My two favorite meals of the day are: " + myFood[0] + ", " + myFood[6] + "</p>"; 

megaSentence = megaSentence + "<p>My favorite item possesses these characteristics - type: " + myFavFoods.type + 
", flavor: " + myFavFoods.flavor + ", the perfect amount of expresso: " + myFavFoods.shots + ", the best barista: "
 + myFavFoods.baristas[0] + "</p>"; 

$("#output").html(megaSentence);