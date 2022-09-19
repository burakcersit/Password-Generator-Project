//Code
// Decleration
var pwLength;
var askLower;
var askUpper;
var askNumeric;
var askSpecial;
 
var generateBtn = document.querySelector("#generate");

//get random password
function randomInt(min, max){
  if(!max) {
    max=min 
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1-rand) + rand*max)
}

function getRandomItem(list) {
  return(list)[randomInt (list.length)]
}

function generatePassword() {
  while (true) {
  // Starting Function with asking how many characters users need
    var input = window.prompt("How many character would you like to include your password? (between 8 - 128 characters)");
    alert(`You Selected ${input} characters`);
    

    if(input === null){
    return
  }
  var pwLength = parseInt(input)
  if (isNaN(pwLength)) {
    window.alert("Invalid Input. Please write again how many characters you would like to include in your password?")
  } else if  (pwLength < 8 || pwLength > 128) {
  window.alert("Please Choose length between 8 and 128 characters")
  } else {
    break
  }
 }

 //Confirmation of Number/lower-upper case/ special characters
 var askLower = window.confirm("Would you like to include lowercase in your password")
 var askUpper = window.confirm("Would you like to include uppercase in your password")
 var askNumeric = window.confirm("Would you like to include number in your password")
 var askSpecial = window.confirm("Would you like to include special character in your password")
 alert("Thanks for choosing us. Your Password is Ready Below. Just Click on OK to see magic.:)" )

 // Arrays
 var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var specialCharackter = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
 var userChoice = []

//Collecting options of users
 if(askLower === true){userChoice.push(lowerCase)}
 if(askUpper === true){userChoice.push(upperCase)}
 if(askNumeric === true){userChoice.push(numeric)}
 if(askSpecial === true){userChoice.push(specialCharackter)}
 if(userChoice.length === 0){ window.alert("You have to choose at least one option. Please Start Again.")}

 var generatedPassword = ""
 for (var i=0; i<pwLength; i++){ 
  var randomList = getRandomItem(userChoice)
  var randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
 }
 return generatedPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
   
  if(password){
  passwordText.value = password;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

