// Assignment Code
var generateBtn = document.querySelector("#generate");

// Setting arrays for character selection which includs numbers, lower case letters, upper case letters, and special characters
var numberChars = [0,1,2,3,4,5,6,7,8,9];
var lowerChars= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChars= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var specialChars= ['!','@','#','$','%','^','&','*','(',')','{','}','[','],'+',`','~','<','>'];

var passwordLength;
var numberUsage;
var lowerUsage
var upperUsage;
var specialUsage;



 
// using an if else function to execute a condition to determine password length
function chooseLength(){
  passwordLength= prompt('Please choose your password legnth. \n (between 8-128 characters)');

  if (passwordLength<8){
    alert ('Selection invalid: must be a number between 8-128');
    chooseLength();
   } else if (passwordLength>128){
      alert ('Selection invalid: must be a number between 8-128');
      chooseLength();
   }else if (isNaN(passwordLength)){
    alert ('Selection invalid: must be a number between 8-128');
    chooseLength();
   }else{
    alert('Please follow the prompts to make your selections. \n If you choose "Cancel" for all ,your password will be all lowercase.');
   }
   return passwordLength;
   }
// using an if else function to execute a condition to determine selection of numbers
   function chooseNumber(){
   numberUsage= prompt('Do you wish to include numbers?\n (Select "OK" for yes or "Cancel" for no');
   numberUsage= numberUsage.toDefault();

   if (numberUsage===null || numberUsage===""){
    alert ('Please select "OK" for yes or "Cancel" for no');
    chooseNumber();
   }else if (numberUsage ==="OK" || numberUsage==="y"){
    numberUsage= true;
    return numberUsage;
   }else if (numberUsage==="Cancel" || numberUsage==="n"){
    numberUsage= false;
    return numberUsage;
   }else {
    alert('Please select "OK" for yes or "Cancel" for no');
    numberUsage();
   }
   return numberUsage;
  }

  // using an if else function to execute a condition to determine selection of lowercase letters
  function chooseLower(){
  lowerUsage= prompt('Do you wish to include lowercase letters?\n (Select "OK" for yes or "Cancel" for no');
    lowerUsage= lowerUsage.toDefault();
 
    if (lowerUsage===null || lowerUsage===""){
     alert ('Please select "OK" for yes or "Cancel" for no');
     chooseLower();
    }else if (lowerUsage ==="OK" || lowerUsage==="y"){
     lowerUsage= true;
     return lowerUsage;
    }else if (lowerUsage==="Cancel" || lowerUsage==="n"){
     lowerUsage= false;
     return lowerUsage;
    }else {
     alert('Please select "OK" for yes or "Cancel" for no');
     lowerUsage();
    }
    return lowerUsage;
   }

   // using an if else function to execute a condition to determine selection of uppercase letters
   function chooseUpper(){
    upperUsage= prompt('Do you wish to include uppercase letters?\n (Select "OK" for yes or "Cancel" for no');
   upperUsage= upperUsage.toDefault();
 
    if (upperUsage===null || upperUsage===""){
     alert ('Please select "OK" for yes or "Cancel" for no');
     chooseUpper();
    }else if (upperUsage ==="OK" || upperUsage==="y"){
     upperUsage= true;
     return upperUsage;
    }else if (upperUsage==="Cancel" || upperUsage==="n"){
     upperUsage= false;
     return upperUsage;
    }else {
     alert('Please select "OK" for yes or "Cancel" for no');
     upperUsage();
    }
    return upperUsage;
   }
 
   // using an if else function to execute a condition to determine selection of special characters
   function chooseSpecial(){
  specialUsage= prompt('Do you wish to include special characters?\n (Select "OK" for yes or "Cancel" for no');
  specialUsage=  specialUsage.toDefault();
 
    if ( specialUsage===null ||  specialUsage===""){
     alert ('Please select "OK" for yes or "Cancel" for no');
     chooseSpecial();
    }else if ( specialUsage ==="OK" ||  specialUsage==="y"){
      specialUsage= true;
     return  specialUsage;
    }else if ( specialUsage==="Cancel" ||  specialUsage==="n"){
      specialUsage= false;
     return  specialUsage;
    }else {
     alert('Please select "OK" for yes or "Cancel" for no');
     specialUsage();
    }
    return  specialUsage;
   }
 
 
   
function generatePassword(){
chooseLength();
console.log(chooseLength);
chooseNumber();
chooseLower();
chooseUpper();
chooseSpecial();
}

function writePassword() {
var uniquePassword ="";
uniquePassword= generatePassword();
var randomPassword= document.querySelector('#password');
randomPassword.value= uniquePassword
}

//add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//   for (var i =0; i <= passwordLength; i++) {
//     var randomNumber = Math.floor(Math.random() * chars.length);
//     password += chars.substring(randomNumber, randomNumber +1)
//   }
//  document.getElementById("password").value = password;



// var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
