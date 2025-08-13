import { peopleDto } from "@/models/get-people-types";
import { randomPics } from "@/models/get-random-pics-types";
import { PresentCardDataContent } from "./present-card-data";
import speciesColorDataset from "@/lib/species-to-colors/speciesToColor.json";

interface PresentCardData {
  person: peopleDto;
  randomPic: randomPics;
}

export const PresentCardData = ({ person, randomPic }: PresentCardData) => {
  const jsonObj: { [key: string]: string } = speciesColorDataset;
  const speciesColor = jsonObj[person.species[0]];
  return (
    <PresentCardDataContent
      person={person}
      randomPic={randomPic}
      speciesColor={speciesColor}
    />
  );
};
