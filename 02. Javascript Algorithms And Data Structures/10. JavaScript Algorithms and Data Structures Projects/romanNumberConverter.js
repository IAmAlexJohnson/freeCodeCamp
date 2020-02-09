function convertToRoman(num) {
 let newNum = num;
 let strNumeral = "";
 let romanNumerals = {
    M : 1000,
    CM : 900,
    D : 500,
    CD : 400,
    C : 100,
    XC : 90,
    L : 50,
    XL : 40,
    X : 10,
    IX : 9,
    V : 5,
    IV : 4,
    I : 1
 };

 for (let prop in romanNumerals){
   //console.log(romanNumerals[prop]);
   if (newNum >= romanNumerals[prop]){
     strNumeral += prop.repeat(Math.trunc(newNum / romanNumerals[prop]));
     newNum -= romanNumerals[prop] * Math.trunc(newNum / romanNumerals[prop]);

     console.log(`CURRENT NUMERAL: ${strNumeral}              NUMBER IS NOW: ${newNum}`);
   }
 }
 return strNumeral;
}

convertToRoman(36);
