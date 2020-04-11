
var generateButton = document.querySelector("#generate");

generateButton.addEventListener('click', function(event){
event.preventDefault(),
writePassword()
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var LowerCvalue = "abcdefghijklmnopqrstuvwxyz";
var UpperCvalue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var spChar = " !#$&'()*+,-./:;<=>?@[\]^_`{|}~";
var num = "123456789";

// Prompts that come up after you click generate password
function generatePassword() {
    do {
        var Promptlenght = prompt("Please indicate password lenght? (No shorter than 8 characters)");
          if (Promptlenght < 8 || Promptlenght > 128 || isNaN(Promptlenght)){
            alert("Password has to be at least 8 characters long and no longer than 128 characters. Please try again.");
          }
      } while (Promptlenght < 8 || Promptlenght > 128 || isNaN(Promptlenght));
        
          var Userlenght = parseInt(Promptlenght); 
      
          var UserLowC = confirm("Please indicate if you want a lowercase letter?");
    
          var UserUpC = confirm("Please indicate if you want a Uppercase letter?");
          
          var UserChar = confirm("Please indicate if you want a special character?");
          
          var UserNum = confirm("Please indicate if you want a number?");
          
          if (UserLowC === false && UserUpC === false && UserChar === false && UserNum === false){
            alert("You have to choose at least one option");
            generatePassword();
          }
  var generateCount = "";
  const ObjectFunc = {
    number: NM(),
    lower: LC(),
    upper: UC(),
    specialChar: SP()
  }
  var func = Object.values(ObjectFunc);
  console.log(func);

   for (let i = 0; i < Userlenght; i += count){
    return func [Math.floor(Math.random() * func.length)];
   }



  function NM() {
  if (UserNum === true){
    return num[Math.floor(Math.random() * num.length)];
  } else {
    return false;
  }
  }

  function LC() {
  if (UserLowC === true){
    return LowerCvalue[Math.floor(Math.random() * LowerCvalue.length)]; 
  } else {
    return false;
  }
  }

  function UC() {
  if (UserUpC === true) {
    return UpperCvalue[Math.floor(Math.random() * UpperCvalue.length)];
  } else {
    return false;
  }
  }

  function SP() {
  if (UserChar === true){
    return spChar[Math.floor(Math.random() * spChar.length)];
  } else {
    return false;
  }
  }

  var count = "";
  if (UserNum === true) {
    count++;
  }

  if (UserLowC === true) {
    count++;
  }

  if (UserUpC === true) {
    count++;
  }

  if (UserChar === true) {
    count++;
  }

}
