import card from "./card";

const cardList = (characters) => {
  let cards = document.querySelector(".cards");

  cards.classList.add("container-fluid");
  cards.classList.add("row");
  cards.classList.add("row-cols-md-3");
  cards.classList.add("g-4");

  characters.forEach((character) => {
    let col = document.createElement("div");
    let el = card(character);

    col.classList.add("col");
    col.append(el);

    cards.append(col);
  });
};

export default cardList;
