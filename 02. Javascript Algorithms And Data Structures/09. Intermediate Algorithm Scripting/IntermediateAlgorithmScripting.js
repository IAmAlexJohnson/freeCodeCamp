/* ========================== */
  // Sum All Numbers in a Range
  function sumAll(arr) {
    let sum = 0;
    let sortedArr = arr.sort((a,b) => a - b);
    // sort lowest to highest
    console.log(sortedArr, "SORTED");
    for(let i = arr[0]; i <= sortedArr[1]; i++){
      sum += i;
      console.log(sum, "SUM");
    }
    return sum;
  }

  sumAll([4, 1]);

/* ========================== */
  // Diff Two Arrays
    function diffArray(arr1, arr2) {
      var newArr = [];
      // Same, same; but different.
      for(let i =0; i < arr1.length; i++){
        if(arr2.indexOf(arr1[i]) == -1){
          newArr.push(arr1[i]);
          console.log(newArr, "FIRST");
        }
      }
       for(let j =0; j < arr2.length; j++){
        if(arr1.indexOf(arr2[j]) == -1 && newArr.indexOf(arr2[j]) == -1){
          newArr.push(arr2[j]);
          console.log(newArr, "SECOND");
        }
      }
      return newArr;
    }

    diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

/* ========================== */
  // Seek and Destroy
  function destroyer(arr1, ...arr2) {
    // Remove all the values
    let newArr = arr1;
    console.log(arr1, "ARR");
    console.log(arr2, "ARR2");
    for(let j =0; j < newArr.length; j++){
      for(let i =0; i < arr2.length; i++){
        if(newArr[j] === arr2[i]){
          delete newArr[j];
        }
      }
      // newArr = arr1.filter((val)=> val != arr2[i]);
      console.log(newArr, "NEW ARR");
    }
    return newArr.filter((val)=> val !== Boolean);
  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

/* ========================== */
  // Wherefore art thou
  function whatIsInAName(collection, source) {
    // What's in a name?
    let arr = collection.filter(
      function(item) {
        for(let i in source){
          if(source[i] != item[i]){
            return false;
          }
        }
        return true;
      }
    );
   return arr;

    //fiter collection set to arr
    //loop through source
    //if source[i] isnt equal to item[i] return false
    //else return true
    //return arr

  }

  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
/* ========================== */
  // Spinal Tap Case
    function spinalCase(str) {
      // "It's such a fine line between stupid, and clever."
      // --David St. Hubbins

      /*   str.replace(regexp|substr, newSubstr|function)
              $n	Where n is a positive integer less than 100, inserts the nth parenthesized
              submatch string, provided the first argument was a RegExp object. Note that this is 1-indexed.
                  replace where the lowercase letter meets the uppercase letter */

      let newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s|_/g, '-').toLowerCase();
      console.log(newStr, "REGEX");
      return newStr;
    }

    spinalCase("thisIsSpinalTap");
/* ========================== */
  // Pig Latin
    function translatePigLatin(str) {
      let letters = str.split("");
      let arr = [];
      let newStr ="";
      for(let i = 0; i < letters.length; i++){
        if(/[aeiou]/.test(letters[0])){
          newStr = `${str}way`
        } else if(/[aeiou]/.test(letters[i])) {
          arr.push(letters.slice(i),letters.slice(0, i));
          console.log(arr, "ARR");
          newStr = `${arr.join("").split(",").join("")}ay`;
          break;
        } else {
          newStr = `${str}ay`;
        }
       }
       console.log(newStr, "END STRING");
      return newStr;
    }

    translatePigLatin("california");
    // translatePigLatin("paragraphs");
    // translatePigLatin("glove");
    // translatePigLatin("algorithm");
    // translatePigLatin("eight");

/* ========================== */
  // Search and Replace
    function myReplace(str, before, after) {
    let newStr = str;
    let capitalized = "";
    if(/[A-Z]/.test(before[0])){
      console.log("First Letter Capital");
      capitalized = after.slice(0,1).toUpperCase() + after.slice(1);
      return newStr.replace(before, capitalized);
    }
    return newStr.replace(before, after);
  }

  myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
