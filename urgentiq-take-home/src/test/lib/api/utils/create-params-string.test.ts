import { createParamsString } from "@/lib/api/utils/create-params-string";
import { describe, expect, it } from "vitest";

describe("API Util Function: Create Params String", () => {
  it("Should return a string when given a params object", () => {
    const testObj = {
      test: "test",
    };

    const stringToTest = createParamsString(testObj);
    expect(stringToTest).toBe("?test=test&");
  });

  it("Should change name to search if name is in params object", () => {
    const testObj = {
      name: "test",
    };

    const stringToTest = createParamsString(testObj);
    expect(stringToTest).toBe("?search=test&");
  });

  it("Should return empty string when params object is empty", () => {
    const testObj = {};

    const stringToTest = createParamsString(testObj);
    expect(stringToTest).toBe("");
  });
});
