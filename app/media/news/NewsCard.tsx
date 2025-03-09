"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import placeholder from "@/public/images/placeholder.svg";
import Link from "next/link";

const NewsCard = () => {
  return (
    <div className="rounded-lg h-48 md:h-96 w-full border border-input shadow-sm flex flex-row md:flex-col overflow-hidden">
      <div className="relative h-full md:h-1/2 w-full bg-muted overflow-hidden">
        <Image
          fill
          src={placeholder}
          alt="news_card"
          className="absolute h-full w-full object-cover"
        />
      </div>
      <div className="h-full flex flex-col justify-between md:h-1/2 w-full bg-white p-2.5 space-y-3">
        <div className="space-y-1.5">
          <p className="text-xs text-muted-foreground">March 6, 2025</p>
          <h3 className="text-xs md:text-sm font-semibold line-clamp-2">
            Scientists Discover Potential Breakthrough in Cancer Treatment
          </h3>
          <p className="text-xs line-clamp-3 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quis
            ratione velit quasi error. Sint ducimus, id quisquam molestiae
            expedita eius nam iusto libero nostrum rem beatae cum ab odio.
          </p>
        </div>
        <Button asChild size="sm" className="w-full rounded-md">
          <Link href={`/media/news/some-news-article`}>Read more</Link>
        </Button>
      </div>
    </div>
  );
};

export default NewsCard;
