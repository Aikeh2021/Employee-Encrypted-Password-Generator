console.log("hello world"); 

var startProcessBtn = document.querySelector("#generate");



function getPasswordOptions() {
  var passwordLength = parseInt(prompt("Choose a password length no less than 8 characters, but not exceeding 128 characters."));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters")
    return;
  }
  var hasSpecialCharacters = confirm("Would you like your password to include special characters");
  var hasNumbers = confirm("Would you like your password to include numbers?");
  var hasLowercaseLetters = confirm("Would you like your password to include lowercase letters?");
  var hasUppercaseLetters = confirm("Would you like your password to include uppercase letters?");
  if (hasSpecialCharacters === false && hasNumbers === false && hasLowercaseLetters === false && hasUppercaseLetters === false) {
    alert("Must select at least 1 character type")
    return;
  }

  var pwdOptions = {
    passwordLength: passwordLength,
    hasNums: hasNumbers,
    hasLowercase: hasLowercaseLetters,
    hasUppercase: hasUppercaseLetters,
    hasSpecials: hasSpecialCharacters,
  };
  console.log(pwdOptions);

  
    var numbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var special= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  
//If ALL criteria is wanted by user
    if(hasNumbers === true &&
      hasLowercaseLetters === true &&
      hasUppercaseLetters === true &&
      hasSpecialCharacters === true
      ){
        var allArray = numbers.concat(lower, upper, special);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = allArray[Math.floor(Math.random() * allArray.length)]
          var passwordString = generatePassword + passwordString;
        // document.getElementById("#password").text = passwordString;
        // console.log(passwordString);
        // console.log(pwdOptions.passwordLength);
      }
//If user wants lowers, uppers, and specials
    }else if(hasNumbers === false &&
        hasLowercaseLetters === true &&
        hasUppercaseLetters === true &&
        hasSpecialCharacters === true){
        var noNumsArray = lower.concat(upper, special);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = noNumsArray[Math.floor(Math.random() * noNumsArray.length)]
          var passwordString = generatePassword + passwordString;
        }
//If user wants uppers and special
    }else if(hasNumbers === false &&
        hasLowercaseLetters === false &&
        hasUppercaseLetters === true &&
        hasSpecialCharacters === true){
        var noNumsOrLowersArray = upper.concat(special);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = noNumsOrLowersArray[Math.floor(Math.random() * noNumsOrLowersArray.length)]
          var passwordString = generatePassword + passwordString;
      }
//If user wants just special
    }else if(hasNumbers === false &&
      hasLowercaseLetters === false &&
      hasUppercaseLetters === false &&
      hasSpecialCharacters === true){
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = special[Math.floor(Math.random() * special.length)]
          var passwordString = generatePassword + passwordString;
      }
//If user wants just numbers
    }else if(hasNumbers === true &&
      hasLowercaseLetters === false &&
      hasUppercaseLetters === false &&
      hasSpecialCharacters === false){
        var noNumsOrLowersOrUppersArray = special;
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = numbers[Math.floor(Math.random() * numbers.length)]
          var passwordString = generatePassword + passwordString;
        }
//If user wants just lowers
    }else if(hasNumbers === false &&
      hasLowercaseLetters === true &&
      hasUppercaseLetters === false &&
      hasSpecialCharacters === false){
        var noNumsOrLowersOrUppersArray = special;
        var passwordString = "";
      for(var i = 0; i <pwdOptions.passwordLength; i++){
        var generatePassword = lower[Math.floor(Math.random() * lower.length)]
        var passwordString = generatePassword + passwordString;
    }

//If user wants just uppers
      }else if(hasNumbers === false &&
        hasLowercaseLetters === false &&
        hasUppercaseLetters === true &&
        hasSpecialCharacters === false){
          var noNumsOrLowersOrUppersArray = special;
          var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = upper[Math.floor(Math.random() * upper.length)]
          var passwordString = generatePassword + passwordString;
  }
    }
  alert(passwordString);
};




startProcessBtn.addEventListener("click", getPasswordOptions);



