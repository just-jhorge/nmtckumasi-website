"use client";

import { Separator } from "@/components/ui/separator";

type Feature = {
  topic: string;
  content: string;
};

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="w-full min-h-[13rem] px-4 py-5 space-y-2 border border-input rounded-md shadow-md bg-white">
      <h3 className="text-base font-medium">{feature.topic}</h3>
      <Separator />
      <p className="text-sm text-muted-foreground">{feature.content}</p>
    </div>
  );
};

export default FeatureCard;
