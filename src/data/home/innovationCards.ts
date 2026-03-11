import { Lightbulb, BarChart3, Headset, Layers } from "lucide-react";
import { InnovationCard } from "@/types/types";
export const innovationCards: InnovationCard[] = [
  {
    title: "Soluzioni su Misura",
    text: "Progettiamo arredamenti e sistemi espositivi pensati per valorizzare al meglio il tuo punto vendita.",
    icon: Lightbulb,
  },
  {
    title: "Ampia Scelta",
    text: "Un’ampia selezione di manichini, espositori e soluzioni per valorizzare ogni tipo di punto vendita.",
    icon: Layers,
  },
  {
    title: "Risultati Concreti",
    text: "Un buon allestimento migliora l’esperienza dei clienti e aumenta la visibilità dei prodotti.",
    icon: BarChart3,
  },
  {
    title: "Consulenza Esperta",
    text: "Ti accompagniamo nella scelta delle soluzioni più adatte grazie alla nostra esperienza nel settore.",
    icon: Headset,
  },
];
