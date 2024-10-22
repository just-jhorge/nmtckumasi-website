import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Page() {
  interface Management {
    position: string;
    name: string;
    email: string;
  }

  const managementData: Management[] = [
    {
      position: "Principal",
      name: "Joana Owusu-Danso",
      email: "jo6danso@gmail.com",
    },
    {
      position: "Vice Principal",
      name: "Veronica Oduro-Kwarteng",
      email: "ronikwart@yahoo.com",
    },
    {
      position: "Programme Head, RGN",
      name: "Yussif Issah Sumaila",
      email: "sumailay@yahoo.com",
    },
    {
      position: "Programme Head, RM",
      name: "Dorcas Fati Asare",
      email: "dasaref9@gmail.com",
    },
    {
      position: "Administrator",
      name: "Theophilus H. Azaanaang",
      email: "tazaanaang@gmail.com",
    },
    {
      position: "Head of Finance",
      name: "Collins Amankwah",
      email: "collyman20@yahoo.com",
    },
    {
      position: "Head of Procurement",
      name: "Kennedy Nii Lamptey",
      email: "kennman@gmail.com",
    },
    {
      position: "Matron",
      name: "Grace Antwi",
      email: "grace.antwi@gmail.com",
    },
    {
      position: "Librarian",
      name: "Ransford Sarfo-Mensah",
      email: "rsarfomensah@gmail.com",
    },
    {
      position: "Hostel Warden",
      name: "Veronica Asamoah",
      email: "vasamoah@gmail.com",
    },
  ];
  return (
    <>
      <section className="sticky top-16 z-10 w-full bg-black h-40 md:h-80 center">
        <div className="text-white left-0 right-0 mx-auto">Meet the Team</div>
      </section>
      <div className="relative z-20 bg-white py-10 space-y-10">
        <div className="container space-y-10">
          <h2 className="text-center font-bold text-3xl">
            The Management Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {managementData.map((manager) => (
              <div key={manager.email} className="h-96">
                <div className="h-2/3 bg-green-500"></div>
                <div className="h-1/3 py-4">
                  <p className="text-xs font-light mb-2">{manager.position}</p>
                  <h3 className="text-slate-900 font-semibold text-xl">
                    {manager.name}
                  </h3>
                  <a
                    href={`mailTo:${manager.email}`}
                    className="text-sm underline"
                  >
                    {manager.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <Separator />
          <h2 className="text-center font-bold text-3xl">
            The Faculty Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[...new Array(20)].map((_, idx) => (
              <div key={idx} className="h-32 bg-red-500 group cursor-pointer">
                <div className="h-full p-4 bg-neutral-100">
                  <p className="text-sm mb-1 font-light">Principal</p>
                  <h3 className="text-slate-900 group-hover:text-emerald-500 transition-colors duration-200 font-semibold text-2xl">
                    Mrs. Joana Owusu-Danso
                  </h3>
                  <a
                    href="mailTo:jo6danso@gmail.com"
                    className="text-sm underline font-medium"
                  >
                    jo6danso@gmail.com
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
