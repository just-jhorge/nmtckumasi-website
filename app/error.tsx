"use client";

import { Button } from "@/components/ui/button";

// import { useEffect } from "react";

export default function Error() {
  // useEffect(() => {
  //   console.error(error);
  // }, [error]);

  return (
    <main className="h-[85dvh] center">
      <div className="center flex-col space-y-2">
        <h3 className="text-destructive font-medium">Error</h3>
        <p className="text-muted-foreground">Something went wrong!</p>
        <Button size="sm" className="text-sm">
          Try again
        </Button>
      </div>
    </main>
  );
}
