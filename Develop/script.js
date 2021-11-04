// Assignment code here

// define the initial arrays of potential included characters
const lowerOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberOptions = ["1","2","3","4","5","6","7","8","9"];
const specialOptions = ["!","@","#","$","%","^","&","*","?","(",")","{","}"];



function generatePassword() {
//test the code
console.log("hey you clicked the button");

//1. Prompt the user for the conditions
//  a. Password Length 8 < 128, validate the input
var numberOfChars = prompt("How many characters will your password be?");
if(numberOfChars < 8 || numberOfChars > 128) {
  alert("must be between 8 and 28");
  generatePassword(); //restart the function
}

//  b. Confirm if the user wants lower case included
var lowerCaseSelect = confirm("Do you want lower case letters in your password?");

//  c. Confirm if the user wants upper case included
var upperCaseSelect = confirm("Do you want upper case letters in your password?");

//  d. Confirm if the user wants numbers included
var numberCaseSelect = confirm("Do you want numbers included in your password?");

//  e. Confirm if the user wants special characters included
var specialCharSelect = confirm("Do you want special characters included in your password?");

//  f. validate that they have chosen at least 1 of the 4 options

//define an empty variable for their choices, which will be concatenated later based on user choices
var choices = [];

if(!lowerCaseSelect && !upperCaseSelect && !numberCaseSelect && !specialCharSelect) {
  alert("You must make at least 1 character selection");
  generatePassword(); //restart the function
}

//start going through the different options the user has selected, and set the choices variable to equal their choices

//else if for all 4 choices selected as true, concatenate them together to 1 large array
else if (lowerCaseSelect && upperCaseSelect && numberCaseSelect && specialCharSelect) {
  choices = lowerOptions.concat(upperOptions,numberOptions,specialOptions);
  console.log(choices);
}

//else if for 3 choices, concatenate
else if (lowerCaseSelect && upperCaseSelect && numberCaseSelect) {
  choices = lowerOptions.concat(upperOptions, numberOptions);
  console.log(choices);
}

else if (lowerCaseSelect && upperCaseSelect && specialCharSelect) {
  choices = lowerOptions.concat(upperOptions, specialOptions);
  console.log(choices);
}

else if(lowerCaseSelect && numberCaseSelect && specialCharSelect) {
  choices = lowerOptions.concat(numberOptions, specialOptions);
  console.log(choices);
}

else if(upperCaseSelect && numberCaseSelect && specialCharSelect) {
  choices = upperOptions.concat(numberOptions, specialOptions);
  console.log(choices);
}

//else if for 2 choices
else if(lowerCaseSelect && upperCaseSelect) {
  choices = lowerOptions.concat(upperOptions);
  console.log(choices);
}
else if(lowerCaseSelect && numberCaseSelect) {
  choices = lowerOptions.concat(numberOptions);
  console.log(choices);
}
else if(lowerCaseSelect && specialCharSelect) {
  choices = lowerOptions.concat(specialOptions);
  console.log(choices);
}
else if(upperCaseSelect && numberCaseSelect) {
  choices = upperOptions.concat(numberOptions);
  console.log(choices);
}
else if(upperCaseSelect && specialCharSelect) {
  choices = upperOptions.concat(specialOptions);
  console.log(choices);
}
else if(numberCaseSelect && specialCharSelect) {
  choices = numberOptions.concat(specialOptions);
  console.log(choices);
}

//else if for 1 choice
else if(lowerCaseSelect) {
  choices = lowerOptions;
  console.log(choices);
}
else if(upperCaseSelect) {
  choices = upperOptions;
  console.log(choices);
}
else if(numberCaseSelect) {
  choices = numberOptions;
  console.log(choices);
}
else if(specialCharSelect) {
  choices = specialOptions;
  console.log(choices);
}


//decalare an empty variable for the randomly generated password that will be filled in after the for loop
var randomPassword = "";

//run a loop to go through the choice options that have been selected by the user, and use random math method to generate based on number of chars picked
for(var i = 0; i < numberOfChars; i++) {
  randomPassword = randomPassword + choices[Math.floor(Math.random()*choices.length)];
  console.log(randomPassword);
  
}





//make sure you return the value of whats generated, so return the randomPassword
return randomPassword;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
