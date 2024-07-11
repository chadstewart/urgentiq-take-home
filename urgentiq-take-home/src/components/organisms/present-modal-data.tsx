import Image from "next/image";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import zod from "zod";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import { NormalText } from "../atoms/typography/normal-text";
import { DialogContent, DialogDescription, DialogHeader } from "../ui/dialog";
import { HighlightedText } from "../atoms/typography/highlighted-text";

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
      <DialogHeader>
        <HighlightedText highlightLevel={2}>{people.name}</HighlightedText>
      </DialogHeader>
      <DialogDescription>
        <div className="flex gap-2 w-full">
          <Image
            className="rounded-lg"
            src={randomPics.url}
            alt="Test Image"
            width={100}
            height={100}
          />
          <div className="flex justify-center items-center w-full">
            <NormalText>Name: {people.gender}</NormalText>
          </div>
        </div>
      </DialogDescription>
    </DialogContent>
  );
};
