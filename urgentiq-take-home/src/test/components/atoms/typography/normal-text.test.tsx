import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { NormalText } from "@/components/atoms/typography/normal-text";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
    const test = render(<NormalText>Test</NormalText>);
    expect(test).toMatchSnapshot();
  });
});
