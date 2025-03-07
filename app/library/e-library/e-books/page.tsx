import Link from "next/link";
import Image from "next/image";
import doab from "@/public/images/library_images/doab.png";
import muse from "@/public/images/library_images/project-muse.jpg";
import pdfDrive from "@/public/images/library_images/pdf_drive.png";
import gutenberg from "@/public/images/library_images/gutenberg.webp";
import britannica from "@/public/images/library_images/britannica.png";
import openAccess from "@/public/images/library_images/open_access.png";
import intectOpen from "@/public/images/library_images/intech_open.webp";
import openEdition from "@/public/images/library_images/open-edition-books.png";

export default function Page() {
  const eBooksDirectory = [
    {
      id: 1,
      name: "Directory of Open Access Books",
      href: "https://www.doabooks.org",
      imageSrc: doab,
    },
    {
      id: 2,
      name: "Encyclopedia Britannica (Academic)",
      href: "https://www.britannica.com",
      imageSrc: britannica,
    },
    {
      id: 3,
      name: "IntechOpen",
      href: "https://www.intechopen.com/books",
      imageSrc: intectOpen,
    },
    {
      id: 4,
      name: "Medical & Nursing Books",
      href: "https://www.freebookcentre.net/medical_text_books_journals/medical_text_books_online.html",
      imageSrc: britannica,
    },
    {
      id: 5,
      name: "Open Access",
      href: "https://oapen.org/home",
      imageSrc: openAccess,
    },
    {
      id: 6,
      name: "Open Edition Books",
      href: "https://books.openedition.org/",
      imageSrc: openEdition,
    },
    {
      id: 7,
      name: "PDF Drive",
      href: "https://www.pdfdrive.com/",
      imageSrc: pdfDrive,
    },
    {
      id: 8,
      name: "Project Gutenberg",
      href: "https://www.gutenberg.org/",
      imageSrc: gutenberg,
    },
    {
      id: 9,
      name: "Project Muse",
      href: "https://muse.jhu.edu/",
      imageSrc: muse,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-4 md:py-8 space-y-10 px-4 md:px-0">
      <div className="text-center">
        <h2 className="font-black text-xl md:text-2xl">Electronic Books</h2>
        <p className="text-sm md:text-base">
          The Library provides access to thousands of e-books on all subject
          areas including nursing, midwifery, medicine, health sciences,
          psycology, sociology, philosophy, laws, etc. Click on any of the
          images to access the resource
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {eBooksDirectory.map((eBookResource) => (
            <Link key={eBookResource.id} href={eBookResource.href}>
              <div className="center flex-col text-center space-y-3">
                <div className="relative h-24 md:h-28 aspect-square rounded-full overflow-hidden">
                  <Image
                    fill
                    src={eBookResource.imageSrc}
                    className="absolute h-full w-full object-cover"
                    alt={eBookResource.name.split(" ").join("_").toLowerCase()}
                  />
                </div>
                <p className="text-sm md:text-base font-medium">
                  {eBookResource.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
