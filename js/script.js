/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Programmer : Ted Gadie
******************************************/

/***
 * `quotes` array
 * Fill up the quotes array with African's quotes and their sources.
 ***/
let quotes = [
  {
    quote: "Where there are experts there will be no lack of learners.",
    source: "Swahili Proverb",
    tag: " Education"
  },
  {
    quote: "You learn how to cut down trees by cutting them down.",
    source: "Bateke proverb"
  },
  {
    quote:
      "Your current situation doesn't determine your destination... you do!",
    source: "Coach jae",
    citation: " iamlifeskills",
    year: " 2000",
    tag: " life"
  },
  {
    quote: "To get lost is to learn the way.",
    source: "African proverb",
    tag: " humor"
  },
  {
    quote: "By crawling a child learns to stand.",
    source: "African proverb"
  }
];

let colors = ["black", "yellow", "green", "red", "purple", "blue", "pink"];
let ID;

/***
                                   * what the getRandomQuote() function does ?
                                        The function getRandomQuote() iterate through the quotes array 
                                        and return a quote in the console.The rand variable is created 
                                        to save random number generated between 0 and the quote's array
                                        length. Since rand just hold a number, lets plug it in between
                                        the bracket of the array (quotes[]) and retrun that value.
                                  ***/

function getRandomQuote() {
  let rand = Math.floor(Math.random() * quotes.length);
  return quotes[rand];
}

/***                                    
                                        what the getRandomColors() function does ?
                                         i created this function in the same format as the
                                         getRandomQuote() function. This function will
                                         randomly select a color from the 'colors' array
                                         created above.
                                   ***/

function getRandomColors() {
  let rand = Math.floor(Math.random() * colors.length);
  return colors[rand];
}

/***
                                   * what the printQuote() function does ? 
                                        First i created a variable 'obj' in which i am saving the function 
                                        getRandomQuote(), this variable will later be used in the function to 
                                        reach every property containing the actual quotes that need to be displayed.
                                        the printQuote function hold the 'print' variable that will be 
                                        used to print all Quotes on the screen. The printQuote function 
                                        also text for the presence of certain properties: citation and year
                                        before printing their value. 

                                        the 'Color' variable hold the getRandomColors() function 
                                        which is being assign to the targeted body of the HTML in order 
                                        to change the background color.    
                                  ***/

function printQuote() {
  let obj = getRandomQuote();
  let Color = getRandomColors();
  let print = "";

  print += '<p class="quote">' + obj.quote + "</p>";

  print += '<p class="source">' + obj.source;

  if (obj.citation) {
    print += '<span class="citation">' + obj.citation + "</span>";
  }

  if (obj.year) {
    print += '<span class="year">' + obj.year + "</span>";
  }

  if (obj.tag) {
    print += '<span class="tag">' + obj.tag + "</span>";
  }

  ("</p>");
  print += '<p class="source">' + obj.tag + "</p>";
  document.getElementById("quote-box").innerHTML = print;
  document.getElementById("body").style.backgroundColor = Color;

  TimeClear();
  startTimer();
}
/***
 *                                   what the startTimer() function does ? 
                                        In the startTimer function I use the setInterval() 
                                          function to change the backgroundColor and the quotes
                                          printed to the page every 20 seconds. so setInterval is 
                                          saved in a variable ID which is cleared in the TimeClear 
                                          function.The TimeClear function execute the clearInterval 
                                          funtion by setting the ID  variable to zero everytime 
                                          it is called. 
                                      ***/
function startTimer() {
  ID = setInterval(printQuote, 20000);
}
// explain the function in comment
function TimeClear() {
  clearInterval(ID);
}

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
