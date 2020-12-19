// // Assignment Code
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
numbers1 = confirm("Click OK to include numbers in your password.");
specials1 = confirm("Click OK to include special characters in your password.");

if (upperCase1 === true) {
  (newPassword.push(upperCase));
}

if (lowerCase1 === true) {
  (newPassword.push(lowerCase));
}

if (numbers1 === true) {
  (newPassword.push(numbers));
}

if (specials1 === true) {
  (newPassword.push(specials));
}

var password1 = newPassword.join("");

var finalPassword = "";

for (var i = 0; i < passwordLength; i++) {
  var generateP = password1.charAt(Math.floor(Math.random() * password1.length));
  finalPassword = finalPassword.concat(generateP);
}

alert("Click on Okay to recieve your new password");

function writePassword() {
  document.getElementById("password").textContent = ps;

}









// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
