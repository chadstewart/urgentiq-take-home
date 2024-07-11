import Image from "next/image";
import { getPeopleResponseSchema } from "@/lib/api/utils/types/get-people-types";
import zod from "zod";
import { getRandomPicsSchema } from "@/lib/api/utils/types/get-random-pics-types";
import { NormalText } from "../atoms/typography/normal-text";
import { DialogContent, DialogHeader } from "../ui/dialog";
import { outputProperDate } from "@/lib/api/utils/output-proper-date";
import { getHomeworldResponseSchema } from "@/lib/api/utils/types/get-homeworld-types";
import { DialogTitle } from "@radix-ui/react-dialog";

interface PresentModalData {
  person: zod.infer<typeof getPeopleResponseSchema>;
  randomPic: zod.infer<typeof getRandomPicsSchema>;
  homeworld: zod.infer<typeof getHomeworldResponseSchema>;
}

export const PresentModalData = ({
  person,
  randomPic,
  homeworld,
}: PresentModalData) => {
  return (
    <DialogContent className="bg-black">
      <DialogHeader className="flex justify-center font-semibold text-lg items-center w-full">
        <DialogTitle>{person.name}</DialogTitle>
      </DialogHeader>
      <div className="flex gap-6 w-full">
        <Image
          className="rounded-lg"
          src={randomPic.url}
          alt="Test Image"
          width={150}
          height={150}
        />
        <div className="flex flex-col justify-center gap-2 w-full">
          <div className="flex flex-col gap-2">
            <NormalText>Height: {person.height}m</NormalText>
            <NormalText>Mass: {person.mass}kg</NormalText>
            <NormalText>
              Date Added: {outputProperDate(person.created)}
            </NormalText>
            <NormalText>
              Number of film appearances: {person.films.length}
            </NormalText>
          </div>
          <div className="flex flex-col gap-2">
            <NormalText>Name: {homeworld.name}</NormalText>
            <NormalText>Terrain: {homeworld.terrain}</NormalText>
            <NormalText>Climate: {homeworld.climate}</NormalText>
            <NormalText>
              Number of Residents: {homeworld.residents.length}
            </NormalText>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
