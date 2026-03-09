import type { LucideIcon } from "lucide-react";

export type IconCardItem = {
  id: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

export type HowWeWorkItem = {
  id: string;
  step: 1 | 2 | 3 | 4;
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
  };
};
export type ourWorkItem = {
  id: string;
  shopName: string;
  city: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
};
