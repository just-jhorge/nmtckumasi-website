import Link from "next/link";
import Image from "next/image";
import theses from "@/public/images/theses.jpg";
import ebooks from "@/public/images/ebooks.webp";
import journals from "@/public/images/journals.jpg";

export default function Page() {
  return (
    <>
      <section className="w-full py-10 bg-sky-950">
        <article className="max-w-2xl mx-auto space-y-3 px-4 md:px-0 text-white">
          <h3 className="font-black text-xl md:text-2xl">E-Library</h3>
          <div className="space-y-2 *:text-sm *:md:text-base">
            <p>
              The e-library is an integral part of the College&apos;s program.
              Academic online databases in the Kumasi Nursing and Midwifery
              Training College Library include electronic journals, electronic
              books, institutional repositories, and electronic theses and
              dissertations. The databases have been clearly described in terms
              of contents, coverage, and subject area to help patrons identify
              databases that will match their needs will ease. A click on any of
              the links of the databases will lead a user to the homepage of the
              database and step-by-step information on how to search from the
              database. Some of the databases have instructional videos on how
              to optimize the databases attached to their homepage.
            </p>
          </div>
        </article>
      </section>
      <section className="container w-full py-5 space-y-10 md:py-10">
        <div className="text-center max-w-xl space-y-2 mx-auto">
          <h3 className="text-xl md:text-2xl font-bold">E-Resources</h3>
          <p className="text-sm md:text-lg text-muted-foreground">
            Access a wide range of digital learning materials, including
            e-books, research databases, journals, and study guides to support
            your academic journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Link href="/library/e-library/e-books">
            <div className="w-full space-y-3">
              <div className="relative rounded-md overflow-hidden w-full aspect-video bg-muted">
                <Image
                  fill
                  src={ebooks}
                  alt="ebooks"
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-medium">Electronic Books</h4>
                <p className="text-sm text-muted-foreground">
                  The library provides access to thousands of e-books on all
                  subject areas including Psychology, Sociology, Law, Nursing,
                  Midwifery, Technology, Health Science, etc.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/library/e-library/e-journals">
            <div className="w-full space-y-3">
              <div className="relative w-full rounded-md overflow-hidden aspect-video bg-muted">
                <Image
                  fill
                  src={journals}
                  alt="journals"
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1.5">
                <h4 className="text-sm font-medium">Electronic Journals</h4>
                <p className="text-sm text-muted-foreground">
                  An alphabetical list of electronic journals offering full-text
                  articles, books, images, and videos is available on the
                  library&apos;s website.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/library/e-library/theses-and-dissertations">
            <div className="w-full space-y-3">
              <div className="relative rounded-md overflow-hidden w-full aspect-video bg-muted">
                <Image
                  fill
                  src={theses}
                  alt="theses"
                  className="absolute h-full w-full object-cover"
                />
              </div>
              <div className="space-y-1 5">
                <h4 className="text-sm font-medium">
                  Theses and Dissertations
                </h4>
                <p className="text-sm text-muted-foreground">
                  The Kumasi Nursing and Midwifery Training College Library
                  provides access to theses and dissertations from Ghana,
                  Africa, and the rest of the world.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
