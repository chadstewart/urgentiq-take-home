import People from "@/components/pages/people";
import { getPeopleSwapi } from "@/lib/api/rest/external-apis/swapi/get-people";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

export default function Home({
  peopleList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <People people={peopleList} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const urlParams = context.query;
  const peopleRequestInput = {};

  if (urlParams.page)
    Object.defineProperty(peopleRequestInput, "page", urlParams.page);
  if (urlParams.name)
    Object.defineProperty(peopleRequestInput, "name", urlParams.name);

  const peopleResponse = await getPeopleSwapi(peopleRequestInput);
  return { props: { peopleList: peopleResponse.results } };
};
