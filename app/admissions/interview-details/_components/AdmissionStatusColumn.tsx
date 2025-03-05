"use client";

import { Applicant } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./DataTableColumnHeader";

export const admissionStatusColumn: ColumnDef<Applicant>[] = [
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
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="STATUS" />
    ),
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      return <p className="text-nowrap min-w-[120px]">{status}</p>;
    },
  },
];
