export const categoryPages = {
  manichini: {
    id: "manichini",
    slug: "/manichini",
    title: "Manichini",
    breadcrumbLabel: "Manichini",
    hero: {
      title: "Manichini",
      text: "Soluzioni espositive professionali per valorizzare collezioni, vetrine e spazi vendita con stile, coerenza e massima cura del dettaglio.",
      src: "/manichino.png",
      alt: "Manichini espositivi per negozi di abbigliamento",
      ctaLabel: "Richiedi Informazioni",
      ctaHref: "/contatti",
    },
    reasons: {
      title: "Perché scegliere i nostri manichini",
      text: "I manichini non sono semplici supporti espositivi: aiutano a valorizzare il prodotto, migliorano l’impatto visivo della vetrina e rendono più chiara l’identità del punto vendita.",
      cards: [
        {
          id: 1,
          src: "/manichino.png",
          alt: "Manichino per esposizione in negozio",
          title: "Impatto Visivo",
          text: "Valorizzano capi, abbinamenti e collezioni con una presenza espositiva più forte e ordinata.",
        },
        {
          id: 2,
          src: "/manichino.png",
          alt: "Manichini per vetrine e spazi vendita",
          title: "Materiali e Stile",
          text: "Disponibili in soluzioni diverse per adattarsi meglio al tono e all’immagine del negozio.",
        },
        {
          id: 3,
          src: "/manichino.png",
          alt: "Configurazione personalizzata di manichini",
          title: "Progetti su Misura",
          text: "Ti aiutiamo a scegliere la soluzione più adatta in base a spazio, prodotto e obiettivo espositivo.",
        },
      ],
    },
    customization: {
      title: "Consulenza e personalizzazione",
      text: "Ogni soluzione può essere configurata in base allo spazio del negozio e al tipo di prodotto esposto.",
      image: {
        src: "/manichino.png",
        alt: "Configurazione manichini",
      },
      groups: [
        {
          title: "Tipologia",
          options: [
            {
              src: "/manichino-uomo.png",
              alt: "Manichino uomo",
              label: "Uomo",
            },
            {
              src: "/manichino-donna.png",
              alt: "Manichino donna",
              label: "Donna",
            },
            {
              src: "/manichino-bambino.png",
              alt: "Manichino bambino",
              label: "Bambino",
            },
          ],
        },
        {
          title: "Posa",
          options: [
            { image: "/posa-classica.png", label: "Classica" },
            { image: "/posa-dinamica.png", label: "Dinamica" },
            { image: "/posa-sportiva.png", label: "Sportiva" },
          ],
        },
        {
          title: "Colori",
          options: [
            { image: "/colore-bianco.png", label: "Bianco" },
            { image: "/colore-nero.png", label: "Nero" },
            { image: "/colore-carne.png", label: "Carne" },
          ],
        },
      ],
    },
    finalCta: {
      title: "Cerchi la soluzione giusta per il tuo negozio?",
      text: "Contattaci per ricevere supporto nella scelta di manichini, configurazioni espositive e soluzioni adatte al tuo spazio vendita.",
      primaryLabel: "Contattaci Ora",
      primaryHref: "/contatti",
      secondaryLabel: "Chiama Ora",
      secondaryHref: "tel:+390000000000",
    },
  },
};
