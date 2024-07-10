import { Card } from "../atoms/card";
import { Footer } from "../organisms/footer";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import zod from "zod";
import { PresentCardData } from "../organisms/present-card-data";

interface PeopleProps {
  peopleList: zod.infer<typeof getPeopleResponseSchema>[];
  randomPics: zod.infer<typeof getRandomPicsSchema>[];
}

export default function People({ peopleList, randomPics }: PeopleProps) {
  return (
    <div className="flex justify-center min-h-screen">
      <main
        className={`flex border-l border-r max-w-5xl min-w-[500px] flex-col items-center justify-between`}
      >
        <section className="flex flex-col gap-6 z-10 max-w-5xl w-full items-center justify-between font-mono p-12 text-sm">
          {peopleList &&
            peopleList.map((people, key) => (
              <PresentCardData
                key={key}
                person={people}
                randomPic={randomPics[key]}
              />
            ))}
        </section>
        <Footer />
      </main>
    </div>
  );
}
