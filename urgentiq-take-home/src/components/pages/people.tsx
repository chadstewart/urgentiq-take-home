import Image from "next/image";

interface PeopleProps {
  people: {}[];
  randomPics: {}[];
}

export default function People({}: PeopleProps) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Test
      </div>
    </main>
  );
}
