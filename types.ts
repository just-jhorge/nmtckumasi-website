interface BaseLink {
  id: number;
  href: string;
  label: string;
}

export interface NavigationLink {
  id: number;
  href: string;
  label: string;
  subMenu?: BaseLink[];
}

export type FooterLink = {
  id: number;
  title: string;
  links: NavigationLink[];
};
