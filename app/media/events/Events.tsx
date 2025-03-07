"use client";

import Loading from "@/app/loading";
import { kyInstance } from "@/lib/ky";
import { Event } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import EventCard from "./EventCard";

const Events = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["events"],
    queryFn: () => kyInstance.get("/api/events").json<Event[]>(),
  });

  if (isLoading)
    return (
      <>
        <section className="w-full bg-black h-40 center">
          <div className="text-white">Upcoming Events</div>
        </section>
        <Loading />
      </>
    );

  if (error) {
    console.error(error);

    return <p>Something went wrong fetching events. {error.message}</p>;
  }

  if (!data) {
    return <p>No data found</p>;
  }

  console.log(data);

  return (
    <div className="container space-y-5 py-7">
      {/* <section className="w-full bg-black h-40 center">
        <div className="text-white">Upcoming Events</div>
      </section> */}
      <div>
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="text-lg text-muted-foreground">
          Discover and join exciting events coming up.
        </p>
      </div>
      <section className="w-full bg-white">
        <div className="py-4">
          {data.length !== 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground text-xl md:text-2xl font-semibold py-20">
              No events found
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Events;
