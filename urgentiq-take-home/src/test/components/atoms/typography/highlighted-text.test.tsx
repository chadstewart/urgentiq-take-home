import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { HighlightedText } from "@/components/atoms/typography/highlighted-text";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
    const test = render(
      <HighlightedText highlightLevel={1}>Test</HighlightedText>
    );
    expect(test).toMatchSnapshot();
  });
});
