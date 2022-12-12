// Assignment code here
var generateBtn = document.querySelector("#generate");

var getOption = function () {
  var passwordLength = window.prompt ("How many password you want?"); 
  var isValid = parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128;

  while (!isValid){
    passwordLength = window.prompt ('Please choose a number between 8 to 128')
    isValid = parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128;
    console.log (isValid); 
    console.log (passwordLength)

  }

  var isUppercase = window.confirm ("Do you want uppercase?"); 
  var isLowercase = window.confirm ("Do you want lowercase?"); 
  var isNumnber = window.confirm ('Do you want number?');
  var isSpecalCharacter = window.confirm('Do you want speical character?');

    return {
    length: parseInt(passwordLength), 
    uppercase: isUppercase,
    lowercase : isLowercase,
    number : isNumnber,
    specialCharacter : isSpecalCharacter,
  }

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
