import { peopleDto } from "@/models/get-people-types";
import { PresentModalDataContent } from "./present-modal-data";
import { randomPics } from "@/models/get-random-pics-types";
import { homeworldDto } from "@/models/get-homeworld-types";
import { useEffect, useState } from "react";
import { getHomeWorldASwapi } from "@/lib/api/rest/external-apis/swapi/get-homeworld";

interface PresentModalData {
  person: peopleDto;
  randomPic: randomPics;
}

export const PresentModalData = ({ person, randomPic }: PresentModalData) => {
  const [homeworld, setHomeworld] = useState<homeworldDto>();

  const [loadingState, setLoadingState] = useState({
    loading: true,
    error: false,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getHomeWorldASwapi(person.homeworld);
        setHomeworld(result);
        setLoadingState({
          loading: false,
          error: false,
        });
      } catch {
        setLoadingState({
          loading: false,
          error: true,
        });
      }
    };
    loadData();
  }, [person.homeworld]);

  return (
    <PresentModalDataContent
      person={person}
      randomPic={randomPic}
      homeworld={homeworld}
      loadingState={loadingState}
    />
  );
};
