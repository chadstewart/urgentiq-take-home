import api from "@/lib/api/config/api";
import zod from "zod";
import { createParamsString } from "@/lib/api/utils/create-params-string";

const getHomeworldResponseSchema = zod.object({
  name: zod.string(),
  rotation_period: zod.string(),
  orbital_period: zod.string(),
  diameter: zod.string(),
  climate: zod.string(),
  gravity: zod.string(),
  terrain: zod.string(),
  surface_water: zod.string(),
  population: zod.string(),
  residents: zod.string().array(),
  films: zod.string().array(),
  created: zod.string(),
  edited: zod.string(),
  url: zod.string(),
});

const getHomeworldSwapiSchema = zod.object({
  count: zod.number(),
  next: zod.string().nullable(),
  previous: zod.string().nullable(),
  results: getHomeworldResponseSchema.array(),
});

export const getHomeWorldASwapi = async (
  homeworldUrl: string,
  swapiHomeWorldParams = {}
) => {
  const paramsString = createParamsString(swapiHomeWorldParams);
  const isParamsNotEmpty = paramsString !== "?";

  const urlForApi = homeworldUrl + `${isParamsNotEmpty ? paramsString : ""}`;

  return await api.get(getHomeworldSwapiSchema, urlForApi);
};
