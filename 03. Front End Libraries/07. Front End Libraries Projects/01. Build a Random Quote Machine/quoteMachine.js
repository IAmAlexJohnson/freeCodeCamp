const gameQuotes = [
    {
      quote: "Do a barrel roll!",
      author: "Peppy Hare",
      citation : "StarFox"
    },
    {
      quote: "You must construct additional pylons!",
      author: "Protoss Narrator",
      citation : "StarCraft"
    },
    {
      quote: "Great, we have a dog now and Alistair is still the dumbest one in the party.",
      author: "Morrigan",
      citation : "Dragon Age Origins"
    },
    {
      quote: "Remember to tell your grandkids to put a rocket launcher in your coffin. If you go to Hell when you die, you’ll need it for some final cleaning-up...",
      author: "Ending Credits",
      citation : "Final Doom"
    },
    {
      quote: "A famous explorer once said, that the extraordinary is in what we do, not who we are",
      author: "Lara Croft",
      citation : "Tomb Raider"
    },
    {
      quote: "Because that's how games work. Winners get prizes and losers bleed a lot and then get eaten by worms.",
      author: "Chesty",
      citation : "Fable 2"
    },
    {
      quote: "Don’t make a girl a promise if you know you can’t keep it.",
      author: "Cortana",
      citation : "Halo 3"
    },
    {
      quote: "Nobody is perfect... That is of course until you fall in love with them...",
      author: "Cloud Strife",
      citation : "Final Fantasy VII"
     },
    {
      quote: "War is when the young and stupid are tricked by the old and bitter into killing each other.",
      author: "Niko Bellic",
      citation : "Grand Theft Auto IV"
    },
    {
      quote: "Time passes, people move. Like a river's flow, it never ends. A childish mind will turn to noble ambition",
      author: "Sheik",
      citation: "The Legend of Zelda Ocarina of Time"
    },
    {
      quote: "One should always play fairly when one has the winning cards",
      author: "HK-47",
      citation: "Star Wars Knights of the old Republic"
    },
    {
      quote: "Drinking alone's as bad as shitting in company.",
      author: "Zoltan Chivay",
      citation: "The Witcher 2 Assassins of Kings"
     },
    {
      quote: "Right and wrong are not what separate us and our enemies. It's our different standpoints, our perspectives that separate us. Both sides blame one another. There's no good or bad side. Just two sides holding different views.",
      author: "Squall Leonhart",
      citation : "Final Fantasy VIII"
    },
    {
      quote: "FINISH HIM!",
      author: "Narrator",
      citation : "Mortal Combat"
    },
    {
      quote: "War. War never changes.",
      author: "Narrator",
      citation: "Fallout Series"
    },
    {
      quote: "The cake is a lie.",
      author: "Sten",
      citation : "Dragon Age Origins"
    },
    {
      quote: "We impose order on the chaos of organic evolution. You exist beacause we allow it, and you will end because we demand it.",
      author: "Sovereign",
      citation: "Mass Effect"
    },
    {
      quote: "There are no choices. Nothing But a straight line",
      author: "Max Payne",
      citation : "Max Payne 2"
    },
    {
      quote: "There's no use crying over every mistake, you just keep on trying until you run out of cake.",
      author: "Glados",
      citation : "Portal"
    },
    {
      quote: "You're more important than my sword. ..But just by a little.",
      author: "Angeal",
      citation : "Final Fantasy VII Crisis Core"
     },
    {
      quote: "Only a jackass can change the world.",
      author: "Auron",
      citation : "Final Fantasy X-2"
     },
    {
      quote: "All your base are belong to us.",
      author: "Cats",
      citation : "Zero Wing"
    },
    {
      quote: "I walked into my sister's room and tripped on a bra. It was a booby-trap.",
      author: "Ellie",
      citation : "The Last Of Us"
    },
    { quote: "GET OVER HERE!",
      author: "Scorpion",
      citation : "Mortal Kombat"
    },
    { quote: "We stand upon the precipice of change. The world fears the inevitable plummet into the abyss. Watch for that moment...and when it comes, do not hesitate to leap. It is only when you fall that you learn whether you can fly.",
      author: "Flemeth",
      citation : "Dragon Age II"
    },
    {
      quote: "Although my heart may be weak, it's not alone. It's grown with each new experience. And it's found a home with all the friends I've made. I've become a part of their heart, just as they've become a part of mine. And if they think of me now and then, if they don't forget me, then our hearts will be one. I don't need a weapon. My friends are my power!",
      author: "Sora",
      citation : "Kingdom Hearts"
     },
    {
      quote: "Too many people have opinions on things they know nothing about. And the more ignorant they are, the more opinions they have.",
      author: "Thomas Hildern" ,
      citation : "Fallout New Vegas"
    }
  ];
