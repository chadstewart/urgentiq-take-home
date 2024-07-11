import { Footer } from "../organisms/footer";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import zod from "zod";
import { PresentCardData } from "../organisms/present-card-data";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { PresentModalData } from "../organisms/present-modal-data";
import { getHomeworldResponseSchema } from "@/lib/api/utils/types/get-homeworld-types";

interface PeopleProps {
  peopleList: zod.infer<typeof getPeopleResponseSchema>[];
  randomPics: zod.infer<typeof getRandomPicsSchema>[];
  homeworldList: zod.infer<typeof getHomeworldResponseSchema>[];
}

export default function People({
  peopleList,
  randomPics,
  homeworldList,
}: PeopleProps) {
  return (
    <div className="flex justify-center min-h-screen">
      <main
        className={`flex border-l border-r max-w-5xl min-w-[500px] flex-col items-center justify-between`}
      >
        <section className="flex flex-col gap-6 z-10 max-w-5xl w-full items-center justify-between font-mono p-12 text-sm">
          {peopleList &&
            peopleList.map((people, key) => (
              <Dialog key={key}>
                <DialogTrigger className="w-full">
                  <PresentCardData
                    person={people}
                    randomPic={randomPics[key]}
                  />
                </DialogTrigger>
                <PresentModalData
                  person={people}
                  randomPic={randomPics[key]}
                  homeworld={homeworldList[key]}
                />
              </Dialog>
            ))}
        </section>
        <Footer />
      </main>
    </div>
  );
}
