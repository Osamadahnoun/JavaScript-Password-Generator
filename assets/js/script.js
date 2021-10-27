 // Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  var passLength = window.prompt("How many characters would you like your password to contain? Please choose a number equal to or between 8 and 128.");

  if (passLength >= 8 && passLength <= 128) {
    var specialCharacters = window.confirm("Click OK to confirm including special characters. Click Cancel to exclude special characters.");
    if (specialCharacters) {
      console.log("Ok works 1")
    }
    else {
      console.log("Cancel works 1")
    };
    
    var numericCharacters = window.confirm("Click OK to confirm including numeric characters. Click Cancel to exclude numeric characters.");
    if (numericCharacters) {
      console.log("Ok works 2")
    }
    else {
      console.log("Cancel works 2")
    };

    var lowerCaseCharacters = window.confirm("Click OK to confirm including lowercase characters. Click Cancel to exclude lowercase characters.");
    if (lowerCaseCharacters) {
      console.log("Ok works 3")
    }
    else {
      console.log("Cancel works 3")
    };

    var upperCaseCharacters = window.confirm("Click OK to confirm including uppercase characters. Click Cancel to exclude uppercase characters.");
    if (upperCaseCharacters) {
      console.log("Ok works 4")
    }
    else {
      console.log("Cancel works 4")
    };

  }
  else {
    window.alert("Please choose a number equal to or between 8 and 128!");
    generatePassword();
  };
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
