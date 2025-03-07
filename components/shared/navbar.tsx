import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";
import Image from "next/image";
import { navigationLinks } from "@/data";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import schoolLogo from "../../public/images/logo.webp";
import { AlignJustify, ChevronDown } from "lucide-react";

const Navbar = () => {
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
                        {link.isAsset ? (
                          <a
                            href={link.assetLocation}
                            className="text-sm"
                            download={`${link.label
                              .toLowerCase()
                              .split(" ")
                              .join("-")}.pdf`}
                          >
                            {link.label}{" "}
                            <span className="text-[10px] bg-primary py-0.5 px-1 text-white rounded-sm">
                              asset
                            </span>
                          </a>
                        ) : (
                          <Link href={link.href} className="text-sm">
                            {link.label}
                          </Link>
                        )}
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
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="text-left text-2xl">Menu</SheetTitle>
              <Separator />
              <SheetDescription />
            </SheetHeader>
            <div className="py-4 flex flex-col items-start space-y-5 mt-5">
              {navigationLinks.map((link) =>
                link.subMenu ? (
                  <Collapsible key={link.id} className="w-[350px] space-y-2">
                    <div className="flex items-center justify-between">
                      <CollapsibleTrigger asChild className="w-full">
                        <div className="flex items-center gap-1">
                          <span className="text-xl">{link.label}</span>
                          <ChevronDown className="h-4 w-4 text-muted-foreground ml-2" />
                        </div>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="flex flex-col items-start space-y-3 transition-all duration-150 border-l border-input pl-5">
                      {link.subMenu.map((link) => (
                        <SheetClose key={link.id} asChild>
                          {link.isAsset ? (
                            <a
                              href={link.assetLocation}
                              className="text-xl text-muted-foreground"
                              download={`${link.label
                                .toLowerCase()
                                .split(" ")
                                .join("-")}.pdf`}
                            >
                              {link.label}{" "}
                              <span className="text-[10px] bg-primary py-0.5 px-1 text-white rounded-sm">
                                asset
                              </span>
                            </a>
                          ) : (
                            <Link
                              href={link.href}
                              className="text-lg text-muted-foreground"
                            >
                              {link.label}
                            </Link>
                          )}
                        </SheetClose>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SheetClose key={link.id} asChild>
                    <Link href={link.href} className="text-xl">
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
