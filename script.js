// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let passwordLength = parseInt(prompt("How long do you want your password to be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error. Please choose a password more than 8 characters and less than 128 characters.");
    return "";
  }


var includeLowercase = confirm("Include lowercase letters in your password?");
var includeUpperCase = confirm("Include uppercase letters in your password?");
var includeNumbers = confirm("Include numbers in your password?");
var includeSpecialCharacters = confirm("Include special characters in your password?");

if (!includeLowercase && !includeSpecialCharacters && !includeUpperCase && !includeNumbers) {
  alert("Error. Please choose at least one character type.");
  return "";
}
let passwordCharacters = [];
const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "1234567890"

if (includeSpecialCharacters) {
  passwordCharacters = passwordCharacters.concat(specialCharacters.split(""));
}

if (includeLowercase) {
  passwordCharacters = passwordCharacters.concat(lowercase.split(""));
}

if (includeUpperCase) {
  passwordCharacters = passwordCharacters.concat(upperCase.split(""));
}

if (includeNumbers) {
  passwordCharacters = passwordCharacters.concat(numbers.split(""));
}
let results = ""; {
for (var i = 0; i < passwordLength; i++) {
  let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
  let randomCharacter = passwordCharacters[randomIndex];
  results += randomCharacter;
  }
}

return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);