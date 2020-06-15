"use strict";

console.log("app.js is running!");

//JSX - JavaScript XML
var quoteInfo = [{
    quote: "Quote",
    author: "Author",
    citation: "Author Info"
}, {
    quote: "Quote2",
    author: "Author2",
    citation: "Author Info2"
}, {
    quote: "Quote3",
    author: "Author3",
    citation: "Author Info3"
}];

//on load get random number
var num = 0;

var getRandomNumber = function getRandomNumber() {
    num = Math.floor(Math.random() * quoteInfo.length);
    console.log("NUM: " + num);

    renderQuoteMachine();
};

// const getRandomQuote = () => {
//     let quoteNum = getRandomNum(0, quoteType.length - 1);
//     console.log(quoteType[quoteNum].quote);
//     textID.innerHTML = quoteType[quoteNum].quote;
//     authorID.innerHTML = quoteType[quoteNum].author;
//     citationID.innerHTML = quoteType[quoteNum].citation;
//     tweetMe = `${quoteType[quoteNum].quote} - ${quoteType[quoteNum].author}, ${
//      quoteType[quoteNum].citation
//   } @IAmAlex_Johnson`;
// }


var tweet = function tweet() {
    console.log("https://twitter.com/intent/tweet?text=" + (quoteInfo[num].quote + " - " + quoteInfo[num].author + ", " + quoteInfo[num].citation + " @IAmAlex_Johnson"));
    tweetBtn.href = "https://twitter.com/intent/tweet?text=" + (quoteInfo[num].quote + " - " + quoteInfo[num].author + ", " + quoteInfo[num].citation + " @IAmAlex_Johnson");
};

var tweetBtn = document.querySelector('#tweet-quote');
var appRoot = document.getElementById('app');

// onClick={getRandomNumber()}

var renderQuoteMachine = function renderQuoteMachine() {

    var quoteMachine = React.createElement(
        "div",
        { id: "quote-box" },
        React.createElement(
            "p",
            { id: "text" },
            quoteInfo[num].quote
        ),
        React.createElement(
            "div",
            { id: "author-container" },
            React.createElement(
                "p",
                { id: "author" },
                quoteInfo[num].author ? quoteInfo[num].author : 'Unknown'
            ),
            React.createElement(
                "p",
                { id: "author-info" },
                quoteInfo[num].citation ? quoteInfo[num].citation : undefined
            )
        ),
        React.createElement(
            "div",
            { id: "btn-container" },
            React.createElement(
                "button",
                { id: "new-quote", onClick: getRandomNumber },
                "New Quote"
            ),
            React.createElement(
                "a",
                { target: "_blank", href: "https://twitter.com/intent/tweet/?text=", id: "tweet-quote", onClick: tweet },
                "Tweet"
            )
        )
    );

    ReactDOM.render(quoteMachine, appRoot);
};
renderQuoteMachine();
