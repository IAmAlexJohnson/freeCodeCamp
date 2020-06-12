function convertToRoman(num) {

  let romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let results = "";

    for(let i = 0; i < numbers.length; i++){
      while(num >= numbers[i]){
        num-= numbers[i];
        results+= romanNumerals[i];
      }
    }

 return results;
}

convertToRoman(3999);
