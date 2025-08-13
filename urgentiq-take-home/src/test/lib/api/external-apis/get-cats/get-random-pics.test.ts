import { describe, expectTypeOf, it, vi } from "vitest";
import api from "@/lib/api/config/api";
import { randomPicsDto } from "@/models/get-random-pics-types";
import { getRandomPics } from "@/lib/api/rest/external-apis/get-cats/get-random-picture";

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
        id: "test",
        width: 1,
        height: 1,
        url: "test",
      })
    );

    type typeToTest = randomPicsDto;

    const apiData = await getRandomPics();

    expectTypeOf(apiData).toMatchTypeOf<typeToTest>();
  });
});
