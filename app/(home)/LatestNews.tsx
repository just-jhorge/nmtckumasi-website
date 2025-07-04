"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { BookOpen } from "lucide-react";
import Link from "next/link";

export default function LatestNews() {
  const isMobile = useIsMobile();

  return (
    <section id="events" className="w-full py-10">
      <div className="container center flex-col text-center space-y-10">
        <div className="space-y-5">
          <h2 className="font-extrabold text-2xl md:text-4xl text-emerald-900">
            Latest News
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            No items found
          </p>
        </div>
        <Button
          asChild
          className="text-sm md:text-base"
          size={isMobile ? "default" : "lg"}
        >
          <Link href="/media/news">
            <BookOpen className="mr-2 size-5" />
            Read more
          </Link>
        </Button>
      </div>
    </section>
  );
}
