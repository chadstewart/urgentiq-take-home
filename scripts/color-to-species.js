const fs = require("fs");

const generateRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

const colorToSpecies = async () => {
  const speciesList = [];
  let nextPage = "https://swapi.dev/api/species";
  const speciesToColor = {};

  while (nextPage) {
    const data = await fetch(nextPage);
    const speciesResponse = await data.json();
    nextPage = speciesResponse.next;
    speciesList.push(...speciesResponse.results);
  }

  for (let species of speciesList)
    speciesToColor[species.url] = generateRandomHexColor();
  const jsonToWrite = JSON.stringify(speciesToColor);

  fs.writeFile("speciesToColor.json", jsonToWrite, (error) => {
    if (error) console.log(error);

    console.log("Successfully wrote file to disk");
  });
};

colorToSpecies();
