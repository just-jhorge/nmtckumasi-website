import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import InterviewDateForm from "./_components/InterviewDateForm";

export const metadata: Metadata = {
  title: "Interview details",
};

export default function Page() {
  return (
    <section className="w-full py-5 md:py-10">
      <div className="container max-w-4xl mx-auto space-y-14">
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
        <div>
          <h4 className="mb-1.5 font-semibold">Search for Interview Date.</h4>
          <InterviewDateForm />
        </div>
        <div className="text-sm md:text-base">
          <p className="mb-5">
            Dear <span className="font-bold">APPLICANT</span>,
          </p>
          <p>
            Your interview at{" "}
            <span className="font-bold">
              NURSING AND MIDWIFERY TRAINING COLLEGE, KUMASI
            </span>{" "}
            has been scheduled successfully. Please take not of the following:
          </p>
          <ol className="list-decimal pl-5 md:pl-4 my-5">
            <li>
              You are to come along with all relevant documents, i.e. COPY OF{" "}
              <span className="font-bold">BIRTH CERTIFICATE</span>, COPY OF{" "}
              <span className="font-bold">MOH APPLICATION FORM</span>, COPY OF{" "}
              <span className="font-bold">WASSCE CERTIFICATE</span> OR{" "}
              <span className="font-bold">RESULTS SLIP</span> and any other
              relevant document.
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
              Unfortunately, accomodation <strong className="">cannot</strong>{" "}
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
              NB: THE SCHEDULED TIME FOR THE INTERVIEW IS 7:00AM
            </span>
            . Failure to attend the interviews translates to automatic
            forfeiting of admission.
          </p>
          <table className="mb-3">
            <tbody>
              <tr>
                <td>GOOGLE MAPS</td>
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
                <td>GPS ADDRESS</td>
                <td className="pl-4">AK-035-0456</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-5">
            For any questions or concerns, kindly call us on{" "}
            <span className="font-semibold">0553080825</span> or{" "}
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
        </div>
      </div>
    </section>
  );
}
