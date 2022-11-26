let quotes = [];
const quoteText = document.getElementById('quote');
const authorText =  document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const twitterButton = document.getElementById('twitter');
const loader = document.getElementById('loader');
const quoteContainer = document.getElementById('quote-container');

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


async function loading(){
    // using the hidden function to hide the loader, when we don't need to display it
    loader.hidden = false;
    quoteContainer.hidden = true;
    await sleep(500)
}

function complete(){
    quoteContainer.hidden = false;
    loader.hidden = true;
}


// Get Quotes From API

async function displayquotes(quotes){
        await loading();
        quoteText.textContent = quotes.text;
        authorText.textContent = quotes.author;
        complete();

}

async function getQuotes(){
   

    const apiurl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiurl)
        quotes = await response.json();
        const randomNumber = Math.floor(Math.random() * quotes.length);
        displayquotes(quotes[randomNumber])
    } catch(e){
        console.log(e)
    }
   
}

getQuotes()

function tweetQuote(){
    const twitterURl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURl, '_blank');
}



newQuoteButton.addEventListener('click', getQuotes)

twitterButton.addEventListener('click', tweetQuote)