import Image from "next/image";
import chair from "@/public/images/chair.webp";

export default function Page() {
  type AdmissionProcess = {
    id: number;
    step: "01" | "02" | "03" | "04";
    title: string;
    description: string;
  };
  const admissionProcessSteps: AdmissionProcess[] = [
    {
      id: 1,
      step: "01",
      title: "Purchase a voucher",
      description:
        "The first step in your application is to purchase a voucher from an approved bank i.e GCB or ADB. The voucher can also be bought with mobile money. The voucher contains your SERIAL NUMBER as well as your MOH Pin.",
    },
    {
      id: 2,
      step: "02",
      title: "Fill online form",
      description:
        "The next step is to fill your online application. Log on to the MOH portal by clicking on the start here link. Input the correct details and submit your application. Please make sure your application has been submitted successfully.",
    },
    {
      id: 3,
      step: "03",
      title: "Attend the interview",
      description:
        "The next and probably the most important step is to attend the interview. You shall receive your interview date and all documents needed when attending the interview. You can also check your interview date by clicking on the link below.",
    },
    {
      id: 4,
      step: "04",
      title: "Await enrolment",
      description:
        "Successful applicants will be contacted via text messages for their reporting dates, as such, please do input an active working contact detail when filling the online application. Applicants can also check their online portal to know the reporting date.",
    },
  ];
  return (
    <>
      <section className="w-full md:h-[90dvh] grid grid-cols-1 md:grid-cols-3">
        <div className="relative h-[40dvh] md:h-full w-full bg-emerald-50">
          <Image
            fill
            src={chair}
            alt="admission"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="w-full bg-white col-span-2 py-10 md:py-36 px-5 md:px-40 space-y-10">
          <h3 className="text-4xl md:text-5xl font-light text-slate-900">
            Application Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {admissionProcessSteps.map((process) => (
              <div key={process.id} className="space-y-3">
                <h2 className="font-extrabold text-emerald-500 text-2xl">
                  {process.step}.
                </h2>
                <p className="text-xl font-bold">{process.title}</p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
