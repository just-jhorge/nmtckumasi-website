import Image from "next/image";
import { Resource } from "@/types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <div className="bg-white border border-input p-3 md:p-4 h-44 md:h-48 w-full rounded-md">
      <div className="h-full w-full flex gap-3">
        <div className="relative h-full w-2/5 bg-muted rounded-sm overflow-hidden border border-input">
          <Image
            fill
            src={resource.imageSrc}
            alt={resource.name.toLowerCase().split(" ").join("_")}
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div className="flex-1 h-full flex flex-col justify-between">
          <div className="space-y-2">
            <h3 className="text-sm md:text-base font-bold">{resource.name}</h3>
            <div className="flex gap-1">
              {resource.subjects.map((subject) => (
                <div
                  key={subject}
                  className="w-fit py-0.5 px-1.5 text-xs rounded-full border border-input font-medium"
                >
                  {subject}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <Button asChild size="sm" className="w-fit">
              <Link
                target="_blank"
                href={resource.href}
                className="flex items-center gap-1"
              >
                <ExternalLink className="size-4" /> Access
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
