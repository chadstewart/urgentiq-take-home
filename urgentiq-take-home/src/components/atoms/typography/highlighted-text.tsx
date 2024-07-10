import React from "react";

interface HighlightedTextProps {
  children: React.ReactNode;
  highlightLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

export const HighlightedText = ({
  children,
  highlightLevel,
}: HighlightedTextProps) => {
  return React.createElement(
    `h${highlightLevel}`,
    {
      className: "",
    },
    children
  );
};
