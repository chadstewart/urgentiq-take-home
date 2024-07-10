import { getPeopleSwapiSchema } from "@/lib/api/utils/types/get-people-types";
import api from "../../../config/api";
import { createParamsString } from "@/lib/api/utils/create-params-string";

type ParamsInput = {
  page?: number;
  name?: string;
};

export const getPeopleSwapi = async (swapiPeopleParams: ParamsInput = {}) => {
  const paramsString = createParamsString(swapiPeopleParams);

  const isParamsNotEmpty = paramsString !== "?";

  return await api.get(
    getPeopleSwapiSchema,
    `https://swapi.dev/api/people${isParamsNotEmpty ? paramsString : ""}`
  );
};
