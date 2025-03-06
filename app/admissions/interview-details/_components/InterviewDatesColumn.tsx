"use client";

import { format } from "date-fns";
import { InterviewDate } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import InterviewInfoButton from "./InterviewInfoButton";

export const interviewDatesColumn: ColumnDef<InterviewDate>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "pin",
    header: "MOH PIN",
  },
  {
    accessorKey: "applicant_name",
    header: "APPLICANT NAME",
    cell: ({ row }) => {
      const applicantName = row.getValue("applicant_name") as string;

      return <p className="text-nowrap">{applicantName}</p>;
    },
  },
  {
    accessorKey: "program",
    header: "PROGRAM",
    cell: ({ row }) => {
      const program = row.getValue("program") as string;

      return <p className="text-nowrap">{program}</p>;
    },
  },
  {
    accessorKey: "date",
    header: "INTERVIEW DATE",
    cell: ({ row }) => {
      const date = row.getValue("date") as string;
      const intDate = format(new Date(date), "EEEE, do MMMM, yyyy");

      return <p className="text-nowrap min-w-[120px]">{intDate}</p>;
    },
  },
  {
    id: "action",
    cell: ({ row }) => {
      const date = row.getValue("date") as string;
      const applicantName = row.getValue("applicant_name") as string;
      const interviewDate = format(new Date(date), "EEEE, do MMMM, yyyy");

      return (
        <div className="flex justify-end">
          <InterviewInfoButton
            interviewDate={interviewDate}
            applicantName={applicantName}
          />
        </div>
      );
    },
  },
];
