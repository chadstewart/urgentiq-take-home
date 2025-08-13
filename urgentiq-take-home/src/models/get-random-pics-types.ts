import zod from "zod";

export const getRandomPicsSchema = zod.object({
  id: zod.string().optional(),
  width: zod.number(),
  height: zod.number(),
  url: zod.string(),
});

export type randomPics = zod.infer<typeof getRandomPicsSchema>;

export const getRandomPicsResponse = getRandomPicsSchema.array();

export type randomPicsDto = zod.infer<typeof getRandomPicsResponse>;
