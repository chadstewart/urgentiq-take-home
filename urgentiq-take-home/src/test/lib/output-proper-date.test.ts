import { outputProperDate } from "@/lib/output-proper-date";
import { describe, expect, it } from "vitest";

describe("Util Function: Output Proper Date", () => {
  it("Should output a properly formatted date", () => {
    const stringToEvaluate = outputProperDate("2014-12-09T13:50:51.644000Z");
    expect(stringToEvaluate).toBe("9-11-2014");
  });

  it("Should return an empty string if input string is empty", () => {
    const stringToEvaluate = outputProperDate("");
    expect(stringToEvaluate).toBe("");
  });

  it("Should return an empty string if input string is not in a suitable date format", () => {
    const stringToEvaluate = outputProperDate("Not a Date");
    expect(stringToEvaluate).toBe("");
  });
});
