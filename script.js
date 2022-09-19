// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays for character selection
var numberChars = [0,1,2,3,4,5,6,7,8,9];
var lowerChars= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChars= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChars= ['!','@','#','$','%','^','&','*','(',')','{','}','[','],'+',`','~','<','>'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var password = "";

  var passwordLength =0;
  var number;
  var lower;
  var upper;
  var special;


//   for (var i =0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber +1)
//   }
//  document.getElementById("password").value = password;



// var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
