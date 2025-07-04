import React from "react";
import Image from "next/image";
import headerImage from "@/public/images/header.webp";

function Gallery() {
  return (
    <section className="w-full h-[40rem] md:h-[30rem] bg-white grid grid-cols-2 md:grid-cols-6 grid-rows-12 gap-2">
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
  );
}

export default Gallery;
