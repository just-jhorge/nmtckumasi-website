import { Metadata } from "next";
import StaffCard from "./_components/StaffCard";
import { management, staff } from "@/data/staff";
import { Separator } from "@/components/ui/separator";
import ManagementCard from "./_components/ManagementCard";

export const metadata: Metadata = {
  title: "Faculty staff",
};

export default function Page() {
  return (
    <>
      <div className="w-full bg-black h-40 center">
        <div className="text-white text-lg md:text-xl font-semibold">
          Meet the Team
        </div>
      </div>
      <div className="relative z-20 bg-white py-10 space-y-10">
        <div className="container space-y-10">
          <h2 className="text-center font-bold text-lg md:text-2xl">
            The Management Team
          </h2>
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
          <h2 className="text-center font-bold text-lg md:text-2xl">
            The Faculty Members
          </h2>
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
