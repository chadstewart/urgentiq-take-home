import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { FooterContent } from "@/components/organisms/footer/footer";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
    const test = render(<FooterContent />);
    expect(test).toMatchSnapshot();
  });
});
