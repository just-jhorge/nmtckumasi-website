import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full min-h-[65svh] flex items-center justify-center">
      <Button asChild>
        <Link href="/docs/instructional-sheet.pdf" download>
          Download Instructional Sheet
        </Link>
      </Button>
    </div>
  );
}
