import Image from "next/image";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import zod from "zod";
import { Card } from "../atoms/card";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import { NormalText } from "../atoms/typography/normal-text";

interface PresentData {
  person: zod.infer<typeof getPeopleResponseSchema>;
  randomPic: zod.infer<typeof getRandomPicsSchema>;
}

export const PresentCardData = ({
  person: people,
  randomPic: randomPics,
}: PresentData) => {
  return (
    <Card>
      <div className="flex gap-2 w-full">
        <Image
          className="rounded-lg"
          src={randomPics.url}
          alt="Test Image"
          width={100}
          height={100}
        />
        <div className="flex justify-center items-center w-full">
          <NormalText>Name: {people.name}</NormalText>
        </div>
      </div>
    </Card>
  );
};
