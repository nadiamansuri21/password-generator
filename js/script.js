// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if(password){
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}


function generatePassword() {
  var passwordLength = setPasswordLength();
  var specialCharacters = specialCharactersRequired();
  var numericCharacters = numericCharactersRequired();
  var lowerCase = lowerCaseRequired();
  var upperCase = upperCaseRequired();

  let mainArr = []
  if (specialCharacters)
    mainArr = mainArr.concat(['!', '@', '#', '$', '%', '&', '*'])

  if (numericCharacters)
    mainArr = mainArr.concat(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

  if (lowerCase)
    mainArr = mainArr.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])

  if (upperCase)
    mainArr = mainArr.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])

  let finalPass = ''

  if(mainArr.length === 0){
    alert('Please select from any one criteria.')
    return
  }

  for (let i = 0; i < passwordLength; i++) {
    let randomVal = Math.random() 
    let randomIndex = randomVal * mainArr.length
    let finalIndex = Math.floor(randomIndex)
    finalPass += mainArr[finalIndex]
  }

  return finalPass
}


function setPasswordLength() {
  var passLength = prompt("How many characters would you like your password to contain?");
  let num = parseInt(passLength)

  if (num < 8) {
    alert("Password must contain minimum 8 characters")
  }

  if (num > 128) {
    alert("Password must be less than 129 characters")
  }

  return num
}


function specialCharactersRequired() {
  return confirm('Click OK if you want to include special characters')
}

function numericCharactersRequired() {
  return confirm('Click OK if you want to include numeric characters')
}

function lowerCaseRequired() {
  return confirm('Click OK if you want to include lower case')
}

function upperCaseRequired() {
  return confirm('Click OK if you want to include upper case')
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