/* ========================== */
  // DNA Pairing
  function pairElement(str) {
    let arr = [];
    for(let i =0; i < str.length; i++){
      if(str[i] == "A"){
        arr.push(["A","T"]);
      }else if(str[i] == "T") {
        arr.push(["T","A"]);
      }else if(str[i] == "G") {
        arr.push(["G","C"]);
      }else if(str[i] == "C") {
        arr.push(["C","G"]);
      }
    }
    console.log(arr);
    return arr;
  }

  pairElement("GCG");

/* ========================== */
  // Missing letters
  function fearNotLetter(str) {
    let arr = str.split("").map((letter)=> letter.charCodeAt());
    console.log(arr, "STR ARR");

    for(let i = 0; i < arr.length; i++){
      console.log(arr[i+1],"FIRST NUM", arr[i],"SECOND NUM");
        if(arr[i+1] - arr[i] > 1){
          console.log(String.fromCharCode(arr[i]+1), "MISSING LETTER");
          return String.fromCharCode(arr[i]+1);
        }
      }

    return undefined;
  }

  fearNotLetter("abce");

/* ========================== */
  // Sorted Union
  function uniteUnique(arr) {

    for (let i = 0 ; i < arguments.length ; i++){
      arr = arr.concat(arguments[i]);
    }
     console.log(arr, "ARR CONCATENATED");

   /*
        array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

        total	Required. The initialValue, or the previously returned value of the function
        currentValue	Required. The value of the current element
        currentIndex	Optional. The array index of the current element
        arr	Optional. The array object the current element belongs to
  */
    let newArr = arr.reduce(function(arr,item){
      console.log(arr, "ARR");
      console.log(item, "ITEM");
      if (arr.includes(item) === false){
        //if it is not a dup push it
        arr.push(item);
      }
      return arr;
    },[]);

    return newArr;

  }

  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/* ========================== */
  // Convert HTML Entities
  function convertHTML(str) {
    // &colon;&rpar;

    let entities = {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "'" : "&apos;"
    }
    let newStr = str.split("").map((char) => entities[char] || char);
    return newStr.join("");
  }

  // convertHTML("Dolce & Gabbana");
  convertHTML("Hamburgers < Pizza < Tacos");
  // convertHTML("Sixty > twelve");
  // convertHTML('Stuff in "quotation marks"');
  // convertHTML("Schindler's List");
  // convertHTML("<>");
  // convertHTML("abc");

/* ========================== */
  // Sum All Odd Fibonacci Numbers
    function sumFibs(num) {
      let arr = [1,1];
      let fibNum = 0;
      let result = 0;
      while(fibNum < num){
        fibNum = arr.slice(-1)[0] + arr.slice(-2)[0];
        console.log(fibNum, "FIBNUM");
        if(fibNum <= num){
          arr.push(fibNum);
        }
      }
      console.log(arr, "ARR");
      result = arr.filter((e) => e % 2 !== 0).reduce((a,b) => a+b);
      console.log(result, "RESULT");
      return result;
    }

    sumFibs(10);

