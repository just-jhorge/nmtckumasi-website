"use client";

import { applicants } from "@/data/applicants";
import { DataTable } from "./_components/DataTable";
import { interviewDates } from "@/data/interviewDates";
import { interviewDatesColumn } from "./_components/InterviewDatesColumn";
import { admissionStatusColumn } from "./_components/AdmissionStatusColumn";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ApplicationsTabs() {
  return (
    <Tabs defaultValue="applications" className="w-full">
      <TabsList className="grid grid-cols-2 w-full md:max-w-lg">
        <TabsTrigger value="applications">APPLICATION STATUS</TabsTrigger>
        <TabsTrigger value="interview_dates">INTERVIEW DATES</TabsTrigger>
      </TabsList>
      <TabsContent value="applications">
        <DataTable columns={admissionStatusColumn} data={applicants} />
      </TabsContent>
      <TabsContent value="interview_dates">
        <DataTable columns={interviewDatesColumn} data={interviewDates} />
      </TabsContent>
    </Tabs>
  );
}
