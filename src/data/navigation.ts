export type NavigationItem = {
  id: string;
  label: string;
  href?: string;
  children?: NavigationItem[];
};

export const navigations: NavigationItem[] = [
  { id: "home", label: "Home", href: "/" },

  {
    id: "voce1",
    label: "Voce1",
    children: [
      { id: "sottovoce1-1", label: "SottoVoce1-1", href: "/voce1/sotto1" },
      { id: "sottovoce1-2", label: "SottoVoce1-2", href: "/voce1/sotto2" },
      { id: "sottovoce1-3", label: "SottoVoce1-3", href: "/voce1/sotto3" },
    ],
  },

  {
    id: "voce2",
    label: "Voce2",
    children: [
      { id: "sottovoce2-1", label: "SottoVoce2-1", href: "/voce2/sotto1" },
      { id: "sottovoce2-2", label: "SottoVoce2-2", href: "/voce2/sotto2" },
      { id: "sottovoce2-3", label: "SottoVoce2-3", href: "/voce2/sotto3" },
    ],
  },

  { id: "voce3", label: "Voce3", href: "/voce3" },
  { id: "voce4", label: "Voce4", href: "/voce4" },
  { id: "voce5", label: "Voce5", href: "/voce5" },
  { id: "voce6", label: "Voce6", href: "/voce6" },
];
