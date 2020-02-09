/* =================== */
  // Use an Array to Store a Collection of Data
    let yourArray = ["Alex", 27, true, "Is awesome!", 6]; // change this line

/* =================== */
  // ccess an Array's Contents Using Bracket Notation
    let myArray = ["a", "b", "c", "d"];
    // change code below this line
    myArray[1] = "Not b";
    //change code above this line
    console.log(myArray);

/* =================== */
  // Add Items to an Array with push() and unshift()
    function mixedNumbers(arr) {
      // change code below this line
        arr.unshift('I', 2, 'three');
        arr.push(7,'VIII', 9);
      // change code above this line
      return arr;
    }

    // do not change code below this line
    console.log(mixedNumbers(['IV', 5, 'six']));

/* =================== */
  // Remove Items from an Array with pop() and shift()
    function popShift(arr) {
      let popped = arr.pop(); // change this line
      let shifted = arr.shift(); // change this line
      return [shifted, popped];
    }

    // do not change code below this line
    console.log(popShift(['challenge', 'is', 'not', 'complete']));

/* =================== */
  // Remove Items Using splice()
    function sumOfTen(arr) {
      // change code below this line
      arr.splice(1,2);
      // change code above this line
      return arr.reduce((a, b) => a + b);
    }

    // do not change code below this line
    console.log(sumOfTen([2, 5, 1, 5, 2, 1]));

/* =================== */
  // Add Items Using splice()
    function htmlColorNames(arr) {
    // change code below this line
      arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond');

    // change code above this line
    return arr;
  }

  // do not change code below this line
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

/* =================== */
  // Copy Array Items Using slice()
    function forecast(arr) {
      // change code below this line
        arr = arr.slice(2,4);
      return arr;
    }

    // do not change code below this line
    console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

/* =================== */
  // Copy an Array with the Spread Operator
    function copyMachine(arr, num) {
      let newArr = [];
      while (num >= 1) {
        // change code below this line
        newArr.push([...arr]);

        // change code above this line
        num--;
      }
      return newArr;
    }

    // change code here to test different cases:
    console.log(copyMachine([true, false, true], 2));

/* =================== */
  // Combine Arrays with the Spread Operator
    function spreadOut() {
      let fragment = ['to', 'code'];
      let sentence = ['learning', ...fragment, 'is', 'fun']; // change this line
      return sentence;
    }

    // do not change code below this line
    console.log(spreadOut());

/* =================== */
  // Check For The Presence of an Element With indexOf()
    function quickCheck(arr, elem) {
      // change code below this line

      if (arr.indexOf(elem) !== -1){
        return true;
      }else {
        return false;
      }
      // change code above this line
    }

    // change code here to test different cases:
    console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

/* =================== */
  // Iterate Through All an Array's Items Using For Loops
    function filteredArray(arr, elem) {
      let newArr = [];
      // change code below this line
        for(let i = 0; i < arr.length; i++){
          for(let j = 0; j < arr[i].length; j++){
            if(arr[i][j] == elem){
              arr[i].splice(0, arr[i].length);
            }
          }
        }

        for(let k = 0; k < arr.length; k++){
          if(arr[k].length > 0){
            newArr.push(arr[k]);
          }
        }


      // change code above this line
      return newArr;
    }

    // change code here to test different cases:
    console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

/* =================== */
  // Create complex multi-dimensional arrays
    let myNestedArray = [
      // change code below this line
        ['loop', 'shift', 6, 7, 1000, 'method'],
        [
          ['concat', false, true, 'spread', 'array', 'deep']
        ],
        [
          [
            ['mutate', 1327.98, 'splice', 'slice', 'push', 'deeper'],
          ]
        ],
        [
          [
            [
              ['deepest']
            ]
          ]
        ]

      // change code above this line
    ];

/* =================== */
  // Add Key-Value Pairs to JavaScript Objects
  let foods = {
      apples: 25,
      oranges: 32,
      plums: 28
    };

    // change code below this line
    foods.bananas = 13;
    foods.grapes =35;
    foods.strawberries = 27;
    // change code above this line

    console.log(foods);

/* =================== */
  // Modify an Object Nested Within an Object
    let userActivity = {
      id: 23894201352,
      date: 'January 1, 2017',
      data: {
        totalUsers: 51,
        online: 42
      }
    };

    // change code below this line
      userActivity.data.online = 45;
    // change code above this line

    console.log(userActivity);

/* =================== */
  //  Access Property Names with Bracket Notation
    let foods = {
      apples: 25,
      oranges: 32,
      plums: 28,
      bananas: 13,
      grapes: 35,
      strawberries: 27
    };
    // do not change code above this line

    function checkInventory(scannedItem) {
      // change code below this line
        return foods[scannedItem];
    }

    // change code below this line to test different cases:
    console.log(checkInventory("apples"));

/* =================== */
  // Use the delete Keyword to Remove Object Properties
    let foods = {
      apples: 25,
      oranges: 32,
      plums: 28,
      bananas: 13,
      grapes: 35,
      strawberries: 27
    };

    // change code below this line
      delete foods.oranges;
      delete foods.plums;
      delete foods.strawberries;
    // change code above this line

    console.log(foods);

/* =================== */
  // Check if an Object has a Property
    let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  // change code below this line
    if(obj.hasOwnProperty('Alan') && obj.hasOwnProperty('Jeff') && obj.hasOwnProperty('Sarah') && obj.hasOwnProperty('Ryan')){
      return true;
    }else{
      return false;
    }
      // change code above this line
    }

    console.log(isEveryoneHere(users));

/* =================== */
  // Iterate Through the Keys of an Object with a for...in Statement
    let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
    let online = 0;

    for (let user in obj) {
      console.log(obj[user]["online"]);
      if(obj[user]["online"] === true){
        online++;
      }
    };
    return online;
    // change code above this line
  }

  console.log(countOnline(users));

/* =================== */
  // Generate an Array of All Object Keys with Object.keys()
    let users = {
      Alan: {
        age: 27,
        online: false
      },
      Jeff: {
        age: 32,
        online: true
      },
      Sarah: {
        age: 48,
        online: false
      },
      Ryan: {
        age: 19,
        online: true
      }
    };

    function getArrayOfUsers(obj) {
      // change code below this line
      return Object.keys(obj);
      // change code above this line
    }

    console.log(getArrayOfUsers(users));

/* =================== */
  // Modify an Array Stored in an Object
    let user = {
    name: 'Kenneth',
    age: 28,
    data: {
      username: 'kennethCodesAllDay',
      joinDate: 'March 26, 2016',
      organization: 'freeCodeCamp',
      friends: [
        'Sam',
        'Kira',
        'Tomo'
      ],
      location: {
        city: 'San Francisco',
        state: 'CA',
        country: 'USA'
      }
    }
  };

  function addFriend(userObj, friend) {
    // change code below this line
    userObj.data.friends.push(friend);
    return userObj.data.friends;
    // change code above this line
  }

  console.log(addFriend(user, 'Pete'));
