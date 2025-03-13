import { Metadata } from "next";
import LeaderCard from "./LeaderCard";
import { srcExecutives } from "@/data/staff";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Faculty staff",
};

export default function Page() {
  return (
    <>
      <div className="relative z-20 bg-white py-10 space-y-10">
        <div className="container space-y-10">
          <section className="w-full">
            <div className="mx-auto max-w-2xl space-y-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                  Message from the President
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  A warm welcome to all prospective students
                </p>
              </div>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base">
                <div className="relative pl-6 border-l-4 border-input py-2 bg-muted">
                  <p className="italic text-base md:text-lg text-muted-foreground">
                    &quot;To all prospective students considering joining our
                    vibrant campus community, I extend a heartfelt welcome on
                    behalf of the Student Representative Council.
                  </p>
                </div>
                <p>
                  Our College is more than just a place of academic excellence;
                  it&apos;s a community where you&apos;ll grow, discover your
                  passions, and forge lifelong friendships. The SRC is committed
                  to ensuring your voice is heard and your college experience is
                  enriching and supportive.
                </p>
                <p>
                  From orientation to graduation, we&apos;re here to advocate
                  for your needs, organize events that bring our diverse
                  community together, and provide resources to help you succeed.
                  We believe in creating an inclusive environment where every
                  student can thrive.
                </p>
                <p>
                  I encourage you to get involved, share your ideas, and make
                  the most of the incredible opportunities that await you here.
                  Your journey is just beginning, and we&apos;re excited to be a
                  part of it.
                </p>
                <p className="font-medium">
                  We look forward to welcoming you to our campus family!&quot;
                </p>
              </div>
            </div>
          </section>
          <Separator />
          <>
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                Message Our Leadership Team
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Dedicated students working to enhance your College experience.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {srcExecutives.map((executive) => (
                <LeaderCard
                  key={executive.name}
                  name={executive.name}
                  image={executive.image}
                  position={executive.position}
                />
              ))}
            </div>
          </>
        </div>
      </div>
    </>
  );
}
