interface NormalTextProps {
  children: React.ReactNode;
}

export const NormalText = ({ children }: NormalTextProps) => {
  return <p>{children}</p>;
};
