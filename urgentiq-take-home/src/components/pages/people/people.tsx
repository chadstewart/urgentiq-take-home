import { Footer } from "../../organisms/footer";
import { PresentCardData } from "../../organisms/present-card-data";
import { Dialog, DialogTrigger } from "../../ui/dialog";
import { PresentModalData } from "../../organisms/present-modal-data";
import { Searchbar } from "../../molecules/search-bar";
import Link from "next/link";
import { PeopleContentProps } from ".";

export function PeopleContent({
  peopleList,
  randomPics,
  nextPage,
  prevPage,
  handlePagination,
  isSearch,
  modalState,
  handleStateUpdate,
}: PeopleContentProps) {
  return (
    <div className="flex justify-center min-h-screen">
      <main
        className={`flex border-l border-r max-w-5xl min-w-[500px] flex-col items-center justify-between`}
      >
        <section className="flex flex-col gap-6 z-10 max-w-5xl w-full items-center justify-between font-mono p-12 text-sm">
          {isSearch ? <Link href="/">Go Home</Link> : null}
          <Searchbar />
          {peopleList &&
            peopleList.map((people, key) => (
              <Dialog key={key} onOpenChange={() => handleStateUpdate(key)}>
                <DialogTrigger className="w-full">
                  <PresentCardData
                    person={people}
                    randomPic={randomPics[key]}
                  />
                </DialogTrigger>
                {modalState[key] ? (
                  <PresentModalData
                    person={people}
                    randomPic={randomPics[key]}
                  />
                ) : null}
              </Dialog>
            ))}
          <nav className="flex gap-8">
            <button
              className="border min-w-28 rounded-lg p-3"
              disabled={prevPage ? false : true}
              onClick={() => handlePagination(prevPage)}
              style={{ opacity: prevPage ? 1 : 0.5 }}
            >
              Previous
            </button>
            <button
              className="border min-w-28 rounded-lg p-3"
              disabled={nextPage ? false : true}
              onClick={() => handlePagination(nextPage)}
              style={{ opacity: nextPage ? 1 : 0.5 }}
            >
              Next
            </button>
          </nav>
        </section>
        <Footer />
      </main>
    </div>
  );
}
