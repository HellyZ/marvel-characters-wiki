import cardList from "./modules/cardList";
import getData from "./modules/utils";

const selectMovies = document.querySelector(".form-select");
const clearBtn = document.querySelector("#clear-btn");
let cards = document.querySelector(".cards");

let moviesList = [];
let characters = [];

const renderCards = (cardsLists) => {
  console.log(cardsLists);
  cardList(cardsLists);
};

const clearCards = () => {
  while (cards.firstChild) {
    cards.removeChild(cards.firstChild);
  }
};

getData("./dbHeroes.json").then((res) => {
  characters = characters.concat(res);
  renderCards(res);
});

getData("./dbHeroes.json").then((res) => {
  let tempList = [];
  res.forEach((element) => {
    if (element.movies) {
      tempList = tempList.concat(element.movies);
      tempList = tempList.filter(
        (value, index) => tempList.indexOf(value) === index
      );
    }
  });
  let defaultOption = document.createElement("option");
  defaultOption.setAttribute("selected", "");
  defaultOption.text = "Choose a movie";
  selectMovies.add(defaultOption);
  tempList.forEach((movie) => {
    let option = document.createElement("option");
    option.value = movie;
    option.text = movie;
    selectMovies.add(option);
  });
});

selectMovies.addEventListener("change", (e) => {
  const movieName = e.target.value;
  clearCards();
  if (movieName !== "Choose a movie") {
    renderCards(characters.filter((item) => item.movies?.includes(movieName)));
  } else {
    renderCards(characters);
  }
});
