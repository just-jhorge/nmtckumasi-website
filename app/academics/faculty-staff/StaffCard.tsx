"use client";

interface StaffCardProps {
  role: string;
  name: string;
  email: string;
}

const StaffCard = ({ role, name, email }: StaffCardProps) => {
  return (
    <div className="h-full py-3 px-2 bg-neutral-100 group cursor-pointer hover:shadow-sm transition-shadow duration-300">
      <p className="text-xs md:text-sm mb-1 font-light">{role}</p>
      <h3 className="text-slate-900 group-hover:text-emerald-500 transition-colors duration-200 font-semibold text-sm md:text-base">
        {name}
      </h3>
      <a
        href="mailTo:gsafrifa@gmail.com"
        className="text-xs md:text-sm underline underline-offset-2 font-medium text-muted-foreground"
      >
        {email}
      </a>
    </div>
  );
};

export default StaffCard;
