// init quote data into array of objects
var quotes = [
  { //obj 1
    quote: "The mind is everything. What you think you become.",
    source: "Gautama Buddha",
    citation: "Life of Buddha",
    tags: ["witty", "inspirational"]
  },
  { //obj 2
    quote: "The best way to predict the future is to create it",
    source: "Abraham Lincoln",
    year: 1864,
    tags: ["motivational", "famous"]
  },
  { //obj 3
    quote: "Float like a butterfly. Sting like a bee.",
    source: "Muhammad Ali",
    year: 1964,
    citation: "Before fight with Sonny Liston",
    tags: ["witty", "humor", "famous"]
  },
  { //obj 4
    quote: "If you're not first, you're last.",
    source: "Ricky Bobby",
    citation: "Talladega 500",
    year: 2006,
    tags: ["humor", "inspirational"]
  },
  { //obj 5
    quote: "Peace comes from within. Do not seek it without.",
    source: "Gautama Buddha",
    tags: ["humor", "inspirational"]
  }
];

// create second array to store quotes already displayed
var usedQuotes = [];

// create a function to randomly select a quote and return it
function getRandomQuote() {

  // randomly select an object from quotes array and splice it
  var quoteIndex = Math.floor( Math.random() * quotes.length);
  var spliceQuote = quotes.splice(quoteIndex, 1)[0];

  // push the spliced object into the empty usedQuotes array
  usedQuotes.push(spliceQuote);

  // check to see if all quotes have been displayed, if yes then reset to original state
  // this step ensures that a quote is not displayed twice before ALL have been displayed
  if (quotes.length == 0) {
    quotes = usedQuotes;
    usedQuotes = [];
  }

  return spliceQuote;
}

// create function to change background color of page
function randomBgColor() {
  var colors = ["red","lightblue","black","lightgray","purple","orange","lightgreen","pink","blue","#36b55c"];
  return colors[Math.floor( Math.random() * colors.length)];
}

// create the printQuote function
function printQuote() {
  var quoteObj = getRandomQuote();

  // build the html string to display the object
  var html = "<p class='quote'> " + quoteObj.quote + "</p>" +
      "<p class='source'> " + quoteObj.source;
  if (quoteObj.citation) {
    html += "<span class='citation'> " + quoteObj.citation + "</span>";
  }
  if (quoteObj.year) {
    html += "<span class='year'> " + quoteObj.year + "</span>";
  }
  html += "</p>";


  // also change background color of page when quote is changed by calling randomBgColor function
  document.body.style.backgroundColor = randomBgColor();

  document.getElementById('quote-box').innerHTML = html;
}

// Refresh quote on page if 30 seconds has passed
setTimeout(printQuote, 30000);

// when user clicks on the button, printQuote is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
