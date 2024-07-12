import { SearchbarContent } from "@/components/molecules/search-bar/search-bar-content";

const storyConfig = {
  title: "Design System/Molecules/Search bar",
};

const testFunc = (event: any) => {};

export default storyConfig;

export const SearchBarStory = () => (
  <SearchbarContent
    searchValue="test"
    handleChange={testFunc}
    handleSubmit={testFunc}
  />
);
