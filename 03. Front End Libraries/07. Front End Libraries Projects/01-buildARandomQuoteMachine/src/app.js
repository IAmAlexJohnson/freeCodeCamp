console.log("app.js is running!");

//JSX - JavaScript XML
const quoteInfo= [
    {
        quote : "Quote",
        author : "Author",
        citation : "Author Info"
    },
    {
        quote : "Quote2",
        author : "Author2",
        citation : "Author Info2"
    },
    {
        quote : "Quote3",
        author : "Author3",
        citation : "Author Info3"
    }
];





//on load get random number
let num = 0;

const getRandomNumber = () => {
    num = Math.floor(Math.random() * quoteInfo.length);
    console.log(`NUM: ${num}`);

    renderQuoteMachine();
}

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


const tweet = () => {
    console.log(`https://twitter.com/intent/tweet?text=${`${quoteInfo[num].quote} - ${quoteInfo[num].author}, ${quoteInfo[num].citation} @IAmAlex_Johnson`}`);
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${`${quoteInfo[num].quote} - ${quoteInfo[num].author}, ${quoteInfo[num].citation} @IAmAlex_Johnson`}`;
}

const tweetBtn = document.querySelector('#tweet-quote');
const appRoot = document.getElementById('app');


// onClick={getRandomNumber()}

const renderQuoteMachine = () => {
    
    const quoteMachine = (
        <div id='quote-box'>
            <p id="text">{quoteInfo[num].quote}</p>
            <div id='author-container'>
                <p id="author">{ quoteInfo[num].author ? quoteInfo[num].author: 'Unknown' }</p>
                 
                <p id="author-info">{ quoteInfo[num].citation ? quoteInfo[num].citation : undefined }</p>
            </div>
            <div id="btn-container">
                <button id="new-quote" onClick={getRandomNumber}>New Quote</button>
                <a target="_blank" href="https://twitter.com/intent/tweet/?text=" id="tweet-quote" onClick={tweet}>Tweet
                </a>
                
            </div>
    
        </div>
    );
    
    ReactDOM.render(quoteMachine, appRoot);
}
renderQuoteMachine();