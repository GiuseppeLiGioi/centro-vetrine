import styles from "./page.module.css";
import Container from "@/components/ui/Container/Container";
import Image from "next/image";
import Link from "next/link";
import CategoryCard from "@/components/ui/CategoryCard/CategoryCard";
import CardGallery from "@/components/ui/CardGallery/CardGallery";
import InfoCard from "@/components/ui/InfoCard/InfoCard";
import { innovationCards } from "@/data/home/innovationCards";
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
              <span className={styles.textButtonsHero}>Chiama Ora</span>
            </a>
            <Link href="/contatti#contact-form" className={styles.heroMessage}>
              <Mail />
              <span className={styles.textButtonsHero}>
                Richiedi Informazioni
              </span>
            </Link>
          </div>
        </div>
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

      <section className={styles.innovation}>
        <h2 className={styles.sectionTitle}>Pronto a innovare?</h2>

        <p className={styles.sectionIntro}>
          Scopri nuove soluzioni per migliorare l’esposizione e l’arredamento
          del tuo negozio.
        </p>

        <div className={styles.cards}>
          {innovationCards.map((card, i) => (
            <InfoCard
              key={i}
              title={card.title}
              text={card.text}
              icon={card.icon}
              variant="highlight"
            />
          ))}
        </div>
      </section>

      <section className={styles.finalSection}>
        <div className={styles.aboutHome}>
          <h2 className={styles.sectionTitle}>
            Non conosci ancora Centro Vetrine?
          </h2>

          <p className={styles.textSection}>
            Da oltre 30 anni supportiamo i negozi nella realizzazione di
            allestimenti personalizzati, offrendo esperienza, qualità e
            consulenza diretta.{" "}
            <Link href="/contatti" className={styles.contactUs}>
              Contattaci <MoveRight />
            </Link>
          </p>
          <div className={styles.gallery}>
            <CardGallery
              src="/manichino.png"
              alt="allestimento negozi Centro Vetrine"
            />
            <CardGallery src="/manichino.png" alt="manichini Centro Vetrine" />
            <CardGallery src="/manichino.png" alt="stender Centro Vetrine" />
          </div>

          <Link className={styles.buttonSection} href="/chi-siamo">
            Scopri chi siamo <MoveRight />
          </Link>
        </div>

        <div className={styles.finalCta}>
          <Image
            src="/manichino.png"
            alt="Interno showroom Centro Vetrine con soluzioni espositive e arredamento per negozi"
            fill
            className={styles.finalCtaImage}
          />

          <div className={styles.finalCtaOverlay} />

          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>
              Vuoi allestire il tuo negozio?
            </h2>

            <p className={styles.finalCtaText}>
              Contattaci per ricevere supporto, informazioni e una consulenza
              gratuita sulle soluzioni più adatte al tuo punto vendita.
            </p>

            <div className={styles.finalCtaCards}>
              <a href="tel:+393284595823" className={styles.finalCtaCard}>
                <div className={styles.wrapperCta}>
                  <div className={styles.finalCtaCardIcon}>
                    <Phone />
                  </div>

                  <div className={styles.finalCtaCardContent}>
                    <h3 className={styles.finalCtaCardTitle}>Chiama Ora</h3>
                    <p className={styles.finalCtaCardText}>328 4595 823</p>
                  </div>
                </div>
              </a>

              <a
                href="mailto:ligioimarco@gmail.com"
                className={styles.finalCtaCard}
              >
                <div className={styles.wrapperCta}>
                  <div className={styles.finalCtaCardIcon}>
                    <Mail />
                  </div>

                  <div className={styles.finalCtaCardContent}>
                    <h3 className={styles.finalCtaCardTitle}>Scrivici</h3>
                    <p className={styles.finalCtaCardText}>
                      ligioimarco@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
