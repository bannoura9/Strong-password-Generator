
// Declare Var passLength
var passLength;

// Declare RandomLowercase Functions and store them in Global memory//
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
};
// Declare RandomUppercase Function and store them in Global memory//
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}; 
// Declare RandomNumbercase Function and store them in Global memory//
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
};
// Declare Randomsymblescase Function and store them in Global memory//
function getRandomSymbole() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

// Declare RandomLowercase Function and store them in Global memory//
function generatePassword () {
  // Declare Variable for new password and store it in the global memory 
  var newPassword = ""
  console.log(passLength)
  // if statment to have the password length to be between (8 & 128)
  if(passLength > 7 && passLength <129) {
    // Prompt users to chooce which charactors type would like to include (4)
    var includeLower = confirm("Include Lowercase letters?")
    var includeUpper = confirm("Include Uppercase letters?")
    var includeNumber = confirm("Include Numbers?")
    var includeSymbole = confirm("Include Symboles?")
  // For loop with the length od Charactors users like to have
    for(var i = 0; i < passLength; i++) {
    // Declare var result with an array to be stored in the Golbal memory
      var randomResult = []
    if (includeLower) {
      randomResult.push(getRandomLower())
    }
    if (includeUpper) {
      randomResult.push(getRandomUpper())
    }
    if (includeNumber) {
      randomResult.push(getRandomNumber())
    }
    if (includeSymbole) {
      randomResult.push(getRandomSymbole())
    }
    newPassword = newPassword + randomResult.join('')
    newPassword = newPassword.substring(0, passLength);
     
    console.log(newPassword)
  }
}  //If input isnt a number between 8 and 128 alert to try again with right input
  else {
    alert("Please enter only numbers between 8 - 128.\nClick generate Password one more time")
    // passLength = parseInt(prompt("Enter the length of the passowrk you wish to creat (Choose between 8 & 128)"));
  }
  return newPassword;
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // prompt the user to choose the length of the new password
  passLength = parseInt(prompt("Enter the length of the passowrk you wish to creat (Choose between 8 & 128)"));

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
