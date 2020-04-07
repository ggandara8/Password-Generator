// Assignment Code DOM element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }
function generatePassword(upper, lower, Spchar, num, FinalLenght) {
  var typesCount = upper + lower + Spchar + num;
  console.log(typesCount);
}

generateBtn.addEventListener("click", () => {
  Filters();
  RandomUcLetter();
  RandomLcLetter();
  RandomChar();
  RandomNum(); 
});


function Filters() {
  // Do while loop to filter if lenght is under 8 or over 128
  do {
    var lenght = prompt("Please indicate password lenght? (No shorter than 8 characters)");
    if (lenght < 8 || lenght > 128 || isNaN(lenght)){
      alert("Password has to be at least 8 characters long and no longer than 128 characters. Please try again.");
    }
  } while (lenght < 8 || lenght > 128 || isNaN(lenght));
    
    var Userlenght = parseInt(lenght);
    return Userlenght; 
}

var RandomFunction = {
  upper: RandomUcLetter,
  lower: RandomLcLetter,
  Spchar: RandomChar,
  num: RandomNum,
  FinalLenght: Filters
};

// Function with random uppercase letters in a string
function RandomUcLetter() {
  var UpperCvalue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var UsserUpC = confirm("Please indicate if you want a Uppercase letter?");
  if (UsserUpC) {
  return UpperCvalue[Math.floor(Math.random() * UpperCvalue.length)];
  } else {
    return false
  }
}


// Function with random lowercase letter in a string
function RandomLcLetter() {
  var LowerCvalue = "abcdefghijklmnopqrstuvwxyz";
  var UsserLowC = confirm("Please indicate if you want a lowercase letter?");
  if (UsserLowC) {
  return LowerCvalue[Math.floor(Math.random() * LowerCvalue.length)];
  } else {
    return false;
  }
}

// Function with random special char in a string
function RandomChar() {
  var spChar = " !#$&'()*+,-./:;<=>?@[\]^_`{|}~";
  var UsserChar = confirm("Please indicate if you want a special character?");
  if (UsserChar) {
    return spChar[Math.floor(Math.random() * spChar.length)];
  } else {
    return false
  }
}

// Function with random num in a string
function RandomNum() {
  var num = "123456789";
  var UsserNum = confirm("Please indicate if you want a number?");
  if (UsserNum) {
    return num[Math.floor(Math.random() * num.length)];
  } else {
    return false
  }
}


// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
