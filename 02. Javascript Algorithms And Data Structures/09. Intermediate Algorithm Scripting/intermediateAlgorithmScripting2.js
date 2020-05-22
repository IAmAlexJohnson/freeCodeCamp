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
  
  
  
  // loop though num1 to num2 and push to array
  // cycle through new array and add together


  /* 
    sumAll([1, 4]) should return a number.
    sumAll([1, 4]) should return 10.
    sumAll([4, 1]) should return 10.
    sumAll([5, 10]) should return 45.
    sumAll([10, 5]) should return 45.
*/
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
  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

  // Loop through arr1 and through arr2
 // if arr1[i] = arr[j] 

/*
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array.
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item.
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items.
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return [].
["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return an empty array.
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4].
[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item.
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4].
[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items.
[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"].
[], ["snuffleupagus", "cookie monster", "elmo"] should return an array with three items.
[1, "calf", 3, "piglet"], [7, "filly"] should return [1, "calf", 3, "piglet", 7, "filly"].
[1, "calf", 3, "piglet"], [7, "filly"] should return an array with six items.
*/

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
  
  /*
    destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
    destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
    destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
    destroyer([2, 3, 2, 3], 2, 3) should return [].
    destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].
    destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
*/

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
  
  
  /*
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }].
    whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }) should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
    whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
    whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }) should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
    whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
    whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}) should return []
*/

/* ========================================================== */

/* Spinal Tap Case */

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').trim().replace(/_|\s/g,"-").toLowerCase();
  }
  
  spinalCase('This Is Spinal Tap');
  spinalCase("The_Andy_Griffith_Show");
  spinalCase("thisIsSpinalTap");
  
  /*
    spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
    spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
    spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
    spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
    spinalCase("AllThe-small Things") should return "all-the-small-things".  
  */


/* ========================================================== */

  /* Pig Latin */

  function translatePigLatin(str) {
    return str;
  }

///[aeiou]/


//   translatePigLatin("consonant");
  // translatePigLatin("california");
translatePigLatin("glove");
// translatePigLatin("eight");


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
  
  // fearNotLetter("abce");
  // fearNotLetter("stvwx");
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
       while(fibonacciSum < num){

       }
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
    