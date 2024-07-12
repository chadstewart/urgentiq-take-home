interface CardProps {
  children: React.ReactNode;
  color?: string;
}

export const Card = ({ children, color }: CardProps) => {
  return (
    <article
      className={`flex hover:animate-pulse border rounded-lg min-w-full p-5 min-h-10 justify-center`}
      style={{ backgroundColor: color ? color : "#38707f" }}
    >
      {children}
    </article>
  );
};
