"use client";

import Image, { StaticImageData } from "next/image";

interface ManagementCardProps {
  position: string;
  name: string;
  email: string;
  image: StaticImageData;
}

const ManagementCard = ({
  position,
  name,
  email,
  image,
}: ManagementCardProps) => {
  return (
    <div key={email}>
      <div className="relative w-full aspect-square bg-muted">
        <Image
          fill
          src={image}
          alt="manager_image"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="pt-2">
        <p className="text-xs font-light mb-1">{position}</p>
        <h3 className="text-primary font-semibold text-sm md:text-base">
          {name}
        </h3>
        <a
          href={`mailTo:${email}`}
          className="text-xs md:text-sm underline text-muted-foreground underline-offset-1"
        >
          {email}
        </a>
      </div>
    </div>
  );
};

export default ManagementCard;
