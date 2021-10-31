// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterTypeStrings = {
  specialCharacters: '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~',
  numericCharacters: "0123456789",
  lowerCaseCharacters: "abcdefghijklmnopqrstuvwxyz",
  upperCaseCharacters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
};

var generatePassword = function() {

  var totalCharacterSet = "";

  var initialAlert = window.alert("You've clicked the generate password button! Ahead are a series of questions to help you customize the password to your desire!");
  

  //Password Criteria
  var passLength = window.prompt("How many characters would you like your password to contain? Please choose a number equal to or between 8 and 128.");
  

 if (passLength < 8 || passLength > 128) {
    window.alert("You must choose a number between 8 and 128. Please click the generate button to start over :).");
    return;
  } 
  

  var specialCharacters = window.confirm("Click OK to include special characters. Click Cancel to exclude special characters.");
  if (specialCharacters) {
    totalCharacterSet += characterTypeStrings.specialCharacters;
  };
  
  var numericCharacters = window.confirm("Click OK to include numeric characters. Click Cancel to exclude numeric characters.");
  if (numericCharacters) {
    totalCharacterSet += characterTypeStrings.numericCharacters;
  };

  var lowerCaseCharacters = window.confirm("Click OK to include lowercase characters. Click Cancel to exclude lowercase characters.");
  if (lowerCaseCharacters) {
    totalCharacterSet += characterTypeStrings.lowerCaseCharacters;
  };

  var upperCaseCharacters = window.confirm("Click OK to include Uppercase characters. Click Cancel to exclude Uppercase characters.");
  if (upperCaseCharacters) {
    totalCharacterSet += characterTypeStrings.upperCaseCharacters;
  };

  if (!specialCharacters + !numericCharacters + !lowerCaseCharacters + !upperCaseCharacters) {
    window.alert("You must choose at least one type of character. Sorry, you have to start over :(.");
    generatePassword();
  }


  //Generate Password
  var password = "";
  for (let i = 0; i < passLength; i++) {
    password += totalCharacterSet[Math.floor(Math.random() * totalCharacterSet.length)]
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.setAttribute("style", "color: #3cb371")

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


