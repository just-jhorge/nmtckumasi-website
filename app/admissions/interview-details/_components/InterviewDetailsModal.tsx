"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { InterviewDetails } from "@/types";
import { format } from "date-fns";

export default function InterviewDetailsModal({
  open,
  details,
  onOpenChange,
}: {
  open: boolean;
  details: InterviewDetails;
  onOpenChange: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Interview Details</DialogTitle>
          <DialogDescription>
            Please your interview details below. Check main page for
            requirements.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <table>
            <tr>
              <td className="font-bold">Name</td>
              <td>{details.name}</td>
            </tr>
            <tr>
              <td className="font-bold">MOH Pin</td>
              <td>{details.pin}</td>
            </tr>
            <tr>
              <td className="font-bold">Program</td>
              <td>{details.program}</td>
            </tr>
            <tr>
              <td className="font-bold">Interview Date</td>
              <td>{format(details.date, "do MMMM yyyy '@' 7:00'AM'")}</td>
            </tr>
          </table>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
