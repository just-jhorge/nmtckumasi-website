import Image from "next/image";
import { Metadata } from "next";
import chair from "@/public/images/chair.webp";
import { admissionProcessSteps } from "@/data";

export const metadata: Metadata = {
  title: "Application process",
};

export default function Page() {
  return (
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
  );
}
