import { StaticImageData } from "next/image";

interface BaseLink {
  id: number;
  href: string;
  label: string;
  isAsset?: boolean;
  isExternal?: boolean;
  assetLocation?: string;
}

export type DropdownType =
  | "about"
  | "academics"
  | "admissions"
  | "library"
  | "media"
  | "students"
  | null;

export interface NavigationLink {
  id: number;
  href: string;
  label: string;
  value: DropdownType;
  subMenu?: BaseLink[];
}

export type FooterLink = {
  id: number;
  title: string;
  links: Omit<NavigationLink, "value">[];
};

export type Applicant = {
  id: number;
  pin: string;
  applicant_name: string;
  institution: string;
  program: string;
  program_type: string;
  contact: string;
  status: string;
};

export type InterviewDate = {
  id: number;
  pin: string;
  applicant_name: string;
  program: string;
  date: string;
};

export type Resource = {
  name: string;
  subjects: string[];
  href: string;
  imageSrc: StaticImageData;
};

export type InterviewDetails = {
  id: number;
  name: string;
  program: string;
  pin: string;
  date: Date;
};
