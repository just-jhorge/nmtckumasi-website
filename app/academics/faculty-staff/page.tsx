import alex from "@/public/images/alex.jpg";
import mary from "@/public/images/mary.jpg";
import { Separator } from "@/components/ui/separator";
import Image, { StaticImageData } from "next/image";

export default function Page() {
  interface Management {
    position: string;
    name: string;
    email: string;
    image: StaticImageData;
  }

  const managementData: Management[] = [
    {
      position: "Principal",
      name: "Joana Owusu-Danso",
      email: "jo6danso@gmail.com",
      image: mary,
    },
    {
      position: "Vice Principal",
      name: "Veronica Oduro-Kwarteng",
      email: "ronikwart@yahoo.com",
      image: mary,
    },
    {
      position: "Programme Head, RGN",
      name: "Yussif Issah Sumaila",
      email: "sumailay@yahoo.com",
      image: alex,
    },
    {
      position: "Programme Head, RM",
      name: "Dorcas Fati Asare",
      email: "dasaref9@gmail.com",
      image: mary,
    },
    {
      position: "Head of Finance",
      name: "Collins Amankwah",
      email: "collyman20@yahoo.com",
      image: alex,
    },
    {
      position: "Administrator",
      name: "Melvin Lisk",
      email: "melvinlisk@gmail.com",
      image: alex,
    },
    {
      position: "Head of Procurement",
      name: "Kennedy Nii Lamptey",
      email: "kennman@gmail.com",
      image: alex,
    },
    {
      position: "Quality Assurance Officer",
      name: "Mabel Ephraim",
      email: "yaakyem@yahoo.com",
      image: mary,
    },
    {
      position: "Librarian",
      name: "Ransford Sarfo-Mensah",
      email: "rsarfomensah@gmail.com",
      image: alex,
    },
    {
      position: "Matron",
      name: "Grace Antwi",
      email: "grace.antwi@gmail.com",
      image: mary,
    },
  ];
  return (
    <>
      <section className="w-full bg-black h-40 md:h-80 center">
        <div className="text-white">Meet the Team</div>
      </section>
      <div className="relative z-20 bg-white py-10 space-y-10">
        <div className="container space-y-10">
          <h2 className="text-center font-bold text-lg md:text-2xl">
            The Management Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {managementData.map((manager) => (
              <div key={manager.email}>
                <div className="relative w-full aspect-square bg-muted">
                  <Image
                    fill
                    src={manager.image}
                    alt="manager_image"
                    className="absolute w-full h-full object-cover"
                  />
                </div>
                <div className="pt-2">
                  <p className="text-xs font-light mb-1">{manager.position}</p>
                  <h3 className="text-primary font-semibold text-sm md:text-base">
                    {manager.name}
                  </h3>
                  <a
                    href={`mailTo:${manager.email}`}
                    className="text-xs md:text-sm underline text-muted-foreground underline-offset-1"
                  >
                    {manager.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <Separator />
          <h2 className="text-center font-bold text-lg md:text-2xl">
            The Faculty Members
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[...new Array(20)].map((_, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="h-full py-3 px-2 bg-neutral-100">
                  <p className="text-xs md:text-sm mb-1 font-light">
                    I.T Manager / Tutor
                  </p>
                  <h3 className="text-slate-900 group-hover:text-emerald-500 transition-colors duration-200 font-semibold text-sm md:text-base">
                    George S. Afrifa
                  </h3>
                  <a
                    href="mailTo:gsafrifa@gmail.com"
                    className="text-xs md:text-sm underline underline-offset-2 font-medium text-muted-foreground"
                  >
                    gsafrifa@gmail.com
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
