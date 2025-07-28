import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  MessageCircle,
  Users,
} from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
// import { ExternalLink } from "lucide-react";
// import InterviewDateForm from "./_components/InterviewDateForm";

export const metadata: Metadata = {
  title: "Interview details",
};

const admissionSteps = [
  {
    step: 1,
    title: "Online Forms",
    description: "Application form submission",
    status: "completed",
    icon: CheckCircle,
  },
  {
    step: 2,
    title: "Interview",
    description: "Candidate interviews conducted",
    status: "completed",
    icon: CheckCircle,
  },
  {
    step: 3,
    title: "Verification & Shortlisting",
    description: "Interview review and candidate shortlisting",
    status: "current",
    icon: Clock,
  },
  {
    step: 4,
    title: "Admission",
    description: "Final admission decisions",
    status: "pending",
    icon: Users,
  },
];

export default function Page() {
  return (
    <section className="w-full py-5 md:py-10">
      <div className="container max-w-4xl mx-auto space-y-5">
        {/* <div className="py-40 text-center space-y-8">
          <h2 className="font-bold text-2xl md:text-4xl">
            ADMISSION FOR 2025/2026 ACADEMIC YEAR IS NOW OPENED
          </h2>
          <div className="flex items-center justify-center gap-3">
            <Button asChild variant="outline" className="text-sm">
              <a download href="/docs/admission_requirements.docx">
                <ClipboardCheck className="size-5 mr-2" />
                View Eligibility
              </a>
            </Button>
            <ApplyButton />
          </div>
        </div> */}
        {/* <div>
          <h4 className="mb-1.5 font-semibold">Search for Interview Date.</h4>
          <InterviewDateForm />
        </div> */}
        {/* <div className="text-sm md:text-base">
          <p className="mb-5">
            Dear <span className="font-bold">APPLICANT</span>,
          </p>
          <p>
            There is going to be a final interview held for all applicants who
            could not attend their interview for whatever reason. The date for
            this activity is <strong>25TH JULY, 2025</strong>. All applicants
            are to take note of the following:
          </p>
          <ol className="list-decimal pl-5 md:pl-4 my-5">
            <li>
              You are to come along with all relevant documents, i.e.{" "}
              <span className="font-bold underline underline-offset-2">
                ORIGINAL
              </span>{" "}
              and{" "}
              <span className="font-bold underline underline-offset-2">
                PHOTOCOPIES
              </span>{" "}
              of{" "}
              <ul className="list-disc pl-7">
                <li>BIRTH CERTIFICATE</li>
                <li>
                  MOH APPLICATION FORM (Hardcopy of what you filled online)
                </li>
                <li>
                  WASSCE CERTIFICATE, TESTIMONIAL OR WASSCE RESULT (Any of them
                  works)
                </li>
                <li>IDENTIFICATION CARD (Preferably Ghana Card)</li>
                <li>ANY OTHER RELEVANT DOCUMENT</li>
              </ul>
            </li>
            <li>
              A <span className="font-bold">NON-REFUNDABLE</span> interview fee
              of <span className="font-bold">GHC200</span> that MUST be paid at
              the{" "}
              <span className="font-bold">COLLEGE&apos;S ACCOUNTS OFFICE</span>{" "}
              and <span className="font-bold">NOT</span> to any individual or
              through any other means.
            </li>
            <li>
              Unfortunately, accomodation <strong className="">CANNOT</strong>{" "}
              be provided to applicants traveling from distant places. However
              priority will be given to such applicant so they can set off
              early.
            </li>
            <li className="text-destructive font-bold">
              PLEASE BEWARE OF FRAUDSTER AS PEOPLE ARE POSING IN THE NAME OF THE
              SCHOOL TO EXTORT MONEY FROM APPLICANTS. WE DO NOT TAKE ANY PAYMENT
              THROUGH MOBILE MONEY OR IN-PERSON. ALL PAYMENTS ARE MADE TO THE
              COLLEGE&apos;S ACCOUNTS OFFICE OR THE SCHOOL BANK ACCOUNT BEARING
              THE NAME &quot;NURSING AND MIDWIFERY TRAINING COLLEGE,
              KUMASI&quot; WHERE YOU WILL BE ISSUED AN OFFICIAL RECEIPT.
            </li>
          </ol>
          <p className="mb-3">
            <span className="font-bold italic">
              NB: THIS ACTIVITY IS FOR ONLY THOSE WHO STILL HAVE NOT TAKEN THE
              INTERVIEW. IF YOU ARE FOUND TO HAVE ALREADY TAKEN THE INTERVIEW,
              YOU WILL AUTOMATICALLY BE DISQUALIFIED.
            </span>
          </p>
          <article className="space-y-4">
            <div>
              <h4 className="font-semibold">Location:</h4>
              <p>
                We are located at Bantama, Kumasi. In the same premises with the
                Komfo Anokye Teaching Hospital
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Getting Here:</h4>
              <div className="space-y-2">
                <p>
                  If you are coming by a ride hailing transport like Uber, Bolt
                  or Shaxi, Enter &quot;Komfo Anokye Teaching Hospital&quot; as
                  the destination. When you get to the security checkpoint, ask
                  of the Nursing and Midwifery Training College.
                </p>
                <p>
                  If you are coming by a Taxi, tell the driver you are heading
                  to &quot;Komfo Anokye Teaching Hospital&quot; as the
                  destination. When you get to the security checkpoint, ask of
                  the Nursing and Midwifery Training College.
                </p>
              </div>
            </div>
            <p></p>
            <table className="mb-3">
              <tbody>
                <tr>
                  <td className="font-semibold">GOOGLE MAPS</td>
                  <td className="pl-4">
                    <a
                      target="_blank"
                      className="flex items-center gap-1 font-semibold"
                      href="https://maps.app.goo.gl/3hvx5amFjWxG173u6"
                    >
                      Click here <ExternalLink className="size-4" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-semibold">GPS ADDRESS</td>
                  <td className="pl-4">AK-035-0456</td>
                </tr>
              </tbody>
            </table>
          </article>
          <p className="mb-5">
            For any questions or concerns, kindly call us on{" "}
            <span className="font-semibold">0595323741</span> or{" "}
            <span className="font-semibold">0241385150</span> or send an email
            to{" "}
            <a
              href="mailto:admin@nmtckumasi.edu.gh"
              className="font-medium underline underline-offset-1"
            >
              admin@nmtckumasi.edu.gh
            </a>
            . Thank you and all the best.
          </p>
          <p className="font-bold">
            NB: Please only call between the hours of 8:00AM and 5:00PM
          </p>
        </div> */}
        <div className="text-center space-y-2 pt-8">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Admission Status Update
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Thank you for your participation in our admission process.
            Here&apos;s the current status of our admission timeline.
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Admission Process Timeline
            </CardTitle>
            <CardDescription>
              Track your progress through our admission process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {admissionSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`rounded-full p-2 ${
                          step.status === "completed"
                            ? "bg-green-100 text-green-600"
                            : step.status === "current"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      {index < admissionSteps.length - 1 && (
                        <div
                          className={`w-0.5 h-12 mt-2 ${
                            step.status === "completed"
                              ? "bg-green-200"
                              : "bg-gray-200"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-sm md:text-base font-semibold text-gray-900">
                          {step.title}
                        </h3>
                        <Badge
                          variant={
                            step.status === "completed"
                              ? "default"
                              : step.status === "current"
                              ? "secondary"
                              : "outline"
                          }
                        >
                          {step.status === "completed"
                            ? "Completed"
                            : step.status === "current"
                            ? "In Progress"
                            : "Pending"}
                        </Badge>
                      </div>
                      <p className="text-gray-600 text-xs md:text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-900">
              <AlertCircle className="h-5 w-5" />
              Current Status: Interview Review & Shortlisting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">
                What&apos;s Happening Now?
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  Our admission committee is carefully reviewing all interview
                  assessments
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  Candidates are being shortlisted based on interview
                  performance and application criteria
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                  Final verification of documents and credentials is underway
                </li>
              </ul>
            </div>
            <p className="text-blue-800 font-medium">
              Expected completion: Within the next 5-7 business days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Stay Updated
            </CardTitle>
            <CardDescription>
              Join our WhatsApp channel for real-time updates on the admission
              process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="flex-1">
                <p className="text-gray-700 mb-2">
                  Get instant notifications about admission results, important
                  announcements, and next steps. Click button to join the
                  channel.
                </p>
              </div>
              <Button
                className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2"
                asChild
              >
                <Link href="https://whatsapp.com/channel/0029Vb6Y3TBCMY0QvipFN52y">
                  <MessageCircle className="h-4 w-4" />
                  Join WhatsApp Channel
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="border-amber-200 bg-amber-50">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-amber-900">
                  Important Notice
                </h3>
                <ul className="text-amber-800 space-y-1 text-sm">
                  <li>
                    • Please be patient as we carefully review each application
                  </li>
                  <li>
                    • You can contact the admission office for any inquiries by{" "}
                    <a
                      href="mailto:admissions@nmtckumasi.edu.gh"
                      className="underline text-blue-500 underline-offset-2"
                    >
                      Email
                    </a>{" "}
                    or{" "}
                    <a
                      href="tel:0241385150"
                      className="underline text-blue-500 underline-offset-2"
                    >
                      Phone
                    </a>
                  </li>
                  <li>
                    • All updates will be communicated through official channels
                    only
                  </li>
                  <li>
                    • Ensure your contact information is up to date in the
                    portal
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
