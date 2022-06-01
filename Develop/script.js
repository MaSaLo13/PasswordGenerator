// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUZWXYZ";
var numChar = "0123456789";
var specialChar = "!@#$%^&*()_-+'=[]{}||\:;<>,.?/~`"; 

//Creates prompt for users, password length, if they want lower/upper case, numerical and/or special characters
// saves user choice in passwordAll and then randomizes it while taking into consideration of the length and gives out a password
function generatePassword() {
  var password = "";
  var passwordAll = "";
  var passwordLengthUser = prompt("How many characters would you like your password to be? Password must be between 8 - 128 characters.");
  passwordLengthUser = parseInt(passwordLengthUser);
  if (passwordLengthUser < 8) {
  alert("Password must have more than 7 characters!");
  return "";
  }
  if (passwordLengthUser > 128) {
  alert("Password much not have more than 128 characters!");
  return ""
  }
  var lowercaseCharactersChoice = confirm("Would you like some lowercase characters?");
  if (lowercaseCharactersChoice) {
  passwordAll += lowerCase;
  }
  var uppercaseCharactersChoice = confirm("Uppercase letters?");
  if (uppercaseCharactersChoice) {
  passwordAll += upperCase;
  }
  var numericalCharactersChoice = confirm("Numbers?");
  if (numericalCharactersChoice) {
  passwordAll += numChar;
  }
  var specialCharacterChoice = confirm("Special characters?");
  if (specialCharacterChoice) {
  passwordAll += specialChar;
  }
  for (let i = 0; i < passwordLengthUser; ++i) {
    let random = Math.floor(Math.random() * Math.floor(passwordAll.length));
    password += passwordAll[random];
  }
  return(password);
}

// Write password to the #password input
//grabs password generated from function generatePassword and displays in #password
function writePasswords() {
  var password1 = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password1;
}

// Add event listener to generate button
// helps start write passwords
generateBtn.addEventListener("click", writePasswords);
