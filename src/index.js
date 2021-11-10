import cardList from "./modules/cardList";
import getData from "./modules/utils";

getData("./dbHeroes.json").then((char) => {
  char.forEach((element) => {
    cardList(element);
  });
});
