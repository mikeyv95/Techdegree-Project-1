/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*start off the Random Quote project with quotes from The Office using objects within an array*/

var officeQuotes = [
	{	quote : '"Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way."',
		source : "Michael Scott",
        episode : "Season 5, The Duel",
        year : "2008"
    },

	{	quote : "Yes",
		source : "Michael Scott",
        episode : "Season 5, Stress Relief: Part 1",
        year : "2008"
    },

   
    {
        quote : "I am Beyoncé, always.",
        source : "Michael Scott", 
        episode : "Season 6, The Chump",
        year : "2009"
    },
     
    { 
        quote : "Did I stutter?", 
        source : "Stanley Hudson", 
        episode : "Season 4, Did I stutter?",
        year : "2007"
    },

    {
        quote : "Fact: Bears eat beets. Bears. Beets. Battlestar Galactica.", 
        source : "Jim Halpert",
        episode : "Season 3, Product Recall",
        year : "2007"
    } 
  ];

/* the getRandomQuote function will pull a random quote from the array above*/

function getRandomQuote() {
    var randomQuote = Math.floor(Math.random() * officeQuotes.length);
    return officeQuotes[randomQuote];
    document.getElementById('quote-box').innerHTML = officeQuotes[randomQuote];
}

/* the printQuote function will print the above selected random quote*/

function printQuote() {
    var result = getRandomQuote();
    var message = ' ';
    message  = '<p class = "quote">' + officeQuotes.quote + '</p>';
    message += '<p class = "source">' + officeQuotes.source + '</p>';
    
    if (officeQuotes.citation) {
        message += '<p class="citation">' + officeQuotes.citation + '</p>';
      }

    if (officeQuotes.year) {
        message += '<p class="year">' + officeQuotes.year + '</p>';
      }
}



document.getElementById('load-quote').addEventListener("click", printQuote, false);
printQuote();