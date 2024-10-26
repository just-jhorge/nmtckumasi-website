import Image from "next/image";
import React from "react";
import comingSoon from "../../../../public/images/comingSoon.png";

export default function Page() {
  return (
    <section className="w-full h-[85dvh] center">
      <div className="center flex-col space-y-5">
        <Image src={comingSoon} alt="coming_soon" height={300} width={300} />
        <p className="text-muted-foreground">Page coming soon...</p>
      </div>
    </section>
  );
}
