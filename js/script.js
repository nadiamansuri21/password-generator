// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

function generatePassword() {
  //retrieve password length
  var passwordLength = setPasswordLength();
  //when password length is null don't move forward in this function 
  if (passwordLength === null)
    return

  var specialCharacters = specialCharactersRequired();
  var numericCharacters = numericCharactersRequired();
  var lowerCase = lowerCaseRequired();
  var upperCase = upperCaseRequired();

  //all the recieved criterias are send to randomPasswordLogic
  return randomPasswordLogic(passwordLength, specialCharacters, numericCharacters, lowerCase, upperCase)
}

function randomPasswordLogic(passwordLength, specialCharacters, numericCharacters, lowerCase, upperCase) {
  //intialy empty array is taken
  let mainArr = []
  //if specialCharacters are allowed by user then specialCharacters array is concatenated to the mainArr
  if (specialCharacters)
    mainArr = mainArr.concat(['!', '@', '#', '$', '%', '&', '*'])

  //if numericCharacters are allowed by user then numericCharacters array is concatenated to the mainArr
  if (numericCharacters)
    mainArr = mainArr.concat(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])

  //if lowerCase are allowed by user then lowerCase array is concatenated to the mainArr
  if (lowerCase)
    mainArr = mainArr.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"])

  //if upperCase are allowed by user then upperCase array is concatenated to the mainArr
  if (upperCase)
    mainArr = mainArr.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"])

  //if user selects nothing from the criteria alerts then below message should show
  if (mainArr.length === 0) {
    alert('Please select from any one criteria.')
    return
  }

  //finalPass empty string vairable is taken
  let finalPass = ''

  //random password string generator logic
  for (let i = 0; i < passwordLength; i++) {
    let randomVal = Math.random()
    let randomIndex = randomVal * mainArr.length
    let finalIndex = Math.floor(randomIndex)
    finalPass += mainArr[finalIndex]
  }

  return finalPass
}

//This function is implemented to take values from the user for password length and validate on the basis of password lenth.
function setPasswordLength() {
  var passLength = prompt("How many characters would you like your password to contain?")
  //When user does not provide any value, the function will not proceed any further.
  if (passLength === '') {
    alert('Password must contain minimun 8 characters')
    return null
  }

  // Converts string into numbers.
  let num = parseInt(passLength)

  if (num < 8) {
    alert("Password must contain minimum 8 characters")
    return null
  }

  if (num > 128) {
    alert("Password must be less than 129 characters")
    return null
  }

  return num
}

// This function is implemented to offer special characters for the password.
function specialCharactersRequired() {
  return confirm('Click OK if you want to include special characters')
}

// This function is implemented to offer numeric characters for the password.
function numericCharactersRequired() {
  return confirm('Click OK if you want to include numeric characters')
}

// This function is implemented to confirm lowercase alert.
function lowerCaseRequired() {
  return confirm('Click OK if you want to include lower case')
}

// This function is implemented to confirm uppercase alert.
function upperCaseRequired() {
  return confirm('Click OK if you want to include upper case')
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






