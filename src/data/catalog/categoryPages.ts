import { CategoryPageData, CategoryId } from "@/types/types";

export const categoryPages: Record<CategoryId, CategoryPageData> = {
  manichini: {
    id: "manichini",
    slug: "/catalogo/manichini",
    title: "Manichini",
    breadcrumbLabel: "Manichini",
    hero: {
      title: "Manichini",
      text: "Soluzioni espositive professionali per valorizzare collezioni, vetrine e spazi vendita con stile, coerenza e massima cura del dettaglio.",
      image: "/manichino.png",
      alt: "Manichini espositivi per negozi di abbigliamento",
      ctaLabel: "Richiedi Informazioni",
      ctaHref: "/contatti",
    },
    reasons: {
      eyebrow: "Perché scegliere questa categoria",
      title: "Una presenza espositiva che valorizza davvero il prodotto",
      text: "I manichini non sono solo supporti tecnici, ma strumenti visivi capaci di migliorare percezione, ordine espositivo e impatto complessivo del negozio.",
      cards: [
        {
          title: "Impatto visivo immediato",
          text: "Aiutano a presentare capi, outfit e abbinamenti in modo ordinato, chiaro e coinvolgente.",
          icon: "sparkles",
        },
        {
          title: "Soluzioni adatte a contesti diversi",
          text: "Dallo store di abbigliamento alla boutique, fino agli allestimenti stagionali e promozionali.",
          icon: "layout-panel-top",
        },
        {
          title: "Supporto nella scelta",
          text: "Ti aiutiamo a individuare la soluzione più adatta in base a stile, spazio e tipologia di merce.",
          icon: "badge-check",
        },
      ],
    },
    showcase: {
      title: "Esempi di realizzazione",
      text: "Una selezione visiva per mostrare come i manichini possano integrarsi in ambienti, vetrine e configurazioni espositive differenti.",
      images: [
        {
          src: "/manichino.png",
          alt: "Manichino in vetrina per negozio di abbigliamento",
        },
        {
          src: "/manichino.png",
          alt: "Esposizione con manichini in area vendita",
        },
        {
          src: "/manichino.png",
          alt: "Allestimento coordinato con manichini e accessori",
        },
        {
          src: "/manichino.png",
          alt: "Configurazione espositiva con manichini professionali",
        },
      ],
    },
    customization: {
      title: "Personalizzazione completa",
      text: "Ogni soluzione può essere orientata in base al tuo punto vendita, al tipo di collezione e all’immagine che vuoi trasmettere al cliente finale.",
      featuredImage: {
        src: "/manichino.png",
        alt: "Configurazione personalizzata di manichini per negozio",
      },
      gallery: [
        { src: "/manichino.png", alt: "Dettaglio finiture manichino" },
        { src: "/manichino.png", alt: "Manichino in ambientazione retail" },
        {
          src: "/manichino.png",
          alt: "Combinazione espositiva con supporti e manichini",
        },
      ],
      points: [
        {
          title: "Stile e presenza visiva",
          text: "Possibilità di scegliere soluzioni più minimali, eleganti o d’impatto in base al posizionamento del negozio.",
        },
        {
          title: "Adattamento allo spazio",
          text: "La configurazione può essere pensata per vetrine, ingressi, pareti focali o percorsi interni.",
        },
        {
          title: "Coerenza con l’identità del punto vendita",
          text: "L’obiettivo è ottenere una presentazione credibile, ordinata e coerente con il tuo brand.",
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

  "arredamento-negozi": {
    id: "arredamento-negozi",
    slug: "/catalogo/arredamento-negozi",
    title: "Arredamento Negozi",
    breadcrumbLabel: "Arredamento Negozi",
    hero: {
      title: "Arredamento Negozi",
      text: "Soluzioni professionali per organizzare lo spazio vendita in modo funzionale, ordinato e coerente con l’identità del tuo punto vendita.",
      image: "/manichino.png",
      alt: "Arredamento professionale per negozi e attività commerciali",
      ctaLabel: "Richiedi Informazioni",
      ctaHref: "/contatti",
    },
    reasons: {
      eyebrow: "Perché scegliere questa categoria",
      title: "Uno spazio espositivo progettato per accogliere e valorizzare",
      text: "L’arredamento commerciale deve unire estetica, funzionalità e chiarezza espositiva, migliorando l’esperienza del cliente e il lavoro quotidiano nel punto vendita.",
      cards: [
        {
          title: "Organizzazione dello spazio",
          text: "Soluzioni pensate per rendere il negozio più leggibile, ordinato e funzionale.",
          icon: "ruler",
        },
        {
          title: "Immagine coordinata",
          text: "Materiali, finiture e linee visive possono essere orientati in funzione dello stile del brand.",
          icon: "palette",
        },
        {
          title: "Approccio su misura",
          text: "Ogni proposta viene valutata in base al tipo di attività, agli spazi disponibili e agli obiettivi espositivi.",
          icon: "settings-2",
        },
      ],
    },
    showcase: {
      title: "Esempi di realizzazione",
      text: "Alcuni esempi di configurazioni e ambientazioni per comprendere il potenziale di un arredamento commerciale ben progettato.",
      images: [
        {
          src: "/manichino.png",
          alt: "Arredo per negozio con esposizione coordinata",
        },
        { src: "/manichino.png", alt: "Pareti attrezzate per punto vendita" },
        {
          src: "/manichino.png",
          alt: "Soluzione d’arredo per spazio commerciale",
        },
        { src: "/manichino.png", alt: "Allestimento interno per negozio" },
      ],
    },
    customization: {
      title: "Personalizzazione completa",
      text: "Ogni ambiente può essere sviluppato in funzione del flusso del cliente, del tipo di merce e dell’immagine che il negozio vuole trasmettere.",
      featuredImage: {
        src: "/manichino.png",
        alt: "Arredamento negozio personalizzato",
      },
      gallery: [
        {
          src: "/manichino.png",
          alt: "Dettaglio finiture per arredamento negozio",
        },
        {
          src: "/manichino.png",
          alt: "Modulo espositivo per attività commerciale",
        },
        { src: "/manichino.png", alt: "Configurazione interna personalizzata" },
      ],
      points: [
        {
          title: "Configurazioni modulari",
          text: "Possibilità di sviluppare soluzioni flessibili e adattabili alle dimensioni del locale.",
        },
        {
          title: "Materiali e finiture",
          text: "Scelte visive e materiche orientate alla qualità percepita e alla durata nel tempo.",
        },
        {
          title: "Funzionalità quotidiana",
          text: "Ogni elemento deve aiutare la vendita, semplificare l’ordine e migliorare la gestione del negozio.",
        },
      ],
    },
    finalCta: {
      title: "Vuoi organizzare meglio il tuo spazio vendita?",
      text: "Ti aiutiamo a individuare una soluzione d’arredo professionale, coerente e adatta alle esigenze del tuo negozio.",
      primaryLabel: "Richiedi una Consulenza",
      primaryHref: "/contatti",
      secondaryLabel: "Chiama Ora",
      secondaryHref: "tel:+390000000000",
    },
  },

  espositori: {
    id: "espositori",
    slug: "/catalogo/espositori",
    title: "Espositori",
    breadcrumbLabel: "Espositori",
    hero: {
      title: "Espositori",
      text: "Supporti espositivi professionali per presentare prodotti, valorizzare aree strategiche e migliorare l’ordine visivo del punto vendita.",
      image: "/manichino.png",
      alt: "Espositori professionali per prodotti e vetrine",
      ctaLabel: "Richiedi Informazioni",
      ctaHref: "/contatti",
    },
    reasons: {
      eyebrow: "Perché scegliere questa categoria",
      title: "Esposizione chiara, ordinata e più efficace",
      text: "Un buon espositore aiuta il prodotto a emergere, semplifica la lettura dell’offerta e rende più professionale l’intero ambiente commerciale.",
      cards: [
        {
          title: "Più ordine visivo",
          text: "I prodotti vengono presentati in modo più leggibile e coerente.",
          icon: "layout-grid",
        },
        {
          title: "Maggiore valorizzazione",
          text: "Le aree focali del negozio possono essere organizzate con più impatto e chiarezza.",
          icon: "scan-eye",
        },
        {
          title: "Versatilità d’uso",
          text: "Adatti a promozioni, capsule, novità stagionali e organizzazione permanente.",
          icon: "layers-3",
        },
      ],
    },
    showcase: {
      title: "Esempi di realizzazione",
      text: "Una raccolta di soluzioni per mostrare diversi modi di presentare il prodotto all’interno dello spazio vendita.",
      images: [
        { src: "/manichino.png", alt: "Espositore per prodotti in negozio" },
        {
          src: "/manichino.png",
          alt: "Supporto espositivo per area promozionale",
        },
        {
          src: "/manichino.png",
          alt: "Configurazione di espositori in ambiente retail",
        },
        {
          src: "/manichino.png",
          alt: "Dettaglio di struttura espositiva professionale",
        },
      ],
    },
    customization: {
      title: "Personalizzazione completa",
      text: "Le soluzioni espositive possono essere modellate in base ai prodotti, agli ingombri e al tipo di messaggio commerciale da comunicare.",
      featuredImage: {
        src: "/manichino.png",
        alt: "Espositore personalizzato per negozio",
      },
      gallery: [
        { src: "/manichino.png", alt: "Dettaglio espositore retail" },
        {
          src: "/manichino.png",
          alt: "Configurazione prodotto su supporto espositivo",
        },
        {
          src: "/manichino.png",
          alt: "Soluzione espositiva per punto vendita",
        },
      ],
      points: [
        {
          title: "Dimensioni e ingombri",
          text: "Le strutture possono essere pensate per ottimizzare lo spazio disponibile senza appesantire il layout del negozio.",
        },
        {
          title: "Presentazione del prodotto",
          text: "L’espositore deve aiutare il prodotto a essere letto, confrontato e notato con immediatezza.",
        },
        {
          title: "Coerenza con il contesto",
          text: "La soluzione finale deve integrarsi bene con arredi, percorso cliente e identità del negozio.",
        },
      ],
    },
    finalCta: {
      title: "Hai bisogno di espositori adatti al tuo spazio?",
      text: "Ti aiutiamo a trovare la soluzione più adatta per valorizzare i prodotti e migliorare l’organizzazione del punto vendita.",
      primaryLabel: "Contattaci",
      primaryHref: "/contatti",
      secondaryLabel: "Chiama Ora",
      secondaryHref: "tel:+390000000000",
    },
  },

  vetrine: {
    id: "vetrine",
    slug: "/catalogo/vetrine",
    title: "Allestimento Vetrine",
    breadcrumbLabel: "Allestimento Vetrine",
    hero: {
      title: "Allestimento Vetrine",
      text: "Soluzioni visive pensate per attirare l’attenzione, comunicare il valore del prodotto e rendere la vetrina più efficace e riconoscibile.",
      image: "/manichino.png",
      alt: "Allestimento vetrine per negozi e attività commerciali",
      ctaLabel: "Richiedi Informazioni",
      ctaHref: "/contatti",
    },
    reasons: {
      eyebrow: "Perché scegliere questa categoria",
      title: "La vetrina è il primo contatto con il cliente",
      text: "Un allestimento curato aiuta a trasmettere identità, qualità e ordine, aumentando l’attrattività del negozio già dall’esterno.",
      cards: [
        {
          title: "Maggiore impatto",
          text: "La vetrina comunica subito stile, target e valore percepito del punto vendita.",
          icon: "store",
        },
        {
          title: "Stagionalità e campagne",
          text: "Le soluzioni possono seguire periodi promozionali, collezioni o cambi di assortimento.",
          icon: "calendar-range",
        },
        {
          title: "Più coerenza visiva",
          text: "Ogni elemento può essere coordinato con il resto del negozio e con il messaggio commerciale.",
          icon: "gallery-vertical-end",
        },
      ],
    },
    showcase: {
      title: "Esempi di realizzazione",
      text: "Alcuni esempi visivi per mostrare come una vetrina ben organizzata possa incidere sulla percezione del negozio.",
      images: [
        {
          src: "/manichino.png",
          alt: "Allestimento vetrina per negozio di abbigliamento",
        },
        {
          src: "/manichino.png",
          alt: "Vetrina con composizione espositiva coordinata",
        },
        {
          src: "/manichino.png",
          alt: "Dettaglio scenografico per vetrina commerciale",
        },
        {
          src: "/manichino.png",
          alt: "Esposizione vetrina con forte impatto visivo",
        },
      ],
    },
    customization: {
      title: "Personalizzazione completa",
      text: "Ogni vetrina può essere modellata in base al periodo, al tipo di merce, al target e all’immagine che il negozio vuole trasmettere.",
      featuredImage: {
        src: "/manichino.png",
        alt: "Allestimento vetrina personalizzato",
      },
      gallery: [
        { src: "/manichino.png", alt: "Dettaglio composizione vetrina" },
        { src: "/manichino.png", alt: "Elemento scenografico per vetrina" },
        {
          src: "/manichino.png",
          alt: "Vetrina coordinata con elementi espositivi",
        },
      ],
      points: [
        {
          title: "Messaggio visivo chiaro",
          text: "La composizione deve guidare lo sguardo e comunicare in pochi secondi il contenuto della proposta commerciale.",
        },
        {
          title: "Flessibilità progettuale",
          text: "L’allestimento può essere aggiornato, rinnovato o adattato in base alle esigenze stagionali.",
        },
        {
          title: "Valorizzazione del prodotto",
          text: "Ogni elemento deve servire a mettere il prodotto in condizione di emergere con più forza.",
        },
      ],
    },
    finalCta: {
      title: "Vuoi rendere la tua vetrina più efficace?",
      text: "Contattaci per valutare una soluzione visiva capace di valorizzare il tuo negozio e attirare l’attenzione del cliente.",
      primaryLabel: "Richiedi Informazioni",
      primaryHref: "/contatti",
      secondaryLabel: "Chiama Ora",
      secondaryHref: "tel:+390000000000",
    },
  },

  accessori: {
    id: "accessori",
    slug: "/catalogo/accessori",
    title: "Accessori Espositivi",
    breadcrumbLabel: "Accessori Espositivi",
    hero: {
      title: "Accessori Espositivi",
      text: "Elementi di supporto pensati per completare l’allestimento, migliorare la presentazione del prodotto e rendere più ordinato lo spazio vendita.",
      image: "/manichino.png",
      alt: "Accessori espositivi per negozi e spazi commerciali",
      ctaLabel: "Richiedi Informazioni",
      ctaHref: "/contatti",
    },
    reasons: {
      eyebrow: "Perché scegliere questa categoria",
      title: "Dettagli che migliorano davvero l’esposizione",
      text: "Gli accessori espositivi aiutano a completare la presentazione del prodotto e a costruire un ambiente più coerente, ordinato e funzionale.",
      cards: [
        {
          title: "Più ordine",
          text: "Contribuiscono a una disposizione più pulita e più leggibile per il cliente.",
          icon: "align-justify",
        },
        {
          title: "Supporto alla vendita",
          text: "Ogni dettaglio può aiutare a valorizzare categorie, promozioni o punti focali del negozio.",
          icon: "badge-percent",
        },
        {
          title: "Integrazione semplice",
          text: "Gli accessori si inseriscono facilmente all’interno di configurazioni già esistenti.",
          icon: "puzzle",
        },
      ],
    },
    showcase: {
      title: "Esempi di realizzazione",
      text: "Una selezione di immagini per mostrare come gli accessori espositivi possano completare e migliorare l’organizzazione del punto vendita.",
      images: [
        { src: "/manichino.png", alt: "Accessori espositivi per negozio" },
        { src: "/manichino.png", alt: "Dettaglio supporti espositivi" },
        { src: "/manichino.png", alt: "Configurazione con accessori retail" },
        {
          src: "/manichino.png",
          alt: "Accessori coordinati per esposizione prodotto",
        },
      ],
    },
    customization: {
      title: "Personalizzazione completa",
      text: "Gli accessori possono essere selezionati e combinati in base al tipo di merce, al layout del negozio e agli obiettivi espositivi.",
      featuredImage: {
        src: "/manichino.png",
        alt: "Accessori espositivi personalizzati",
      },
      gallery: [
        { src: "/manichino.png", alt: "Dettaglio accessorio espositivo" },
        { src: "/manichino.png", alt: "Supporto coordinato per negozio" },
        {
          src: "/manichino.png",
          alt: "Elemento espositivo accessorio per prodotto",
        },
      ],
      points: [
        {
          title: "Compatibilità con l’allestimento",
          text: "Ogni elemento deve integrarsi bene con la configurazione già presente nello spazio vendita.",
        },
        {
          title: "Ordine e leggibilità",
          text: "Gli accessori giusti aiutano il cliente a comprendere meglio l’offerta e migliorano la percezione generale del negozio.",
        },
        {
          title: "Dettaglio professionale",
          text: "Sono spesso i dettagli a fare la differenza tra un’esposizione improvvisata e una davvero curata.",
        },
      ],
    },
    finalCta: {
      title: "Vuoi completare meglio il tuo spazio espositivo?",
      text: "Ti aiutiamo a individuare accessori utili, coerenti e adatti all’organizzazione del tuo negozio.",
      primaryLabel: "Contattaci",
      primaryHref: "/contatti",
      secondaryLabel: "Chiama Ora",
      secondaryHref: "tel:+390000000000",
    },
  },

  stender: {
    id: "stender",
    slug: "/catalogo/stender",
    title: "Stender",
    breadcrumbLabel: "Stender",
    hero: {
      title: "Stender",
      text: "Soluzioni pratiche ed espositive per organizzare capi, valorizzare aree promozionali e rendere più ordinato il percorso del cliente nel negozio.",
      image: "/manichino.png",
      alt: "Stender per negozi e spazi commerciali",
      ctaLabel: "Richiedi Informazioni",
      ctaHref: "/contatti",
    },
    reasons: {
      eyebrow: "Perché scegliere questa categoria",
      title: "Praticità espositiva e ordine visivo",
      text: "Gli stender sono elementi estremamente utili per esporre capi, creare aree tematiche e dare più flessibilità all’organizzazione del punto vendita.",
      cards: [
        {
          title: "Flessibilità",
          text: "Perfetti per novità, promozioni, capsule collection o gestione dinamica dello spazio.",
          icon: "refresh-cw",
        },
        {
          title: "Lettura immediata del prodotto",
          text: "Aiutano il cliente a visualizzare rapidamente categoria, stile o coordinati espositivi.",
          icon: "eye",
        },
        {
          title: "Ordine e praticità",
          text: "Rendono l’area vendita più organizzata e più semplice da gestire ogni giorno.",
          icon: "clipboard-list",
        },
      ],
    },
    showcase: {
      title: "Esempi di realizzazione",
      text: "Alcuni esempi per mostrare come gli stender possano inserirsi in ambienti commerciali diversi con un risultato ordinato e professionale.",
      images: [
        { src: "/manichino.png", alt: "Stender in area vendita" },
        { src: "/manichino.png", alt: "Esposizione abbigliamento su stender" },
        {
          src: "/manichino.png",
          alt: "Configurazione promozionale con stender",
        },
        { src: "/manichino.png", alt: "Stender in ambiente retail coordinato" },
      ],
    },
    customization: {
      title: "Personalizzazione completa",
      text: "Anche una soluzione apparentemente semplice come lo stender può essere scelta e inserita in modo coerente con lo stile e con le esigenze operative del negozio.",
      featuredImage: {
        src: "/manichino.png",
        alt: "Stender personalizzato per negozio",
      },
      gallery: [
        { src: "/manichino.png", alt: "Dettaglio stender professionale" },
        { src: "/manichino.png", alt: "Stender in configurazione espositiva" },
        { src: "/manichino.png", alt: "Area vendita con stender coordinati" },
      ],
      points: [
        {
          title: "Misure e proporzioni",
          text: "La scelta deve tenere conto di spazi, passaggi e quantità di prodotto da esporre.",
        },
        {
          title: "Coerenza estetica",
          text: "Anche gli elementi funzionali devono dialogare con lo stile complessivo del punto vendita.",
        },
        {
          title: "Utilizzo strategico",
          text: "Possono essere impiegati per focus commerciali, percorsi interni o esposizioni stagionali.",
        },
      ],
    },
    finalCta: {
      title: "Cerchi stender adatti al tuo punto vendita?",
      text: "Ti aiutiamo a scegliere la soluzione più adatta per organizzare lo spazio e valorizzare meglio i prodotti esposti.",
      primaryLabel: "Richiedi Informazioni",
      primaryHref: "/contatti",
      secondaryLabel: "Chiama Ora",
      secondaryHref: "tel:+390000000000",
    },
  },
};
