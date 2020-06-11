function palindrome(str) {

    let forwards = [];
    let backwards = [];
    let newStr = str.toLowerCase().replace(/[^0-9a-zA-Z]/g, '');

    forwards = newStr.split("");
  
    for(let i = newStr.length-1; i >= 0; i--){
        backwards.push(newStr.charAt(i));
      }
  
    for(let j = 0; j < forwards.length;  j++){
      if(forwards[j] !== backwards[j]){
        return false;
      }
    }
  
    return true;
    
  }
  
  
  palindrome("nope");