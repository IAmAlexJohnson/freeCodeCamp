
//Comment your JavaScript Code
/* This is a
   multi-line comment */

// This is an in-line comment.

/* ========================== */

//Declare JavaScript Variables
// Example
var ourName;

// Define myName below this line

var myName;

/* ========================== */

//Storing Values with the Assignment Operator

// Setup
var a;
var b = 2;

// Only change code below this line
a = 7;
b = a;

/* ========================== */

//Initializing Variables with the Assignment Operator

// Example
var ourVar = 19;

// Only change code below this line
var a = 9;

/* ========================== */
//Understanding Uninitialized Variables

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

/* ========================== */
//Understanding Case Sensitivity in Variables

// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

/* ========================== */
//Add Two Numbers with JavaScript

var sum = 10 + 10;

/* ========================== */
//Subtract One Number from Another with JavaScript

var difference = 45 - 33;

/* ========================== */
//Multiply Two Numbers with JavaScript

var product = 8 * 10;

/* ========================== */
//Divide One Number by Another with JavaScript

var quotient = 66 / 33;

/* ========================== */
//Increment a Number with JavaScript

var myVar = 87;

// Only change code below this line
myVar++;

/* ========================== */
//Decrement a Number with JavaScript

var myVar = 11;

// Only change code below this line
myVar--;

/* ========================== */
//Create Decimal Numbers with JavaScript

var ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 6.2;

/* ========================== */
//Multiply Two Decimals with JavaScript

var product = 2.0 * 2.5;

/* ========================== */
//Divide one Decimal by Another with JavaScript

var quotient = 4.4 / 2.0;

/* ========================== */
//Finding a Remainder in JavaScript

// Only change code below this line

var remainder = 11%3;

/* ========================== */
//Compound Assignment With Augmented Addition

var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line

a+= 12;
b+=9;
c+= 7;

/* ========================== */
//Compound Assignment With Augmented Subtraction

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a-= 6;
b-= 15;
c-=1;

/* ========================== */
//Compound Assignment With Augmented Multiplication


var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a*=5;
b *= 3;
c *= 10;

/* ========================== */
//Compound Assignment With Augmented Division

var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c /= 11;

/* ========================== */
//Convert Celsius to Fahrenheit

function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = celsius * (9/5) + 32;

  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);

/* ========================== */
//Declare String Variables

// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line
var myFirstName = "Alex";
var myLastName = "Cramer";

/* ========================== */
//Escaping Literal Quotes in Strings

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

/* ========================== */
//Quoting Strings with Single Quotes

var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/* ========================== */
//Escape Sequences in Strings

var myStr = "FirstLine\n\\SecondLine\\\rThirdLine"; // Change this line

/* ========================== */
//Concatenating Strings with Plus Operator

// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start." + " This is the end.";

/* ========================== */
//Concatenating Strings with the Plus Equals Operator

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr+= "This is the second sentence.";

/* ========================== */
//Constructing Strings with Variables

// Example
var ourName = "Free Code Camp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Alex";
var myStr= "My name is " + myName + "and I am swell!";

/* ========================== */
//Appending Variables to Strings

// Example
var anAdjective = "awesome!";
var ourStr = "Free Code Camp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "cool";
var myStr = "Learning to code is "
myStr += someAdjective;

/* ========================== */
//Find the Length of a String

// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

/* ========================== */
//Use Bracket Notation to Find the First Character in a String

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

/* ========================== */
//Understand String Immutability

// Setup
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World"; // Fix Me

/* ========================== */
//Use Bracket Notation to Find the Nth Character in a String

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

/* ========================== */
//Use Bracket Notation to Find the Last Character in a String

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

/* ========================== */
//Use Bracket Notation to Find the NthtoLast Character in a String

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length -2];

/* ========================== */
//Word Blanks

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line

  result = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

/* ========================== */
//Store Multiple Values in one Variable using JavaScript Arrays

// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["Alex", 26];

/* ========================== */
//Nest one Array within Another Array

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [["Something", 33],["Other Thing", 56]];

/* ========================== */
//Access Array Data with Indexes

// Example
var ourArray = [1,2,3];
var ourData = ourArray[0]; // equals 1

// Setup
var myArray = [1,2,3];

// Only change code below this line.
var myData = myArray[0];

/* ========================== */
//Modify Array Data With Indexes

// Example
var ourArray = [1,2,3];
ourArray[1] = 3; // ourArray now equals [1,3,3].

