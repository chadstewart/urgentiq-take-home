import { peopleDto } from "@/models/get-people-types";
import { randomPics } from "@/models/get-random-pics-types";
import { PresentCardDataContent } from "./present-card-data";
import { outputSpeciesColor } from "@/services/output-species-color";

interface PresentCardData {
  person: peopleDto;
  randomPic: randomPics;
}

export interface PresentCardDataContentProps {
  person: peopleDto;
  randomPic: randomPics;
  speciesColor: string;
}

export const PresentCardData = ({ person, randomPic }: PresentCardData) => {
  const speciesColor = outputSpeciesColor(person);

  return (
    <PresentCardDataContent
      person={person}
      randomPic={randomPic}
      speciesColor={speciesColor}
    />
  );
};
