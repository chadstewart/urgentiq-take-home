import Image from "next/image";
import { Card } from "../atoms/card";
import { Footer } from "../organisms/footer";

interface PeopleProps {
  people: {}[];
  randomPics: {}[];
}

export default function People({}: PeopleProps) {
  return (
    <div className="flex justify-center min-h-screen">
      <main
        className={`flex border-l border-r max-w-5xl min-w-[500px] flex-col items-center justify-between`}
      >
        <section className="z-10 max-w-5xl w-full items-center justify-between font-mono p-12 text-sm lg:flex">
          <Card>Test</Card>
        </section>
        <Footer />
      </main>
    </div>
  );
}
