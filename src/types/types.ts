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
export type InnovationCard = {
  title: string;
  text: string;
  icon: LucideIcon;
};
export type Category = {
  id: string;
  title: string;
  image: string;
  alt: string;
  slug: string;
};

/*types per pagine catalogo */
export type CategoryPageData = {
  id: string;
  slug: string;
  title: string;
  breadcrumbLabel: string;
  hero: {
    title: string;
    text: string;
    src: string;
    alt: string;
    ctaLabel: string;
    ctaHref: string;
  };
  reasons: {
    eyebrow?: string;
    title: string;
    text: string;
    cards: {
      id: string;
      title: string;
      text: string;
      src: string;
      alt: string;
      icon?: LucideIcon;
    }[];
  };
  showcase: {
    title: string;
    text: string;
    images: {
      src: string;
      alt: string;
    }[];
  };
  customization: {
    title: string;
    text: string;
    featuredImage: {
      src: string;
      alt: string;
    };
    gallery: {
      src: string;
      alt: string;
    }[];
    points: {
      title: string;
      text: string;
    }[];
  };
  finalCta: {
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
};

export type CategoryId =
  | "manichini"
  | "arredamento-negozi"
  | "espositori"
  | "vetrine"
  | "accessori"
  | "stender";
