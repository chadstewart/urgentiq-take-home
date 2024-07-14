import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { SearchbarContent } from "@/components/molecules/search-bar/search-bar-content";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
    const testFunc = (event: any) => {};
    const test = render(
      <SearchbarContent
        searchValue="test"
        handleChange={testFunc}
        handleSubmit={testFunc}
      />
    );
    expect(test).toMatchSnapshot();
  });
});
