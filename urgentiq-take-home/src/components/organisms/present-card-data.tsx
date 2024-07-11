import Image from "next/image";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import zod from "zod";
import { Card } from "../atoms/card";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import { NormalText } from "../atoms/typography/normal-text";

interface PresentCardData {
  person: zod.infer<typeof getPeopleResponseSchema>;
  randomPic: zod.infer<typeof getRandomPicsSchema>;
}

export const PresentCardData = ({ person, randomPic }: PresentCardData) => {
  return (
    <Card>
      <div className="flex gap-2 w-full">
        <Image
          className="rounded-lg"
          src={randomPic.url}
          alt="Test Image"
          width={150}
          height={150}
        />
        <div className="flex justify-center items-center w-full">
          <NormalText>Name: {person.name}</NormalText>
        </div>
      </div>
    </Card>
  );
};
