"use client";

import { useQuery } from "@tanstack/react-query";
import AdmissionsList from "./admissions-list";
import { kyInstance } from "@/lib/ky";
import { Admitted } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

export default function Page() {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["admittedApplicants"],
    queryFn: () => kyInstance.get("/api/admitted-list").json<Admitted[]>(),
    retry: 3,
  });

  if (isFetching) {
    return (
      <div className="h-[70svh] container flex items-center justify-center">
        <Loader className="size-4 animate-spin mr-2" /> Fetching data..
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-3">
        <p>Something went wrong!</p>
        <Button onClick={() => refetch()}>Refresh</Button>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-[70svh] container flex items-center justify-center">
        No data found
      </div>
    );
  }

  return <AdmissionsList applicants={data} />;
}
