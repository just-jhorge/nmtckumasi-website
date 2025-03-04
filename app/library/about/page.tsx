import Image from "next/image";
import React from "react";
import libraryBook from "../../../../public/images/library.jpg";

export default function Page() {
  return (
    <>
      <section className="w-full bg-black h-40 md:h-80 center">
        <div className="text-white">about the library</div>
      </section>
      <div className="relative z-20 bg-white py-20">
        <section className="w-full md:min-h-[38rem] container grid grid-cols-3">
          <div className="hidden md:block relative h-[38rem] rounded-bl-md rounded-tr-xl shadow-xl overflow-hidden">
            <Image
              fill
              src={libraryBook}
              alt="library_book"
              className="absolute object-cover"
            />
          </div>
          <div className="col-span-3 md:col-span-2 center">
            <div className="max-w-lg space-y-5">
              <h2 className="text-xl font-bold capitalize">
                about the library
              </h2>
              <div>
                <p className="mb-3">
                  The Kumasi Nursing and Midwifery Training College Library
                  serves as a gateway to the rich array of information
                  resources, facilities and services to our valued users. The
                  Library provides scholarly information resources, learning
                  spaces and facilities as well as information to support the
                  mission of the College. The Library is therefore developing
                  resources, facilities and services that are geared towards the
                  achievement of academic excellence and research goals of the
                  Kumasi Nursing and Midwifery Training College. Our
                  enthusiastic staff are ready to assist.
                </p>
                <q className="italic">
                  The only thing that you absolutely have to know, is the
                  location of the library
                </q>{" "}
                - Albert Einstein
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
