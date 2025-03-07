import Image from "next/image";
import libraryBook from "@/public/images/library.jpg";

export default function Page() {
  return (
    <>
      <section className="w-full bg-black h-40 md:h-80 center">
        <div className="text-white">about the library</div>
      </section>
      <section className="w-full bg-white h-[45rem] flex flex-col md:flex-row">
        <div className="relative h-2/5 md:h-full flex-1">
          <Image
            fill
            src={libraryBook}
            alt="library_book"
            className="absolute object-cover"
          />
        </div>
        <div className="h-3/5 md:h-full w-full md:w-3/5 center px-4 md:px-0">
          <div className="max-w-lg space-y-5">
            <h2 className="text-xl font-bold capitalize">about the library</h2>
            <div className="text-sm md:text-base">
              <p className="mb-3">
                The Kumasi Nursing and Midwifery Training College Library serves
                as a gateway to the rich array of information resources,
                facilities and services to our valued users. The Library
                provides scholarly information resources, learning spaces and
                facilities as well as information to support the mission of the
                College. The Library is therefore developing resources,
                facilities and services that are geared towards the achievement
                of academic excellence and research goals of the Kumasi Nursing
                and Midwifery Training College. Our enthusiastic staff are ready
                to assist.
              </p>
              <q className="italic text-muted-foreground">
                The only thing that you absolutely have to know, is the location
                of the library
              </q>{" "}
              - Albert Einstein
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
