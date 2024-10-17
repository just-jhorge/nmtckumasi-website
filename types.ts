export interface NavigationLink {
  id: number;
  href: string;
  label: string;
}

export type FooterLink = {
  id: number;
  title: string;
  links: NavigationLink[];
};
