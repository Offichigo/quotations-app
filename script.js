//Étape 4 :
// Ajoutez un gestionnaire d’événement avec addEventListener sur le formulaire,
// Dans la fonction appelée lors de la soumission du formulaire :
// - Récupérez les valeurs des champs <input> dans deux variables : text et author.
// - Utilisez console.log() pour afficher ces valeurs et vérifier leur récupération.
const form = document.getElementById("submit");
const citation = document.querySelector("#citation");
const namemovie = document.querySelector("#namemovie");
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
  const quoteCount= 
// Étape 6
// Notre compteur en haut, dans un <h3>, 
// il affiche toujours zéro ! Pour mettre à jour cette valeur, 
// il nous faut garder le compte du nombre de soumissions du formulaire. Ainsi :
// - Créez une variable globale qui va détenir cette information. 
// Appellez-la quoteCount par exemple. Initialisez-la à zero, donc.
// - Incrémentez cette valeur dans la fonction d'ajout de quote (addQuote) avec un
//  quoteCount += 1
// - Dans le HTML, ajoutez un identifiant au h3 qui doit être mis à jour, donnez-lui l'identifiant count.
// - Dans la fonction addQuote, recuperez ce <h3> avec un getElementById et remplacez son innerText
//  avec la valeur de la variable quoteCount.
// Et voilà, votre gestionnaire de citation est fonctionnel !