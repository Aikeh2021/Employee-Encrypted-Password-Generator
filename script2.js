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
  // console.log(pwdOptions);
  // return pwdOptions;
// function GeneratePasswordProcess(){
  
    var numbers= ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var lower= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var upper= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var special= ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  

    if(hasNumbers === true &&
      hasLowercaseLetters === true &&
      hasUppercaseLetters === true &&
      hasSpecialCharacters === true
      ) {
        var allArray = numbers.concat(lower, upper, special);
        var passwordString = "";
        var generatePassword = Math.floor(Math.random() * allArray.length); 
        for( var i = 0; i < parseInt(passwordLength); i++){
          var passwordString = generatePassword + passwordString;
        }
        // var passwordString = passwordString + generatePassword;
        alert(passwordString);
      }
  };


  // function GeneratePasswordProcess(){
    // var pwdOptions = {
    //   passwordLength: passwordLength,
    //   hasNums: hasNumbers,
    //   hasLowercase: hasLowercaseLetters,
    //   hasUppercase: hasUppercaseLetters,
    //   hasSpecials: hasSpecialCharacters,
    // }
    // Object with the options as arrays
    // var options = {
    //   numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    //   lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    //   upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    //   special: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
    // };
  
    
    // if(hasNumbers === true &&
    //   hasLowercaseLetters === true &&
    //   hasUppercaseLetters === true &&
    //   hasSpecialCharacters === true
    //   ) {
    //     var allArray = options.numbers.concat(options.lower, options.upper, options.special);
    //     var generatePassword = Math.floor(Math.random(allArray)) * passwordLength; 
    //     var passwordString = "";
    //     var customPassword = generatePassword + passwordString;
    //     alert("Your new password is: " + customPassword);  
    //   }
  
  // }
  
  // GeneratePasswordProcess();
  
// }

startProcessBtn.addEventListener("click", getPasswordOptions);


  
// function GeneratePasswordProcess(){
//   var pwdOptions = {
//     passwordLength: passwordLength,
//     hasNums: hasNumbers,
//     hasLowercase: hasLowercaseLetters,
//     hasUppercase: hasUppercaseLetters,
//     hasSpecials: hasSpecialCharacters,
//   }
//   // Object with the options as arrays
//   var options = {
//     numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
//     lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//     upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//     special: ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]
//   };

  
//   if(hasNumbers === true &&
//     hasLowercaseLetters === true &&
//     hasUppercaseLetters === true &&
//     hasSpecialCharacters === true
//     ) {
//       var allArray = options.numbers.concat(options.lower, options.upper, options.special);
//       var generatePassword = Math.floor(Math.random(allArray)) * passwordLength; 
//       var passwordString = "";
//       var customPassword = generatePassword + passwordString;
//       alert("Your new password is: " + customPassword);  
//     }

// }

// GeneratePasswordProcess();
