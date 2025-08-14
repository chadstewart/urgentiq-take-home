import speciesColorDataset from "@/lib/species-to-colors/speciesToColor.json";
import { peopleDto } from "@/models/get-people-types";

export const outputSpeciesColor = (person: peopleDto) => {
  const jsonObj: { [key: string]: string } = speciesColorDataset;
  const speciesColor = jsonObj[person.species[0]];
  return speciesColor;
};
