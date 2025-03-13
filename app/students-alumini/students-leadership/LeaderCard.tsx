"use client";

import Image, { StaticImageData } from "next/image";

interface LeaderCardProps {
  position: string;
  name: string;
  image: StaticImageData;
}

const LeaderCard = ({ position, name, image }: LeaderCardProps) => {
  return (
    <div>
      <div className="relative w-full aspect-square bg-muted rounded-md overflow-hidden">
        <Image
          fill
          src={image}
          alt="manager_image"
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="pt-2">
        <p className="text-xs font-light mb-1 text-muted-foreground">
          {position}
        </p>
        <h3 className="text-primary font-semibold text-sm md:text-base">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default LeaderCard;
