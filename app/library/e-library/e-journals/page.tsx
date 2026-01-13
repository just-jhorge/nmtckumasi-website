import ResourceCard from "../ResourceCard";
import ethos from "@/public/images/library_images/ethos.jpg";
import ndltd from "@/public/images/library_images/ndltd.png";
import eTheses from "@/public/images/library_images/ethos.jpg";
import ucc from "@/public/images/library_images/ucc_library.png";
import dart from "@/public/images/library_images/dart_europe.png";
import openAccess from "@/public/images/library_images/open-doar.png";

export default function Page() {
  const journals = [
    {
      id: 1,
      name: "British Medical Central (BMC)",
      href: "https://www.biomedcentral.com",
      imageSrc: "",
    },
    {
      id: 2,
      name: "Directory of Open Access Journals (DOAJ)",
      href: "https://doaj.org",
      imageSrc: "",
    },
    {
      id: 3,
      name: "Directory of Open Access Repositories (OpenDOAR)",
      href: "https://v2.sherpa.ac.uk/opendoar/",
      imageSrc: "",
    },
    {
      id: 4,
      name: "Electronic Development Information System (Eldis)",
      href: "https://www.eldis.org",
      imageSrc: "",
    },
    {
      id: 5,
      name: "Full PDF (via Unpaywall)",
      href: "https://unpaywall.org",
      imageSrc: "",
    },
    {
      id: 6,
      name: "The Global Delivery Online Articles (Research4Life)",
      href: "https://www.research4life.org",
      imageSrc: "",
    },
    {
      id: 7,
      name: "Google Scholar",
      href: "https://scholar.google.com",
      imageSrc: "",
    },
    {
      id: 8,
      name: "HighWire Free Back Files",
      href: "https://highwire.stanford.edu/lists/freeart.dtl",
      imageSrc: "",
    },
    {
      id: 9,
      name: "HighWire Free to Developing Economies",
      href: "https://highwire.stanford.edu/lists/devecon.dtl",
      imageSrc: "",
    },
    {
      id: 10,
      name: "Hindawi",
      href: "https://www.hindawi.com",
      imageSrc: "",
    },
    {
      id: 11,
      name: "InTech Open",
      href: "https://www.intechopen.com",
      imageSrc: "",
    },
    {
      id: 12,
      name: "Japan Science and Technology Aggregator (J-STAGE)",
      href: "https://www.jstage.jst.go.jp",
      imageSrc: "",
    },
    {
      id: 13,
      name: "MSD Manuals",
      href: "https://www.msdmanuals.com",
      imageSrc: "",
    },
    {
      id: 14,
      name: "National Academies Press",
      href: "https://nap.nationalacademies.org",
      imageSrc: "",
    },
    {
      id: 15,
      name: "OpenEdition Journals",
      href: "https://journals.openedition.org",
      imageSrc: "",
    },
    {
      id: 16,
      name: "Paperity",
      href: "https://paperity.org",
      imageSrc: "",
    },
    {
      id: 17,
      name: "PLOS ONE",
      href: "https://journals.plos.org/plosone/",
      imageSrc: "",
    },
    {
      id: 18,
      name: "PubMed Central (PMC)",
      href: "https://www.ncbi.nlm.nih.gov/pmc/",
      imageSrc: "",
    },
    {
      id: 19,
      name: "ResearchGate",
      href: "https://www.researchgate.net",
      imageSrc: "",
    },
    {
      id: 20,
      name: "SAGE Open",
      href: "https://journals.sagepub.com/home/sgo",
      imageSrc: "",
    },
    {
      id: 21,
      name: "ScienceDirect (Open Access Content)",
      href: "https://www.sciencedirect.com/browse/journals-and-books?accessType=openAccess",
      imageSrc: "",
    },
    {
      id: 22,
      name: "Scientific Electronic Library Online (SciELO)",
      href: "https://scielo.org",
      imageSrc: "",
    },
    {
      id: 23,
      name: "Social Science Research Network (SSRN)",
      href: "https://www.ssrn.com",
      imageSrc: "",
    },
    {
      id: 24,
      name: "SpringerOpen",
      href: "https://www.springeropen.com",
      imageSrc: "",
    },
    {
      id: 25,
      name: "Taylor & Francis Open",
      href: "https://www.tandfonline.com/openaccess",
      imageSrc: "",
    },
    {
      id: 26,
      name: "Trip Database",
      href: "https://www.tripdatabase.com",
      imageSrc: "",
    },
    {
      id: 27,
      name: "UpToDate",
      href: "https://www.uptodate.com",
      imageSrc: "",
    },
    {
      id: 28,
      name: "WorldWideScience",
      href: "https://worldwidescience.org",
      imageSrc: "",
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
          {journals.map((journal) => (
            <ResourceCard key={journal.id} resource={journal} />
          ))}
        </div>
      </div>
    </div>
  );
}
