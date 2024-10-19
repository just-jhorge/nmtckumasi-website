import { Button } from "@/components/ui/button";
import schoolLogoLarge from "../../public/images/logo-large.webp";
import { BookOpenText, Calendar1 } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <>
      <section
        id="header"
        className="relative w-full h-[70dvh] md:h-[85dvh] bg-black"
      >
        Header
      </section>
      <section
        id="introduction"
        className="h-auto md:h-[45rem] w-full grid grid-cols-1 md:grid-cols-6"
      >
        <div className="h-full col-span-4 py-16 md:py-20 center center">
          <div className="container space-y-4 md:space-y-8">
            <h1 className="text-xl md:text-4xl font-bold">Why NMTC, KUMASI?</h1>
            <p className="text-sm md:text-base w-full md:max-w-2xl text-muted-foreground">
              Choosing Nursing and Midwifery Training College in Kumasi offers a
              distinctive and enriching educational experience that sets it
              apart. The institution is renowned for its commitment to
              excellence in healthcare education, providing a comprehensive
              curriculum that integrates theoretical knowledge with hands-on
              practical training. The college boasts state-of-the-art facilities
              and a dedicated faculty of experienced healthcare professionals,
              ensuring that students receive the highest quality education.
              Additionally, the college&apos;s strong emphasis on ethical and
              compassionate care fosters a culture of empathy, preparing
              students to serve with integrity and professionalism. Overall,
              Nursing and Midwifery Training College, Kumasi, stands out as a
              premier institution that not only imparts top-notch education but
              also instills values crucial for making a positive impact in the
              healthcare sector.
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
            <h1 className="text-3xl font-extrabold">FINANCIAL AID</h1>
          </div>
          <div className="bg-black">
            <h4 className="text-2xl">02.</h4>
            <h1 className="text-3xl font-extrabold">PROGRAMMES</h1>
          </div>
          <div className="bg-green-600">
            <h4 className="text-2xl">03.</h4>
            <h1 className="text-3xl font-extrabold">STUDENT SERVICES</h1>
          </div>
        </div>
      </section>
      <section
        id="statistics"
        className="w-full bg-neutral-400 text-white py-10 md:py-20 center"
      >
        <div className="w-full md:max-w-3xl divide-x-0 md:divide-x-2 divide-neutral-300 grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-3 *:md:pl-3 *:pt-3 first:*:md:pl-0">
          <div className="center flex-col gap-2">
            <p className="uppercase font-light text-sm">courses taught</p>
            <h1 className="text-6xl font-extrabold">40+</h1>
          </div>
          <div className="center flex-col gap-2">
            <p className="uppercase font-light text-sm">years completed</p>
            <h1 className="text-6xl font-extrabold">65+</h1>
          </div>
          <div className="center flex-col gap-2">
            <p className="uppercase font-light text-sm">graduated students</p>
            <h1 className="text-6xl font-extrabold">3000+</h1>
          </div>
        </div>
      </section>
      <section id="events" className="w-full bg-emerald-50 py-24">
        <div className="container center flex-col space-y-10">
          <h2 className="font-extrabold text-2xl md:text-4xl text-emerald-900">
            Upcoming Events
          </h2>
          <div className="w-full">
            <p className="text-muted-foreground text-center">
              There are not events at the moment
            </p>
          </div>
          <Button size="lg">
            <Calendar1 className="mr-2" size={20} />
            See all events
          </Button>
        </div>
      </section>
      <section
        id="home_gallery"
        className="w-full h-[40rem] md:h-[30rem] bg-white grid grid-cols-2 md:grid-cols-6 grid-rows-12 gap-1.5 md:gap-3 *:cursor-pointer"
      >
        <div className="bg-green-500 row-span-3 md:row-span-4">1</div>
        <div className="bg-green-500 row-span-3 md:row-span-4">2</div>
        <div className="bg-green-500 col-span-2 row-span-3 md:row-span-5">
          3
        </div>
        <div className="bg-green-500 md:col-span-2 row-span-3 md:row-span-12">
          4
        </div>
        <div className="bg-green-500 md:col-span-2 row-span-3 md:row-span-8">
          5
        </div>
        <div className="bg-green-500 col-span-2 row-span-3 md:row-span-7">
          6
        </div>
      </section>
      <section id="contact_form" className="w-full bg-white py-20">
        <div className="w-full container flex-between flex-col md:flex-row gap-10 md:gap-0">
          <div className="w-full">
            <div className="flex items-center gap-1">
              <Image
                src={schoolLogoLarge}
                alt="logo"
                height={130}
                width={130}
              />
              <div className="space-y-4">
                <p className="text-base md:text-lg text-emerald-600 leading-none">
                  <span className="font-bold">NURSING AND MIDWIFERY</span>{" "}
                  <br />
                  Training College, Kumasi
                </p>
                <h3 className="text-sm md:text-base uppercase font-medium italic text-emerald-900">
                  &quot;enter to learn and go out to serve&quot;
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full bg-emerald-50/80 rounded-lg shadow-md px-5 md:px-14 py-10 md:py-20">
            <h3 className="text-lg md:text-2xl font-semibold mb-2">
              Get in Touch
            </h3>
            <Separator className="mb-5" />
            <div className="w-full">
              <form className="w-full">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="email"
                    name="floating_email"
                    id="floating_email"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Email address
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="floating_password"
                    id="floating_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Password
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="password"
                    name="repeat_password"
                    id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_repeat_password"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Confirm password
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_first_name"
                      id="floating_first_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_first_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      First name
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_last_name"
                      id="floating_last_name"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_last_name"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Last name
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Phone number (123-456-7890)
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="floating_company"
                      id="floating_company"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_company"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Company (Ex. Google)
                    </label>
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
