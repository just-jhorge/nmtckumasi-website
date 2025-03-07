"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import { useState } from "react";
import { format } from "date-fns";
import { Event } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import placeholder from "@/public/images/placeholder.svg";
import { Banknote, Calendar, Clock, MapPin, User, Users } from "lucide-react";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);

  return (
    <Card
      key={event.id}
      className="overflow-hidden rounded-md shadow-sm flex flex-row md:flex-col h-full"
    >
      <div className="w-full bg-emerald-100">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg md:text-xl">{event.title}</CardTitle>
            <Badge>SRC Week</Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{format(event.date, "EEEE, do MMMM, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>7:00pm - 11:00pm</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>{event.location}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Dialog
            open={openDialogId === event.id}
            onOpenChange={(open) => setOpenDialogId(open ? event.id : null)}
          >
            <DialogTrigger asChild>
              <Button className="w-full rounded-sm">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl">{event.title}</DialogTitle>
                <DialogDescription>
                  <Badge variant="outline" className="mt-2">
                    SRC Week
                  </Badge>
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-6 py-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                  <Image
                    fill
                    alt={event.title}
                    src={event.flyer || placeholder}
                    className="absolute w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Date:</span>
                      <span>{format(event.date, "EEEE, do MMMM, yyyy")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Time:</span>
                      <span>7:00pm - 11:00pm</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Location:</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Attendees:</span>
                      <span>{event.capacity || "Open"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Organizer:</span>
                      <span>SRC</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Banknote className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">Price:</span>
                      <span>{event.fee || "Free"}</span>
                    </div>
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium mb-2">About this event</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>

                {/* <div>
                      <h3 className="font-medium mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div> */}

                <DialogClose asChild>
                  <div className="flex justify-end">
                    <Button>Got it 👍🏾</Button>
                  </div>
                </DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </div>
    </Card>
  );
};

export default EventCard;
