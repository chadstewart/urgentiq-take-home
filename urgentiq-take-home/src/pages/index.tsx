import People from "@/components/pages/people";
import { getRandomPics } from "@/lib/api/rest/external-apis/get-cats/get-random-picture";
import { getHomeWorldASwapi } from "@/lib/api/rest/external-apis/swapi/get-homeworld";
import { getPeopleSwapi } from "@/lib/api/rest/external-apis/swapi/get-people";
import { parseSearchParams } from "@/lib/api/utils/parse-search-params";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home({
  peopleList,
  randomPics,
  homeworldList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <People
      peopleList={peopleList}
      randomPics={randomPics}
      homeworldList={homeworldList}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const urlParams = context.query;
  const peopleRequestInput = parseSearchParams(urlParams);

  const peopleApiResponse = await getPeopleSwapi(peopleRequestInput);
  const peopleList = peopleApiResponse.results;

  const randomPicsApiResponse = await getRandomPics();
  const randomPics = randomPicsApiResponse;

  const homeworldList = await Promise.all(
    peopleList.map((person) => getHomeWorldASwapi(person.homeworld))
  );

  return { props: { peopleList, randomPics, homeworldList } };
};
