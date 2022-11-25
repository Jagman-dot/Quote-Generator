let quotes = [];
const quoteText = document.getElementById('quote');
const authorText =  document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote'); 

// Get Quotes From API

function displayquotes(quotes){

        quoteText.textContent = quotes.text;
        authorText.textContent = quotes.author;

}

async function getQuotes(){
    
    const apiurl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiurl)
        quotes = await response.json();
        const randomNumber = Math.floor(Math.random() * quotes.length);
        displayquotes(quotes[randomNumber])
        // return quotes[randomNumber]
    } catch(e){
        console.log(e)
    }
}

getQuotes()

   



    newQuoteButton.addEventListener('click', getQuotes)