// Setup
var myArray = [1,2,3];

// Only change code below this line.

myArray[0] = 3;

/* ========================== */
//Access MultiDimensional Arrays With Indexes

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];

/* ========================== */
//Manipulate Arrays With push

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.


myArray.push(["dog", 3]);
/* ========================== */
//Manipulate Arrays With pop

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

/* ========================== */
//Manipulate Arrays With shift

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

/* ========================== */
//Manipulate Arrays With unshift

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);

/* ========================== */
//Shopping List

var myList = [["Apples",10],["Bananas", 3],["Milk", 1],["Cake", 5],["Fruit Loops", 999]];

/* ========================== */
//Write Reusable JavaScript with Functions

// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line

function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();
/* ========================== */
//Passing Values to Functions with Arguments

// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(a,b){
  console.log(a+b);
}

functionWithArgs(2, 6);

/* ========================== */
//Global Scope and Functions

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/* ========================== */
//Local Scope and Functions

function myLocalScope() {
  'use strict';

  var myVar = 5;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

//console.log(myVar);

// Now remove the console log line to pass the test

/* ========================== */
//Global vs Local Scope in Functions

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();

/* ========================== */
//Return a Value from a Function with Return

// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line

function timesFive(num){
  return num * 5;
}

/* ========================== */
//Understanding Undefined Value returned from a Function
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
/* ========================== */
//Assignment with a Returned Value

// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);

/* ========================== */
//Stand in Line

function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  item = arr.shift();
  return item;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

/* ========================== */
//Understanding Boolean Values

function welcomeToBooleans() {

// Only change code below this line.

return true; // Change this line

// Only change code above this line.
}

/* ========================== */
//Use Conditional Logic with If Statements

// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.

  if(wasThatTrue){
    return "Yes, that was true";

  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(true);

/* ========================== */
//Comparison with the Equality Operator

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);

/* ========================== */
//Practice comparing different values
// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");

/* ========================== */
//Comparison with the Strict Equality Operator

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);

/* ========================== */
//Comparison with the Inequality Operator

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);

/* ========================== */
//Comparison with the Strict Inequality Operator

// Setup
function testStrictNotEqual(val) {
  // Only Change Code Below this Line

  if (val !== 17) {

  // Only Change Code Above this Line

    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testStrictNotEqual(10);

/* ========================== */
//Comparison with the Greater Than Operator

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);

/* ========================== */
//Comparison with the Greater Than Or Equal To Operator

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(10);

/* ========================== */
//Comparison with the Less Than Operator

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

// Change this value to test
testLessThan(10);

/* ========================== */
//Comparison with the Less Than Or Equal To Operator

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "25 or More";
}

// Change this value to test
testLessOrEqual(10);

/* ========================== */
//Comparisons with the Logical And Operator

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);

/* ========================== */
//Comparisons with the Logical Or Operator

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

/* ========================== */
//Introducing Else Statements

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);


/* ========================== */
//Introducing Else If Statements

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  } else {

  return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);

/* ========================== */
//Logical Order in If Else Statements

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);

/* ========================== */
//Chaining If Else Statements

function testSize(num) {
  // Only change code below this line
  if(num < 5){
    return "Tiny";
  } else if (num < 10){
    return "Small";
  }else if (num < 15){
    return "Medium";
  }else if (num < 20){
    return "Large";
  }else if (num >= 20){
    return "Huge";
  }

  return "Change Me";
  // Only change code above this line
}

// Change this value to test
testSize(7);

/* ========================== */
//Golf Code

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes === 1){
    return "Hole-in-one!";
  }else if(strokes <= par-2) {
    return "Eagle";
  }else if(strokes == par-1 ){
    return "Birdie";
  }else if(strokes == par){
    return "Par";
  }else if(strokes == par+1){
    return "Bogey";
  }else if(strokes == par+2){
    return "Double Bogey";
  }else {
    return "Go Home!";
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

/* ========================== */
//Selecting from many options with Switch Statements

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
      break;
}


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);

/* ========================== */
//Adding a default option in Switch statements

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
    case "c":
      answer = "cat";
      break;
  default:
    answer = "stuff";
}


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);

/* ========================== */
//Multiple Identical Options in Switch Statements

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);

/* ========================== */
//Replacing If Else Chains with Switch

function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}

  // Only change code above this line
  return answer;
}
// Change this value to test
chainToSwitch(7);

