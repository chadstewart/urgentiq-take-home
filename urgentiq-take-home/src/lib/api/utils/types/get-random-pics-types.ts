import zod from "zod";

export const getRandomPicsSchema = zod
  .object({
    id: zod.string().optional(),
    width: zod.number(),
    height: zod.number(),
    url: zod.string(),
  })
  .array();
