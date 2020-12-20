// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible strings//
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specials = "!@#$%^&*_?";

//console.log(upperCase)
//console.log(lowerCase)
//console.log(numbers)
//console.log(specials)

// new variable to track the confirms from the prompts//
var setPassword = [];

//Prompts and confirms//
// var passwordLength = parseInt(prompt("How many characters do you want in your password?"));

// while (passwordLength < 8 || passwordLength > 128) {
//   passwordLength = parseInt(prompt("How many characters do you want in your password?"));
// }

// upperCase1 = confirm("Click OK to include upper case letters in your password.");
// lowerCase1 = confirm("Click OK to include lower case letters in your password.");
// numbers1 = confirm("Click OK to include numbers in your password.");
// specials1 = confirm("Click OK to include special characters in your password.");

// if (upperCase1 === true) {
//   (setPassword.push(upperCase));
// }

// if (lowerCase1 === true) {
//   (setPassword.push(lowerCase));
// }

// if (numbers1 === true) {
//   (setPassword.push(numbers));
// }

// if (specials1 === true) {
//   (setPassword.push(specials));
// }
// // join arry with string //
// var newPassword = setPassword.join("");

// var finalPassword = "";
// // for loop //
// for (var i = 0; i < passwordLength; i++) {
//   var generateP = newPassword.charAt(Math.floor(Math.random() * newPassword.length));
//   finalPassword = finalPassword.concat(generateP);
// }

// alert("Click on Okay to recieve your new password");

function writePassword() {
  var passwordLength = parseInt(prompt("How many characters do you want in your password?"));

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("How many characters do you want in your password?"));
  }

  upperCase1 = confirm("Click OK to include upper case letters in your password.");
  lowerCase1 = confirm("Click OK to include lower case letters in your password.");
  numbers1 = confirm("Click OK to include numbers in your password.");
  specials1 = confirm("Click OK to include special characters in your password.");

  if (upperCase1 === true) {
    (setPassword.push(upperCase));
  }

  if (lowerCase1 === true) {
    (setPassword.push(lowerCase));
  }

  if (numbers1 === true) {
    (setPassword.push(numbers));
  }

  if (specials1 === true) {
    (setPassword.push(specials));
  }
  // join arry with string //
  var newPassword = setPassword.join("");

  var finalPassword = "";
  // for loop //
  for (var i = 0; i < passwordLength; i++) {
    var generateP = newPassword.charAt(Math.floor(Math.random() * newPassword.length));
    finalPassword = finalPassword.concat(generateP);
  }

  alert("Click on Okay to recieve your new password");

  // console.log("Final password is ", finalPassword)

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;

}











// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
