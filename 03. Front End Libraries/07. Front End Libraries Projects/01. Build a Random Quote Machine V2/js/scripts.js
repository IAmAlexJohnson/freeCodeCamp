// alert('working');

const quoteBox = document.getElementById('quote-box');
const newQuote = document.getElementById('new-quote');
const tweet = document.getElementById('tweet');
let num;
const quotes = [
    {
        quote : "I am a quote.",
        author : "Author Name",
        citation : "Home"
    },
    {
        quote : "Another Quote.",
        author : "Another Author",
        citation : "Not Home"
    },
    {
        quote : "Quote.",
        author : " Author",
        citation : "Place"
    }
];

function randomNumber(){
    num = Math.floor(Math.random() * quotes.length);
    // console.log(`NUM: ${num}`);
}



function randomQuote(){
    randomNumber();
    quoteBox.innerHTML=  `<h2 id="quote"> ${quotes[num].quote} </h2>
    <h3 id="quote-author"> ${quotes[num].author} </h3>
    <h4 id="citation"> ${quotes[num].citation} </h4>`;
}

randomQuote();

newQuote.addEventListener("click", function(){
    randomQuote();
});

tweet.innerHTML = `<a target="_blank" href="https://twitter.com/intent/tweet?text=${`${quotes[num].quote} - ${quotes[num].author}, ${quotes[num].citation} @IAmAlex_Johnson`}" id="tweet-quote">Tweet</a>`