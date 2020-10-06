"use strict";

const quotes = [
        {quote: " You only live once, but if you do it right, once is enough.", author: "-Mae West"},
        {quote: " We must not allow other people’s limited perceptions to define us.", author: "-Bernard M. Baruch"},
        {quote: " If you cannot do great things, do small things in a great way.", author: "-Shakespeare"},
        {quote: " The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "-Nelson Mandela"},
        {quote: " Service to others is the rent you pay for your room here on earth.", author: "-Mohammed Klay"}
]

const quoteField = document.querySelector(".quotes");

//add h2 and h3 tags
const quoteText = document.createElement("h2");
const authorText = document.createElement("h3");
quoteField.appendChild(quoteText);
quoteField.appendChild(authorText);

//select random quote
let randomQuote = quotes[Math.floor(Math.random() * 5)];
quoteText.textContent = randomQuote.quote;
authorText.textContent = randomQuote.author;


function quotesGenerator(quotesLib){

    //change the current quote
    randomQuote = quotesLib[Math.floor(Math.random() * 5)];

    quoteText.textContent = randomQuote.quote;
    authorText.textContent = randomQuote.author;
}

const button = document.querySelector(".button");

//cliking on the button will execute the quotesGenerator function
button.addEventListener("click", function(){quotesGenerator(quotes)})

