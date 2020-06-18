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
            var title = 'Random Quote Machine';
            var subtitle = 'Use space to cycle through quotes, and the numbers 1-5 to cycle through quotes types.';
            var quoteInfo = [{
                quote: "Quoteee",
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

            var num = Math.floor(Math.random() * quoteInfo.length);
            var initialTweet = 'https://twitter.com/intent/tweet?text=' + (quoteInfo[num].quote + ' - ' + quoteInfo[num].author + ', ' + quoteInfo[num].citation + ' @IAmAlex_Johnson');

            var getRandomNumber = function getRandomNumber() {
                num = Math.floor(Math.random() * quoteInfo.length);
                console.log('NUM: ' + num);
            };

            var onFormSubmit = function onFormSubmit(e) {
                e.preventDefault();
                var tweet = e.target.elements.tweet;
                tweet.innerHTML = '<a target="_blank" href="https://twitter.com/intent/tweet?text=' + (quoteInfo[num].quote + ' - ' + quoteInfo[num].author + ', ' + quoteInfo[num].citation + ' @IAmAlex_Johnson') + '" id="tweet-quote">Tweet</a>';
            };

            var tweetBtn = document.querySelector('#tweet-quote');
            console.log(num);
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(QuoteBox, { quoteInfo: quoteInfo, num: this.props.num })
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
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subtitle
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
                console.log(this.props.num),
                React.createElement(Quote, { quoteInfo: this.props.quoteInfo, num: this.props.num }),
                React.createElement(AuthorInfo, { quoteInfo: this.props.quoteInfo, num: this.props.num }),
                React.createElement(Buttons, { onFormSubmit: this.props.onFormSubmit })
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
                'p',
                { id: 'text' },
                console.log(this.props.num),
                ' - ',
                this.props.quoteInfo[0].quote
            );
        }
    }]);

    return Quote;
}(React.Component);

var AuthorInfo = function (_React$Component5) {
    _inherits(AuthorInfo, _React$Component5);

    function AuthorInfo() {
        _classCallCheck(this, AuthorInfo);

        return _possibleConstructorReturn(this, (AuthorInfo.__proto__ || Object.getPrototypeOf(AuthorInfo)).apply(this, arguments));
    }

    _createClass(AuthorInfo, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { id: 'author-container' },
                React.createElement(Author, { quoteInfo: this.props.quoteInfo, num: this.props.num }),
                React.createElement(Citation, { quoteInfo: this.props.quoteInfo, num: this.props.num })
            );
        }
    }]);

    return AuthorInfo;
}(React.Component);

var Author = function (_React$Component6) {
    _inherits(Author, _React$Component6);

    function Author() {
        _classCallCheck(this, Author);

        return _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).apply(this, arguments));
    }

    _createClass(Author, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                { id: 'author' },
                this.props.quoteInfo[0].author ? this.props.quoteInfo[0].author : 'Unknown'
            );
        }
    }]);

    return Author;
}(React.Component);

var Citation = function (_React$Component7) {
    _inherits(Citation, _React$Component7);

    function Citation() {
        _classCallCheck(this, Citation);

        return _possibleConstructorReturn(this, (Citation.__proto__ || Object.getPrototypeOf(Citation)).apply(this, arguments));
    }

    _createClass(Citation, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                { id: 'citation' },
                this.props.quoteInfo[0].citation ? this.props.quoteInfo[0].citation : undefined
            );
        }
    }]);

    return Citation;
}(React.Component);

var Buttons = function (_React$Component8) {
    _inherits(Buttons, _React$Component8);

    function Buttons() {
        _classCallCheck(this, Buttons);

        return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
    }

    _createClass(Buttons, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { id: 'btn-container', onSubmit: this.props.onFormSubmit },
                React.createElement(Button, { getRandomNumber: this.props.getRandomNumber }),
                React.createElement(Tweet, { initialTweet: this.props.initialTweet })
            );
        }
    }]);

    return Buttons;
}(React.Component);

var Button = function (_React$Component9) {
    _inherits(Button, _React$Component9);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { id: 'new-quote', onClick: this.props.getRandomNumber },
                'New Quote'
            );
        }
    }]);

    return Button;
}(React.Component);

var Tweet = function (_React$Component10) {
    _inherits(Tweet, _React$Component10);

    function Tweet() {
        _classCallCheck(this, Tweet);

        return _possibleConstructorReturn(this, (Tweet.__proto__ || Object.getPrototypeOf(Tweet)).apply(this, arguments));
    }

    _createClass(Tweet, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                { name: 'tweet' },
                React.createElement(
                    'a',
                    { target: '_blank', href: this.props.initialTweet, id: 'tweet-quote' },
                    'Tweet'
                )
            );
        }
    }]);

    return Tweet;
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
