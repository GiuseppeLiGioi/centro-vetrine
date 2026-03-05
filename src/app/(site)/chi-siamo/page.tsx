import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/ui/Container/Container";
import InfoCard from "@/components/ui/InfoCard/InfoCard";
import { HISTORY_ITEMS } from "@/data/about/historyItems";
import HowWeWorkTimeline from "@/components/ui/HowWeWorkTimeline/HowWeWorkTimeline";
import { IconCardItem } from "@/types/types";
export default function ChiSiamo() {
  return (
    <Container className={styles.containerAbout}>
      <section className={styles.hero}>
        <Image
          src={"/manichino.png"}
          alt="Vetrina negozio elegante con manichino"
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay} />
        <div className={styles.content}>
          <h1 className={styles.title}>CHI SIAMO</h1>
          <p className={styles.semiTitle}>
            Olbia. <strong>30 anni di eseprienza</strong> e passione per per
            l'arredamento negozi. <br />
            <br />
            Arrediamo negozi su misura con qualità artigianale italiana. Siamo
            qui per aiutarti a mostrare i tuoi prodotti e attrarre clienti
          </p>
        </div>
      </section>

      <section className={styles.ourHistory}>
        <h1 className={styles.sectionTitle}>LA NOSTRA STORIA</h1>
        <p className={styles.description}>
          Da oltre 30 anni, <strong>Centro Vetrine</strong> è il punto di
          riferimentoper l'arredamento di negozi a Olbia e in tutta la Sardegna.
          La nsotra storia è fatta di passione, artigianalità e dedizione al
          dettaglio, valori che guidano il nostro lavoro quotidiano. Ogni
          progetto è un'opportunità per aiutare i nostri clienti a trasformare
          il proprio spazio commerciale in un ambiente che rispecchia la loro
          identità e valorizza al meglio i loro prodotti.
        </p>
        <div className={styles.cards}>
          {HISTORY_ITEMS.map((item: IconCardItem) => (
            <div key={item.id} className={styles.card}>
              <InfoCard
                title={item.title}
                text={item.text}
                icon={item.icon}
                variant="history"
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.howWork}>
        <h2 className={styles.sectionTitle}>COME LAVORIAMO</h2>
        <HowWeWorkTimeline />
      </section>
    </Container>
  );
}
