import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { features } from "@/data";
import FeatureCard from "./FeatureCard";
import { Button } from "@/components/ui/button";
import graduants from "@/public/images/graduation.jpg";
import { Award, Calendar, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Programs",
};

export default function Page() {
  return (
    <div className="">
      <div className="w-full relative h-[30dvh] md:h-[40dvh] flex items-center justify-center">
        <div className="absolute z-20 text-white text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
            Our Programmes
          </h2>
          <p className="md:text-xl">
            The programmes currently offered at our College.
          </p>
        </div>
        <div className="absolute z-10 brightness-50 h-full w-full">
          <Image
            fill
            src={graduants}
            alt="graduants"
            className="absolute w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="relative bg-white z-20 center flex-col">
        <section className="md:w-[65rem] mx-auto flex items-center gap-5 py-10">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Diploma in Registered General Nursing</CardTitle>
              <CardDescription>
                Comprehensive training for aspiring nurses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our Diploma in Registered General Nursing program prepares
                students for a career in providing quality healthcare services
                across various medical settings.
              </p>
              <div className="mb-4 grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">3 Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Full-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">Accredited</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/academics/programs/nursing">Read More</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Diploma in Registered Midwifery</CardTitle>
              <CardDescription>
                Comprehensive training for aspiring midwives
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Our Diploma in Registered Midwifert program prepares students
                for a career in providing quality healthcare services across
                various medical settings.
              </p>
              <div className="mb-4 grid grid-cols-3 gap-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">3 Years</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm">Full-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">Accredited</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/academics/programs/midwifery">Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        </section>
        <section className="w-full p-5 md:p-20 center bg-muted">
          <div className="w-full md:w-[65rem] grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((feature) => (
              <FeatureCard key={feature.topic} feature={feature} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
