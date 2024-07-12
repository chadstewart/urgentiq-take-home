import zod from "zod";
import { nameRegex, pageRegex } from "./project-regex";

const searchParamsSchema = zod.object({
  name: zod
    .string()
    .refine((string) => string && nameRegex.test(string))
    .optional(),
  page: zod
    .string()
    .refine((string) => string && pageRegex.test(string))
    .optional(),
});

export const parseSearchParams = (searchParams = {}) => {
  try {
    return searchParamsSchema.parse(searchParams);
  } catch {
    return {};
  }
};
