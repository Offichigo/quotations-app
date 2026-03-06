const form = document.getElementById("submit");
const quote = document.querySelector("#citation");
const namemovie = document.querySelector("#namemovie");
let count = document.getElementById("count");
let quoteCount = 0;
const stored = localStorage.getItem("data");
let quotesArray = JSON.parse(stored) || [];

// Sans fichier JSON

// On itère sur notre array
// Pour chaque citation on appelle la fonction addQuote

// POUR : AJOUTER une citation
// Le code doit être écrit dans la méthode addQuote (on peut le mettre à la fin)
// Créer un object avec l'auteur et la citation
// Ajouter cet object dans notre array citations

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const getCitation = quote.value;
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
  const citation = {
    movie: "Virgin Suicides",
    text: "Cecilia: Obviously, Doctor, you've never been a 13-year-old girl.",
  };
  quotesArray.push({ text: quote, movie: movie });
}
