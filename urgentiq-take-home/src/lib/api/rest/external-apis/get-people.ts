import api from "../../config/api";
import zod from "zod";

const getPeopleResponseSchema = zod.object({
  name: zod.string().nullable(),
  height: zod.string().nullable(),
  mass: zod.string().nullable(),
  hair_color: zod.string().nullable(),
  skin_color: zod.string().nullable(),
  eye_color: zod.string().nullable(),
  birth_year: zod.string().nullable(),
  gender: zod.string().nullable(),
  homeworld: zod.string().nullable(),
  films: zod.string().array(),
  species: zod.string().array(),
  vehicles: zod.string().array(),
  starships: zod.string().array(),
  created: zod.string().nullable(),
  edited: zod.string().nullable(),
  url: zod.string().nullable(),
});

const getPeopleSwapiSchema = zod.object({
  count: zod.number(),
  next: zod.string().nullable(),
  previous: zod.string().nullable(),
  results: getPeopleResponseSchema.array(),
});

export const getPeopleSwapi = async (page?: number) => {
  return await api.get(
    getPeopleSwapiSchema,
    `https://swapi.dev/api/people${page ? `?page=${page}` : ""}`
  );
};
