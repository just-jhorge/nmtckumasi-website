import Link from "next/link";
import Image from "next/image";
import dart from "@/public/images/library_images/dart_europe.png";
import openAccess from "@/public/images/library_images/open-doar.png";
import eTheses from "@/public/images/library_images/ethos.jpg";
import ndltd from "@/public/images/library_images/ndltd.png";
import ucc from "@/public/images/library_images/ucc_library.png";
import ethos from "@/public/images/library_images/ethos.jpg";

export default function Page() {
  const thesesDissertationDirectory = [
    {
      id: 1,
      name: "DART-Europe - E-Theses Portal (DEEP)",
      href: "https://www.doabooks.org",
      imageSrc: dart,
    },
    {
      id: 2,
      name: "Directory of Open Access Repository (opendoar)",
      href: "https://www.britannica.com",
      imageSrc: openAccess,
    },
    {
      id: 3,
      name: "Electronic Theses Online Service (ETHoS)",
      href: "https://www.intechopen.com/books",
      imageSrc: ethos,
    },
    {
      id: 4,
      name: "Global ETD",
      href: "https://www.freebookcentre.net/medical_text_books_journals/medical_text_books_online.html",
      imageSrc: ndltd,
    },
    {
      id: 5,
      name: "Networked Digital Library of Theses & Dissertations",
      href: "https://oapen.org/home",
      imageSrc: openAccess,
    },
    {
      id: 6,
      name: "Networked Digital Library of Theses & Dissertations",
      href: "https://books.openedition.org/",
      imageSrc: ndltd,
    },
    {
      id: 7,
      name: "Theses & Dissertations from 28 Scandinavian Countries",
      href: "https://www.pdfdrive.com/",
      imageSrc: eTheses,
    },
    {
      id: 8,
      name: "UCC Institutional Repository",
      href: "https://www.gutenberg.org/",
      imageSrc: ucc,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-4 md:py-8 space-y-10 px-4 md:px-0">
      <div className="text-center">
        <h2 className="font-black text-xl md:text-2xl">
          Theses and Dissertations
        </h2>
        <p className="text-sm md:text-base">
          Find below a list of electronic theses and dissertations arranged in
          alphabetical order. Simply click on the image of the electronic theses
          and dissertation you wish to access and you will be directed to that
          site. Contact the Librarian if you encounter any difficulties while
          using this resource.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {thesesDissertationDirectory.map((directory) => (
            <Link key={directory.id} href={directory.href}>
              <div className="center flex-col text-center space-y-3">
                <div className="relative h-24 md:h-28 aspect-square rounded-full overflow-hidden">
                  <Image
                    fill
                    src={directory.imageSrc}
                    className="absolute h-full w-full object-cover"
                    alt={directory.name.split(" ").join("_").toLowerCase()}
                  />
                </div>
                <p className="text-sm md:text-base font-medium">
                  {directory.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