const tvQuotes = [
  {
    quote: "When you play the game of thrones, you win or you die",
    author: "Cersei Lannister",
    citation: "Game of Thrones",
  },
  {
    quote: "The hardest thing in this world is to live in it. Be brave. Live.",
    author: "Buffy Summers",
    citation: "Buffy The Vampire Slayer",
  },
  {
    quote:
      "You can quit if you want, but remember: quitting's a very hard habit to break.",
    author: "Jonathan Kent",
    citation: "Smallville",
  },
  {
    quote: "Anger makes you stupid. Stupid gets you killed.",
    author: "Michonne",
    citation: "The Walking Dead",
  },
  {
    quote:
      "I painted a tunnel on the side of the library. When it dries, I'm going for it.",
    author: "Abed Nadir",
    citation: "Community",
  },
  {
    quote: "If, For Any Reason You're Not Satisfied, I Hate You.",
    author: "Sales Clerk",
    citation: "Futurama",
  },
  {
    quote: "Oh my God, they killed Kenny!",
    author: "Stan Marsh",
    citation: "South Park",
  },
  {
    quote: "We were on a break!",
    author: "Ross Geller",
    citation: "Friends",
  },
  {
    quote:
      "I ain't no bungee expert or nothin', but I don't think he's supposed to be slamming into the ground like that.",
    author: "Will Smith",
    citation: "Fresh Prince of Bel-Air",
  },
  {
    quote: "Hi-di-ho, neighbor!",
    author: "Wilson W. Wilson",
    citation: "Home Improvement",
  },
  {
    quote:
      "Here’s a bunch of number that may look random, but they’re my phone number.",
    author: "Tina Belcher",
    citation: "Bob's Burgers",
  },
  {
    quote: "You’re not my supervisor!",
    author: "Cheryl Tunt",
    citation: "Archer",
  }
];
const motivationalQuotes = [
  {
    quote: "Only I can change my life. No one can do it for me.",
    author: "Carol Burnett",
    citation : "American Actress"
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
    citation : "American Clergyman"
  },
  {
    quote: "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
    author: "Bradley Whitford",
    citation : "American Actor"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
    citation : "South African Statesman"
  },
  {
    quote: "The past cannot be changed. The future is yet in your power.",
    author: "UNKNOWN",
    citation : "UNKNOWN"
  },
  {
    quote: "Change your life today. Don't gamble on the future, act now without delay.",
    author: "Simone de Beauvoir",
    citation : "French Writer"
  },
  {
    quote: "Failure will never overtake me if my determination to succeed is strong enough.",
    author: "Og Mandino",
    citation : "American Author"
  },
  {
    quote: "With the new day comes new strength and new thoughts.",
    author: "Eleanor Roosevelt",
    citation : "American First Lady"
  },
  {
    quote: "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    author: "Hellen Keller",
    citation : "American Author"
  },
  {
    quote: "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    author: "St. Jerome",
    citation : "Saint"
  },
  {
    quote: "If opportunity doesn't knock, build a door.",
    author: "Milton Berle",
    citation : "American Comedian"
  },
  {
    quote: "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
    citation : "Greek Philosopher"
  },
  {
    quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    author: "Jimmy Dean",
    citation : "American Actor"
  }
];
const funnyQuotes = [
  {
    quote: "Behind every great man is a woman rolling her eyes.",
    author: "Jim Carrey",
    citation : " American Actor"
  },
  {
    quote: "A day without sunshine is like, you know, night.",
    author: "Steve Martin",
    citation : "American Comedian"
  },
  {
    quote: "A day without sunshine is like, you know, night.",
    author: "Winston Churchill",
    citation : "British Statesman"
  },
  {
    quote: "There are only three things women need in life: food, water, and compliments.",
    author: "Chris Rock",
    citation : "American Comedian"
  },
  {
    quote: "No man has a good enough memory to be a successful liar.",
    author: "Abraham Lincoln",
    citation : "American President"
  },
  {
    quote: "No man has a good enough memory to be a successful liar.",
    author: "George Burns",
    citation : "American Comedian"
  },
  {
    quote: "I did not attend his funeral, but I sent a nice letter saying I approved of it.",
    author: "Mark Twain",
    citation : "American Writer"
  },
  {
    quote: "Accept who you are. Unless you’re a serial killer.",
    author: "Ellen DeGeneres",
    citation : "American Comedian"
  },
  {
    quote: "It’s okay if you don’t like me. Not everyone has good taste.",
    author: "UNKNOWN",
    citation : "UNKNOWN"
  },
  {
    quote: "I intend to live forever. So far, so good.",
    author: "Steven Wright",
    citation : "American Comedian"
  },
  {
    quote: "I like rice. Rice is great when you’re hungry and you want 2000 of something.",
    author: "Mitch Hedberg",
    citation : "American Comedian"
  },
  {
    quote: "The best way to teach your kids about taxes is by eating 30 percent of their ice cream.",
    author: "Bill Murray",
    citation : "American Actor"
  }


];
// [{
//   quote: " ",
//   author: " ",
//   citation : " "
// },]
const textID = document.querySelector("#text");
const authorID = document.querySelector("#author");
const citationID = document.querySelector("#citation");

