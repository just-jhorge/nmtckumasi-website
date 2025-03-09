"use client";

import { Calendar1 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

const UpcomingEvents = () => {
  const isMobile = useIsMobile();

  return (
    <section id="events" className="w-full bg-emerald-50 py-10">
      <div className="container center flex-col text-center space-y-10">
        <div className="space-y-5">
          <h2 className="font-extrabold text-xl md:text-2xl text-emerald-900">
            Upcoming Events
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            There are not events at the moment
          </p>
        </div>
        <Button
          asChild
          className="text-sm md:text-base"
          size={isMobile ? "default" : "lg"}
        >
          <Link href="/media/events">
            <Calendar1 className="mr-2 size-5" />
            See all events
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default UpcomingEvents;
