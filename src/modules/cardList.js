import card from "./card";

const cardList = (characters) => {
  let cards = document.querySelector(".cards");
  cards.classList.add("container-fluid");
  let col = document.createElement("div");
  col.classList.add("col");

  cards.classList.add("row");
  cards.classList.add("row-cols-1");
  cards.classList.add("row-cols-md-3");
  cards.classList.add("g-4");

  Array(characters).forEach((character) => {
    let el = card(character);
    col.append(el);
  });

  
  cards.append(col);
};

export default cardList;
