"use strict";

console.log("app.js is running!");

//JSX - JavaScript XML
var quoteInfo = {
    quotes: ["Quote", "B", "C", "D"],
    quoteAuthors: ["Author", "b", "c", "d"],
    authorInfo: ["Author Info", 2, 3, 4, 5]
};

function getRandomNumber() {
    var num = Math.round(Math.random() * quoteInfo.quotes.length);
    console.log("NUM: " + num);
    return num;
}

var quoteMachine = React.createElement(
    "div",
    { id: "quote-container" },
    React.createElement(
        "p",
        { id: "quote" },
        quoteInfo.quotes[0]
    ),
    React.createElement(
        "div",
        { id: "author-container" },
        React.createElement(
            "p",
            { id: "quote-author" },
            quoteInfo.quoteAuthors[0] ? quoteInfo.quoteAuthors[0] : 'Unknown'
        ),
        React.createElement(
            "p",
            { id: "author-info" },
            quoteInfo.authorInfo[0] ? quoteInfo.authorInfo[0] : undefined
        )
    ),
    React.createElement(
        "div",
        { id: "btn-container" },
        React.createElement(
            "button",
            { id: "new-quote-btn", onClick: getRandomNumber() },
            "New Quote"
        ),
        React.createElement(
            "button",
            { id: "tweet-quote-btn" },
            "Tweet Quote"
        )
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(quoteMachine, appRoot);

// onClick={getRandomNumber()}
