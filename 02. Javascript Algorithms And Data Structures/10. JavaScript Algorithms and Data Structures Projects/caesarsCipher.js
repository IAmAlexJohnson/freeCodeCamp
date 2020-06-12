function rot13(str) {

  let arr = str.split("");
  let numArr = arr.map((a) => a.charCodeAt());
  let newNumArr =[];
  let newStr = "";
  let charCode = [  
      // A - Z
    65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90, 
      // A - M
    65,66,67,68,69,70,71,72,73,74,75,76,77];

for(let i = 0; i < arr.length; i++){
  if(charCode.indexOf(numArr[i]) === -1){
    newNumArr.push(arr[i]);
  }else{
    if(numArr[i]+13 <= 90){
      newNumArr.push(numArr[i]+13);
    }
    else {
      newNumArr.push((numArr[i]-26)+13);
    }
  }
}

newNumArr.map((a) => {
    if(typeof a === "string"){
      newStr+=a;
    }
    newStr+= String.fromCharCode(a);
  });


  // console.log(`NEw STR: ${newStr}`);
  return newStr;
}

rot13("SERR PBQR PNZC");
rot13("SERR CVMMN!");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
