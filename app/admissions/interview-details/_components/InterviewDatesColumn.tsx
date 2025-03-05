"use client";

import { formattedDate } from "@/lib/utils";
import { InterviewDate } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

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
      const interviewDate = new Date(date);

      return (
        <p className="text-nowrap min-w-[120px]">
          {formattedDate(interviewDate)}
        </p>
      );
    },
  },
];
