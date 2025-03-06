"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import InterviewInfoDialog from "./InterviewInfoDialog";

interface InterviewInfoButtonProps {
  interviewDate: string;
  applicantName: string;
}

const InterviewInfoButton = ({
  interviewDate,
  applicantName,
}: InterviewInfoButtonProps) => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Button size="sm" onClick={() => setShowDialog(true)}>
        Read more
      </Button>
      <InterviewInfoDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        applicantName={applicantName}
        interviewDate={interviewDate}
      />
    </>
  );
};

export default InterviewInfoButton;
