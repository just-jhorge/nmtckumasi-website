import React from "react";
import Marquee from "react-fast-marquee";

export default function AdmissionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full bg-destructive p-2 text-destructive-foreground">
        <Marquee pauseOnHover speed={30}>
          <p className="text-sm md:text-base px-5 md:px-10">
            Beware for fraudsters! NMTC, Kumasi DOES NOT operate through any
            individual. The ONLY admission process is as stated below. NMTC,
            Kumasi will not ask you to send any monies to any mobile money
            number or any private bank account number. All payments are done
            through the College&apos;s accounts office where you will be issued
            an official receipt. Please be ware and stay safe. We will NOT be
            accountable for any fraudulent activities.
          </p>
        </Marquee>
      </div>
      <div>{children}</div>
    </>
  );
}
