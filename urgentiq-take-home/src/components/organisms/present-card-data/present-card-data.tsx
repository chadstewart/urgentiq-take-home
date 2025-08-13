import Image from "next/image";
import { peopleDto } from "@/models/get-people-types";
import { Card } from "../../atoms/card";
import { randomPics } from "@/models/get-random-pics-types";
import { NormalText } from "../../atoms/typography/normal-text";

interface PresentCardData {
  person: peopleDto;
  randomPic: randomPics;
  speciesColor: string;
}

export const PresentCardDataContent = ({
  person,
  randomPic,
  speciesColor,
}: PresentCardData) => {
  return (
    <Card color={speciesColor}>
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
