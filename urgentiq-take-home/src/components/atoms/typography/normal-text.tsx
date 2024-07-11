interface NormalTextProps {
  children: React.ReactNode;
}

export const NormalText = ({ children }: NormalTextProps) => {
  return <p className="text-white">{children}</p>;
};
