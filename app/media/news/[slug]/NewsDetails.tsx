"use client";

import Image from "next/image";
import placeholder from "@/public/images/placeholder.svg";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const NewsDetails = () => {
  return (
    <div className="max-w-3xl mx-auto py-4 px-4 md:px-0 space-y-10">
      <div className="flex items-center gap-2">
        <Button asChild variant="outline" size="icon">
          <Link href="/media/news">
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h3 className="text-lg font-semibold">News page</h3>
      </div>
      <div className="space-y-6">
        <h3 className="font-black text-2xl md:text-4xl">
          Scientists Discover a Breakthrough in the Treatment of Cancer
        </h3>
        <div className="flex items-center gap-3">
          <div className="size-12 md:size-14 rounded-full bg-muted"></div>
          <div className="leading-none text-muted-foreground">
            <div>
              <h4 className="text-sm md:text-base">Anonymous</h4>
              <div className="flex items-center gap-2 text-xs md:text-sm">
                <p>7 min read</p>
                <div className="size-1 rounded-full bg-muted-foreground" />
                <p>Aug 2, 2025</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-60 md:h-[25rem] overflow-hidden">
          <Image
            src={placeholder}
            alt="news_image"
            fill
            className="absolute h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            A New Era in Cancer Treatment
          </h2>
          <p className="text-gray-600 mt-4">
            In a monumental advancement in medical science, researchers have
            announced a breakthrough in cancer treatment that could
            revolutionize how the disease is managed. This discovery, which has
            shown remarkable success in early clinical trials, offers hope to
            millions of patients worldwide who suffer from various forms of
            cancer.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            The Science Behind the Breakthrough
          </h2>
          <p className="text-gray-600 mt-2">
            The breakthrough centers around{" "}
            <strong>
              a new class of cancer-fighting drugs called targeted immunotherapy
              agents
            </strong>
            . Unlike traditional chemotherapy, which attacks both cancerous and
            healthy cells, these drugs are designed to{" "}
            <strong>specifically identify and destroy malignant cells</strong>{" "}
            while leaving healthy tissues unharmed.
          </p>

          <p className="text-gray-600 mt-2">
            The therapy works by enhancing the body&apos;s natural immune
            response, making it{" "}
            <strong>
              more efficient at detecting and eliminating cancer cells
            </strong>
            . By using a combination of{" "}
            <strong>
              engineered T-cells and modified monoclonal antibodies
            </strong>
            , researchers have been able to boost the immune system’s ability to
            fight tumors without the devastating side effects of chemotherapy
            and radiation.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Success in Clinical Trials
          </h2>
          <p className="text-gray-600 mt-2">
            In early-stage{" "}
            <strong>
              clinical trials involving patients with aggressive cancers such as
              lung, breast, and pancreatic cancer
            </strong>
            , the new treatment has demonstrated{" "}
            <strong>
              an unprecedented 80% success rate in shrinking tumors
            </strong>
            . In some cases, patients who had previously been given months to
            live showed <strong>complete remission</strong> after undergoing the
            therapy.
          </p>

          <div className="bg-blue-100 p-4 border-l-4 border-blue-500 italic mt-6">
            <p>
              &quot;We have never seen results like this before. Patients who
              were once out of options are now seeing significant improvements
              in their health, and in some cases, their cancer has completely
              disappeared.&quot; – Dr. Emily Carter, Lead Researcher
            </p>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            What Sets This Treatment Apart?
          </h2>
          <ul className="bg-gray-50 p-4 rounded-lg mt-2 space-y-2">
            <li className="text-gray-700">
              <strong>Precision Targeting</strong> – Unlike conventional
              therapies, this new treatment{" "}
              <strong>only attacks cancer cells</strong>, reducing harmful side
              effects.
            </li>
            <li className="text-gray-700">
              <strong>Long-Lasting Immunity</strong> – The therapy trains the
              immune system to{" "}
              <strong>recognize and destroy cancer cells in the future</strong>.
            </li>
            <li className="text-gray-700">
              <strong>Works on Multiple Cancer Types</strong> – Effective{" "}
              <strong>across different types of cancer</strong>, including some
              of the most deadly forms.
            </li>
            <li className="text-gray-700">
              <strong>Faster Recovery</strong> – Patients treated with this
              therapy show <strong>faster recovery times</strong> compared to
              chemotherapy or radiation.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            Challenges and Future Prospects
          </h2>
          <p className="text-gray-600 mt-2">
            Despite the promising results, researchers acknowledge that there
            are still challenges to overcome. One of the main concerns is{" "}
            <strong>cost and accessibility</strong>. Advanced therapies like
            this are often expensive to develop, and ensuring that they are
            available to patients worldwide is a major hurdle.
          </p>

          <p className="text-gray-600 mt-2">
            However, the medical community remains optimistic. With further
            research, refinement, and partnerships with pharmaceutical
            companies, experts believe that this therapy could be widely
            available <strong>within the next five years</strong>.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-6">
            A Glimpse of Hope
          </h2>
          <p className="text-gray-600 mt-2">
            For cancer patients and their families, this discovery represents a
            beacon of hope. The possibility of a{" "}
            <strong>
              less painful, more effective, and potentially curative treatment
            </strong>{" "}
            is something that oncologists have been striving for over decades.
          </p>

          <p className="text-gray-600 mt-2">
            As researchers continue to fine-tune and expand this breakthrough
            therapy, the dream of{" "}
            <strong>a world where cancer is no longer a death sentence</strong>{" "}
            is becoming more tangible than ever before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
