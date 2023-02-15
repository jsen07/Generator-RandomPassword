// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = "0123456789";
  const specialChar ="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"; //string variables are created for each  character password criteria
  var password = ""; //an empty string to store the final password
  var allowedChars = ""; //an empty string to store all of the characters the user wants in their password

  
 
  //if the input is less than 8 or greater than 128 or is not a number then it will cancel the prompt.
  var length = parseInt(prompt("How many characters would you like your password to be?"));
 const pwLength = length; //sets the variable password length to the desired size of the user.
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("Password length must be between 8 and 128 characters and must be a number");
    return;
  }

  
  var lowerPrompt = confirm("would you like to include lowercase characters?"); //confirm prompt returns true if the user confirms
  
  if(lowerPrompt) {
    password += lowercase.charAt((Math.random() * lowercase.length));  //if true, a random character from the lowercase variable is added to the password variable to ensure that at least one character is included when the user chooses a certain password criteria.
    allowedChars += allowedChars.concat(lowercase); //the allowedchars is combined with the lowercase var
  }
  else {
    alert("Lowercase will not be added!");
  }

  var upperPrompt = confirm("Would you like to include uppercase characters?");

  if (upperPrompt){
      password += uppercase.charAt((Math.random() * uppercase.length));
      allowedChars += allowedChars.concat(uppercase);
  }
  else {
    alert("Uppercase will not be added!");
  }

  var numericPrompt = confirm("Would you like to include numbers?");

  if (numericPrompt){
    password += numbers.charAt((Math.random() * numbers.length));
    allowedChars += allowedChars.concat(numbers);
}
else {
  alert("Numbers will not be added!");
}

  var specialPrompt = confirm("Would you like to include special characters?");

  if (specialPrompt){
    password += specialChar.charAt((Math.random() * specialChar.length));
    allowedChars += allowedChars.concat(specialChar);
}
else {
  alert('Special characters will not be added!');
}


      for (var i = password.length; i < pwLength; i++) {
        password += allowedChars.charAt((Math.random() * allowedChars.length)); //random characters from the allowedchars variable which contains all of the characters from the chosen password criterias is added to the final password in order to reach the desired password length.
      }

    
  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

