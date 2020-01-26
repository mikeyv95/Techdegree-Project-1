/*start off the Random Quote project with quotes from The Office using objects within an array*/

var Quotes = [
	{	quote : '"Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way."',
		source : "Michael Scott",
        citation : "Season 5, The Duel",
        year : "2008"
    },

	{	quote : "Why are you the way that you are?",
		source : "Michael Scott",
        citation : "Season 2, Casino Night",
        year : "2006"
    },

   
    {
        quote : "I am Beyoncé, always.",
        source : "Michael Scott", 
        citation : "Season 6, The Chump",
        year : "2009"
    },
     
    { 
        quote : "Did I stutter?", 
        source : "Stanley Hudson", 
        citation : "Season 4, Did I stutter?",
    },

    {
        quote : "Fact: Bears eat beets. Bears. Beets. Battlestar Galactica.", 
        source : "Jim Halpert",
        citation : "Season 3, Product Recall",
        year : "2007"
    } 
  ];

/* the getRandomQuote function will pull a random quote from the array above*/

function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomQuote];
}

/* the printQuote function will print the above selected random quote*/

function printQuote() {
    var result = getRandomQuote();
    var message = ' ';
    message  = '<p class = "quote">' + result.quote + '</p>';
    message += '<p class = "source">' + result.source + '</p>';
    
    if (result.citation) {
        message += '<p class="citation">' + result.citation + '</p>';
      }

    if (result.year) {
        message += '<p class="year">' + result.year + '</p>';
      }
    document.getElementById('quote-box').innerHTML = message;
}


document.getElementById('load-quote').addEventListener("click", printQuote, false);
printQuote();