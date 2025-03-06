import ResourceCard from "../ResourceCard";
import ethos from "@/public/images/library_images/ethos.jpg";
import ndltd from "@/public/images/library_images/ndltd.png";
import eTheses from "@/public/images/library_images/ethos.jpg";
import ucc from "@/public/images/library_images/ucc_library.png";
import dart from "@/public/images/library_images/dart_europe.png";
import openAccess from "@/public/images/library_images/open-doar.png";

export default function Page() {
  const thesesDissertationDirectory = [
    {
      id: 1,
      name: "DART-Europe - E-Theses Portal (DEEP)",
      subjects: ["Health Sciences", "Life Sciences"],
      href: "https://www.doabooks.org",
      imageSrc: dart,
    },
    {
      id: 2,
      name: "Directory of Open Access Repository (opendoar)",
      subjects: ["Health Sciences", "Life Sciences"],
      href: "https://www.britannica.com",
      imageSrc: openAccess,
    },
    {
      id: 3,
      name: "Electronic Theses Online Service (ETHoS)",
      subjects: ["Health Sciences", "Life Sciences"],
      href: "https://www.intechopen.com/books",
      imageSrc: ethos,
    },
    {
      id: 4,
      name: "Global ETD",
      subjects: ["Health Sciences", "Life Sciences"],
      href: "https://www.freebookcentre.net/medical_text_books_journals/medical_text_books_online.html",
      imageSrc: ndltd,
    },
    {
      id: 5,
      name: "Networked Digital Library of Theses & Dissertations",
      subjects: ["Health Sciences", "Life Sciences"],
      href: "https://oapen.org/home",
      imageSrc: openAccess,
    },
    {
      id: 6,
      name: "Networked Digital Library of Theses & Dissertations",
      subjects: ["Health Sciences", "Life Sciences"],
      href: "https://books.openedition.org/",
      imageSrc: ndltd,
    },
    {
      id: 7,
      name: "Theses & Dissertations from 28 Scandinavian Countries",
      subjects: ["Health Sciences", "Life Sciences"],
      href: "https://www.pdfdrive.com/",
      imageSrc: eTheses,
    },
    {
      id: 8,
      name: "UCC Institutional Repository",
      subjects: ["Health Sciences", "Life Sciences"],
      href: "https://www.gutenberg.org/",
      imageSrc: ucc,
    },
  ];

  return (
    <div className="container py-4 md:py-8 space-y-10">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-black text-xl md:text-2xl">Electronic Journals</h2>
        <p className="text-sm md:text-base">
          Below is an alphabetical list of electronic journals offering
          full-text articles, books, images and videos. Click on any of the
          images to access the resource.
        </p>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {thesesDissertationDirectory.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
