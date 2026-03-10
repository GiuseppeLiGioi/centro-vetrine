export type Category = {
  id: string;
  title: string;
  image: string;
  alt: string;
  slug: string;
};

export const categories: Category[] = [
  {
    id: "manichini",
    title: "Manichini",
    image: "/mock/manichini.jpg",
    alt: "Manichini espositivi per negozi di abbigliamento",
    slug: "/catalogo/manichini",
  },
  {
    id: "arredamento-negozi",
    title: "Arredamento Negozi",
    image: "/mock/arredamento-negozi.jpg",
    alt: "Arredamento professionale per negozi e attività commerciali",
    slug: "/catalogo/arredamento-negozi",
  },
  {
    id: "espositori",
    title: "Espositori",
    image: "/mock/espositori.jpg",
    alt: "Espositori professionali per prodotti e vetrine",
    slug: "/catalogo/espositori",
  },
  {
    id: "vetrine",
    title: "Allestimento Vetrine",
    image: "/mock/vetrine.jpg",
    alt: "Allestimento vetrine per negozi e attività commerciali",
    slug: "/catalogo/vetrine",
  },
  {
    id: "accessori",
    title: "Accessori Espositivi",
    image: "/mock/accessori.jpg",
    alt: "Accessori espositivi per negozi e spazi commerciali",
    slug: "/catalogo/accessori",
  },
];
