console.log("app.js is running!");

//JSX - JavaScript XML
let quoteInfo= {
    quotes : ["Quote","B","C","D"],
    quoteAuthors : ["Author","b","c","d"],
    authorInfo : ["Author Info",2,3,4,5]
};

function getRandomNumber(){
    let num = Math.round(Math.random() * quoteInfo.quotes.length);
    console.log(`NUM: ${num}`);
    return num;
}


let quoteMachine = (
    <div id='quote-container'>
        <p id="quote">{quoteInfo.quotes[0]}</p>
        <div id='author-container'>
            <p id="quote-author">{ quoteInfo.quoteAuthors[0] ? quoteInfo.quoteAuthors[0] : 'Unknown' }</p>
             
            <p id="author-info">{ quoteInfo.authorInfo[0] ? quoteInfo.authorInfo[0] : undefined }</p>
        </div>
        <div id="btn-container">
            <button id="new-quote-btn" onClick={getRandomNumber()}>New Quote</button>
            <button id="tweet-quote-btn">Tweet Quote</button>
        </div>

    </div>
);


let appRoot = document.getElementById('app');

ReactDOM.render(quoteMachine, appRoot);

// onClick={getRandomNumber()}