import { Metadata } from "next";
import { srcExecutives } from "@/data/staff";
import LeaderCard from "./LeaderCard";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Faculty staff",
};

export default function Page() {
  return (
    <>
      <section className="w-full bg-black h-40 md:h-80 center">
        <div className="text-white">The Student Leadership</div>
      </section>
      <div className="relative z-20 bg-white py-10 space-y-10">
        <div className="container space-y-10">
          {/* <h2 className="text-center font-bold text-lg md:text-2xl">
            The Management Team
          </h2> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {srcExecutives.map((executive) => (
              <LeaderCard
                key={executive.name}
                name={executive.name}
                email={executive.email}
                image={executive.image}
                position={executive.position}
              />
            ))}
          </div>
          <Separator />
          <h2 className="text-center font-bold text-lg md:text-2xl">
            Hall of fame (Past SRC Presidents)
          </h2>
          <ul className="list-inside text-sm md:text-base">
            {[
              "John Doe (2017 - 2018)",
              "John Doe (2018 - 2019)",
              "John Doe (2019 - 2020)",
              "John Doe (2020 - 2021)",
              "John Doe (2021 - 2022)",
              "John Doe (2022 - 2023)",
              "John Doe (2023 - 2024)",
              "John Doe (2024 - Present)",
            ].map((president) => (
              <li key={president}>{president}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
