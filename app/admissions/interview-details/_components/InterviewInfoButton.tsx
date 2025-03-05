"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import InterviewInfoDialog from "./InterviewInfoDialog";

const InterviewInfoButton = () => {
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      <Button
        size="sm"
        className="rounded-sm"
        onClick={() => setShowDialog(true)}
      >
        Read more
      </Button>
      <InterviewInfoDialog open={showDialog} onOpenChange={setShowDialog} />
    </>
  );
};

export default InterviewInfoButton;
