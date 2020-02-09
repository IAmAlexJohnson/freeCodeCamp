function palindrome(str) {
  // Good luck!
  let regex = /[a-zA-Z0-9]/gi;
  let forwardArr = str.toLowerCase().match(regex);
  let backwardArr = [];

  for( let i = forwardArr.length; i >= 0; i--){
    backwardArr.push(forwardArr[i]);
  }
  console.log(backwardArr.join(""));

  return forwardArr.join("") == backwardArr.join("");
}



palindrome("eye");
