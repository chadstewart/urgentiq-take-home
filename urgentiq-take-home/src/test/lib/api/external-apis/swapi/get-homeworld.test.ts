import { describe, expect, expectTypeOf, it, vi } from "vitest";
import api from "@/lib/api/config/api";
import { getHomeWorldASwapi } from "@/lib/api/rest/external-apis/swapi/get-homeworld";
import zod from "zod";
import { getHomeworldResponseSchema } from "@/lib/api/utils/types/get-homeworld-types";

describe("External API Function: Get Homeworld", () => {
  vi.mock("@/lib/api/config/api");
  vi.mock("@/lib/api/utils/create-params-string", () => {
    return {
      createParamsString: vi.fn(() => "?test"),
    };
  });

  it("Should return data in it's proper shape", async () => {
    vi.mocked(api.get).mockReturnValue(
      Promise.resolve({
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
      })
    );

    type typeToTest = zod.infer<typeof getHomeworldResponseSchema>;

    const apiData = await getHomeWorldASwapi("test");

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });

  it("Should add search params in the url when passed into function", async () => {
    const apiSpy = vi.spyOn(api, "get");

    const testParams = { name: "?test" };

    await getHomeWorldASwapi("test", testParams);

    expect(apiSpy.mock.calls[0].includes(`test?test`)).toBeTruthy();
  });
});
