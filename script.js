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
  // we look if the checkboxes are checked for each option, then add that value to the lookup
  if(document.querySelector('#lowercase').checked){
    charTypeLookup.push('lc');
  }
  if(document.querySelector('#uppercase').checked){
    charTypeLookup.push('uc');
  }
  if(document.querySelector('#numbers').checked){
    charTypeLookup.push('num');
  }
  if(document.querySelector('#specialchars').checked){
    charTypeLookup.push('spec');
  }
  // if no boxes are checked and the arr is empty, we
  if(charTypeLookup === []){
    alert('Please select at least one option');
    return;
  }

  // go through password char by char, for as many char as the user selected
  var len = document.querySelector('#length').value; // int
  for(i=0; i<len; i++){
    // randomly generate a lookup index based on available indeces
    lookup = Math.floor(Math.random() * (charTypeLookup.length));
    // randomly generate a num for ascii later
    ascii = Math.random();
    // find which char type lookup referrs to
    if(charTypeLookup[lookup] == 'lc'){
      // there are 26 letters and uppercase letters begin at ascii dec 97
      password = password + String.fromCharCode((Math.floor(ascii*26))+97);
    }else if(charTypeLookup[lookup] == 'uc'){
      // there are 26 letters and lowercase letters start at ascii dec 65
      password = password + String.fromCharCode((Math.floor(ascii*26))+65);
    }else if(charTypeLookup[lookup] == 'num'){
      // there are 10 numbers and numbers begin at ascii dec 48
      password = password + String.fromCharCode((Math.floor(ascii*10))+48);
    }else if(charTypeLookup[lookup] == 'spec'){
      // there are 25 special characters included, seperated into 4 sets, shown below
      // 35-47 : 12 & 58-64 : 6 & 91-95 : 4 & 123-126 : 3
      // we only need to generate the number once for these
      specLookup = Math.floor(Math.random() *24);
      // because each is biased by the range from above, the addition is offset slightly
      // next to each section is the ascii dec which is actually starts at
      if(specLookup <= 12){
        // starts at ascii dec 35
        password = password + String.fromCharCode(specLookup + 35);
      }else if(specLookup <= 18){
        // starts at ascii dec 58
        password = password + String.fromCharCode(specLookup + 46);
      }else if(specLookup <= 22){
        // starts at ascii dec 91
        password = password + String.fromCharCode(specLookup + 73);
      }else{
        // starts at ascii dec 123
        password = password + String.fromCharCode(specLookup + 101);
      }
    }else{
      // if the lookup arr contains an invalid lookup value, we skip the letter all together
      continue;
    }
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
document.getElementById("length").oninput = function(){
  document.getElementById("len-output").innerHTML = this.value;
}