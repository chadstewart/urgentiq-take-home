import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { Footer } from "@/components/organisms/footer";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
    const test = render(<Footer />);
    expect(test).toMatchSnapshot();
  });
});
