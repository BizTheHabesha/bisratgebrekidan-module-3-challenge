// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var password;
  var lc = document.querySelector('#lowercase');// bool
  var up = document.querySelector('#uppercase');// bool
  var num = document.querySelector('#numbers');// bool
  var sc = document.querySelector('#length');// bool
  var len = document.querySelector('#length').value; // int
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("length").oninput = function(){
  document.getElementById("len-output").innerHTML = this.value;
}