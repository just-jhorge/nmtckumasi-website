"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ApplyButton() {
  return (
    <Button asChild>
      <Link
        target="_blank"
        className="text-sm"
        href="https://register.healthtraining.gov.gh/dashboard"
      >
        <Send className="size-5 mr-2" />
        Apply Now
      </Link>
    </Button>
  );
}
