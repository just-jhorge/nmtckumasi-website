"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import logoLarge from "@/public/images/logo-large.webp";
import { useIsMobile } from "@/hooks/use-mobile";

export default function ContactForm() {
  const isMobile = useIsMobile();

  return (
    <section className="relative bg-white z-20 w-full md:h-[30rem] center">
      <div className="h-full w-full flex flex-col md:flex-row">
        <div className="w-full bg-neutral-50 center">
          <div className="max-w-xl px-4 py-8 md:px-0 md:py-0">
            <div className="flex items-center">
              <Image
                src={logoLarge}
                alt="school_logo"
                height={200}
                width={isMobile ? 100 : 150}
              />
              <div className="text-green-700 space-y-2">
                <div className="text-sm md:text-base">
                  <h4 className="font-black tracking-wider">
                    NURSING AND MIDWIFERY
                  </h4>
                  <p className="tracking-wide">Training College, Kumasi</p>
                </div>
                <h4 className="font-medium text-sm md:text-base">
                  ENTER TO LEARN, GO OUT TO SERVE!
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-emerald-200/50 center">
          <div className="max-w-xl space-y-3 px-4 py-8 md:px-0 md:py-0">
            <h3 className="font-black text-lg capitalize">Get in touch</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-full">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" />
                </div>
                <div className="w-full">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" />
                </div>
              </div>
              <div className="w-full">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" className="min-h-44" />
              </div>
              <Button size="sm">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
