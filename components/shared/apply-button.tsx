"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ApplyButton() {
  const isMobile = useIsMobile();

  return (
    <Button
      asChild
      size={isMobile ? "default" : "lg"}
      className={cn(
        "bg-emerald-700 hover:bg-emerald-800 transition-colors duration-300",
        isMobile ? "text-sm" : ""
      )}
    >
      <Link
        href="https://portal.healthtraining.gov.gh/application"
        target="_blank"
      >
        APPLY TODAY
      </Link>
    </Button>
  );
}
