import React from "react";
import Image from "next/image";
import comingSoon from "@/public/images/comingSoon.png";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transcripts & Certificates",
};

export default function Page() {
  return (
    <section className="w-full h-[85dvh] center">
      <div className="center flex-col space-y-5">
        <Image src={comingSoon} alt="coming_soon" height={300} width={300} />
        <p className="text-muted-foreground">Under construction...</p>
      </div>
    </section>
  );
}
