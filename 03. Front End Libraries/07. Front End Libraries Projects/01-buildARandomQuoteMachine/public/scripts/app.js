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
var num = Math.floor(Math.random() * quoteInfo.length);;

var getRandomNumber = function getRandomNumber() {
    num = Math.floor(Math.random() * quoteInfo.length);
    console.log("NUM: " + num);

    render();
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var tweet = e.target.elements.tweet;
    tweet.innerHTML = "<a target=\"_blank\" href=\"https://twitter.com/intent/tweet?text=" + (quoteInfo[num].quote + " - " + quoteInfo[num].author + ", " + quoteInfo[num].citation + " @IAmAlex_Johnson") + "\" id=\"tweet-quote\">Tweet</a>";
};

var tweetBtn = document.querySelector('#tweet-quote');
var appRoot = document.getElementById('app');

var initialTweet = "https://twitter.com/intent/tweet?text=" + (quoteInfo[num].quote + " - " + quoteInfo[num].author + ", " + quoteInfo[num].citation + " @IAmAlex_Johnson");

var render = function render() {

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
            "form",
            { id: "btn-container", onSubmit: onFormSubmit },
            React.createElement(
                "button",
                { id: "new-quote", onClick: getRandomNumber },
                "New Quote"
            ),
            React.createElement(
                "button",
                { name: "tweet" },
                React.createElement(
                    "a",
                    { target: "_blank", href: initialTweet, id: "tweet-quote" },
                    "Tweet"
                )
            )
        )
    );

    ReactDOM.render(quoteMachine, appRoot);
};
render();
