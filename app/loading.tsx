import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="h-[85dvh] center">
      <div className="flex items-center gap-2">
        <Loader2 className="size-4 animate-spin" />
        Loading...
      </div>
    </main>
  );
}
