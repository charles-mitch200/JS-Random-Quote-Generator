const quote = document.getElementById("js-quote");
const author = document.getElementById("js-author");
const buttonElem = document.querySelector(".js-new-quote");
const tweetBtn = document.querySelector(".js-tweet-btn");

// Get quote from the API
const getQuote = async () => {
  const apiURL = "https://api.quotable.io/random";
  const response = await fetch(apiURL);
  const data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
};

buttonElem.addEventListener("click", getQuote);

// Tweet the quote after generating it
const tweet = () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      "---- by" +
      author.innerHTML,
    "Tweet Window",
    "width=600, height=300"
  );
};

tweetBtn.addEventListener("click", tweet);
