const card = (character) => {
  let cardDiv = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardBody = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardText = document.createElement("p");

  let isValue = (value) => {
    if (typeof value !== "undefined" && value !== null) {
      return value;
    } else return "Unknown";
  };

  cardDiv.classList.add("card");
  cardImg.classList.add("card-img-top");
  cardBody.classList.add("card-body");
  cardTitle.classList.add("card-title");
  cardText.classList.add("card-text");

  cardImg.src = character.photo;
  cardImg.alt = character.name;
  cardTitle.innerText = character.name;

  cardDiv.append(cardImg);
  cardDiv.append(cardBody);
  cardBody.append(cardTitle);
  cardBody.append(cardText);

  cardText.innerHTML = `<b>Real name: </b>${isValue(character.realName)}<br />
  <b>Species: </b>${isValue(character.species)}<br />
  <b>Citizenship: </b>${isValue(character.citizenship)}<br />
  <b>Gender: </b>${isValue(character.gender)}<br />
  <b>Status: </b>${isValue(character.status)}<br />
  <b>Actors: </b>${isValue(character.actors)}<br />
  <b>Movies: </b>${isValue(character.movies)}<br />`;

  return cardDiv;
};

export default card;
