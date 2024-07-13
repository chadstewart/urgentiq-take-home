import People from "@/components/pages/people";
import { getRandomPics } from "@/lib/api/rest/external-apis/get-cats/get-random-picture";
import { getPeopleSwapi } from "@/lib/api/rest/external-apis/swapi/get-people";
import { parseSearchParams } from "@/lib/api/utils/parse-search-params";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/navigation";

export default function Home({
  peopleList,
  randomPics,
  nextPage,
  prevPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const router = useRouter();

  const handlePagination = (navUrl: string) => {
    const pageString = navUrl.split("?")[1];
    router.push(`/?${pageString}`);
  };
  return (
    <People
      peopleList={peopleList}
      randomPics={randomPics}
      nextPage={nextPage}
      prevPage={prevPage}
      handlePagination={handlePagination}
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

  const nextPage = peopleApiResponse.next;
  const prevPage = peopleApiResponse.previous;

  return {
    props: { peopleList, randomPics, nextPage, prevPage },
  };
};
