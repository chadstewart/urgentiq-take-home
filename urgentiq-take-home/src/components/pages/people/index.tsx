import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import zod from "zod";
import { useState } from "react";
import { PeopleContent } from "./people";
import { useRouter } from "next/navigation";

interface PeopleProps {
  peopleList: zod.infer<typeof getPeopleResponseSchema>[];
  randomPics: zod.infer<typeof getRandomPicsSchema>[];
  nextPage: string;
  prevPage: string;
  isSearch: boolean;
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
  return (
    <PeopleContent
      peopleList={peopleList}
      randomPics={randomPics}
      nextPage={nextPage}
      prevPage={prevPage}
      handlePagination={handlePagination}
      isSearch={isSearch}
      modalState={modalState}
      setModalState={setModalState}
    />
  );
}
