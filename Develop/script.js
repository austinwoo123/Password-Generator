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

while (passwordLength < 8 || passwordLength > 128) {
  passwordLength = parseInt(prompt("How many characters do you want in your password?"));
}

upperCase1 = confirm("Click OK to include upper case letters in your password.");
lowerCase1 = confirm("Click OK to include lower case letters in your password.");
numbers1 = confirm("Click OK to includde numbers in your password.");
specials1 = confirm("Click OK to include special characters in your password.");







// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
