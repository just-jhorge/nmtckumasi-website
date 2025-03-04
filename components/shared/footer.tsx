import Link from "next/link";
import schoolLogoLarge from "../../public/images/logo-large.webp";
import Image from "next/image";
import { Separator } from "../ui/separator";
import { FooterLink } from "@/types";

const Footer = () => {
  const footerLinks: FooterLink[] = [
    {
      id: 1,
      title: "The College",
      links: [
        { id: 101, href: "/about", label: "About Us" },
        { id: 102, href: "/academics/faculty-staff", label: "Faculty & Staff" },
        { id: 103, href: "/contact-us", label: "Contact Us" },
      ],
    },
    {
      id: 2,
      title: "Admissions & Academics",
      links: [
        {
          id: 201,
          href: "/admissions/application-process",
          label: "Admissions",
        },
        {
          id: 202,
          href: "/docs/entry-requirements.pdf",
          label: "Entry Requirements",
        },
        {
          id: 203,
          href: "/academics/programmes",
          label: "Courses & Programmes",
        },
        { id: 204, href: "/faqs", label: "FAQs" },
      ],
    },
    {
      id: 3,
      title: "Students & Alumini",
      links: [
        {
          id: 301,
          href: "https://portal.healthtraining.gov.gh",
          label: "Student Portal",
        },
        { id: 302, href: "/library/e-library", label: "E-Library" },
        { id: 303, href: "/careers", label: "Career Opportunities" },
        { id: 304, href: "/students-alumini/alumini", label: "Alumini" },
      ],
    },
    {
      id: 4,
      title: "News & Events",
      links: [
        { id: 401, href: "/media/news", label: "Latest News" },
        { id: 402, href: "/media/events", label: "Upcoming Events" },
        {
          id: 403,
          href: "https://www.instagram.com/nmtckumasi",
          label: "Gallery",
        },
      ],
    },
  ];

  return (
    <footer className="text-white">
      <div className="bg-slate-950 py-10 md:py-16">
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-14 md:gap-20">
          <Image
            src={schoolLogoLarge}
            alt="logo"
            height={150}
            width={150}
            className="-translate-y-4"
          />
          {footerLinks.map((link) => (
            <div className="" key={link.id}>
              <h3 className="mb-1">{link.title}</h3>
              <Separator className="mb-3" />
              <div className="flex flex-col items-start space-y-2 *:w-full *:text-muted-foreground">
                {link.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="w-full truncate hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black text-xs text-muted-foreground py-3">
        <div className="container flex-between">
          <p className="max-w-[9resmm] md:w-full">
            &copy; 2024 NMTC, Kumasi. All rights reserved.
          </p>
          <p className="text-right max-w-[9resmm] md:w-full">
            Designed &amp; built by{" "}
            <Link
              href="https://esatechgh.com"
              target="_blank"
              className="text-blue-500 underline"
            >
              EsaTech Inc
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export { Footer };
