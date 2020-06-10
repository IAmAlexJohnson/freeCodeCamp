// alert("Connected!");

/* ========================================================== */

/*  Sum All Numbers in a Range */

function sumAll(arr) {
  let sum = 0;
  let newArr = [];
  arr = arr.sort(function(a, b){return a-b});
  console.log(arr);
  for (let i = arr[0]; i <= arr[1]; i++){
       sum += i;
  }
  //console.log(sum);
  return sum;
}

sumAll([1, 4]);
sumAll([4, 1]);
sumAll([10,5]);
sumAll([5, 10]);

/* ========================================================== */

/* Diff Two Arrays */

function diffArray(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) == -1){
          newArr.push(arr1[i]);
      }
  }
  for (let j = 0; j < arr2.length; j++){
      if(arr1.indexOf(arr2[j]) == -1){
          newArr.push(arr2[j]);
      }
  }
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


/* ========================================================== */

/* Seek and Destroy */

function destroyer(arr1, ...arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++){
      
          if(arr2.indexOf(arr1[i]) == -1){
          newArr.push(arr1[i]);
      } 
      
  }
  console.log(`Args: ${arr2[0]}, ${arr2[1]}`);
  console.log(`New Array: ${newArr}`);
  return newArr;

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/* ========================================================== */

/* Wherefore art thou */

function whatIsInAName(collection, source) {

  //filter through collection arr
  let arr = collection.filter(function (e){
      //look at every item in source
      for(let i in source){
          //console.log(i);
          // if source is not the same as e return false
          if(source[i] != e[i]){
              return false;
          }
      }
      //otherwise return true and put in arr
          return true;
      
  });
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


/* ========================================================== */

/* Spinal Tap Case */

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2').trim().replace(/_|\s/g,"-").toLowerCase();
}

spinalCase("thisIsSpinalTap");


/* ========================================================== */

/* Pig Latin */

function translatePigLatin(str) {

  const vowels = /[aeiou]/;
  
  for(let i =0; i < str.length; i++){
  
    if(vowels.test(str.charAt(0))){
  
      return str + "way";
  
    } else if (vowels.test(str.charAt(i)) === true){
  
      return str.substring(i, str.length) +str.substring(0, i)+ "ay";
        
      } 
    }
    return str + "ay";
  }
  
  translatePigLatin("rhythm");
  


/* ========================================================== */

/* Search and Replace */


function myReplace(str, before, after) {
  let regex = new RegExp('(\\b'+before+'\\b)', 'gi');
  if(before.charAt(0).match(/[A-Z]/)){
    let capStr = after.replace(after.charAt(0), after.charAt(0).toUpperCase());
    return str.replace(before, capStr);
  }  else {
    return str.replace(before, after);
  }
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* ========================================================== */

/* DNA Pairing */
function pairElement(str) {
  let finalArr = [];
  let arr = str.split("");
  console.log(arr);
    for (let i =0; i < arr.length; i++){
      console.log(arr[i]);
      if(arr[i] == "G"){
        finalArr.push(["G","C"]);
      } else if(arr[i] == "C"){
        finalArr.push(["C", "G"]);
      }else if(arr[i] == "A"){
        finalArr.push(["A", "T"]);
      }else if(arr[i] == "T"){
        finalArr.push(["T", "A"]);
      }
    }
  console.log(finalArr);
  return finalArr;
}

pairElement("GCG");

/* ========================================================== */

/* Missing letters */
function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetStart = 0;
  
  for(let i = 0; i < str.length; i++){
    for(let j = 0; j < alphabet.length; j++){
      if(str.charAt(0) == alphabet.charAt(j)){
        alphabetStart = j;
        // return alphabet.charAt(j);
        if(str.charAt(i) !== alphabet.charAt(alphabetStart +i )){
          console.log(alphabetStart +i);
          return alphabet.charAt(alphabetStart + i);  
        }
      }
      
    }
  }
}

