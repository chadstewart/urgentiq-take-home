import { peopleDto } from "@/models/get-people-types";
import { outputSpeciesColor } from "@/services/output-species-color";
import { describe, expect, it, vi } from "vitest";

describe("Service Function: Output Species Color", () => {
  vi.mock("@/lib/species-to-colors/speciesToColor.json", () => {
    return {
      default: { test: "correctString" },
    };
  });

  it("Should return a string when given a person object", () => {
    const objectToTest = {
      species: ["test"],
    };
    const stringToTest = outputSpeciesColor(objectToTest as peopleDto);

    expect(stringToTest).toEqual("correctString");
  });
});
