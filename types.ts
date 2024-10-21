interface BaseLink {
  id: number;
  href: string;
  label: string;
  isAsset?: boolean;
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
