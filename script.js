
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Setting variables for character selection which includs numbers, lower case letters, upper case letters, and special characters
var numberChars = "1234567890";
var lowerChars= "abcdefghijklmnopqrstuvwxyz";
var upperChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars= "~ ! @ # $ % ^ & * _ - + = `` | \ ( ) { } [ ] : ; `";

var passwordLength="";


// function writePassword
function writePassword(){
  var password= generatePassword();
  var passwordChars = document.querySelector('#password');
  passwordChars.value=password;
}
// function generatePassword

function generatePassword(){
charsUsage = "";
userPassword="";

 
// using an if else function to execute a condition to determine password length

var passwordLength= prompt('Please choose your password legnth. \n (between 8-128 characters)');
  if (passwordLength>128 || passwordLength< 8){
  // password.length=passwordLength;

alert("Please enter a valid password length")
var passwordLength= prompt('Please choose your password legnth. \n (between 8-128 characters)');
  }
else if (passwordLength<=128 && passwordLength>=8){

  //setting variables for character selection and questions to confirm selections made
  var chooseNumber= confirm('Do you wish to include numbers?\n (Select "OK" for yes or "Cancel" for no');
  var chooseLower= confirm('Do you wish to include lowercase letters?\n (Select "OK" for yes or "Cancel" for no');
  var chooseUpper= confirm('Do you wish to include uppercase letters?\n (Select "OK" for yes or "Cancel" for no');
  var chooseSpecial= confirm('Do you wish to include special characters?\n (Select "OK" for yes or "Cancel" for no');


}if (chooseNumber === true){
  charsUsage += numberChars;
}
if (chooseLower === true){
charsUsage += lowerChars;
}
if (chooseUpper === true){
charsUsage += upperChars;
}
if (chooseSpecial === true){
charsUsage += specialChars;
}
else if (chooseNumber===false && chooseLower===false && chooseUpper===false && chooseSpecial ===false){
alert("Unsuccessful!\n You must choose at least one character selection.\n Cannot generate password.")
}

for (var i=0; i<passwordLength; i++){
userPassword +=
charsUsage[Math.floor(Math.random() * charsUsage.length)];
}
return userPassword;
}
// using an if else function to execute a condition to determine selection of numbers
   
 
   

  // using an if else function to execute a condition to determine selection of lowercase letters
  
   
 
 
  
   // using an if else function to execute a condition to determine selection of uppercase letters
 
  
   
   // using an if else function to execute a condition to determine selection of special characters
  






//add event listener to generate button
generateBtn.addEventListener("click", writePassword);



