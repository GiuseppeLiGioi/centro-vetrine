import { MessageSquareText, PencilRuler, Hammer, Wrench } from "lucide-react";
import { IconCardItem } from "@/types/types";
export const HOW_WE_WORK_ITEMS: IconCardItem[] = [
  {
    id: "consulenza",
    title: "Consulenza",
    text: "Analizziamo esigenze, budget e obiettivi per definire la soluzione migliore.",
    icon: MessageSquareText,
  },
  {
    id: "progettazione",
    title: "Progettazione",
    text: "Progettiamo layout e allestimenti su misura, ottimizzando spazio e visibilità.",
    icon: PencilRuler,
  },
  {
    id: "realizzazione",
    title: "Realizzazione",
    text: "Realizziamo vetrine e arredi con cura artigianale e materiali di qualità.",
    icon: Hammer,
  },
  {
    id: "assistenza",
    title: "Assistenza",
    text: "Supporto continuo anche dopo la consegna: aggiornamenti, modifiche e manutenzione.",
    icon: Wrench,
  },
];
