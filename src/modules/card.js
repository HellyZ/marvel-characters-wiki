const card = (character) => {

  let cardDiv = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardBody = document.createElement("div");
  let cardTitle = document.createElement("h2");
  let cardText = document.createElement("p");

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

  cardText.innerHTML = `<b>Real name: </b>${character.realName}<br />
  <b>Species: </b>${character.species}<br />
  <b>Citizenship: </b>${character.citizenship}<br />
  <b>Gender: </b>${character.gender}<br />
  <b>Status: </b>${character.status}<br />
  <b>Actors: </b>${character.actors}<br />
  <b>Movies: </b>${character.movies}<br />`;

  return cardDiv;
};

export default card;
