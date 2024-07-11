import zod from "zod";

export const getHomeworldResponseSchema = zod.object({
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
