/* ================ */
  // Convert Celsius to Fahrenheit
  function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
  }

  convertToF(30);

/* ================ */
  // Reverse a String
  function reverseString(str) {
    let arr = [];
    for(let i = 0; i < str.length; i++){
      arr.push(str[i]);
    }
    return str = arr.reverse().join("");
  }

  reverseString("hello");

/* ================ */
  // Factorialize a Number
  function factorialize(num) {
      let factorial = 1;

        if(num > 0){
          for(let i = num; i > 0; i--){

            factorial *= i;
            console.log(factorial, "decrementing");
          }
        } else if(num == 0) {
            num = 1;
        }
      return factorial;
    }

    factorialize(5);

/* ================ */
  // Find the Longest Word in a String
    function findLongestWordLength(str) {
      let strArr = [];
      let numArr = [];
      strArr = str.split(" ");

      console.log(strArr, "Strings");

      for(let i = 0; i < strArr.length; i++){
        numArr.push(strArr[i].length);
      }
      console.log(numArr, "Numbers");
      numArr = numArr.sort((a,b) => a < b);
      console.log(numArr, "Sorted Numbers");
      return numArr[0];
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");

/* ================ */
  // Return Largest Numbers in Arrays
    function largestOfFour(arr) {
      // You can do this!
      let largestNumArr = [];
      for(let i = 0; i< arr.length; i++){
        console.log(arr[i].sort((a,b)=> a<b));
        arr[i].sort((a,b)=> a<b);
        largestNumArr.push(arr[i][0]);
      }
      return largestNumArr;
    }

    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

/* ================ */
  // Confirm the Ending
    function confirmEnding(str, target) {
      // "Never give up and good luck will find you."
      // -- Falcor

      let strEnd = str.substring(str.length-target.length);
      console.log(strEnd);
      if(strEnd === target){
        return true;
       } else {
         return false;
       }
    }

    confirmEnding("Bastian", "n");

/* ================ */
  // Repeat a String Repeat a String
  function repeatStringNumTimes(str, num) {
    // repeat after me
    let newStr = "";
    if(num > 0){
      for(let i = 0; i < num; i++) {
        newStr += str;
      }
      console.log(newStr);
      return newStr;
    } else {
      return "";
    }
  }

  repeatStringNumTimes("abc", 3);

/* ================ */
  // Truncate a String
    function truncateString(str, num) {
      // Clear out that junk in your trunk
      let truncateStr= "";
      if(num < str.length ){
         truncateStr = str.slice(0, num) + "...";
          console.log(str.slice(0, num), "slice");
          console.log(truncateStr);
          return truncateStr;
      }else{
        return str;
      }
    }

    truncateString("A-tisket a-tasket A green and yellow basket", 8);

/* ================ */
  // Finders Keepers
  function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      console.log(func(arr[i]));
      if(func(arr[i])){
        num = arr[i];
        break;
      } else {
        num = undefined;
      }
    }
    return num;
  }

  findElement([1, 2, 3, 4], num => num % 2 === 0);

/* ================ */
  // Boo who
  function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    console.log(typeof bool);
    if(typeof bool == "boolean") {
      return true;
    }
    return false;
  }

  booWho(null);

/* ================ */
  // Title Case a Sentence
    function titleCase(str) {
      return str.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase())
    }

    titleCase("I'm a little tea pot");

/* ================ */
  // Slice and Splice
  function frankenSplice(arr1, arr2, n) {
      // It's alive. It's alive!
      let newArr = arr2.slice();
      console.log(newArr, "sliced");

      newArr.splice(n, 0, ...arr1);
      return newArr;
    }

    frankenSplice([1, 2, 3], [4, 5, 6], 1);

/* ================ */
  // Falsy Bouncer
  function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      console.log(Boolean(arr[i]));
      if(Boolean(arr[i]) === true){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }

  bouncer([7, "ate", "", false, 9]);

/* ================ */
  // Where do I Belong
  function getIndexToIns(arr, num) {
    // Find my place in this sorted array.

    arr = arr.sort((a,b) => a > b);

    for(let i = 0; i < arr.length; i++){
     if(num <= arr[i]){
        return i;
      }
    }
      return arr.length;


  }

  getIndexToIns([], 1);

/* ================ */
  // Mutations
    function mutation(arr) {
      arr[0] = arr[0].toLowerCase();
      arr[1] = arr[1].toLowerCase();
        for(let j = 0; j < arr[1].length; j++){
          if(arr[0].indexOf(arr[1][j]) == -1){
            return false;
          }
      }
      return true;
    }

    mutation(["hello", "hey"]);

/* ================ */
  // Chunky Monkey
  function chunkArrayInGroups(arr, size) {
    // Break it up.
    let newArr = [];
    while (arr.length) {
      // While length is NOT zero do ...
      console.log(arr, "original");
      console.log(newArr, "new");
      newArr.push(arr.splice(0,size));
    }
    return newArr;
  }

  chunkArrayInGroups(["a", "b", "c", "d"], 2);
