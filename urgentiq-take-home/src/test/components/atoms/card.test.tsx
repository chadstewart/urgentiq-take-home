import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Card } from "@/components/atoms/card";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
    const test = render(<Card>Test</Card>);
    expect(test).toMatchSnapshot();
  });
});
