import { ChangeEvent, FormEvent } from "react";

interface SearchbarProps {
  handleSubmit: (event: FormEvent) => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
}

export const SearchbarContent = ({
  handleSubmit,
  handleChange,
  searchValue,
}: SearchbarProps) => {
  return (
    <div className="flex flex-col gap-4 w-full p-3">
      Search:
      <form className="flex gap-2" onSubmit={handleSubmit}>
        Name:
        <input
          className="w-full px-3 text-black"
          value={searchValue}
          placeholder="Enter name here..."
          onChange={handleChange}
        />
        <input className="px-2 rounded-lg border" type="submit" />
      </form>
    </div>
  );
};
