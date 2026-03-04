import { IconCardItem } from "@/types/types";

import {
  MapPinCheckInsideIcon,
  Gem,
  Handshake,
  PencilRuler,
} from "lucide-react";

export const HISTORY_ITEMS: IconCardItem[] = [
  {
    id: "radicati-nel-territorio",
    title: "Radicati nel Territorio",
    text: "Serviamo la nostra comunità locale con dedizione.",
    icon: MapPinCheckInsideIcon,
  },
  {
    id: "artigianato-made-in-italy",
    title: "Artigianato Made in Italy",
    text: "Proponiamo arredi con materiali italini di qualità.",
    icon: Gem,
  },
  {
    id: "soluzioni-su-misura",
    title: "Soluzioni su Misura",
    text: "Progettiamo allestimenti personalizzati per ogni negozio.",
    icon: PencilRuler,
  },
  {
    id: "esperienza-nel-settore",
    title: "Esperienza nel Settore",
    text: "Una lunga tradizione e competenza garantita.",
    icon: Handshake,
  },
];
