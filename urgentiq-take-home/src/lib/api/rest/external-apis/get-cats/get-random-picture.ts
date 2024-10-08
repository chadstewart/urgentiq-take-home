import api from "../../../config/api";
import { getRandomPicsResponse } from "@/lib/api/utils/types/get-random-pics-types";

export const getRandomPics = async () => {
  const data = await api.get(
    getRandomPicsResponse,
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );
  return data;
};
