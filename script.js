// Assignment code here
var generateBtn = document.querySelector("#generate");

var userChoices;
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// prompts
userInput =[];
 
  userSelect = window.prompt("Choose how many characters your password will be. (8-128)");

  if (userSelect < 8 || userSelect > 128) {
    alert ("Only input the following values: 8-128");
  }

// prompts pt.2
else { 
  confirmLower = confirm("Lowercase?");
  console.log("Lower case " + confirmLower);
  confirmUpper = confirm("Uppercase?");
  console.log("Upper case " + confirmUpper);
  confirmNumber = confirm("Numbers?");
  console.log("Number " + confirmNumber);
  confirmSpecial = confirm("Symbols?");
  console.log("Special Character " + confirmSpecial);

};



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