const newQuoteBtn = document.querySelector("#new-quote");
const tweetBtn = document.querySelector("#tweet-quote");

const gameQuoteBtn = document.querySelector("#game-quotes");
const tvQuoteBtn = document.querySelector("#tv-quotes");
const motivationalQuoteBtn = document.querySelector("#motivational-quotes");
const funnyQuoteBtn = document.querySelector("#funny-quotes");
const randomQuoteBtn = document.querySelector("#random-quotes");


let isGameQuotes = true;
let isTvQuotes = false;
let isMotivationalQuotes = false;
let isFunnyQuotes = false;
let isRandomQuotes = false;

let tweetMe;

gameQuoteBtn.addEventListener("click", function(){
  showActiveBtn(gameQuoteBtn);
  chooseQuoteType(gameQuoteBtn);
  getRandomQuote(gameQuotes);
  isRandomQuotes = false;
  // console.log(`GAME QUOTES: ${isGameQuotes}
  //   TV QUOTES: ${isTvQuotes}
  //   MOTIVATIONAL QUOTES: ${isMotivationalQuotes}
  //             FUNNY QUOTES: ${isFunnyQuotes}`);
});
tvQuoteBtn.addEventListener("click", function(){
  showActiveBtn(tvQuoteBtn);
  chooseQuoteType(tvQuoteBtn);
  getRandomQuote(tvQuotes);
  isRandomQuotes = false;
  // console.log(`GAME QUOTES: ${isGameQuotes}
  //   TV QUOTES: ${isTvQuotes}
  //   MOTIVATIONAL QUOTES: ${isMotivationalQuotes}
  //   FUNNY QUOTES: ${isFunnyQuotes}`);
});
motivationalQuoteBtn.addEventListener("click", function(){
  showActiveBtn(motivationalQuoteBtn);
  chooseQuoteType(motivationalQuoteBtn);
  getRandomQuote(motivationalQuotes);
  isRandomQuotes = false;
  // console.log(`GAME QUOTES: ${isGameQuotes}
  //   TV QUOTES: ${isTvQuotes}
  //   MOTIVATIONAL QUOTES: ${isMotivationalQuotes}
  //   FUNNY QUOTES: ${isFunnyQuotes}`);
});
funnyQuoteBtn.addEventListener("click", function(){
  showActiveBtn(funnyQuoteBtn);
  chooseQuoteType(funnyQuoteBtn);
  getRandomQuote(funnyQuotes);
  isRandomQuotes = false;
  // console.log(`GAME QUOTES: ${isGameQuotes}
  //   TV QUOTES: ${isTvQuotes}
  //   MOTIVATIONAL QUOTES: ${isMotivationalQuotes}
  //   FUNNY QUOTES: ${isFunnyQuotes}`);
});
randomQuoteBtn.addEventListener("click", function(){
  showActiveBtn(randomQuoteBtn);
  chooseQuoteType(randomQuoteBtn);
  activeBtnType();
  // console.log(`GAME QUOTES: ${isGameQuotes}
  //   TV QUOTES: ${isTvQuotes}
  //   MOTIVATIONAL QUOTES: ${isMotivationalQuotes}
  //   FUNNY QUOTES: ${isFunnyQuotes}`);
});

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseQuoteType(btn) {
  if (btn == gameQuoteBtn) {
    isGameQuotes = true;
    isTvQuotes = false;
    isMotivationalQuotes = false;
    isFunnyQuotes = false;
  } else if (btn == tvQuoteBtn) {
    isGameQuotes = false;
    isTvQuotes = true;
    isMotivationalQuotes = false;
    isFunnyQuotes = false;
  } else if (btn == motivationalQuoteBtn) {
    isGameQuotes = false;
    isTvQuotes = false;
    isMotivationalQuotes = true;
    isFunnyQuotes = false;
  } else if (btn == funnyQuoteBtn) {
    isGameQuotes = false;
    isTvQuotes = false;
    isMotivationalQuotes = false;
    isFunnyQuotes = true;
  } else if (btn == randomQuoteBtn) {
    if(getRandomNum(1,4) == 1){
      isGameQuotes = true;
      isTvQuotes = false;
      isMotivationalQuotes = false;
      isFunnyQuotes = false;
      isRandomQuotes = true;
    } else if(getRandomNum(1,4) == 2) {
      isGameQuotes = false;
      isTvQuotes = true;
      isMotivationalQuotes = false;
      isFunnyQuotes = false;
      isRandomQuotes = true;
    } else if(getRandomNum(1,4) == 3) {
      isGameQuotes = false;
      isTvQuotes = false;
      isMotivationalQuotes = true;
      isFunnyQuotes = false;
      isRandomQuotes = true;
    } else if(getRandomNum(1,4) == 4) {
      isGameQuotes = false;
      isTvQuotes = false;
      isMotivationalQuotes = false;
      isFunnyQuotes = true;
      isRandomQuotes = true;
    }
  }
}

