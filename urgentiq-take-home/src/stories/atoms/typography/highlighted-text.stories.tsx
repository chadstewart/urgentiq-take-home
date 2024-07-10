import { HighlightedText } from "@/components/atoms/typography/highlighted-text";

const storyConfig = {
  title: "Design System/Atoms/Typography/Highlighted Text",
};

export default storyConfig;

export const NormalTextStory = () => (
  <HighlightedText highlightLevel={1}>Test</HighlightedText>
);
