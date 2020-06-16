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
let num = Math.floor(Math.random() * quoteInfo.length);;

const getRandomNumber = () => {
    num = Math.floor(Math.random() * quoteInfo.length);
    console.log(`NUM: ${num}`);

    render();
}


const onFormSubmit = (e) => {
    e.preventDefault();
    const tweet = e.target.elements.tweet;
    tweet.innerHTML = `<a target="_blank" href="https://twitter.com/intent/tweet?text=${`${quoteInfo[num].quote} - ${quoteInfo[num].author}, ${quoteInfo[num].citation} @IAmAlex_Johnson`}" id="tweet-quote">Tweet</a>`
};


const tweetBtn = document.querySelector('#tweet-quote');
const appRoot = document.getElementById('app');

const initialTweet = `https://twitter.com/intent/tweet?text=${`${quoteInfo[num].quote} - ${quoteInfo[num].author}, ${quoteInfo[num].citation} @IAmAlex_Johnson`}`;

const render = () => {
    
    const quoteMachine = (
        <div id='quote-box'>
            <p id="text">{quoteInfo[num].quote}</p>
            <div id='author-container'>
                <p id="author">{ quoteInfo[num].author ? quoteInfo[num].author: 'Unknown' }</p>
                 
                <p id="author-info">{ quoteInfo[num].citation ? quoteInfo[num].citation : undefined }</p>
            </div>
            <form id="btn-container" onSubmit={onFormSubmit}>

                <button id="new-quote" onClick={getRandomNumber}>New Quote</button>
                
                    <button name="tweet">
                        <a target="_blank" href={initialTweet} id="tweet-quote">
                        Tweet
                        </a>
                    </button>
                  
            </form>
    
        </div>
    );
    
    ReactDOM.render(quoteMachine, appRoot);
}
render();