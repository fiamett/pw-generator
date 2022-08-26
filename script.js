// Assignment code here
var caps = document.getElementById("caps");
var lower = document.getElementById("lower");
var nums = document.getElementById("nums");
var spec = document.getElementById("spec");
var length = document.getElementById("length");

var Caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var Lower = "abcdefghijklmnopqrstuvwxyz"
var Nums = "1234567890"
var Spec = "!##$%^&*()_+:<>?{}[],.;/-'"
var pw = "";

function randominput(x){

    if(caps.checked && x == 0){
      return Caps[Math.floor(Math.random() * (Caps.length - 1))];
    }
    else if(lower.checked && x ==1){
      return Lower[Math.floor(Math.random() * (Lower.length - 1))];
    }
    else if(nums.checked && x == 2){
      return Nums[Math.floor(Math.random() * (Nums.length - 1))];
    }
    else if(spec.checked && x == 3){
      return Spec[Math.floor(Math.random() * (Spec.length - 1))];
    }
    else{
      return "=";
    }
}

function generatePassword(){
  if ((!caps.checked && !lower.checked && !nums.checked && !spec.checked)) {
    return "really? ... you get nothing!";
  }
  else{
    for(var i = 0 ; i <= length.value ; i++){    
      addit = randominput(Math.floor(Math.random() * 4));
      
      if (addit == "="){
        i -= 1
      }
      else{
        pw += addit;
      }
    }
    return pw;
  }

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  pw = "";
  // resets the pw variable
  navigator.clipboard.writeText(pw);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
