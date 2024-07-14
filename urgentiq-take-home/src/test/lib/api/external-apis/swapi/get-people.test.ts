import { describe, expect, expectTypeOf, it, vi } from "vitest";
import api from "@/lib/api/config/api";
import { getPeopleSwapi } from "@/lib/api/rest/external-apis/swapi/get-people";
import zod from "zod";
import { getPeopleSwapiSchema } from "@/lib/api/utils/types/get-people-types";

describe("External API Function: Get People", () => {
  vi.mock("@/lib/api/config/api");
  vi.mock("@/lib/api/utils/create-params-string", () => {
    return {
      createParamsString: vi.fn(() => "?test"),
    };
  });

  it("Should return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
        count: 1,
        next: "test",
        previous: "test",
        results: {
          name: "test",
          height: "test",
          mass: "test",
          hair_color: "test",
          skin_color: "test",
          eye_color: "test",
          birth_year: "test",
          gender: "test",
          homeworld: "test",
          films: [],
          species: [],
          vehicles: [],
          starships: [],
          created: "test",
          edited: "test",
          url: "test",
        },
      })
    );

    type typeToTest = zod.infer<typeof getPeopleSwapiSchema>;

    const apiData = await getPeopleSwapi();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("Should add search params in the url when passed into function", async () => {
    const apiSpy = vi.spyOn(api, "get");

    const testParams = { name: "test" };

    await getPeopleSwapi(testParams);

    expect(
      apiSpy.mock.calls[0].includes(`https://swapi.dev/api/people?test`)
    ).toBeTruthy();
  });
});
