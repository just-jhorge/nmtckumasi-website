import { DataTable } from "./_components/DataTable";
import { interviewDates } from "@/data/interviewDates";
import { interviewDatesColumn } from "./_components/InterviewDatesColumn";

export default function Page() {
  return (
    <section className="w-full py-4">
      <div className="container">
        <div>
          <h3>Application status details</h3>
          <p className="text-muted-foreground">
            Please search using your MOH Pin.
          </p>
        </div>
        <DataTable columns={interviewDatesColumn} data={interviewDates} />
      </div>
    </section>
  );
}
