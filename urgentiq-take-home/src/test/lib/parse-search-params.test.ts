import { parseSearchParams } from "@/lib/parse-search-params";
import { describe, expect, it } from "vitest";

describe("Util Function: Parse Search Params", () => {
  it("Should return an object with name when only an object with name that is a string is passed in", () => {
    const testObj = {
      name: "test",
    };
    const objToEvaluate = parseSearchParams(testObj);
    expect(objToEvaluate).toStrictEqual(testObj);
  });

  it("Should return an object with page when only an object with page that is a number is passed in", () => {
    const testObj = {
      page: "0",
    };
    const objToEvaluate = parseSearchParams(testObj);
    expect(objToEvaluate).toStrictEqual(testObj);
  });

  it("Should return an object with both page and name when an object with those variables are passed in", () => {
    const testObj = {
      page: "0",
      name: "test",
    };
    const objToEvaluate = parseSearchParams(testObj);
    expect(objToEvaluate).toStrictEqual(testObj);
  });

  it("Should return an empty object when page is not a number", () => {
    const testObj = {
      page: "test",
    };
    const objToEvaluate = parseSearchParams(testObj);
    expect(objToEvaluate).toStrictEqual({});
  });

  it("Should return an empty object when name is not a string", () => {
    const testObj = {
      name: 1,
    };
    const objToEvaluate = parseSearchParams(testObj);
    expect(objToEvaluate).toStrictEqual({});
  });
});
