"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";

interface InterviewInfoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InterviewInfoDialog = ({
  open,
  onOpenChange,
}: InterviewInfoDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Interview information</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
          asperiores quidem ea, distinctio exercitationem sed a atque dolor
          placeat quod quae explicabo dolorum illum incidunt, nihil quam quas?
          Totam, numquam.
        </div>
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
