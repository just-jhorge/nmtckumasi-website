"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function ApplyButton() {
  const isMobile = useIsMobile();

  return (
    <Button
      size={isMobile ? "default" : "lg"}
      className={cn(isMobile ? "text-sm" : "")}
    >
      APPLY TODAY
    </Button>
  );
}
