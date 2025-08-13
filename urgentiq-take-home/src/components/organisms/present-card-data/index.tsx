import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import zod from "zod";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import { PresentCardDataContent } from "./present-card-data";
import speciesColorDataset from "@/lib/species-to-colors/speciesToColor.json";

interface PresentCardData {
  person: zod.infer<typeof getPeopleResponseSchema>;
  randomPic: zod.infer<typeof getRandomPicsSchema>;
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
