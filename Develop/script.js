// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


function generatePassword(){
  var passwordLength = setPasswordLength();
  var specialCharacters = specialCharactersRequired();
  var numericCharacters = numericCharactersRequired();
  var lowerCase = lowerCaseRequired();
  var upperCase = upperCaseRequired();
  
}

function setPasswordLength(){
  var passLength = prompt("How many characters would you like your password to contain?");

  let num = parseInt(passLength)

  if(num < 8){
    alert("Password must contain minimum 8 characters")
  }

  if(num > 128){
    alert("Password must be less than 129 characters")
  }
 
  return num 
}


function specialCharactersRequired(){
  var result = confirm('Click OK if you want to include special characters')
  return result
}

function numericCharactersRequired(){
  var result = confirm('Click OK if you want to include numeric characters')
  return result
}

function lowerCaseRequired(){
  var result = confirm('Click OK if you want to include lower case')
  return result
}

function upperCaseRequired(){
  var result = confirm('Click OK if you want to include upper case')
  return result
}