function getRandomQuote (quoteType) {
  let quoteNum = getRandomNum(0, (quoteType.length-1));
  //console.log(quoteType[quoteNum].quote);
  textID.innerHTML = quoteType[quoteNum].quote;
  authorID.innerHTML = quoteType[quoteNum].author;
  citationID.innerHTML = quoteType[quoteNum].citation;
  tweetMe = `${quoteType[quoteNum].quote} - ${quoteType[quoteNum].author}, ${quoteType[quoteNum].citation} @AlxCrmr`;
}

function activeBtnType(){
  if(isGameQuotes == true && isTvQuotes == false && isMotivationalQuotes == false && isFunnyQuotes == false && isRandomQuotes == false){
    getRandomQuote(gameQuotes);
  } else if (isGameQuotes == false && isTvQuotes == true && isMotivationalQuotes == false && isFunnyQuotes == false && isRandomQuotes == false){
    getRandomQuote(tvQuotes);
  } else if (isGameQuotes == false && isTvQuotes == false && isMotivationalQuotes == true && isFunnyQuotes == false && isRandomQuotes == false){
    getRandomQuote(motivationalQuotes);
  } else if (isGameQuotes == false && isTvQuotes == false && isMotivationalQuotes == false && isFunnyQuotes == true && isRandomQuotes == false){
    getRandomQuote(funnyQuotes);
  }else if (isGameQuotes == true && isTvQuotes == false && isMotivationalQuotes == false && isFunnyQuotes == false && isRandomQuotes == true){
    getRandomQuote(gameQuotes);
    chooseQuoteType(randomQuoteBtn);
  } else if (isGameQuotes == false && isTvQuotes == true && isMotivationalQuotes == false && isFunnyQuotes == false && isRandomQuotes == true){
    getRandomQuote(tvQuotes);
    chooseQuoteType(randomQuoteBtn);
  }else if (isGameQuotes == false && isTvQuotes == false && isMotivationalQuotes == true && isFunnyQuotes == false && isRandomQuotes == true){
    getRandomQuote(motivationalQuotes);
    chooseQuoteType(randomQuoteBtn);
  }else if (isGameQuotes == false && isTvQuotes == false && isMotivationalQuotes == false && isFunnyQuotes == true && isRandomQuotes == true){
    getRandomQuote(funnyQuotes);
    chooseQuoteType(randomQuoteBtn);
  }
}

