import { Footer } from "../organisms/footer";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import zod from "zod";
import { PresentCardData } from "../organisms/present-card-data";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { PresentModalData } from "../organisms/present-modal-data";
import { getHomeworldResponseSchema } from "@/lib/api/utils/types/get-homeworld-types";
import { Searchbar } from "../molecules/search-bar";
import { useState } from "react";

interface PeopleProps {
  peopleList: zod.infer<typeof getPeopleResponseSchema>[];
  randomPics: zod.infer<typeof getRandomPicsSchema>[];
  homeworldList: zod.infer<typeof getHomeworldResponseSchema>[];
  nextPage: string;
  prevPage: string;
  handlePagination: (input: string) => void;
}

export default function People({
  peopleList,
  randomPics,
  homeworldList,
  nextPage,
  prevPage,
  handlePagination,
}: PeopleProps) {
  const [modalState, setModalState] = useState(
    new Array(peopleList.length).fill(false)
  );
  return (
    <div className="flex justify-center min-h-screen">
      <main
        className={`flex border-l border-r max-w-5xl min-w-[500px] flex-col items-center justify-between`}
      >
        <section className="flex flex-col gap-6 z-10 max-w-5xl w-full items-center justify-between font-mono p-12 text-sm">
          <Searchbar />
          {peopleList &&
            peopleList.map((people, key) => (
              <Dialog
                key={key}
                onOpenChange={() =>
                  setModalState((prevState) => {
                    const result = [...prevState];
                    result[key] = !result[key];
                    return result;
                  })
                }
              >
                <DialogTrigger className="w-full">
                  <PresentCardData
                    person={people}
                    randomPic={randomPics[key]}
                  />
                </DialogTrigger>
                {modalState[key] ? (
                  <PresentModalData
                    person={people}
                    randomPic={randomPics[key]}
                    homeworld={homeworldList[key]}
                  />
                ) : null}
              </Dialog>
            ))}
          <nav className="flex gap-8">
            <button
              className="border min-w-28 rounded-lg p-3"
              disabled={prevPage ? false : true}
              onClick={() => handlePagination(prevPage)}
              style={{ opacity: prevPage ? 1 : 0.5 }}
            >
              Previous
            </button>
            <button
              className="border min-w-28 rounded-lg p-3"
              disabled={nextPage ? false : true}
              onClick={() => handlePagination(nextPage)}
              style={{ opacity: nextPage ? 1 : 0.5 }}
            >
              Next
            </button>
          </nav>
        </section>
        <Footer />
      </main>
    </div>
  );
}
