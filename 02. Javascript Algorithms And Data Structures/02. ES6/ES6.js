/* ======================= */
  // Explore Differences Between the var and let Keywords
  let catName;
  let quote;
  function catTalk() {
    "use strict";

    catName = "Oliver";
    quote = catName + " says Meow!";

  }
  catTalk();
/* ======================= */
  //  Compare Scopes of the var and let Keywords
  function checkScope() {
  "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }

/* ======================= */
  // Declare a Read-Only Variable with the const Keyword
  function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

  }
  printManyTimes("freeCodeCamp");

/* ======================= */
  // Mutate an Array Declared with const
  const s = [5, 7, 2];
  function editInPlace() {
    "use strict";
    // change code below this line

    // s = [2, 5, 7]; <- this is invalid
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // change code above this line
  }
  editInPlace();

/* ======================= */
  // Prevent Object Mutation
  function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line

  Object.freeze(MATH_CONSTANTS);
    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

/* ======================= */
  // Use Arrow Functions to Write Concise Anonymous Functions
  const magic = () => {
    "use strict";
    return new Date();
  };

/* ======================= */
  // Write Arrow Functions with Parameters
  const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5]));

/* ======================= */
  // Write Higher Order Arrow Functions
  const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
  const squareList = (arr) => {
    "use strict";
    // change code below this line
    let squaredIntegers = realNumberArray.filter((int) => int % 1 === 0 );
    // change code above this line
    return squaredIntegers.map((val) => val * val);
  };
  // test your code
  const squaredIntegers = squareList(realNumberArray);
  console.log(squaredIntegers);

/* ======================= */
  // Set Default Parameters for Your Functions
  const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns NaN

/* ======================= */
  // Use the Rest Operator with Function Parameters
  const sum = (function() {
    "use strict";
    return function sum(...args) {
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6

/* ======================= */
  // Use the Spread Operator to Evaluate Arrays In-Place
  const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
  let arr2;
  (function() {
    "use strict";
    arr2 = [...arr1]; // change this line
  })();
  console.log(arr2);

/* ======================= */
  // Use Destructuring Assignment to Assign Variables from Objects
  function getLength(str) {
    "use strict";


    // change code below this line
    const {length : len} = str; // change this
    // change code above this line

    return len; // you must assign length to len in line

  }

  console.log(getLength('FreeCodeCamp'));

/* ======================= */
  // Use Destructuring Assignment to Assign Variables from Nested Objects
  const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };

  function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const {tomorrow:{ max :maxOfTomorrow}}= forecast;  // change this line
    // change code above this line
    return maxOfTomorrow;
  }

  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

/* ======================= */
  // Use Destructuring Assignment to Assign Variables from Arrays
  let a = 8, b = 6;
  (() => {
    "use strict";
    // change code below this line
    [a,b] = [b,a];
    // change code above this line
  })();
  console.log(a); // should be 6
  console.log(b); // should be 8

/* ======================= */
  // Use Destructuring Assignment with the Rest Operator to Reassign Array Elements
  const source = [1,2,3,4,5,6,7,8,9,10];
  function removeFirstTwo(list) {
    "use strict";
    // change code below this line
   const [a,b, ...arr] = list; // change this
    // change code above this line
    return arr;
  }
  const arr = removeFirstTwo(source);
  console.log(arr); // should be [3,4,5,6,7,8,9,10]
  console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

/* ======================= */
  // Use Destructuring Assignment to Pass an Object as a Function's Parameters
  const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  const half = (function() {
    "use strict"; // do not change this line

    // change code below this line
    return function half({max, min}) {
      // use function argument destructuring
      return (max + min) / 2.0;
    };
    // change code above this line

  })();
  console.log(stats); // should be object
  console.log(half(stats)); // should be 28.015

/* ======================= */
  // Create Strings using Template Literals
  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = arr.map(x => `<li class="text-warning">${x}</li>`);``;
    // change code above this line

    return resultDisplayArray;
  }
  /**
   * makeList(result.failure) should return:
   * [ `<li class="text-warning">no-var</li>`,
   *   `<li class="text-warning">var-on-top</li>`,
   *   `<li class="text-warning">linebreak</li>` ]
   **/
  const resultDisplayArray = makeList(result.failure);

/* ======================= */
  // Write Concise Object Literal Declarations Using Simple Fields
  const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return ({name,age,gender
    });
    // change code above this line
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

/* ======================= */
  // Write Concise Declarative Functions with ES6
  // change code below this line
  const bicycle = {
    gear: 2,
    setGear(newGear) {
      "use strict";
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);

/* ======================= */
  // Use class Syntax to Define a Constructor Function
  function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable {
      constructor(name){
        this.name = name;
      }
    }
    /* Alter code above this line */
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // => should be 'carrot'

/* ======================= */
  // Use getters and setters to Control Access to an Object
  function makeClass() {
    "use strict";
    /* Alter code below this line */
   class Thermostat {
     constructor(temperature){
       this._tempature = temperature;
     }
     // getter
     get temperature () {
       return 5/9 * (this._temperature - 32);
     }
     // setter
     set temperature(celsiusTemp) {
       this._tempature = celsiusTemp * 9.0 / 5 + 32;
     }
   }
    /* Alter code above this line */
    return Thermostat;
  }
  const Thermostat = makeClass();
  const thermos = new Thermostat(76); // setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in C
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 in C

/* ======================= */
  // Understand the Differences Between import and require
  import { capitalizeString } from "string_functions"
  "use strict";
  capitalizeString("hello!");

/* ======================= */
  // Use export to Reuse a Code Block
  "use strict";
  export const foo = "bar";
  export const bar = "foo";

/* ======================= */
  // Use * to Import Everything from a File
  "use strict";
  import * as capitalize_strings from "capitalize_strings";

/* ======================= */
  // Create an Export Fallback with export default
  "use strict";
  export default function subtract(x,y) {return x - y;}

/* ======================= */
  // Import a Default Export
  "use strict";
  import subtract from "math_functions";
  subtract(7,4);
