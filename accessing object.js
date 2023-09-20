// accessing OBJECT properties w DOT and BRACKET notation 

/* Read in the property values of testObj using dot notation. 
Set the variable hatValue equal to the object's property hat and set the 
variable shirtValue equal to the object's property shirt. */

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};


const hatValue = testObj.hat;      
const shirtValue = testObj.shirt; 

// using bracket notation

const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];   
const drinkValue = testObj["the drink"];    

// set the playerNumber to 16. Then, use the variable to look up the player's name and assign it to player.

const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  
  const playerNumber = 16; 
  const player = testObj[playerNumber];   
