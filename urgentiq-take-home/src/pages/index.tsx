import People from "@/components/pages/people";
import { getRandomPics } from "@/lib/api/rest/external-apis/get-cats/get-random-picture";
import { getPeopleSwapi } from "@/lib/api/rest/external-apis/swapi/get-people";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home({
  peopleList,
  randomPics,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <People peopleList={peopleList} randomPics={randomPics} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const urlParams = context.query;
  const peopleRequestInput = {};

  if (urlParams.page)
    Object.defineProperty(peopleRequestInput, "page", urlParams.page);
  if (urlParams.name)
    Object.defineProperty(peopleRequestInput, "name", urlParams.name);

  const peopleApiResponse = await getPeopleSwapi(peopleRequestInput);
  const peopleList = peopleApiResponse.results;

  const randomPicsApiResponse = await getRandomPics();
  const randomPics = randomPicsApiResponse;

  return { props: { peopleList, randomPics } };
};
