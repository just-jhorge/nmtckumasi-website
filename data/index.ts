import { NavigationLink } from "@/types";

export const navigationLinks: NavigationLink[] = [
  { id: 1, href: "/about", label: "About", value: "about" },
  {
    id: 2,
    href: "#",
    label: "Academics",
    value: "academics",
    subMenu: [
      { id: 201, href: "/academics/programs", label: "Programs" },
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
        href: "/admissions/application-process",
        label: "Application Process",
      },
      // {
      //   id: 302,
      //   href: "/admissions/interview-details",
      //   label: "Interview Details",
      // },
      // {
      //   id: 303,
      //   href: "/admissions/admissions-list",
      //   label: "Admissions List",
      // },
      {
        id: 304,
        href: "#",
        isAsset: true,
        assetLocation: "/docs/entry-requirements.pdf",
        label: "Entry Requirements",
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
        label: "The Library",
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
      {
        id: 503,
        href: "https://www.instagram.com/nmtckumasi",
        label: "Gallery",
      },
    ],
  },
  {
    id: 6,
    href: "",
    label: "Students & Alumini",
    value: "students",
    subMenu: [
      { id: 603, href: "/students-alumini/Alumini", label: "Alumini" },
      { id: 602, href: "/students-alumini/campus-life", label: "Campus Life" },
      {
        id: 601,
        href: "/students-alumini/students-leadership",
        label: "Student Leadership",
      },
    ],
  },
];

export const features = [
  {
    topic: "Online Education",
    content:
      "At the Nursing and Midwifery Training College, Kumasi, we embrace the power of online education to enhance learning flexibility and accessibility. Our innovative e-learning platform allows students to engage with course materials, participate in discussions, and collaborate with peers from anywhere. This modern approach ensures that aspiring nurses and midwives can balance their studies with personal and professional commitments while receiving a high-quality education.",
  },
  {
    topic: "Degrees",
    content:
      "Our college offers comprehensive degree programs designed to equip students with the essential knowledge and skills needed for a successful career in nursing and midwifery. Each degree program combines rigorous academic coursework with practical, hands-on training in clinical settings. Graduates emerge as competent healthcare professionals, ready to meet the diverse needs of patients and communities.",
  },
  {
    topic: "Certificates",
    content:
      "Nursing and Midwifery Training College, Kumasi, provides various certificate programs tailored for those seeking to enhance their qualifications or specialize in specific areas of healthcare. These certificates offer targeted training in skills such as maternal and child health, geriatric care, and emergency response. They serve as a valuable asset for career advancement and deepen students’ understanding of critical healthcare practices.",
  },
  {
    topic: "Career Training",
    content:
      "Our commitment to career training at the Nursing and Midwifery Training College, Kumasi, ensures that students receive the practical experience necessary to thrive in the healthcare environment. Through clinical placements and simulated learning experiences, students develop critical thinking, communication, and technical skills. Our dedicated faculty guides them in navigating their career paths, preparing them for various roles in nursing and midwifery.",
  },
  {
    topic: "Community Opportunities",
    content:
      "Community engagement is a cornerstone of education at the Nursing and Midwifery Training College, Kumasi. Students actively participate in outreach programs that provide healthcare services to underserved populations. These opportunities not only enhance students’ practical skills but also foster a strong sense of social responsibility and compassion, vital attributes for any healthcare professional.",
  },
  {
    topic: "Academic Excellence",
    content:
      "At Nursing and Midwifery Training College, Kumasi, we uphold a standard of academic excellence that empowers our students to excel in their studies and future careers. Our dedicated faculty, comprehensive curriculum, and supportive learning environment motivate students to achieve their full potential. We celebrate the achievements of our graduates, who consistently perform at high levels in national examinations and make significant contributions to the healthcare field.",
  },
];

export const admissionProcessSteps = [
  {
    id: 1,
    step: "01",
    title: "Purchase a voucher",
    description:
      "The first step in your application is to purchase a voucher from M.O.H THE ADMISSIONS PORTAL. there are various payment methods including bank transfer and mobile money. The voucher contains your SERIAL NUMBER as well as your M.O.H Pin which will be used for the application.",
  },
  {
    id: 2,
    step: "02",
    title: "Fill online form",
    description:
      "The next step is to fill your online application. Log in to the M.O.H portal to fill the online form. Input the correct details and submit your application. Please make sure your application has been submitted successfully.",
  },
  {
    id: 3,
    step: "03",
    title: "Attend the interview",
    description:
      "The next and probably the most important step is to attend the interview. You shall receive your interview date and all documents needed when attending the interview. You can also check your interview date by clicking on the link below.",
  },
  {
    id: 4,
    step: "04",
    title: "Await enrolment",
    description:
      "Successful applicants will be contacted via text messages for their reporting dates, as such, please do input an active working contact detail when filling the online application. Applicants can also check their online portal to know the reporting date.",
  },
];
