import { homePageLoad } from "@/lib/home-page-load";
import { ParsedUrlQuery } from "querystring";
import { describe, expect, it, vi } from "vitest";

describe("Util Function: Home Page Load", () => {
  vi.mock("@/lib/parse-search-params", () => {
    return {
      parseSearchParams: vi.fn(() => "test"),
    };
  });

  vi.mock("@/lib/api/rest/external-apis/swapi/get-people", () => {
    return {
      getPeopleSwapi: vi.fn(() => {
        return {
          results: "test",
          next: "test",
          previous: "test",
        };
      }),
    };
  });

  vi.mock("@/lib/api/rest/external-apis/get-cats/get-random-picture", () => {
    return {
      getRandomPics: vi.fn(() => "test"),
    };
  });

  it("Should return an object in the proper shape", async () => {
    const testObj = {};

    const objToEvaluate = await homePageLoad(testObj as ParsedUrlQuery);

    expect(objToEvaluate).toStrictEqual({
      props: {
        peopleList: "test",
        randomPics: "test",
        nextPage: "test",
        prevPage: "test",
      },
    });
  });
});
