import { navigationLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import schoolLogo from "../../public/images/logo.webp";
import { AlignJustify, ChevronDown } from "lucide-react";
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

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white h-16 center border-b border-input shadow-sm">
      <div className="container flex-between">
        <div className="flex items-center gap-1">
          <Image src={schoolLogo} alt="logo" height={48} width={43} />
          <p className="text-xs text-emerald-600 leading-none">
            <span className="font-bold">NURSING AND MIDWIFERY</span> <br />
            Training College, Kumasi
          </p>
        </div>
        <div className="hidden md:flex space-x-5">
          {navigationLinks.map((link) =>
            link.subMenu ? (
              <div
                key={link.id}
                className="flex items-center cursor-pointer px-0 py-0"
              >
                {link.label} <ChevronDown className="h-4 w-4 ml-1" />
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
              {navigationLinks.map((link) => (
                <SheetClose key={link.id} asChild>
                  <Link href={link.href} className="text-lg font-light">
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

Navbar.displayName = "Navbar";

export { Navbar };
