import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { ModalLoadingStory } from "@/stories/molecules/loading-state/modal-loading.stories";

describe("React Component: Normal Text Typography", () => {
  it("Should render correctly", () => {
    const test = render(<ModalLoadingStory />);
    expect(test).toMatchSnapshot();
  });
});
