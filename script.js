// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var numChar = "0123456789";
var specChar = "!@#$%^&*()_-=+{}[]:;'`~<,>.?/|"
var lowChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength;
var uppercaseCorrection;
var numberCorrection;
var specialCorrection;

//Determining passwords length
function determiningpasswordLength() {
  passwordLength = prompt("How many characters long would you like it to be? (Atleast 8 and a max of 128 characters): ");

  if (passwordLength < 8) {
    alert("Must be a number between 8-128 characters");
    determiningpasswordLength();
  } else if (passwordLength > 128) {
    alert("Must be a number between 8-128 characters");
    determiningpasswordLength();
  } else if (isNaN(passwordLength)) {
    alert("Must be a number between 8-128 characters");
    determiningpasswordLength();
  } else {
    alert("The next few screens will ask what kind of characters you would want in your password. \n Will result with only lowercase letters if 'No' was chosen for all answer");
  }
  return passwordLength;
}
//Does user want uppercase?
function determiningUppercase() {
  uppercaseCorrection = prompt("Do you want uppercase letters in your password? \n(Yes or No)");
  uppercaseCorrection = uppercaseCorrection.toLowerCase();

  if (uppercaseCorrection === null || uppercaseCorrection === "") {
    alert("Reply with Yes or No");
    determiningUppercase();

  } else if (uppercaseCorrection === "yes" || uppercaseCorrection === "y") {
    uppercaseCorrection = true;
    return uppercaseCorrection;

  } else if (uppercaseCorrection === "no" || uppercaseCorrection === "n") {
    uppercaseCorrection = false;
    return uppercaseCorrection;

  } else {
    alert("Reply with Yes or No");
    determiningUppercase();
  }
  return uppercaseCorrection;
}

//does the User want Numbers?
function determiningNumbers() {
  numberCorrection = prompt("Do you want numbers in your password? \n(Yes or No)");
  numberCorrection = numberCorrection.toLowerCase();

  if (numberCorrection === null || numberCorrection === "") {
    alert("Reply with Yes or No");
    determiningNumbers();

  } else if (numberCorrection === "yes" || numberCorrection === "y") {
    numberCorrection = true;
    return numberCorrection;

  } else if (numberCorrection === "no" || numberCorrection === "n") {
    numberCorrection = false;
    return numberCorrection;

  } else {
    alert("Reply with Yes or No");
    determiningNumbers();
  }
  return numberCorrection;
}
// does the user want special Characters?
function determiningSpecial() {
  specialCorrection = prompt("Do you want special characters in your password? \n(Yes or No)");
  specialCorrection = specialCorrection.toLowerCase();

  if (specialCorrection === null || specialCorrection === "") {
    alert("Reply with Yes or No");
    determiningSpecial();

  } else if (specialCorrection === "yes" || specialCorrection === "y") {
    specialCorrection = true;
    return specialCorrection;

  } else if (specialCorrection === "no" || specialCorrection === "n") {
    specialCorrection = false;
    return specialCorrection;

  } else {
    alert("Reply with Yes or No");
    determiningSpecial();
  }
  return specialCorrection;
}
//the function that generates the password
function generatePassword() {
  determiningpasswordLength();
  console.log(passwordLength);
  determiningUppercase();
  console.log(uppercaseCorrection);
  determiningNumbers();
  console.log(numberCorrection);
  determiningSpecial();
  console.log(specialCorrection);
  var characters = lowChar;
  var password = "";
  if (uppercaseCorrection && numberCorrection && specialCorrection) {
    characters += upperChar + numChar + specChar;

  } else if (uppercaseCorrection && numberCorrection) {
    characters += upperChar + numChar;

  } else if (numberCorrection && specialCorrection) {
    characters += numChar + specChar;

  } else if (uppercaseCorrection && specialCorrection) {
    characters += upperChar + specChar;

  } else if (uppercaseCorrection) {
    characters += upperChar;

  } else if (numberCorrection) {
    characters += numChar;

  } else if (specialCorrection) {
    characters += specChar;

  } else {
    characters === lowChar;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var thePassword = "";
  thePassword = generatePassword();
  var alltextPassword = document.querySelector("#password");
  alltextPassword.value = thePassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
writePassword();
