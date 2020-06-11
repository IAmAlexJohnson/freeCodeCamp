function convertToRoman(num) {
    let newNum = num;
    let result = "";
  
  // console.log(Math.floor(newNum/100));
  
  console.log(newNum);
    if((newNum/1000) >= 1 ){
      for(let i = 0; i < Math.floor(num/1000); i++ ){
        result+="M";
        newNum -= 1000;
        console.log(`-1000: ${newNum}`);
        } 
      }
      console.log(newNum);
      if((newNum/900) >= 1){
        for(let i = 0; i < Math.floor(newNum/900); i++ ){
        result+="CM";
        newNum -= 900;
        console.log(`-900: ${newNum}`);
        }
      }
      console.log(newNum);
      
      if((newNum/500) >= 1){
        for(let i = 0; i < Math.floor(newNum/500); i++ ){
        result+="D";
        newNum -= 500;
        console.log(`-500: ${newNum}`);
        }
      }
      console.log(newNum);
  
      if((newNum/400) >= 1){
        for(let i = 0; i < Math.floor(newNum/400); i++ ){
        result+="CD";
        newNum -= 400;
        console.log(`-400: ${newNum}`);
        }
      }
      console.log(newNum);
  
      if((newNum/100) >= 1){
        for(let i = 0; i < Math.floor(newNum/100); i++ ){
        result+="C";
        newNum -= 100;
        console.log(`-100: ${newNum}`);
        }
      }
      console.log(newNum);
  
      if((newNum/90) >= 1){
        for(let i = 0; i < Math.floor(newNum/90); i++ ){
        result+="XC";
        newNum -= 90;
        console.log(`-90: ${newNum}`);
        }
      }
      console.log(newNum);
  
      if((newNum/50) >= 1){
        for(let i = 0; i < Math.floor(newNum/50); i++ ){
        result+="L";
        newNum -= 50;
        console.log(`-50: ${newNum}`);
        }
      }
      console.log(newNum);
  
    console.log(`RESULT: ${result}`);
   return result;
  }
  
  convertToRoman(3999);
  