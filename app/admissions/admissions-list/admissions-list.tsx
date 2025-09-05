"use client";

import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableCaption,
} from "@/components/ui/table";
import { Admitted } from "@prisma/client";
import { pdf } from "@react-pdf/renderer";
import MyDocument from "@/components/letter/letter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AdmissionsListProps {
  applicants: Admitted[];
}

export default function AdmissionsList({ applicants }: AdmissionsListProps) {
  const rgnApplicants = applicants.filter(
    (a) => a.programme === "REGISTERED GENERAL NURSING"
  );
  const rmApplicants = applicants.filter(
    (a) => a.programme === "REGISTERED MIDWIFERY"
  );

  const handleDownload = async (applicant: Admitted) => {
    const pin = window.prompt("Enter MOH Pin:");

    if (!pin) return;

    try {
      const res = await fetch("/api/verify-pin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });

      if (!res.ok) {
        alert("Error! Please enter your valid MOH Pin and in capital letters.");
        return;
      }

      const data = await res.json();

      if (data.success) {
        // ✅ Pin is valid, generate PDF for this user
        const blob = await pdf(<MyDocument applicant={applicant} />).toBlob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${applicant.name
          .split(" ")
          .join("_")
          .toLowerCase()}.pdf`;
        link.click();
      } else {
        alert(data.message || "Invalid MOH Pin");
      }
    } catch {
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="min-h-[50svh] py-4">
      <div className="max-w-4xl mx-auto px-4 md:px-0">
        <div className="mb-8">
          <h2 className="font-semibold text-base md:text-2xl">
            Admitted Applicants 2025/2026 Academic Year
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl">
            Please download your instructional sheet for reporting to the
            college by clicking on the &apos;Download PDF&apos; then enter the
            password sent along with the SMS.
          </p>
        </div>
        <Tabs defaultValue="rgn" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger value="rgn" className="w-full">
              Registered General Nursing
            </TabsTrigger>
            <TabsTrigger value="rm" className="w-full">
              Registered Midwifery
            </TabsTrigger>
          </TabsList>
          <TabsContent value="rgn">
            <Table>
              <TableCaption>Admitted Canditates 2025.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>APPLICANT NAME</TableHead>
                  <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rgnApplicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell className="text-xs md:text-sm">
                      {applicant.name}
                    </TableCell>
                    <TableCell className="text-right">
                      <button
                        onClick={() => handleDownload(applicant)}
                        className="text-nowrap text-blue-500 underline underline-offset-4"
                      >
                        Download PDF
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="rm">
            <Table>
              <TableCaption>Admitted Canditates 2025.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>APPLICANT NAME</TableHead>
                  <TableHead className="text-right">ACTION</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rmApplicants.map((applicant) => (
                  <TableRow key={applicant.id}>
                    <TableCell className="text-xs md:text-sm">
                      {applicant.name}
                    </TableCell>
                    <TableCell className="text-right">
                      <button
                        onClick={() => handleDownload(applicant)}
                        className="text-nowrap text-blue-500 underline underline-offset-4"
                      >
                        Download PDF
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