/* ========================== */
//Returning Boolean Values from Functions

function isLess(a, b) {
  // Fix this code
 return a < b;

}

// Change these values to test
isLess(10, 15);

/* ========================== */
//Return Early Pattern for Functions

// Setup
function abTest(a, b) {
  // Only change code below this line
  if( a < 0 || b < 0){
    return undefined;
  }
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);

/* ========================== */
//Counting Cards
var count = 0;

function cc(card) {
  // Only change code below this line
   if(card === 2 || card === 3 || card === 4 || card === 5 || card === 6){
      count++;
   } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A'){
     count--;
   }
  if(count > 0){
    return count + " Bet";
  }else if(count <= 0){
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

/* ========================== */
//Build JavaScript Objects

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
  "name": "Bandit",
  "legs": 4,
  "tails": 1,
  "friends": ["everyone!"]
};

/* ========================== */
//Accessing Objects Properties with the Dot Operator
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

/* ========================== */
//Accessing Objects Properties with Bracket Notation

// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

/* ========================== */
//Accessing Objects Properties with Variables

// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

/* ========================== */
//Updating Object Properties

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.name = "Happy Coder";

/* ========================== */
//Add New Properties to a JavaScript Object

// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.

myDog["bark"] = "woof";
/* ========================== */
//Delete Properties from a JavaScript Object
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["Free Code Camp Campers"],
  "bark": "woof"
};

// Only change code below this line.

delete myDog.tails;

/* ========================== */
//Using Objects for Lookups

// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
    var lookup = {
    "alpha": "Adams",
    "bravo":"Boston",
    "charlie":"Chicago",
    "delta":  "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

/* ========================== */
//Testing Objects for Properties

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp) == ""){
    return "Not Found";
  } else {
    return myObj[checkProp];
  }


}

// Test your code by modifying these values
checkObj("house");

/* ========================== */
//Manipulating Complex Objects
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  // Add record here

  {
    "artist": "Halestorm",
    "title": "The Strange Case of...",
    "release_year": 2012,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  }
];


/* ========================== */
//Accessing Nested Objects

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

/* ========================== */
// Accessing Nested Arrays

// Setup
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

/* ========================== */
//Record Collection

// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(prop !== "tracks"&& value !== ""){
      collection[id][prop] = value;
  }

  if(prop == "tracks" && collection[id]["tracks"] == undefined){
    collection[id]["tracks"] = [value];
  }

  if(prop == "tracks" && value !== "") {
    collection[id]["tracks"].push(value);
  }

  if(value == ""){
    delete collection[id][prop];
  }

  return collection;
}

// Alter values below to test your code
updateRecords(2548, "artist", "");

/* ========================== */
// Iterate with JavaScript While Loops

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while (i< 5) {
  myArray.push(i);
  i++
}

/* ========================== */
// Iterate with JavaScript For Loops
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

/* ========================== */
// Iterate Odd Numbers With a For Loop
// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

for(var i = 1; i < 10; i +=2 ){
  myArray.push(i);
}

/* ========================== */
// Count Backwards With a For Loop
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.

var ourArray = [];
for (var i=9; i > 0; i-=2) {
  myArray.push(i);
}

/* ========================== */
// Iterate Through an Array with a For Loop

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;
for(var i = 0; i < myArr.length; i++){
  total += myArr[i];
  console.log(total);
}

/* ========================== */
// Nesting For Loops
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *=  arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

/* ========================== */
//  Iterate with JavaScript Do...While Loops

// Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do {
  myArray.push(i);
  i++;
  console.log(i);
} while (i < 11);

/* ========================== */
// Profile Lookup
//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for(var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName == name){
      if(contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
   return "No such contact";

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "address");

/* ========================== */
// Generate Random Fractions with JavaScript

function randomFraction() {

  // Only change code below this line.

  return Math.random();

  // Only change code above this line.
}

/* ========================== */
// Generate Random Whole Numbers with JavaScript

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}
/* ========================== */
// Generate Random Whole Numbers within a Range
// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin; // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);

/* ========================== */
// Use the parseInt Function
function convertToInteger(str) {
 return parseInt(str);
}

convertToInteger("56");

/* ========================== */
// Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

/* ========================== */
// Use the Conditional (Ternary) Operator
  function checkEqual(a, b) {
  return a == b ? true : false;
}

checkEqual(1, 2);

/* ========================== */
// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num == 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(-12);
