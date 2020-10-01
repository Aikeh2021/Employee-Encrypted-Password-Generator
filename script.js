// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var passwordLength = prompt("Choose a password length no less than 8 characters, but not exceeding 128 characters.");
var includeLowercase = confirm("Would you like your password to include lowercase letters?");
var includeUppercase = confirm("Would you like your password to include uppercase letters?");
var includeNumbers = confirm("Would you like your password to include numbers?");
var includeSpecialCharacters = confirm("Would you like your password to include special characters?");
//Then take all of the responses and use them to generate a password
//if(includeLowercase === true &&, includeUppercase === true && includeNumbers === true && includeSpecialCharacters === true){execute the function allCriteria}




  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  return"this will be replaced by my generated password";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var passwordLength = prompt("Choose a password length no less than 8 characters, but not exceeding 128 characters.");
//the prompt response should be store in the variable password length to be used later.

// var includeLowercase = confirm("Would you like your password to include lowercase letters?");
// var includeUppercase = confirm("Would you like your password to include uppercase letters?");
// var includeNumbers = confirm("Would you like your password to include numbers?");
// var includeSpecialCharacters = confirm("Would you like your password to include special characters?");
//use if/else statements to give the computer options for the other criteria to make the code easier to write (make sure if true is the response, it includes at least 1 character from the category the person said yes to).

// var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numberOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var specialCharacterOptions = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~", "`"]; 
// //Should probably make some arrays to store the different options that can be used to create a password

// var allCriteria = 
// ## Your Task

// This week’s homework requires you to create an application that an employee can use to generate a random password based on criteria they’ve selected by modifying starter code. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

// The password can include special characters. If you’re unfamiliar with these, see this [list of Password Special Characters from the OWASP Foundation](https://www.owasp.org/index.php/Password_special_characters).

// ## User Story

// ```
// AS AN employee with access to sensitive data
// I WANT to randomly generate a password that meets certain criteria
// SO THAT I can create a strong password that provides greater security
// ```

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```

// ## Grading Requirements

// This homework is graded based on the following criteria: 

// ### Technical Acceptance Criteria: 40%

// * Satisfies all of the above acceptance criteria plus the following:

//   * The homework should not produce any errors in the console when you inspect it using Chrome DevTools.

// ### Deployment: 32%

// * Application deployed at live URL.

// * Application loads with no errors.

// * Application GitHub URL submitted.

// * GitHub repository that contains application code.


// ### Repository Quality: 13%

// * Repository follows best practices for file structure and naming conventions.

// * Repository follows best practices for quality comments, etc.

// * Repository contains multiple descriptive commit messages.

// * Repository contains quality README file with description, screenshot, and link to deployed application.