/* ========================== */
  // Sum All Primes
  function sumPrimes(num) {
    let primeNum = [];

    for(let i = 2; i <= num; i++){
      if(isPrime(i)){
        primeNum.push(i);
        console.log(`${primeNum} PRIME NUMBER ARRAY)`);
      }
    }
    console.log(`${primeNum.reduce((a,b)=> a+b)} RESULTS`);
    return primeNum.reduce((a,b)=> a+b);
  }


  function isPrime(num) {
    for(let i = 2; i < num; i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }

  sumPrimes(10);

/* ========================== */
  // Smallest Common Multiple
  // function smallestCommons(arr) {
  //   let sortedArr = arr.sort((a,b) => a>b);
  //   let newArr = [];
  //   let lowestMultiple = 0;
  //   let isTrue = true;
  //
  //   for(let i = sortedArr[0]; i <= sortedArr[sortedArr.length-1]; i++ ){
  //     newArr.push(i);
  //   }
  //   console.log(newArr);
  //
  //   while(isTrue){
  //     lowestMultiple++;
  //     for(let j = newArr[0]; j <= newArr[newArr.length-1]; j++){
  //         if(lowestMultiple % j !== 0){
  //           break;
  //         } else if(j == newArr[newArr.length-1]){
  //           isTrue = false;
  //         }
  //     }
  //   }
  //   console.log(lowestMultiple, "LOWEST COMMON MULTIPLE");
  //   return lowestMultiple;
  // }
  //
  // smallestCommons([1,13]);
  function smallestCommons(arr) {
    let tmp = [];
    let min = Math.min(arr[0], arr[1]);
    let max = Math.max(arr[0], arr[1]);
    for(let i = min; i <= max; i++) {
      tmp.push(i);
    }

    function gcd(a, b) {
      if (b===0){
        return a;
      } else {
        return gcd(b, a%b);
      }
    }

    function lcm(a,b) {
      return a*b/gcd(a,b);
    }


    return tmp.reduce(function(a,b) {
      return lcm(a,b);
    });
  }


  smallestCommons([1,5]);

/* ========================== */

  function dropElements(arr, func) {
    // Drop them elements.
    let newArr = arr;
    let length = newArr.length;
    for (let i = 0; i < length; i++){
     // console.log(`${func(arr[i])} FUNCTION
     //               ${i} i VALUE
    //              ${newArr[i]} ARRAY VALUE`);
      if(func(newArr[0])){
        break;
      }  else {
        newArr.shift();
        //console.log(`${newArr} NEW ARR`);
      }
    }
      return newArr;
  }


  dropElements([1, 2, 3, 4], function(n) {return n > 5;});

/* ========================== */
  function steamrollArray(arr){
    let newArr = arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);

    return newArr;
  }

  steamrollArray([1, [2], [3, [[4]]]]);
  // Steamroller
  // let newArr = [];
  // function steamrollArray(arr) {
  //   // I'm a steamroller, baby
  //   for (let i = 0; i < arr.length; i++){
  //     if(!Array.isArray(arr[i])){
  //       newArr.push(arr[i]);
  //       } else {
  //         steamrollArray(arr[i]);
  //     }
  //   }
  //   console.log(`${newArr} NEWARR`);
  //   return newArr;
  // }

/* ========================== */
  // Binary Agents
  function binaryAgent(str) {
    let arr = str.split(" ").map((val) => String.fromCharCode(parseInt(val, 2)));
    return arr.join("");
  }

  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

/* ========================== */
  // Everything Be True
  function truthCheck(collection, pre) {
    // Is everyone being true?

    // Can't use dot notation because 'pre' is a argument and with dot notation
    // it will look for the word 'pre' and not what is stored in it.
    console.log( collection.every((obj) => obj[pre]));
    return collection.every((obj) => obj[pre]);
  }

  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/* ========================== */
  // Arguments Optional
  function addTogether(a, b) {
    let result;
    const args = Array.prototype.slice.call(arguments);
    if (args.every(function(val) {
            return typeof val == 'number';
        })) {
        if (args.length === 1) {
            return function(c) {
                if (typeof c == 'number'){
                    return result = a + c;
                }
            }
        }
        else {
            result = a + b;
        }
    }
    return result;
  }
  addTogether(2,3);

/* ========================== */
  // Make a Person
  var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let arr = firstAndLast.split(" ");

    this.getFirstName = function() {
      return arr[0];
    };
   this.getLastName = function() {
      return arr[1];
    };
    this.getFullName = function() {
      return arr.join(" ");
    };
    this.setFirstName = function(first) {
      arr[0] = first;
    };
    this.setLastName = function(last) {
      arr[1] = last;
    };
    this.setFullName = function(firstAndLast) {
      let splitNames = firstAndLast.split(" ");
      this.setFirstName(splitNames[0]);
      this.setLastName(splitNames[1]);
    };
  };

  var bob = new Person('Bob Ross');
  console.log(Object.keys(bob).length);
  bob.getFullName();

/* ========================== */
  // Map the Debris

  function orbitalPeriod(arr) {
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    let newArr =[];
    for(let i = 0; i < arr.length; i++){
      let result = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM));
      newArr.push([{name:arr[i].name, orbitalPeriod: result}]);
    }
    console.log(newArr);
    return newArr;

  }


  // orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
