interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <article className="flex hover:animate-pulse border rounded-md min-w-full p-5 min-h-10 justify-center">
      {children}
    </article>
  );
};
