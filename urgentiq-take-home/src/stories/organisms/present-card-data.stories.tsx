import { PresentCardData } from "@/components/organisms/present-card-data";

const storyConfig = {
  title: "Design System/Organisms/Present Card Data",
};

export default storyConfig;

const testPerson = {
  name: "Boo",
  height: "test",
  mass: "test",
  hair_color: "test",
  skin_color: "test",
  eye_color: "test",
  birth_year: "test",
  gender: "test",
  homeworld: "test",
  films: ["test"],
  species: ["test"],
  vehicles: ["test"],
  starships: ["test"],
  created: "test",
  edited: "test",
  url: "test",
};

const testRandomPic = {
  url: "https://cdn2.thecatapi.com/images/37.gif",
  width: 499,
  height: 528,
};

export const PresentCardDataStory = () => (
  <PresentCardData person={testPerson} randomPic={testRandomPic} />
);
