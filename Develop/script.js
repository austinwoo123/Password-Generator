// Assignment Code
var generateBtn = document.querySelector("#generate");
//Possible strings//
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!@#$%^&*_?";

//console.log(upperCase)
//console.log(lowerCase)
//console.log(numbers)
//console.log(specials)

// new variable to track the confirms from the prompts//
var newPassword = [];

//Prompts and confirms//
var passwordLength = parseInt(prompt("How many characters do you want in your password?"));

if (passwordLength < 8) {
  alert("Your password needs to have at least 8-128 characters.");
  prompt("How many characters do you want in your password?");

}
else if (passwordLength > 8); {

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
