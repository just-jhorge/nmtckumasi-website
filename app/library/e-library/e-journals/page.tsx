import ResourceCard from "../ResourceCard";

import bmc from "../../../../public/images/library_images/bmc.png";
import doaj from "../../../../public/images/library_images/doaj.png";
import doab from "../../../../public/images/library_images/doab.png";
import eldis from "../../../../public/images/library_images/eldis_plain.png";
import fullpdf from "../../../../public/images/library_images/free_full_pdf.webp";
import gscholar from "../../../../public/images/library_images/g_scholar.jpg";
import hirewire from "../../../../public/images/library_images/highwire.png";
import hindawi from "../../../../public/images/library_images/hindawi.png";
import intech from "../../../../public/images/library_images/intech.png";
import jstage from "../../../../public/images/library_images/j_stage.png";
import msd from "../../../../public/images/library_images/msd.png";
import nap from "../../../../public/images/library_images/nap.png";
import opened from "../../../../public/images/library_images/open-edition-books.png";
import paperity from "../../../../public/images/library_images/paperity.png";
import plosone from "../../../../public/images/library_images/plos.png";
import pubmed from "../../../../public/images/library_images/pub_med.png";
import regate from "../../../../public/images/library_images/research_gate.png";
import sageopen from "../../../../public/images/library_images/sage.jpeg";
import sciencedirect from "../../../../public/images/library_images/sciencedirect.png";
import scielo from "../../../../public/images/library_images/scielo.avif";
import ssrn from "../../../../public/images/library_images/ssrn.png";
import springeropen from "../../../../public/images/library_images/springeropen.png";
import tayfran from "../../../../public/images/library_images/taylor_and_francis.png";
import trip from "../../../../public/images/library_images/trip.png";
import uptodate from "../../../../public/images/library_images/upto_date.png";
import jws from "../../../../public/images/library_images/jws.png";

export default function Page() {
  const journals = [
    {
      id: 1,
      name: "British Medical Central (BMC)",
      href: "https://www.biomedcentral.com",
      imageSrc: bmc,
    },
    {
      id: 2,
      name: "Directory of Open Access Journals (DOAJ)",
      href: "https://doaj.org",
      imageSrc: doaj,
    },
    {
      id: 3,
      name: "Directory of Open Access Repositories (OpenDOAR)",
      href: "https://v2.sherpa.ac.uk/opendoar/",
      imageSrc: doab,
    },
    {
      id: 4,
      name: "Electronic Development Information System (Eldis)",
      href: "https://www.eldis.org",
      imageSrc: eldis,
    },
    {
      id: 5,
      name: "Full PDF",
      href: "https://www.freefullpdf.com/#gsc.tab=0",
      imageSrc: fullpdf,
    },
    {
      id: 6,
      name: "The Global Delivery Online Articles",
      href: "https://www.globalhealthdelivery.org",
      imageSrc: "",
    },
    {
      id: 7,
      name: "Google Scholar",
      href: "https://scholar.google.com",
      imageSrc: gscholar,
    },
    {
      id: 8,
      name: "HighWire Free Back Files",
      href: "http://portal.highwire.org/lists/freeart.dtl",
      imageSrc: hirewire,
    },
    {
      id: 9,
      name: "HighWire Free to Developing Economies",
      href: "http://portal.highwire.org/lists/devecon.dtl",
      imageSrc: hirewire,
    },
    {
      id: 10,
      name: "Hindawi",
      href: "https://www.hindawi.com",
      imageSrc: hindawi,
    },
    {
      id: 11,
      name: "InTech Open",
      href: "https://www.intechopen.com",
      imageSrc: intech,
    },
    {
      id: 12,
      name: "Japan Science and Technology Aggregator (J-STAGE)",
      href: "https://www.jstage.jst.go.jp/browse",
      imageSrc: jstage,
    },
    {
      id: 13,
      name: "MSD Manuals",
      href: "https://www.msdmanuals.com/professional?utm_campaign=2022partnerships&utm_medium=Linking&utm_source=KwameNkrumahUniversityofScienceandTechnology",
      imageSrc: msd,
    },
    {
      id: 14,
      name: "National Academies Press",
      href: "https://nap.nationalacademies.org",
      imageSrc: nap,
    },
    {
      id: 15,
      name: "OpenEdition Journals",
      href: "https://www.openedition.org/catalogue-journals",
      imageSrc: opened,
    },
    {
      id: 16,
      name: "Paperity",
      href: "https://paperity.org",
      imageSrc: paperity,
    },
    {
      id: 17,
      name: "PLOS ONE",
      href: "https://journals.plos.org/plosone/",
      imageSrc: plosone,
    },
    {
      id: 18,
      name: "PubMed Central (PMC)",
      href: "https://www.ncbi.nlm.nih.gov/pmc/",
      imageSrc: pubmed,
    },
    {
      id: 19,
      name: "ResearchGate",
      href: "https://www.researchgate.net",
      imageSrc: regate,
    },
    {
      id: 20,
      name: "SAGE Open",
      href: "https://journals.sagepub.com/home/sgo",
      imageSrc: sageopen,
    },
    {
      id: 21,
      name: "ScienceDirect (Open Access Content)",
      href: "https://www.sciencedirect.com/",
      imageSrc: sciencedirect,
    },
    {
      id: 22,
      name: "Scientific Electronic Library Online (SciELO)",
      href: "https://scielo.org",
      imageSrc: scielo,
    },
    {
      id: 23,
      name: "Social Science Research Network (SSRN)",
      href: "https://www.ssrn.com/index.cfm/en/",
      imageSrc: ssrn,
    },
    {
      id: 24,
      name: "SpringerOpen",
      href: "https://www.springeropen.com",
      imageSrc: springeropen,
    },
    {
      id: 25,
      name: "Taylor & Francis Open",
      href: "https://www.tandfonline.com/openaccess",
      imageSrc: tayfran,
    },
    {
      id: 26,
      name: "Trip Database",
      href: "https://www.tripdatabase.com",
      imageSrc: trip,
    },
    {
      id: 27,
      name: "UpToDate",
      href: "https://www.uptodate.com/login",
      imageSrc: uptodate,
    },
    {
      id: 28,
      name: "WorldWideScience",
      href: "https://worldwidescience.org",
      imageSrc: jws,
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
