import { NavigationLink } from "@/types";

export const navigationLinks: NavigationLink[] = [
  { id: 1, href: "/about", label: "About", value: "about" },
  {
    id: 2,
    href: "",
    label: "Academics",
    value: "academics",
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
        href: "#",
        label: "Academic Calendar",
        isAsset: true,
        assetLocation: "/docs/academic-calendar.pdf",
      },
    ],
  },
  {
    id: 3,
    href: "",
    label: "Admissions",
    value: "admissions",
    subMenu: [
      {
        id: 301,
        href: "#",
        isAsset: true,
        assetLocation: "/docs/entry-requirements.pdf",
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
    value: "library",
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
    value: "media",
    subMenu: [
      { id: 501, href: "/media/news", label: "News" },
      { id: 502, href: "/media/events", label: "Events" },
      { id: 503, href: "/media/gallery", label: "Gallery" },
    ],
  },
  {
    id: 6,
    href: "",
    label: "Students & Alumini",
    value: "students",
    subMenu: [
      {
        id: 601,
        href: "/students-alumini/students-leadership",
        label: "Student Leadership",
      },
      { id: 602, href: "/students-alumini/campus-life", label: "Campus Life" },
      { id: 603, href: "/students-alumini/Alumini", label: "Alumini" },
    ],
  },
];
