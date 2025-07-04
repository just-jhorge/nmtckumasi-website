import { Metadata } from "next";
import StaffCard from "./StaffCard";
import ManagementCard from "./ManagementCard";
import { management, staff } from "@/data/staff";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Faculty staff",
};

export default function Page() {
  return (
    <>
      <div className="relative z-20 bg-white py-10 space-y-10">
        <div className="container space-y-10">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
              Message Our Leadership Team
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Dedicated staff working to enhance your College experience.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {management.map((manager) => (
              <ManagementCard
                key={manager.name}
                name={manager.name}
                email={manager.email}
                image={manager.image}
                position={manager.position}
              />
            ))}
          </div>
          <Separator />
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
              Message The Staff
            </h2>
            <p className="text-muted-foreground md:text-xl">
              The experienced staff providing the best of training.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {staff.map((staff) => (
              <StaffCard
                key={staff.id}
                role={staff.role}
                name={staff.name}
                email={staff.email}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