fearNotLetter("bcdf");

  /* ========================================================== */

   /* Sorted Union */
   function uniteUnique(arr) {

    for (let i = 0 ; i < arguments.length ; i++){
      arr = arr.concat(arguments[i]);
    }
    
    var uniqueNums = arr.filter((element, index, arr) => arr.indexOf(element) === index); 
    return uniqueNums;
    }
  
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  
   /* ========================================================== */

   /* Convert HTML Entities */
   function convertHTML(str) {

    let htmlEntities = {
      '!':'&excl;',
      '&':'&amp;',
      '<':'&lt;', 
      '>':'&gt;', 
      '"':'&quot;',
      "'":'&apos;'
    };
   return  str.replace(/&|!|<|>|"|'/g, function(match){ return htmlEntities[match];});
     
  }
  
  convertHTML("Dolce & Gabbana");
  
     /* ========================================================== */

   /* Sum All Odd Fibonacci Numbers */

   function sumFibs(num) {

    let fibonacciNums = [0,1];
    let fibonacciSum = 0;
    let i = 0;
  
    while(num > fibonacciNums[fibonacciNums.length-1]){
  
      fibonacciNums.push(fibonacciNums[i] + fibonacciNums[i+1]);
      i++;
    }
  
    if(fibonacciNums[fibonacciNums.length-1] > num){
      fibonacciNums.pop();
    }
  
    fibonacciSum += fibonacciNums.map(a => a % 2 !== 0 ? a : 0).reduce((a,b) => a+b);
    return fibonacciSum;
  
  }
  
  sumFibs(4);
  

         /* ========================================================== */

   /* Sum All Primes */
   function sumPrimes(num) {
     let primeNums = [];
     
     for(let i = 2; i <= num; i++){
      for(let j = 2; j <= i; j++){
        
        if(i == j){
          primeNums.push(i);
        }

        if(i % j == 0){
          break;
        }
        
     }
    }
    console.log(primeNums);
    return primeNums.reduce((a,b)=> {return a+b});

  }
  
  // sumPrimes(10);
  sumPrimes(977);
  

/* ========================================================== */

   /* Smallest Common Multiple */

   function smallestCommons(arr) {

    arr.sort((a,b) => a-b);
  
    let range = [];
    let dividend = arr[1];
  
    for(let i = arr[0]; i <= arr[1]; i++){
      range.push(i);
    }
  
  
    for(let j = 0; j < range.length; j++){
      if(dividend % range[j]  !== 0){
      
        dividend += arr[1];
        j=-1;
      }
    }
  
    return dividend;
  }
  
  
  smallestCommons([23,18]);


  /* ========================================================== */

   /* Drop it */

   function dropElements(arr, func) {

    for(let i = 0; i < arr.length; i++){
  
        if(func(arr[i])){
  
            return arr.slice(i, arr[arr.length]);
  
          } else if (i == arr.length-1){
            
            return [];
          }
    }
  
    }
    
    dropElements([1, 2, 3, 4], function(n) {return n > 5;});
  
  

  /* ========================================================== */

   /* Steamroller */
   function steamrollArray(arr) {

    let result = [];
    let currentItem;

    while(arr.length > 0) {
         currentItem = arr.shift();

        if(Array.isArray(currentItem)) {

            arr.push(...currentItem);
        }

        else result.push(currentItem);
    }

    return result;
  }

  steamrollArray([1, [2], [3, [[4]]]]);

  /* ========================================================== */

   /* Binary Agents */
   function binaryAgent(str) {

    let arr = str.split(" ");
    let letterArr = [];
    // console.log(arr);
    let ascii = {
  
      //SPECIAL CHARACTERS
      "00111111" : "?",
      "00100001" : "!",
      "00100111" : "'",
      "00100000" : " ",
  
      //UPPERCASE
      "01000001" : "A","01000010" : "B","01000011" : "C","01000100" : "D","01000101" : "E","01000110" : "F","01000111" :  "G","01001000" : "H","01001001" : "I","01001010" : "J","01001011" : "K","01001100" :   "L","01001101" : "M","01001110" : "N","01001111" : "O","01010000" : "P","01010001" :  "Q","01010010" : "R","01010011" : "S","01010100" : "T","01010101" : "U","01010110" :   "V","01010111" : "W","01011000" : "X","01011001" : "Y","01011010" : "Z",
  
      //LOWERCASE
      "01100001" : "a","01100010" : "b","01100011" : "c","01100100" : "d","01100101" : "e","01100110" : "f","01100111" : "g","01101000" : "h","01101001" : "i","01101010" : "j","01101011" : "k","01101100" : "l","01101101" : "m","01101110" : "n","01101111" : "o","01110000" : "p","01110001" : "q","01110010" : "r","01110011" : "s","01110100" : "t","01110101" : "u","01110110" : "v","01110111" : "w","01111000" : "x","01111001" : "y","01111010" : "z",
      };
      
      for(let i = 0; i < arr.length; i ++){
        letterArr.push(ascii[arr[i]]);
      }
    return letterArr.join("");
    }
    
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
    


  /* ========================================================== */

   /* Everything Be True */
   function truthCheck(collection, pre) {

    for(let i = 0; i< collection.length; i++){
      if(!Boolean(collection[i][pre])){
        return false;
      }
    }
      return true;
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  


  /* ========================================================== */

   /* Arguments Optional */

   function addTogether(a,b) {

    if(typeof a !== "number"){
      console.log(`A: ${undefined}`);
      return undefined;
    }
    if(b !== undefined && typeof b !== "number"){
      console.log(`B: ${undefined}`);
      return undefined;
    }
  
    
    return a + b;
  }
  
  addTogether(2, 3);

  /* ========================================================== */

   /* Make a Person */

 
   /* ========================================================== */

   /* Map the Debris */
