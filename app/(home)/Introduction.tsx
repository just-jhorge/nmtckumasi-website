import { BookOpenText } from "lucide-react";
import { Button } from "@/components/ui/button";

function Introduction() {
  return (
    <section className="h-auto md:h-[45rem] w-full grid grid-cols-1 md:grid-cols-6">
      <div className="h-full col-span-4 py-16 md:py-20 center center">
        <div className="container space-y-4 md:space-y-8">
          <h1 className="text-xl md:text-4xl font-bold">Why NMTC, KUMASI?</h1>
          <p className="text-sm md:text-base w-full md:max-w-2xl text-muted-foreground">
            Choosing Nursing and Midwifery Training College in Kumasi offers a
            distinctive and enriching educational experience that sets it apart.
            The institution is renowned for its commitment to excellence in
            healthcare education, providing a comprehensive curriculum that
            integrates theoretical knowledge with hands-on practical training.
            The college boasts state-of-the-art facilities and a dedicated
            faculty of experienced healthcare professionals, ensuring that
            students receive the highest quality education. Additionally, the
            college&apos;s strong emphasis on ethical and compassionate care
            fosters a culture of empathy, preparing students to serve with
            integrity and professionalism. Overall, Nursing and Midwifery
            Training College, Kumasi, stands out as a premier institution that
            not only imparts top-notch education but also instills values
            crucial for making a positive impact in the healthcare sector.
          </p>
          <Button size="lg">
            <BookOpenText className="mr-2" size={20} />
            Read More
          </Button>
        </div>
      </div>
      <div className="h-full col-span-2 grid grid-cols-1 text-white *:px-10 *:md:px-16 *:py-12 *:flex *:flex-col *:items-start *:justify-center">
        <div className="bg-yellow-300">
          <h4 className="text-2xl">01.</h4>
          <h1 className="text-xl md:text-3xl font-extrabold">
            QUALITY EDUCATION
          </h1>
        </div>
        <div className="bg-black">
          <h4 className="text-2xl">02.</h4>
          <h1 className="text-xl md:text-3xl font-extrabold">
            EXPERIENCED FACULTY
          </h1>
        </div>
        <div className="bg-green-600">
          <h4 className="text-2xl">03.</h4>
          <h1 className="text-xl md:text-3xl font-extrabold">
            CLINICAL EXCELLENCE
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
