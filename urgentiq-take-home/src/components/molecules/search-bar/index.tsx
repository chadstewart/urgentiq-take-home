import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { SearchbarContent } from "./search-bar-content";

export const Searchbar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    router.push(`/?name=${searchValue}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <SearchbarContent
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      searchValue={searchValue}
    />
  );
};
