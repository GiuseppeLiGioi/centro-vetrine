import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/ui/Container/Container";
import InfoCard from "@/components/ui/InfoCard/InfoCard";
import ShopCard from "@/components/ui/ShopCard/ShopCard";
import BrandCard from "@/components/ui/BrandCard/BrandCard";
import Link from "next/link";
import { Phone, MoveRight } from "lucide-react";
import { PARTNER_BRANDS } from "@/data/about/BrandItem";
import { OUR_WORKS } from "@/data/about/ourWork";
import { HISTORY_ITEMS } from "@/data/about/historyItems";
import HowWeWorkTimeline from "@/components/ui/HowWeWorkTimeline/HowWeWorkTimeline";
import { IconCardItem } from "@/types/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi siamo | Centro Vetrine",
  description:
    "Scopri la storia di Centro Vetrine e il nostro approccio ad arredamento negozi, vetrine, manichini e allestimenti commerciali su misura.",
};
export default function ChiSiamo() {
  return (
    <Container className={styles.containerAbout}>
      <section className={styles.hero}>
        <Image
          src="/manichino.png"
          alt="Vetrina negozio elegante con manichino"
          fill
          priority
          sizes="100vw"
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
        <h2 className={styles.topTitle}>LA NOSTRA STORIA</h2>
        <p className={styles.topDescription}>
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
      <section className={styles.partnerBrands}>
        <div className={styles.topSection}>
          <h2 className={styles.sectionTitle}>MARCHI PARTNER</h2>
          <p className={styles.description}>
            Collaboriamo solo con marchi di elevata qualità.
          </p>
        </div>
        <div className={styles.shopCardList}>
          {PARTNER_BRANDS.map((b) => (
            <BrandCard key={b.id} name={b.name} logo={b.logo} href={b.href} />
          ))}
        </div>
      </section>

      <section className={styles.ourWork}>
        <div className={styles.topSection}>
          <h2 className={styles.sectionTitle}>I NOSTRI LAVORI</h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            ipsam beatae corporis iusto.
          </p>
        </div>
        <div className={styles.shopCardList}>
          {OUR_WORKS.map((w) => (
            <ShopCard
              key={w.id}
              shopName={w.shopName}
              city={w.city}
              image={w.image}
            />
          ))}
        </div>
      </section>

      <section className={styles.ourPassion}>
        <div className={styles.passionMedia}>
          <Image
            src="/manichino.png"
            alt="Interno di negozio arredato da Centro Vetrine"
            fill
            className={styles.passionImage}
            sizes="100vw"
          />
          <div className={styles.passionOverlay} />

          <div className={styles.passionContent}>
            <h2 className={styles.passionTitle}>OLTRE 30 ANNI DI DEDIZIONE</h2>
            <p className={styles.passionText}>
              Dal cuore di Olbia, Centro Vetrine è un&apos;azienda familiare che
              da decenni arreda e rinnova negozi in tutto il territorio sardo,
              creando ambienti che racchiudono la passione e l&apos;eccellenza
              del Made in Italy.
            </p>
          </div>
        </div>

        <div className={styles.passionCta}>
          <h3 className={styles.passionCtaTitle}>
            VUOI DARE NUOVA VITA AL TUO NEGOZIO?
          </h3>
          <p className={styles.passionCtaText}>
            Chiamaci e progettiamo arredi che attirano e convincono.
          </p>
          <div className={styles.wrapperButtonsCta}>
            <Link href="tel:+393284595823" className={styles.passionCtaButton}>
              <Phone />
              <span className={styles.spanPhoneCta}>Chiama Ora</span>
            </Link>
            <Link
              href="/contatti#contact-form"
              className={styles.passionCtaButtonContact}
            >
              <span className={styles.spanPhoneCta}>Richiedi Informazioni</span>
              <MoveRight />
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
