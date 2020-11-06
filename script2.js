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
      }
//If user wants lowers, uppers, and specials
    }else if(hasNumbers === false &&
        hasLowercaseLetters === true &&
        hasUppercaseLetters === true &&
        hasSpecialCharacters === true){
        var LUSArray = lower.concat(upper, special);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = LUSArray[Math.floor(Math.random() * LUSArray.length)]
          var passwordString = generatePassword + passwordString;
        }
//If user wants numbers, lowers, and specials
    }else if(hasNumbers === true &&
      hasLowercaseLetters === true &&
      hasUppercaseLetters === false &&
      hasSpecialCharacters === true){
      var NLSArray = lower.concat(numbers, special);
      var passwordString = "";
      for(var i = 0; i <pwdOptions.passwordLength; i++){
        var generatePassword = NLSArray[Math.floor(Math.random() * NLSArray.length)]
        var passwordString = generatePassword + passwordString;
  }
//If user wants specials, uppers, and numbers
    }else if(hasNumbers === true &&
      hasLowercaseLetters === false &&
      hasUppercaseLetters === true &&
      hasSpecialCharacters === true){
      var SUNArray = upper.concat(numbers, special);
      var passwordString = "";
      for(var i = 0; i <pwdOptions.passwordLength; i++){
        var generatePassword = SUNArray[Math.floor(Math.random() * SUNArray.length)]
        var passwordString = generatePassword + passwordString;
}
//If user wants numbers, lowers, and uppers
}else if(hasNumbers === true &&
  hasLowercaseLetters === true &&
  hasUppercaseLetters === true &&
  hasSpecialCharacters === false){
  var NLUArray = lower.concat(numbers, upper);
  var passwordString = "";
  for(var i = 0; i <pwdOptions.passwordLength; i++){
    var generatePassword = NLUArray[Math.floor(Math.random() * NLUArray.length)]
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
//If user wants uppers and numbers
    }else if(hasNumbers === true &&
        hasLowercaseLetters === false &&
        hasUppercaseLetters === true &&
        hasSpecialCharacters === false){
        var UNArray = upper.concat(numbers);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = UNArray[Math.floor(Math.random() * UNArray.length)]
          var passwordString = generatePassword + passwordString;
      }
//If user wants special and numbers
    }else if(hasNumbers === true &&
        hasLowercaseLetters === false &&
        hasUppercaseLetters === false &&
        hasSpecialCharacters === true){
        var SNArray = special.concat(numbers);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = SNArray[Math.floor(Math.random() * SNArray.length)]
          var passwordString = generatePassword + passwordString;
      }
//If user wants uppers and lowers
    }else if(hasNumbers === false &&
        hasLowercaseLetters === true &&
        hasUppercaseLetters === true &&
        hasSpecialCharacters === false){
        var ULArray = lower.concat(upper);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = ULArray[Math.floor(Math.random() * ULArray.length)]
          var passwordString = generatePassword + passwordString;
      }
//If user wants specials and lowers
    }else if(hasNumbers === false &&
        hasLowercaseLetters === true &&
        hasUppercaseLetters === false &&
        hasSpecialCharacters === true){
        var SLArray = lower.concat(special);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = SLArray[Math.floor(Math.random() * SLArray.length)]
          var passwordString = generatePassword + passwordString;
      }
//If user wants lowers and numbers
    }else if(hasNumbers === true &&
        hasLowercaseLetters === true &&
        hasUppercaseLetters === false &&
        hasSpecialCharacters === false){
        var LNArray = lower.concat(numbers);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = LNArray[Math.floor(Math.random() * LNArray.length)]
          var passwordString = generatePassword + passwordString;
      }
//If user wants uppers and numbers
    }else if(hasNumbers === true &&
        hasLowercaseLetters === false &&
        hasUppercaseLetters === true &&
        hasSpecialCharacters === false){
        var UNArray = upper.concat(numbers);
        var passwordString = "";
        for(var i = 0; i <pwdOptions.passwordLength; i++){
          var generatePassword = UNArray[Math.floor(Math.random() * UNArray.length)]
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
//If user picks no criteria
    }else{
      alert("You must pick at least ONE password criteria.");
    }
  alert(passwordString);
  var passwordEl = document.getElementById("password").placeholder = passwordString;
};




startProcessBtn.addEventListener("click", getPasswordOptions);



