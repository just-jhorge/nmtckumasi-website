import { Separator } from "@/components/ui/separator";
import React from "react";

type CollegePassage = {
  topic: string;
  content: string;
};

export default function Page() {
  const nursingPassages: CollegePassage[] = [
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
  return (
    <>
      <section className="w-full bg-black h-40 md:h-80 center">
        <div className="text-white">programmes</div>
      </section>
      <div className="relative bg-white z-20 center flex-col">
        <section className="w-full h-full py-10 center">
          <div className="w-full md:w-[75rem] h-auto md:h-[15rem] grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-0 *:bg-white *:shadow-md *:border *:border-input *:rounded-md *:p-8">
            <h1 className="center text-2xl md:text-3xl text-center font-medium text-slate-800">
              Registered General Nursing (RGN)
            </h1>
            <h1 className="center text-2xl md:text-3xl text-center font-medium text-slate-800">
              Registered Midwifery (RM)
            </h1>
          </div>
        </section>
        <section className="w-full p-5 md:p-20 center bg-muted">
          <div className="w-full md:w-[75rem] grid grid-cols-1 md:grid-cols-3 gap-5">
            {nursingPassages.map((item, idx) => (
              <div
                key={idx}
                className="w-full min-h-[13rem] px-4 py-5 space-y-2 border border-input rounded-md shadow-md bg-white"
              >
                <h3 className="text-base font-medium">{item.topic}</h3>
                <Separator />
                <p className="text-sm text-muted-foreground">{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
