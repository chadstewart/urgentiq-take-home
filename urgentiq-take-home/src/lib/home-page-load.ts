import { ParsedUrlQuery } from "querystring";
import { parseSearchParams } from "./parse-search-params";
import { getPeopleSwapi } from "./api/rest/external-apis/swapi/get-people";
import { getRandomPics } from "./api/rest/external-apis/get-cats/get-random-picture";

export const homePageLoad = async (paramsObj: ParsedUrlQuery) => {
  const urlParams = paramsObj;

  let isSearch = false;

  const peopleRequestInput = parseSearchParams(urlParams);

  if (peopleRequestInput.name) isSearch = true;

  const peopleApiResponse = await getPeopleSwapi(peopleRequestInput);
  const peopleList = peopleApiResponse.results;

  const randomPicsApiResponse = await getRandomPics();
  const randomPics = randomPicsApiResponse;

  const nextPage = peopleApiResponse.next;
  const prevPage = peopleApiResponse.previous;

  return {
    props: { peopleList, randomPics, nextPage, prevPage, isSearch },
  };
};
