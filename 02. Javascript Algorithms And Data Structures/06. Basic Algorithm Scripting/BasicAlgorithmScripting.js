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
    
    for(let i = str.length-1; i >= 0; i--){
      // console.log(`String: ${str.charAt(i)}`);
      arr.push(str.charAt(i));
    }
    
    // console.log(arr);
    return arr.join("");
  }
  
  reverseString("hello");
  

/* ================ */
  // Factorialize a Number
  function factorialize(num) {
    let arr = [];
  
    if(num == 0){
      return 1;
    } else {
      for(let i = 1; i <= num; i++){
        arr.push(i);
      }
      // console.log(arr);
      // console.log(arr.reduce((a,b) => a*b));
      return arr.reduce((a,b) => a*b);
    }
    
  }
  
  factorialize(5);
  

/* ================ */
  // Find the Longest Word in a String
  function findLongestWordLength(str) {

    let arr = str.split(" ");
    let num = 0;
  
    console.log(arr);
    
    for(let i =0; i <arr.length; i++){
      if(arr[i].length > num){
        num = arr[i].length;
      }
    }
  
    return num;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  
/* ================ */
  // Return Largest Numbers in Arrays
  function largestOfFour(arr) {

    return arr.map(
      (a) => 
      a.sort((a,b) => a-b))
      .map((a) => a[a.length-1]
      );
    
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
/* ================ */
  // Confirm the Ending
  function confirmEnding(str, target) {

    console.log(str.slice(-target.length));
    console.log(str.slice(-target.length) == target);
    
      return str.slice(-target.length) == target;
    }
    
    confirmEnding("Bastian", "n");
    

/* ================ */
  // Repeat a String Repeat a String
  function repeatStringNumTimes(str, num) {
    let newStr = "";
    if(num > 0){
      for(let i = 0; i < num; i ++){
        newStr+=str;
      }
      return newStr;
    } else {
      return "";
    }
  }
  
  repeatStringNumTimes("abc", 3);
  

/* ================ */
  // Truncate a String
    function truncateString(str, num) {
      function truncateString(str, num) {
        if(str.length > num){
          // console.log(str.slice(0,num)+"...");
          return str.slice(0,num)+"...";
        }
        return str;
      }
      
      truncateString("A-tisket a-tasket A green and yellow basket", 8);
      
/* ================ */
  // Finders Keepers
  function findElement(arr, func) {
    let num = 0;
    for(let i = 0; i < arr.length; i++){
      num = arr[i];
      // console.log(`NUM: ${num} fUNC: ${func(num)}`);
      if(func(num) == true){
        return num;
      }
    }
    return undefined;
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
    let arr = str.toLowerCase().split(" ");
    return arr.map(a => a.charAt(0).toUpperCase()+a.slice(1)).join(" ");
  
  }
  
  titleCase("I'm a little tea pot");
  

/* ================ */
  // Slice and Splice
  function frankenSplice(arr1, arr2, n) {
    let newArr = [];
    newArr.push(...arr2.slice(0,n));
    newArr.push(...arr1);
    newArr.push(...arr2.slice(n, arr2.length));
    console.log(newArr);
    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5], 1);
  

/* ================ */
  // Falsy Bouncer
  function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    function bouncer(arr) {
      let newArr = [];
      for(let i = 0; i < arr.length; i++){
        if(Boolean(arr[i])){
          newArr.push(arr[i]);
        }
      }
      return newArr;
    }
    
    bouncer([7, "ate", "", false, 9]);
    

/* ================ */
  // Where do I Belong
  function getIndexToIns(arr, num) {

    arr.sort((a,b) => a - b); 
 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= num){
          return i;
  
        } else if(arr[arr.length-1] < num){
          return arr.length;
        }
    }
    return 0;
  }
  
  getIndexToIns([], 1);


/* ================ */
  // Mutations
  function mutation(arr) {

    let secondWord = arr[1].toLowerCase().split("");
  
    for(let i = 0; i < secondWord.length; i++){
      if(arr[0].toLowerCase().indexOf(secondWord[i]) == -1){
        return false;
      }
    }
    return true;
  
  }
  
  mutation(["Mary", "Army"]);

/* ================ */
  // Chunky Monkey
  function chunkArrayInGroups(arr, size) {

    let chunkedArr = [];
  
    for(let i = 0; i < arr.length; i + size){
      chunkedArr.push(arr.slice(i, i += size));
    }
  
    return chunkedArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
