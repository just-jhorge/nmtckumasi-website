import { NavigationLink } from "@/types";

export const navigationLinks: NavigationLink[] = [
  { id: 1, href: "/about", label: "About Us" },
  { id: 2, href: "/academics", label: "Academics" },
  {
    id: 3,
    href: "/admissions",
    label: "Admissions",
    subMenu: [
      {
        id: 301,
        href: "/admissions/entry-requirements",
        label: "Entry Requirements",
      },
      {
        id: 302,
        href: "/admissions/admitted",
        label: "Admitted Applicants",
      },
    ],
  },
  {
    id: 4,
    href: "/library",
    label: "Library",
    subMenu: [
      {
        id: 401,
        href: "/library/e-library",
        label: "E-Library",
      },
    ],
  },
  { id: 5, href: "/media", label: "Media" },
  { id: 6, href: "/alumini", label: "Alumini" },
];
