import Image from "next/image";

interface PeopleProps {
  people: {}[];
  randomPics: {}[];
}

export default function People({}: PeopleProps) {
  return (
    <div className="flex justify-center min-h-screen">
      <main
        className={`flex border-l border-r max-w-5xl min-w-[500px] flex-col items-center justify-between p-24`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          Test
        </div>
      </main>
    </div>
  );
}
