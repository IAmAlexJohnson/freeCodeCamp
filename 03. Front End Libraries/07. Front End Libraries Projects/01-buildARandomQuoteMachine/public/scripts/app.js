'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById('app');

var QuoteMachine = function (_React$Component) {
    _inherits(QuoteMachine, _React$Component);

    function QuoteMachine() {
        _classCallCheck(this, QuoteMachine);

        return _possibleConstructorReturn(this, (QuoteMachine.__proto__ || Object.getPrototypeOf(QuoteMachine)).apply(this, arguments));
    }

    _createClass(QuoteMachine, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(QuoteBox, null)
            );
        }
    }]);

    return QuoteMachine;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Random Quote Machine'
                ),
                React.createElement(
                    'h2',
                    null,
                    'Use space to cycle through quotes, and the numbers 1-5 to cycle through quotes types'
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var QuoteBox = function (_React$Component3) {
    _inherits(QuoteBox, _React$Component3);

    function QuoteBox() {
        _classCallCheck(this, QuoteBox);

        return _possibleConstructorReturn(this, (QuoteBox.__proto__ || Object.getPrototypeOf(QuoteBox)).apply(this, arguments));
    }

    _createClass(QuoteBox, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'quote-box' },
                React.createElement(Quote, null)
            );
        }
    }]);

    return QuoteBox;
}(React.Component);

var Quote = function (_React$Component4) {
    _inherits(Quote, _React$Component4);

    function Quote() {
        _classCallCheck(this, Quote);

        return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).apply(this, arguments));
    }

    _createClass(Quote, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'I am a Quote.'
            );
        }
    }]);

    return Quote;
}(React.Component);

ReactDOM.render(React.createElement(QuoteMachine, null), appRoot);

// console.log("app.js is running!");

// //JSX - JavaScript XML
// const quoteInfo= [
//     {
//         quote : "Quoteee",
//         author : "Author",
//         citation : "Author Info"
//     },
//     {
//         quote : "Quote2",
//         author : "Author2",
//         citation : "Author Info2"
//     },
//     {
//         quote : "Quote3",
//         author : "Author3",
//         citation : "Author Info3"
//     }
// ];


// class Quote {
//     constructor(quote, author = "Unknown", citation) {
//         this.quote = quote;
//         this.author = author;
//         this.citation = citation;
//     }
//     getQuote(){
//         return `<p id='text'>${this.quote}</p>  <p id='author'>${this.author}</p> - <p id='author-info'>${this.citation}</p>`
//     }
// }


// //on load get random number
// let num = Math.floor(Math.random() * quoteInfo.length);;

// const getRandomNumber = () => {
//     num = Math.floor(Math.random() * quoteInfo.length);
//     console.log(`NUM: ${num}`);

//     render();
// }


// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const tweet = e.target.elements.tweet;
//     tweet.innerHTML = `<a target="_blank" href="https://twitter.com/intent/tweet?text=${`${quoteInfo[num].quote} - ${quoteInfo[num].author}, ${quoteInfo[num].citation} @IAmAlex_Johnson`}" id="tweet-quote">Tweet</a>`
// };


// const tweetBtn = document.querySelector('#tweet-quote');
// const appRoot = document.getElementById('app');

// const initialTweet = `https://twitter.com/intent/tweet?text=${`${quoteInfo[num].quote} - ${quoteInfo[num].author}, ${quoteInfo[num].citation} @IAmAlex_Johnson`}`;

// const render = () => {

//     const quoteMachine = (
//         <div id='quote-box'>
//             <p id="text">{quoteInfo[num].quote}</p>
//             <div id='author-container'>
//                 <p id="author">{ quoteInfo[num].author ? quoteInfo[num].author: 'Unknown' }</p>

//                 <p id="author-info">{ quoteInfo[num].citation ? quoteInfo[num].citation : undefined }</p>
//             </div>
//             <form id="btn-container" onSubmit={onFormSubmit}>

//                 <button id="new-quote" onClick={getRandomNumber}>New Quote</button>

//                     <button name="tweet">
//                         <a target="_blank" href={initialTweet} id="tweet-quote">
//                         Tweet
//                         </a>
//                     </button>

//             </form>

//         </div>
//     );

//     ReactDOM.render(quoteMachine, appRoot);
// }
// render();
