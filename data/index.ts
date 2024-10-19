import { NavigationLink } from "@/types";

export const navigationLinks: NavigationLink[] = [
  { id: 1, href: "/about", label: "About Us" },
  {
    id: 2,
    href: "",
    label: "Academics",
    subMenu: [
      { id: 201, href: "/academics/programmes", label: "Programmes" },
      { id: 202, href: "/academics/faculty-staff", label: "Faculty & Staff" },
      {
        id: 203,
        href: "/academics/transcripts-certificates",
        label: "Transcripts & Certificates",
      },
      {
        id: 204,
        href: "/academics/academic-calendar",
        label: "Academic Calendar",
      },
    ],
  },
  {
    id: 3,
    href: "",
    label: "Admissions",
    subMenu: [
      {
        id: 301,
        href: "/admissions/entry-requirements",
        label: "Entry Requirements",
      },
      {
        id: 302,
        href: "/admissions/application-process",
        label: "Application Process",
      },
      {
        id: 303,
        href: "/admissions/interview-details",
        label: "Interview Details",
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
        href: "/library/about",
        label: "About the Library",
      },
      {
        id: 402,
        href: "/library/guide",
        label: "Library Guide",
      },
      {
        id: 403,
        href: "/library/e-library",
        label: "E-Library",
      },
    ],
  },
  {
    id: 5,
    href: "",
    label: "Media",
    subMenu: [
      { id: 501, href: "/news", label: "News" },
      { id: 502, href: "/events", label: "Events" },
      { id: 503, href: "/gallery", label: "Gallery" },
    ],
  },
  {
    id: 6,
    href: "",
    label: "Students & Alumini",
    subMenu: [
      { id: 601, href: "/student-leadership", label: "Student Leadership" },
      { id: 602, href: "/campus-life", label: "Campus Life" },
      { id: 603, href: "/Alumini", label: "Alumini" },
    ],
  },
];
