import styles from "./page.module.css";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import Link from "next/link";
import CategoryCard from "@/components/ui/CategoryCard/CategoryCard";
import { categories } from "@/data/home/categories";
import { Phone, Mail, MoveRight } from "lucide-react";
export default function Home() {
  return (
    <Container className={styles.containerHome}>
      <section className={styles.hero}>
        <Image
          src="/manichino.png"
          alt="Foto principale del sito Centro Vetrine, negozio di arredamento negozi"
          fill
          className={styles.imageHero}
        />
        <div className={styles.overlay} />
        <div className={styles.contentHero}>
          <h1 className={styles.titleHero}>Esperti in arredamento negozi</h1>
          <p className={styles.textHero}>
            Arredamento per negozi, manichini, espositori e vetrine. Operiamo in
            tutta la Sardegna del nord e del centro.
          </p>
          <div className={styles.buttonsHero}>
            <a href="tel:+39 3284595823" className={styles.heroCall}>
              <Phone />
              <span className={styles.textButtonsHero}>CHIAMA ORA</span>
            </a>
            <Link href="/contatti" className={styles.heroMessage}>
              <Mail />
              <span className={styles.textButtonsHero}>Scrivici</span>
            </Link>
          </div>
        </div>
      </section>
      <section className={styles.aboutHome}>
        <h2 className={styles.sectionTitle}>
          Non conosci ancora Centro Vetrine?
        </h2>

        <p className={styles.textSection}>
          Da oltre 30 anni supportiamo i negozi nella realizzazione di
          allestimenti personalizzati, offrendo esperienza, qualità e consulenza
          diretta.{" "}
          <Link href="/contatti" className={styles.contactUs}>
            Contattaci <MoveRight />
          </Link>
        </p>

        <Link className={styles.buttonSection} href="/chi-siamo">
          Scopri chi siamo
        </Link>
      </section>

      <section className={styles.categories}>
        <h2 className={styles.sectionTitle}>Ecco cosa possiamo realizzare</h2>

        <p className={styles.sectionIntro}>
          Scopri alcune delle soluzioni espositive e di arredamento che possiamo
          realizzare per il tuo negozio.
        </p>

        <div className={styles.categoriesList}>
          {categories.map((c) => (
            <CategoryCard key={c.id} category={c} />
          ))}
        </div>
      </section>
    </Container>
  );
}
