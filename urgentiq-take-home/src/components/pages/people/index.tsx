import { peopleDto } from "@/models/get-people-types";
import { randomPics } from "@/models/get-random-pics-types";
import { useState } from "react";
import { PeopleContent } from "./people";
import { useRouter } from "next/navigation";

interface PeopleProps {
  peopleList: peopleDto[];
  randomPics: randomPics[];
  nextPage: string;
  prevPage: string;
  isSearch: boolean;
}

export interface PeopleContentProps {
  peopleList: peopleDto[];
  randomPics: randomPics[];
  nextPage: string;
  prevPage: string;
  handlePagination: (input: string) => void;
  isSearch: boolean;
  modalState: boolean[];
  handleStateUpdate: (key: number) => void;
}

export default function People({
  peopleList,
  randomPics,
  nextPage,
  prevPage,
  isSearch,
}: PeopleProps) {
  const router = useRouter();

  const handlePagination = (navUrl: string) => {
    const pageString = navUrl.split("?")[1];
    router.push(`/?${pageString}`);
  };

  const [modalState, setModalState] = useState<boolean[]>(
    new Array(peopleList.length).fill(false)
  );

  const handleStateUpdate = (key: number) => {
    setModalState((prevState) => {
      const result = [...prevState];
      result[key] = !result[key];
      return result;
    });
  };

  return (
    <PeopleContent
      peopleList={peopleList}
      randomPics={randomPics}
      nextPage={nextPage}
      prevPage={prevPage}
      handlePagination={handlePagination}
      isSearch={isSearch}
      modalState={modalState}
      handleStateUpdate={handleStateUpdate}
    />
  );
}
