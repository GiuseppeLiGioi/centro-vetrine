export type NavigationItem = {
  label: string;
  href?: string;
  children?: NavigationItem[];
};

export const navigations: NavigationItem[] = [
  { label: "Home", href: "/" },

  {
    label: "Voce1",
    children: [
      { label: "SottoVoce1-1", href: "/voce1/sotto1" },
      { label: "SottoVoce1-2", href: "/voce1/sotto2" },
      { label: "SottoVoce1-3", href: "/voce1/sotto3" },
    ],
  },

  {
    label: "Voce2",
    children: [
      { label: "SottoVoce2-1", href: "/voce2/sotto1" },
      { label: "SottoVoce2-2", href: "/voce2/sotto2" },
      { label: "SottoVoce2-3", href: "/voce2/sotto3" },
    ],
  },

  { label: "Voce3", href: "/voce3" },
  { label: "Voce4", href: "/voce4" },
  { label: "Voce5", href: "/voce5" },
  { label: "Voce6", href: "/voce6" },
];