function showActiveBtn(btn){
  if(btn == gameQuoteBtn){
    gameQuoteBtn.classList.add("active-btn");

    tvQuoteBtn.classList.remove("active-btn");
    motivationalQuoteBtn.classList.remove("active-btn");
    funnyQuoteBtn.classList.remove("active-btn");
    randomQuoteBtn.classList.remove("active-btn");
  } else if(btn == tvQuoteBtn){
    tvQuoteBtn.classList.add("active-btn");

    gameQuoteBtn.classList.remove("active-btn");
    motivationalQuoteBtn.classList.remove("active-btn");
    funnyQuoteBtn.classList.remove("active-btn");
    randomQuoteBtn.classList.remove("active-btn");
  } else if(btn == motivationalQuoteBtn){
    motivationalQuoteBtn.classList.add("active-btn");

    gameQuoteBtn.classList.remove("active-btn");
    tvQuoteBtn.classList.remove("active-btn");
    funnyQuoteBtn.classList.remove("active-btn");
    randomQuoteBtn.classList.remove("active-btn");
  } else if(btn == funnyQuoteBtn){
    funnyQuoteBtn.classList.add("active-btn");

    gameQuoteBtn.classList.remove("active-btn");
    tvQuoteBtn.classList.remove("active-btn");
    motivationalQuoteBtn.classList.remove("active-btn");
    randomQuoteBtn.classList.remove("active-btn");
  } else if(btn == randomQuoteBtn){
    randomQuoteBtn.classList.add("active-btn");

    gameQuoteBtn.classList.remove("active-btn");
    tvQuoteBtn.classList.remove("active-btn");
    motivationalQuoteBtn.classList.remove("active-btn");
    funnyQuoteBtn.classList.remove("active-btn");
  }
}

newQuoteBtn.addEventListener("click",
  function(){
    activeBtnType();
  });

tweetBtn.addEventListener("click",
  function(){
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${tweetMe}`;
    // window.open(`https://twitter.com/intent/tweet?text=${tweetMe}`);
  });

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        activeBtnType();
    } else if(e.keyCode == 49 || e.keyCode == 97){
        showActiveBtn(gameQuoteBtn);
        chooseQuoteType(gameQuoteBtn);
        getRandomQuote(gameQuotes);
        isRandomQuotes = false;
    } else if(e.keyCode == 50 || e.keyCode == 98){
        showActiveBtn(tvQuoteBtn);
        chooseQuoteType(tvQuoteBtn);
        getRandomQuote(tvQuotes);
        isRandomQuotes = false;
    } else if(e.keyCode == 51 || e.keyCode == 99){
        showActiveBtn(motivationalQuoteBtn);
        chooseQuoteType(motivationalQuoteBtn);
        getRandomQuote(motivationalQuotes);
        isRandomQuotes = false;
    } else if(e.keyCode == 52 || e.keyCode == 100){
        showActiveBtn(funnyQuoteBtn);
        chooseQuoteType(funnyQuoteBtn);
        getRandomQuote(funnyQuotes);
        isRandomQuotes = false;
    } else if(e.keyCode == 53 || e.keyCode == 101){
        showActiveBtn(randomQuoteBtn);
        chooseQuoteType(randomQuoteBtn);
        activeBtnType();
    }
}

chooseQuoteType(randomQuoteBtn);
activeBtnType();
