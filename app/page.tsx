import Image from "next/image";
import { BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";
import LatestNews from "./_components/LatestNews";
import headerImage from "@/public/images/header.webp";
import ApplyButton from "@/components/shared/apply-button";
import UpcomingEvents from "./_components/UpcomingEvents";

export default function Page() {
  return (
    <>
      <section
        id="header"
        className="relative flex items-center justify-center w-full h-[70dvh] md:h-[85dvh] bg-black"
      >
        <Image
          fill
          src={headerImage}
          alt="header_image"
          className="absolute h-full w-full object-cover brightness-75"
        />
        <div className="absolute max-w-4xl flex items-center flex-col space-y-5 md:space-y-7">
          <h2 className="text-center text-white text-3xl md:text-6xl font-black">
            Nursing and Midwifery Training College, Kumasi
          </h2>
          <ApplyButton />
        </div>
      </section>
      <section
        id="introduction"
        className="h-auto md:h-[45rem] w-full grid grid-cols-1 md:grid-cols-6"
      >
        <div className="h-full col-span-4 py-16 md:py-20 center center">
          <div className="container space-y-4 md:space-y-8">
            <h1 className="text-xl md:text-4xl font-bold">Why NMTC, KUMASI?</h1>
            <p className="text-sm md:text-base w-full md:max-w-2xl text-muted-foreground">
              Choosing Nursing and Midwifery Training College in Kumasi offers a
              distinctive and enriching educational experience that sets it
              apart. The institution is renowned for its commitment to
              excellence in healthcare education, providing a comprehensive
              curriculum that integrates theoretical knowledge with hands-on
              practical training. The college boasts state-of-the-art facilities
              and a dedicated faculty of experienced healthcare professionals,
              ensuring that students receive the highest quality education.
              Additionally, the college&apos;s strong emphasis on ethical and
              compassionate care fosters a culture of empathy, preparing
              students to serve with integrity and professionalism. Overall,
              Nursing and Midwifery Training College, Kumasi, stands out as a
              premier institution that not only imparts top-notch education but
              also instills values crucial for making a positive impact in the
              healthcare sector.
            </p>
            <Button size="lg">
              <BookOpenText className="mr-2" size={20} />
              Read More
            </Button>
          </div>
        </div>
        <div className="h-full col-span-2 grid grid-cols-1 text-white *:px-10 *:md:px-16 *:py-12 *:flex *:flex-col *:items-start *:justify-center">
          <div className="bg-yellow-300">
            <h4 className="text-2xl">01.</h4>
            <h1 className="text-xl md:text-3xl font-extrabold">
              QUALITY EDUCATION
            </h1>
          </div>
          <div className="bg-black">
            <h4 className="text-2xl">02.</h4>
            <h1 className="text-xl md:text-3xl font-extrabold">
              EXPERIENCED FACULTY
            </h1>
          </div>
          <div className="bg-green-600">
            <h4 className="text-2xl">03.</h4>
            <h1 className="text-xl md:text-3xl font-extrabold">
              CLINICAL EXCELLENCE
            </h1>
          </div>
        </div>
      </section>
      <section
        id="statistics"
        className="w-full bg-neutral-400 text-white py-10 md:py-20 center"
      >
        <div className="w-full md:max-w-3xl divide-x-0 md:divide-x-2 divide-neutral-300 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-3 *:md:pl-3 *:pt-3 first:*:md:pl-0">
          <div className="center flex-col gap-2">
            <p className="uppercase font-light text-sm">courses taught</p>
            <h1 className="text-6xl font-extrabold">40+</h1>
          </div>
          <div className="center flex-col gap-2">
            <p className="uppercase font-light text-sm">years completed</p>
            <h1 className="text-6xl font-extrabold">65+</h1>
          </div>
          <div className="center flex-col gap-2">
            <p className="uppercase font-light text-sm">graduated students</p>
            <h1 className="text-6xl font-extrabold">3000+</h1>
          </div>
        </div>
      </section>
      <UpcomingEvents />
      <LatestNews />
      <section
        id="home_gallery"
        className="w-full h-[40rem] md:h-[30rem] bg-white grid grid-cols-2 md:grid-cols-6 grid-rows-12 gap-2"
      >
        <div className="relative bg-muted row-span-3 md:row-span-4">
          <Image
            fill
            src={headerImage}
            alt="mansory_images"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative bg-muted row-span-3 md:row-span-4">
          <Image
            fill
            src={headerImage}
            alt="mansory_images"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative bg-muted col-span-2 row-span-3 md:row-span-5">
          <Image
            fill
            src={headerImage}
            alt="mansory_images"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative bg-muted md:col-span-2 row-span-3 md:row-span-12">
          <Image
            fill
            src={headerImage}
            alt="mansory_images"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative bg-muted md:col-span-2 row-span-3 md:row-span-8">
          <Image
            fill
            src={headerImage}
            alt="mansory_images"
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="relative bg-muted col-span-2 row-span-3 md:row-span-7">
          <Image
            fill
            src={headerImage}
            alt="mansory_images"
            className="absolute h-full w-full object-cover"
          />
        </div>
      </section>
    </>
  );
}
