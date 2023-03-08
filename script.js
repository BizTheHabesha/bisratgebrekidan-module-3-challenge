// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var password = "";
  // build char type lookup for later
  var charTypeLookup = [];
  // next to each if is the ascii associated with those chars
  if(document.querySelector('#lowercase').checked){// 97-122
    charTypeLookup.push('lc');
  }
  if(document.querySelector('#uppercase').checked){// 65-90
    charTypeLookup.push('uc');
  }
  if(document.querySelector('#numbers').checked){// 48-57
    charTypeLookup.push('num');
  }
  if(document.querySelector('#specialchars').checked){// 35-47 & 58-64 & 91-95 & 123-126
    charTypeLookup.push('spec');
  }

  // go through psswrd char by char, for every char the user selected
  var len = document.querySelector('#length').value; // int
  for(i=0; i<len; i++){
    
  }
  return charTypeLookup;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("length").oninput = function(){
  document.getElementById("len-output").innerHTML = this.value;
}