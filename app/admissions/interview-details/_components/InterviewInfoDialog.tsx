"use client";

import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface InterviewInfoDialogProps {
  open: boolean;
  applicantName: string;
  interviewDate: string;
  onOpenChange: (open: boolean) => void;
}

const InterviewInfoDialog = ({
  open,
  onOpenChange,
  interviewDate,
  applicantName,
}: InterviewInfoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Interview information</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <Separator />
        <div className="text-sm space-y-2.5">
          <p>
            Dear {applicantName}, your interview has been scheduled on{" "}
            {interviewDate} at 7:30am. Please come along with the following
            documents:
          </p>
          <ul className="list-inside list-disc">
            <li>BIRTH CERTIFICATE</li>
            <li>MOH APPLICATION FORM</li>
            <li>WASSCE CERTIFICATE / RESULTS SLIP</li>
            <li>{formatCurrency(200)} NON-REFUNDABLE INTERVIEW FEE</li>
          </ul>
          <p className="text-destructive font-semibold">
            NB: Beware of fraudsters as people are posing in the name of the
            College to make money of applicants. All payments MUST be made to
            the Accounts office where you will be issued an official receipt.
          </p>
          <p className="italic">
            For any questions or concerns, kindly call us on{" "}
            <a
              href="tel:0244123456"
              className="text-emerald-700 font-semibold not-italic"
            >
              0244123456
            </a>{" "}
            /{" "}
            <a
              href="tel:0201234567"
              className="text-emerald-700 font-semibold not-italic"
            >
              0201234567
            </a>{" "}
            or send an email to{" "}
            <a
              href="mailto:admin@nmtckumasi.edu.gh"
              className="font-semibold underline underline-offset-1 text-emerald-700 not-italic"
            >
              admin@nmtckumasi.edu.gh
            </a>
            . Thank you and all the best.
          </p>
        </div>
        <Separator />
        <DialogFooter>
          <DialogClose asChild>
            <Button>Okay</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default InterviewInfoDialog;
