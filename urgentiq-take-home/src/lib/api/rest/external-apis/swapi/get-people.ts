import { getPeopleSwapiSchema } from "@/lib/api/utils/types/get-people-types";
import api from "../../../config/api";
import { createParamsString } from "@/lib/api/utils/create-params-string";

type ParamsInput = {
  page?: string;
  name?: string;
};

export const getPeopleSwapi = async (swapiPeopleParams: ParamsInput = {}) => {
  const paramsString = createParamsString(swapiPeopleParams);

  return await api.get(
    getPeopleSwapiSchema,
    `https://swapi.dev/api/people${paramsString}`
  );
};
