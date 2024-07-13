import zod from "zod";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import { PresentModalDataContent } from "./present-modal-data";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import { getHomeworldResponseSchema } from "@/lib/api/utils/types/get-homeworld-types";
import { useEffect, useState } from "react";
import { getHomeWorldASwapi } from "@/lib/api/rest/external-apis/swapi/get-homeworld";

interface PresentModalData {
  person: zod.infer<typeof getPeopleResponseSchema>;
  randomPic: zod.infer<typeof getRandomPicsSchema>;
}

export const PresentModalData = ({ person, randomPic }: PresentModalData) => {
  const [homeworld, setHomeworld] =
    useState<zod.infer<typeof getHomeworldResponseSchema>>();

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
