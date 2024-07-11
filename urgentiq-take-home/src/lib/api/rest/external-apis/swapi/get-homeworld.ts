import api from "@/lib/api/config/api";
import { createParamsString } from "@/lib/api/utils/create-params-string";
import { getHomeworldResponseSchema } from "@/lib/api/utils/types/get-homeworld-types";

export const getHomeWorldASwapi = async (
  homeworldUrl: string | null,
  swapiHomeWorldParams = {}
) => {
  const paramsString = createParamsString(swapiHomeWorldParams);
  const isParamsNotEmpty = paramsString !== "?";

  const urlForApi = homeworldUrl + `${isParamsNotEmpty ? paramsString : ""}`;

  return await api.get(getHomeworldResponseSchema, urlForApi);
};
