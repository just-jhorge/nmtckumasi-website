import { Metadata } from "next";
import { features } from "@/data";
import FeatureCard from "./FeatureCard";

export const metadata: Metadata = {
  title: "Programs",
};

export default function Page() {
  return (
    <div className="pt-10">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
          Programmes Offered
        </h2>
        <p className="text-muted-foreground md:text-xl">
          The programmes currently offered at our College.
        </p>
      </div>
      <div className="relative bg-white z-20 center flex-col">
        <section className="w-full h-full py-10 center">
          <div className="w-full md:w-[75rem] h-auto md:h-[15rem] grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-0 *:bg-white *:shadow-md *:border *:border-input *:rounded-md *:p-8">
            <h1 className="center text-2xl md:text-3xl text-center font-medium text-slate-800">
              Registered General Nursing (RGN)
            </h1>
            <h1 className="center text-2xl md:text-3xl text-center font-medium text-slate-800">
              Registered Midwifery (RM)
            </h1>
          </div>
        </section>
        <section className="w-full p-5 md:p-20 center bg-muted">
          <div className="w-full md:w-[75rem] grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature) => (
              <FeatureCard key={feature.topic} feature={feature} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
