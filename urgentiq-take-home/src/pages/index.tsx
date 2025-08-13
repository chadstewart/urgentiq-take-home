import People from "@/components/pages/people";
import { homePageLoad } from "@/lib/home-page-load";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/navigation";

export default function Home({
  peopleList,
  randomPics,
  nextPage,
  prevPage,
  isSearch,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <People
      peopleList={peopleList}
      randomPics={randomPics}
      nextPage={nextPage}
      prevPage={prevPage}
      isSearch={isSearch}
    />
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return homePageLoad(context.query);
};
