import Image from "next/image";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import zod from "zod";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import { NormalText } from "../atoms/typography/normal-text";
import { DialogContent, DialogDescription, DialogHeader } from "../ui/dialog";
import { HighlightedText } from "../atoms/typography/highlighted-text";
import { outputProperDate } from "@/lib/api/utils/output-proper-date";

interface PresentModalData {
  person: zod.infer<typeof getPeopleResponseSchema>;
  randomPic: zod.infer<typeof getRandomPicsSchema>;
}

export const PresentModalData = ({
  person: people,
  randomPic: randomPics,
}: PresentModalData) => {
  return (
    <DialogContent className="bg-black">
      <DialogHeader className="flex justify-center font-semibold text-lg items-center w-full">
        <HighlightedText highlightLevel={2}>{people.name}</HighlightedText>
      </DialogHeader>
      <DialogDescription>
        <div className="flex gap-6 w-full">
          <Image
            className="rounded-lg"
            src={randomPics.url}
            alt="Test Image"
            width={150}
            height={150}
          />
          <div className="flex flex-col justify-center gap-2 w-full">
            <div>
              <NormalText>Height: {people.height}m</NormalText>
              <NormalText>Mass: {people.mass}kg</NormalText>
              <NormalText>
                Date Added: {outputProperDate(people.created)}
              </NormalText>
              <NormalText>
                Number of film appearances: {people.films.length}
              </NormalText>
            </div>
            <div>
              <NormalText>Name: {people.gender}</NormalText>
            </div>
          </div>
        </div>
      </DialogDescription>
    </DialogContent>
  );
};
