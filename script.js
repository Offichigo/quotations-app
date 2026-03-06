const form = document.getElementById("submit");
const citation = document.querySelector("#citation");
const namemovie = document.querySelector("#namemovie");
let count = document.getElementById("count");
let quoteCount = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const getCitation = citation.value;
  const getName = namemovie.value;
  addQuote(getCitation, getName);
});
function addQuote(quote, movie) {
  const pCitation = document.createElement("p");
  pCitation.classList.add("text");
  pCitation.innerText = quote;
  const pMovie = document.createElement("p");
  pMovie.classList.add("movie");
  pMovie.innerText = movie;
  const divquote = document.createElement("div");
  divquote.classList.add("quote");
  divquote.appendChild(pCitation);
  divquote.appendChild(pMovie);
  const quoteList = document.getElementById("quote-list");
  quoteList.appendChild(divquote);
  quoteCount += 1;
  count.innerText = `${quoteCount} citation `;
  console.log(quoteCount);
}
