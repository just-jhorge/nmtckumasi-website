"use client";

import { Applicant } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const interviewDatesColumn: ColumnDef<Applicant>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "pin",
    header: "MOH Pin",
  },
  {
    accessorKey: "applicant_name",
    header: "Applicant name",
    cell: ({ row }) => {
      const applicantName = row.getValue("applicant_name") as string;

      return <p className="text-nowrap">{applicantName}</p>;
    },
  },
  {
    accessorKey: "program",
    header: "Program",
    cell: ({ row }) => {
      const program = row.getValue("program") as string;

      return <p className="text-nowrap">{program}</p>;
    },
  },
  {
    accessorKey: "interview_date",
    header: "Interview date",
    cell: () => <p>Mon 17 Feb 2025</p>,
  },
];
