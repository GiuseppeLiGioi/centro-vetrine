import { IconCardItem } from "@/types/types";
import { Clock, Gem, Flag, HelpCircle } from "lucide-react";
export const WHY_ITEMS: IconCardItem[] = [
  {
    id: "esperienza-passione",
    title: "Esperienza e Passione",
    text: "La nostra attività a Olbia prosegue da oltre 30 anni nel settore delle vetrine.",
    icon: Clock,
  },
  {
    id: "qualita-artigianale",
    title: "Qualità Artigianale",
    text: "Ogni progetto è realizzato con cura artigianale e attenzione ai dettagli.",
    icon: Gem,
  },
  {
    id: "made-in-italy",
    title: "Made in Italy",
    text: "Utilizziamo solo materiali italiani certificati garantendo la massima qualità.",
    icon: Flag,
  },
];

export const FAQ_ITEMS: IconCardItem[] = [
  {
    id: "tempo-risposta",
    title: "Quanto tempo per ricevere risposta?",
    text: "Di solito entro 24/48h.",
    icon: HelpCircle,
  },
  {
    id: "foto-idee",
    title: "Posso inviare foto/idee?",
    text: "Sì, descrivi il progetto e allegare in seguito via email.",
    icon: HelpCircle,
  },
  {
    id: "preventivi",
    title: "Preventivi?",
    text: "Valutiamo insieme la soluzione più adatta.",
    icon: HelpCircle,
  },
];
