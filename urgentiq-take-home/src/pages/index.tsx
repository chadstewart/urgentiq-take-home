import People from "@/components/pages/people";
import { homePageLoad } from "@/lib/home-page-load";
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
  return homePageLoad(context.query);
};
