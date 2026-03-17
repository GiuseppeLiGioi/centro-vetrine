export type NavigationItem = {
  id: string;
  label: string;
  href?: string;
  children?: NavigationItem[];
};

export const navigations: NavigationItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "chi-siamo", label: "Chi Siamo", href: "/chi-siamo" },
  { id: "contatti", label: "Contatti", href: "/contatti" },

  {
    id: "catalogo",
    label: "Catalogo",
    children: [
      { id: "manichini", label: "Manichini", href: "/manichini" },
      {
        id: "arredamento-negozi",
        label: "Arredamento Negozi",
        href: "/arredamento-negozi",
      },
      {
        id: "arredamento-uffici",
        label: "Arredamento Uffici",
        href: "/arredamento-uffici",
      },
      { id: "stender", label: "Stender", href: "/stender" },
      {
        id: "vetrine-componibili",
        label: "Vetrine Componibili",
        href: "/vetrine-componibili",
      },
      {
        id: "complementi-arredo",
        label: "Complementi d'Arredo",
        href: "/complementi-arredo",
      },
    ],
  },
];
