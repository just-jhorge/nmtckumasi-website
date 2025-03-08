import { Metadata } from "next";
import { features } from "@/data";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Programs",
};

export default function Page() {
  return (
    <>
      <div className="w-full bg-black h-40 center">
        <div className="text-white text-lg md:text-xl font-semibold">
          Programs
        </div>
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
              <div
                key={feature.topic}
                className="w-full min-h-[13rem] px-4 py-5 space-y-2 border border-input rounded-md shadow-md bg-white"
              >
                <h3 className="text-base font-medium">{feature.topic}</h3>
                <Separator />
                <p className="text-sm text-muted-foreground">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
