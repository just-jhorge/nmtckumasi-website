"use client";

import { navigationLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import schoolLogo from "../../public/images/logo.webp";
import { AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white h-16 center border-b border-input shadow-sm">
      <div className="container flex-between">
        <Link href="/" className="flex items-center gap-1">
          <Image src={schoolLogo} alt="logo" height={48} width={43} />
          <p className="text-xs text-emerald-600 leading-none">
            <span className="font-bold">NURSING AND MIDWIFERY</span> <br />
            Training College, Kumasi
          </p>
        </Link>
        <div className="hidden md:flex relative space-x-5">
          {navigationLinks.map((link) =>
            link.subMenu ? (
              <div key={link.id} className="relative group">
                <Link href="#" className="flex items-center">
                  {link.label}
                </Link>
                <div className="absolute left-0 mt-2 w-[13.25rem] border border-input bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out z-10">
                  <ul className="px-1 py-2">
                    {link.subMenu.map((link) => (
                      <li
                        key={link.id}
                        className="px-4 py-2 hover:bg-accent rounded-md"
                      >
                        <Link href={link.href} className="text-sm">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link key={link.id} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="block md:hidden center"
            >
              <AlignJustify size={25} />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left text-2xl">Menu</SheetTitle>
              <Separator />
              <SheetDescription />
            </SheetHeader>
            <div className="py-4 flex flex-col items-start space-y-3 mt-5">
              {navigationLinks.map((link) =>
                link.subMenu ? (
                  <div key={link.id} onClick={() => toggleDropdown(link.label)}>
                    <div>{link.label}</div>
                    <div
                      className={`absolute flex flex-col items-start space-y-2 left-6 border border-input mt-2 w-[17rem] p-4 bg-white shadow-lg rounded-sm z-10 ${
                        openDropdown === link.label ? "block" : "hidden"
                      }`}
                    >
                      {link.subMenu.map((link) => (
                        <SheetClose key={link.id} asChild>
                          <Link href={link.href} className="">
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                ) : (
                  <SheetClose key={link.id} asChild>
                    <Link href={link.href} className="">
                      {link.label}
                    </Link>
                  </SheetClose>
                )
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

Navbar.displayName = "Navbar";

export { Navbar };
