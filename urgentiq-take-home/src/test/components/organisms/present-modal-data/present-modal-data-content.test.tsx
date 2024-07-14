import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { PresentModalDataContent } from "@/components/organisms/present-modal-data/present-modal-data";
import { Dialog } from "@/components/ui/dialog";

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

    const testHomeworld = {
      name: "test",
      rotation_period: "test",
      orbital_period: "test",
      diameter: "test",
      climate: "test",
      gravity: "test",
      terrain: "test",
      surface_water: "test",
      population: "test",
      residents: ["test"],
      films: ["test"],
      created: "test",
      edited: "test",
      url: "test",
    };

    const testLoading = {
      loading: false,
      error: false,
    };
    const test = render(
      <Dialog>
        <PresentModalDataContent
          person={testPerson}
          randomPic={testRandomPic}
          homeworld={testHomeworld}
          loadingState={testLoading}
        />
      </Dialog>
    );
    expect(test).toMatchSnapshot();
  });
});
