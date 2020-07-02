const appRoot = document.getElementById('app');

class QuoteMachine extends React.Component {
    render(){
        const title = 'Random Quote Machine';
        const subtitle = 'Use space to cycle through quotes, and the numbers 1-5 to cycle through quotes types.';
        const quoteInfo = [
                {
                    quote : "Quoteee",
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

        let num = Math.floor(Math.random() * quoteInfo.length);
        const initialTweet = `https://twitter.com/intent/tweet?text=${`${quoteInfo[num].quote} - ${quoteInfo[num].author}, ${quoteInfo[num].citation} @IAmAlex_Johnson`}`;


        const getRandomNumber = () => {
            num = Math.floor(Math.random() * quoteInfo.length);
            console.log(`NUM: ${num}`);
        }


        const onFormSubmit = (e) => {
            e.preventDefault();
            const tweet = e.target.elements.tweet;
            tweet.innerHTML = `<a target="_blank" href="https://twitter.com/intent/tweet?text=${`${quoteInfo[num].quote} - ${quoteInfo[num].author}, ${quoteInfo[num].citation} @IAmAlex_Johnson`}" id="tweet-quote">Tweet</a>`
        };


        const tweetBtn = document.querySelector('#tweet-quote');
        console.log(num);
        return  (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <QuoteBox quoteInfo={quoteInfo} num={this.props.num} />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class QuoteBox extends React.Component {
    render() {
        return (
            <div id='quote-box'>
            {console.log(this.props.num)}
                <Quote quoteInfo={this.props.quoteInfo} num={this.props.num} />
                <AuthorInfo quoteInfo={this.props.quoteInfo} num={this.props.num} />
                <Buttons onFormSubmit={this.props.onFormSubmit} />
            </div>
        );
    }
}

class Quote extends React.Component {
    render(){
        return(
            <p id="text">{console.log(this.props.num)} - {this.props.quoteInfo[0].quote}</p>   
        );
    }
}
class AuthorInfo extends React.Component {
    render(){
        return(
            <div id='author-container'>
                <Author quoteInfo={this.props.quoteInfo} num={this.props.num} />
                <Citation quoteInfo={this.props.quoteInfo} num={this.props.num} />
            </div>
        );
    }
}

class Author extends React.Component {
    render(){
        return(
            <p id="author">{ this.props.quoteInfo[0].author ? this.props.quoteInfo[0].author: 'Unknown' }</p>
        );
    }
}

class Citation extends React.Component {
    render(){
        return(
            <p id="citation">{ this.props.quoteInfo[0].citation ? this.props.quoteInfo[0].citation : undefined }</p>
        );
    }
}

class Buttons extends React.Component {
    render(){
        return(
            <form id="btn-container" onSubmit={this.props.onFormSubmit}>
                 <Button getRandomNumber={this.props.getRandomNumber} /> 
                 <Tweet initialTweet={this.props.initialTweet} />
            </form>
        );
    }
}
class Button extends React.Component {
    render(){
        return(
            <button id="new-quote" onClick={this.props.getRandomNumber}>New Quote</button>
        );
    }
}

class Tweet extends React.Component {
    render(){
        return(
            <button name="tweet">
                <a target="_blank" href={this.props.initialTweet} id="tweet-quote">Tweet</a>
            </button>
        );
    }
}

ReactDOM.render(<QuoteMachine/>, appRoot);
                    


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