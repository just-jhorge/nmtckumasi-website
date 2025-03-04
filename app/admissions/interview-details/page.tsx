import ApplicationsTabs from "./ApplicationsTabs";

export default function Page() {
  return (
    <section className="w-full py-4">
      <div className="container space-y-5">
        <div>
          <h3>Application status details</h3>
          <p className="text-muted-foreground">
            Please search using your MOH Pin.
          </p>
        </div>
        <ApplicationsTabs />
      </div>
    </section>
  );
}
