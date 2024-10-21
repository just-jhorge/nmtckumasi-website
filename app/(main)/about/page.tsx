export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <>
      <section className="sticky top-16 z-10 w-full bg-black h-40 md:h-80 center">
        <div className="text-white left-0 right-0 mx-auto">about us</div>
      </section>
      <div className="relative z-20 bg-white">
        <section
          id="principal_welcome"
          className="w-full flex flex-col md:flex-row items-center h-[60rem] md:h-[50rem]"
        >
          <div className="w-full h-[30rem] md:h-full bg-red-500 center">
            <div className="h-4/5 w-4/5 md:w-3/5 bg-blue-500">hello</div>
          </div>
          <div className="w-full h-[30rem] md:h-full bg-white center">
            <div className="max-w-sm md:max-w-lg text-left md:text-center space-y-3 md:space-y-5">
              <h3 className="text-xl md:text-3xl font-bold">
                Welcome to{" "}
                <span className="text-emerald-500">
                  Nursing and Midwifery Training College, Kumasi
                </span>
                .
              </h3>
              <p className="leading-relaxed text-sm md:text-base text-muted-foreground">
                Welcome to Nursing and Midwifery Training College, a leading
                institution dedicated to providing a comprehensive and dynamic
                learning experience. Situated in the heart of Kumasi - Ghana,
                our College has been nurturing aspiring nurses and midwives
                since 1955. We take pride in our commitment to excellence and
                our passion for shaping the future of healthcare professionals.
                With a diverse and inclusive community, we offer a unique
                curriculum that equips our students with the knowledge and
                skills needed to excel in their careers. Our state-of-the-art
                facilities and experienced faculty ensure that every student
                receives the highest quality education. Join us on this exciting
                journey and embark on a rewarding career in the noble field of
                nursing and midwifery. Ayekoo!
              </p>
            </div>
          </div>
        </section>
        <section id="the_story" className="w-full py-10 md:py-20 center">
          <div className="max-w-4xl px-4 md:px-0 space-y-5">
            <h3 className="text-lg md:text-2xl font-semibold">
              The Full Story
            </h3>
            <div className="text-sm md:text-base text-muted-foreground space-y-3">
              <p>
                The college since inception has existed as two colleges running
                nursing and midwifery programmes under two different
                administrations namely Nurse’s Training College (NTC) and
                Midwifery Training School (MTS). In 2007, both institutions
                merged under one administration hence the name Nursing and
                Midwifery Training College (NMTC)
              </p>
              <p>
                The nursing programme was started in 11th January, 1955 with a
                State Registered Nursing (SRN) certificate program which was
                three year duration. In 1968, a two-year Enrolled Nursing (EN)
                programme was introduced which ran alongside the SRN. The SRN
                certificate programme later gave way to a 3-year Comprehensive
                SRN programme in August 1969. In 1983, the Enrolled Nursing
                programme was phased out. A Registered General Nursing (RGN)
                Diploma programme was introduced in 1999 and that is what is
                currently running.
              </p>
              <p>
                The Midwifery programme also started in 1957 with a two year and
                two and a half year duration depending on one’s entry
                qualification. These continued until the early 1980s when it was
                replaced with a one year Post Basic programme after completion
                of SRN. A three year Registered Midwifery (RM) Diploma programme
                was introduced in 2003. These programmes run concurrently till
                2007 when the certificate was phased out. Currently the college
                is running a 3-year Diploma in Registered General Nursing and
                Registered Midwifery.
              </p>
              <p>
                The College also runs a Two-year Post Nurse Assistant Clinician
                /Nurse Assistant Preventive (NAC/NAP) certificate in Midwifery
                programme since September, 2016.
              </p>
            </div>
          </div>
        </section>
        <section
          id="vision_mission_values"
          className="w-full py-10 md:py-20 center"
        >
          <div className="w-full md:w-[56rem] bg-white px-4 md:px-0 grid grid-cols-1 gap-8 *:flex *:flex-col">
            <div className="w-full items-start">
              <h3 className="text-4xl md:text-6xl font-extrabold text-emerald-700">
                Vision
              </h3>
              <p className="max-w-[17.5rem] text-sm md:text-base text-slate-800">
                To become a center of excellence for the training of health
                professionals in the delivery of high-quality patient care in
                Ghana and beyond.
              </p>
            </div>
            <div className="w-full items-end">
              <h3 className="text-4xl md:text-6xl font-extrabold text-emerald-700">
                Mission
              </h3>
              <p className="max-w-[17.5rem] text-sm md:text-base text-slate-800 text-right">
                To train and turn out competent nursing and midwifery
                professionals to restore, maintain and promote health.
              </p>
            </div>
            <div className="w-full items-center">
              <div>
                <h3 className="text-4xl md:text-6xl font-extrabold text-emerald-700">
                  Core Values
                </h3>
                <ul className="text-sm md:text-base text-slate-800 list-inside list-disc">
                  <li>Discipline</li>
                  <li>Excellence</li>
                  <li>Professional Integrity</li>
                  <li>Client/Patient-Centeredness</li>
                  <li>Community-based services</li>
                  <li>Best practices and Reflective care</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
