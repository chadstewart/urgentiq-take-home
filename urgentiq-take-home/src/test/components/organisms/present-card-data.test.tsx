import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { PresentCardData } from "@/components/organisms/present-card-data";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
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
    const test = render(
      <PresentCardData person={testPerson} randomPic={testRandomPic} />
    );
    expect(test).toMatchSnapshot();
  });
});
