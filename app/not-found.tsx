"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <main className="h-[85dvh] center">
      <div className="center flex-col space-y-2">
        <h2 className="font-semibold">Not Found</h2>
        <p className="text-muted-foreground">
          Could not find requested resource
        </p>
        <Button variant="secondary" onClick={() => router.back()}>
          Go back
        </Button>
      </div>
    </main>
  );
}
