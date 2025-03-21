import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Award,
  Calendar,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import placeholder from "@/public/images/placeholder.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const programs = {
  nursing: {
    title: "Diploma in Registered General Nursing",
    description:
      "Our Diploma in Registered General Nursing program prepares students for a career in providing quality healthcare services across various medical settings.",
    duration: "3 Years",
    schedule: "Full-time",
    accredited: true,
    intake: "350 Students/year",
    overview:
      "The Diploma in Registered General Nursing program is designed to develop competent, compassionate, and skilled nursing professionals. Through a combination of theoretical knowledge and practical experience, students will gain the expertise needed to provide high-quality patient care in diverse healthcare settings.",
    objectives: [
      "Develop comprehensive nursing knowledge and clinical skills",
      "Foster critical thinking and problem-solving abilities",
      "Build effective communication and interpersonal skills",
      "Promote ethical practice and professional responsibility",
      "Prepare students for national licensing examinations",
      "Develop leadership and management capabilities",
    ],
    curriculum: [
      {
        year: "Year 1",
        courses: [
          "Human Anatomy and Physiology I & II",
          "Basic Nursing",
          "Microbiology & Infection Prevention/Control",
          "Therapeutic Communication",
          "Professional Adjustment in Nursing",
          "Nursing Informatics I & II",
          "First Aid, Emergency & Disaster Management",
          "Advanced Nursing I",
          "Nutrition & Dietetics",
          "Behavioral Sciences",
          "Child Protect & Abuse",
          "Nursing Process",
          "Clinical Practice I",
        ],
      },
      {
        year: "Year 2",
        courses: [
          "Advanced Nursing II",
          "Medicine and Medical Nursing I & II",
          "Surgery and Surgical Nursing I & II",
          "Pharmacology, Therapeutics and Pharmacovigilance I & II",
          "Gerontology and Home Nursing",
          "Statistics",
          "Mental Health Nursing",
          "Management and Administration in Nursing",
          "Research Methods",
          "Clinical Practice II",
        ],
      },
      {
        year: "Year 3",
        courses: [
          "Patient/Family-Centered Care Study",
          "Paediatric Nursing I & II",
          "Medicine & Medical Nursing III",
          "Surgery & Surgical Nursing III",
          "Obstetric Nursing",
          "Supply Chain Management",
          "Community Based Rehabilitaion",
          "Complementary and Traditional/Alternate Medicine",
          "Public Health Nursing",
          "Relationship Marketing Strategy and Entrepreneurship",
          "Introductory French Language",
          "Introductory Sign Language",
        ],
      },
    ],
    facilities: [
      "State-of-the-art simulation labs",
      "Skills practice rooms",
      "Computer labs with nursing software",
      "Library with extensive nursing resources",
      "Clinical placement partnerships with major hospitals",
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        position: "Graduate, Class of 2022",
        quote:
          "The nursing program provided me with both the theoretical knowledge and practical skills I needed to succeed. The instructors were supportive and the clinical experiences were invaluable.",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Michael Chen",
        position: "Graduate, Class of 2021",
        quote:
          "I appreciated the hands-on approach to learning. The simulation labs helped me build confidence before working with real patients, and the clinical rotations exposed me to various specialties.",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
  midwifery: {
    title: "Diploma in Midwifery",
    description:
      "Our Diploma in Midwifery program focuses on developing skilled professionals who can provide expert care during pregnancy, childbirth, and the postpartum period.",
    duration: "3 Years",
    schedule: "Full-time",
    accredited: true,
    intake: "30 Students/Year",
    overview:
      "The Diploma in Midwifery program is designed to prepare compassionate and skilled midwives who can provide comprehensive care to women during pregnancy, labor, birth, and the postpartum period. The program emphasizes woman-centered care, normal birth processes, and the ability to identify and manage complications.",
    objectives: [
      "Develop comprehensive knowledge of midwifery theory and practice",
      "Build clinical skills for antenatal, intrapartum, and postnatal care",
      "Foster critical thinking and decision-making abilities",
      "Develop effective communication and interpersonal skills",
      "Promote ethical practice and professional responsibility",
      "Prepare students for national licensing examinations",
    ],
    curriculum: [
      {
        year: "Year 1",
        courses: [
          "Human Anatomy and Physiology I & II",
          "Basic Nursing",
          "Microbiology & Infection Prevention/Control",
          "Therapeutic Communication",
          "Professional Adjustment in Midwifery",
          "Nursing Informatics I & II",
          "First Aid, Emergency and Disaster Management",
          "Nutrition and Dietetics",
          "Behavioral Sciences",
          "Child Protection & Abuse",
          "Nursing Process",
          "Statistics",
          "Clinical Practice I",
        ],
      },
      {
        year: "Year 2",
        courses: [
          "Anatomy and Physiology of Human Reproductive System and the Foetus I & II",
          "Complementary, Traditional/Alternate Medicine, Pharmacology & Pharmacovigilance",
          "Advanced Nursing",
          "Medicine and Medical Nursing",
          "Surgery and Surgical Nursing",
          "Physiology and Management of Normal Pregnancy",
          "Physiology and Management of Normal Labour",
          "Physiology and Management of Normal Pueperium and Neonate",
          "Physiology and Management of the High Risk Neonate",
          "Community Midwifery",
          "Family Centered Maternity Care Study",
          "Clinical Practice II",
        ],
      },
      {
        year: "Year 3",
        courses: [
          "Physiology and Management of Abnormal Pregnancy",
          "Physiology and Management of Abnormal Labour",
          "Physiology and Management of Abnormal Pueperium",
          "Family Planning and Women's Health",
          "Research Methods",
          "Mental Health Nursing",
          "Management and Administration in Midwifery",
          "Gynecological Conditions and STIs",
          "Advanced Midwifery and Theatre Nursing",
          "Public Health Nursing",
          "Relationship Marketing Strategy and Entrepreneurship",
          "Supply Chain Management",
          "Introductory French Language",
          "Introductory Sign Language",
          "Comprehensive Clinical Practice",
        ],
      },
    ],
    facilities: [
      "Birthing simulation labs",
      "Skills practice rooms with maternal and newborn models",
      "Computer labs with midwifery software",
      "Library with extensive midwifery resources",
      "Clinical placement partnerships with maternity hospitals and birth centers",
    ],
    testimonials: [
      {
        name: "Emily Rodriguez",
        position: "Graduate, Class of 2022",
        quote:
          "The midwifery program gave me the confidence and skills to support women through one of the most important experiences of their lives. The blend of theory and hands-on practice was perfect.",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Aisha Patel",
        position: "Graduate, Class of 2021",
        quote:
          "I loved how the program emphasized both the art and science of midwifery. The clinical placements were diverse and gave me experience with different approaches to care.",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  },
};

export default function Page({ params }: { params: { program: string } }) {
  const program = programs[params.program as keyof typeof programs];

  if (!program) notFound();

  return (
    <section className="container py-4">
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/academics/programs" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </Link>
        </Button>
      </div>
      {/* Program Details */}
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="mb-4 text-2xl md:text-4xl font-bold tracking-tight">
              {program.title}
            </h1>
            <p className="mb-6 text-base md:text-lg text-muted-foreground">
              {program.description}
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{program.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{program.schedule}</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                <span>
                  {program.accredited ? "Accredited" : "Accreditation Pending"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>{program.intake}</span>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Button asChild className="w-full md:w-fit">
              <Link href="/apply">Apply Now</Link>
            </Button>
            <Button variant="outline" asChild className="w-full md:w-fit">
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>

        <div className="relative min-h-[400px] overflow-hidden rounded-lg">
          <Image
            src={placeholder}
            alt={program.title}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Program Overview */}
      <div className="mb-12">
        <h2 className="mb-4 text-xl md:text-3xl font-bold">Program Overview</h2>
        <p className="mb-6 text-base md:text-lg">{program.overview}</p>

        <h3 className="mb-3 text-xl font-semibold">Program Objectives</h3>
        <ul className="mb-6 grid gap-2 md:grid-cols-2">
          {program.objectives.map((objective, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="mt-1 size-4 flex-shrink-0 text-primary" />
              <span className="text-sm md:text-base">{objective}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Curriculum */}
      <div className="mb-12">
        <h2 className="mb-6 text-xl md:text-3xl font-bold">Curriculum</h2>

        <Tabs
          defaultValue={program.curriculum[0].year
            .toLowerCase()
            .replace(" ", "-")}
        >
          <TabsList className="w-full md:max-w-72 grid grid-cols-3">
            {program.curriculum.map((year) => (
              <TabsTrigger
                key={year.year}
                value={year.year.toLowerCase().replace(" ", "-")}
              >
                {year.year}
              </TabsTrigger>
            ))}
          </TabsList>

          {program.curriculum.map((year) => (
            <TabsContent
              key={year.year}
              value={year.year.toLowerCase().replace(" ", "-")}
              className="mt-6"
            >
              <ul className="grid gap-3 md:grid-cols-2">
                {year.courses.map((course, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                      {index + 1}
                    </div>
                    <span>{course}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Facilities */}
      <div className="mb-12 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Learning Facilities</h2>
          <p className="text-lg">
            Our state-of-art facilities aiding in teaching and learning
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* <ul className="space-y-3 bg-yellow-500">
            {program.facilities.map((facility, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="mt-1 size-4 flex-shrink-0 text-primary" />
                <span className="text-sm md:text-base">{facility}</span>
              </li>
            ))}
          </ul> */}
          <div className="flex-1 grid grid-cols-2 w-full md:grid-cols-4 gap-2 md:gap-4">
            <figure className="relative w-full aspect-square md:aspect-video overflow-hidden rounded-lg">
              <Image
                src={placeholder}
                alt="Facility 1"
                fill
                className="object-cover"
              />
              <figcaption>Some caption</figcaption>
            </figure>
            <div className="relative w-full aspect-square md:aspect-video overflow-hidden rounded-lg">
              <Image
                src={placeholder}
                alt="Facility 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square md:aspect-video overflow-hidden rounded-lg">
              <Image
                src={placeholder}
                alt="Facility 3"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-square md:aspect-video overflow-hidden rounded-lg">
              <Image
                src={placeholder}
                alt="Facility 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Student Testimonials</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {program.testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border p-6">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                  <Image
                    src={placeholder}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
                  </p>
                </div>
              </div>
              <p className="italic">&quot;{testimonial.quote}&quot;</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground">
        <h2 className="mb-4 text-3xl font-bold">Begin Your Journey Today</h2>
        <p className="mb-6 text-lg">
          Take the first step toward a rewarding career in{" "}
          {params.program === "nursing" ? "nursing" : "midwifery"}.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/apply">Apply Now</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            <Link href="mailto:admissions@nmtckumasi.edu.gh">
              Contact Admissions
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
