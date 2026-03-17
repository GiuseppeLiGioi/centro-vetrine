import styles from "./page.module.css";
import Container from "@/components/ui/Container/Container";
import InfoCard from "@/components/ui/InfoCard/InfoCard";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import MapBanner from "@/components/ui/MapBanner/MapBanner";
import { Phone, Mail } from "lucide-react";
import { WHY_ITEMS, FAQ_ITEMS } from "@/data/contact/faqItems";
export default function Contatti() {
  return (
    <Container className={styles.contactContainer}>
      <h1 className={styles.title}>CONTATTI</h1>
      <p className={styles.semiTitle}>
        Scrivici o chiamaci. Rispondiamo rapidamente.
      </p>
      <div className={styles.contactsMobile}>
        <a href="tel:3284595823" className={styles.contactA}>
          <Phone aria-hidden="true" />
          <span className={styles.contactSpan}>328 4595823</span>
        </a>
        <a href="mailto:ligioimarco@gmail.com" className={styles.contactA}>
          <Mail aria-hidden="true" />
          <span className={styles.contactSpan}>ligioimarco@gmail.com</span>
        </a>
      </div>

      <MapBanner />

      <ContactForm />

      <section className={styles.about}>
        <h2 className={styles.titleAbout}>
          Perché{" "}
          <span className={styles.titleAboutSpan}>
            scegliere Centro Vetrine
          </span>
        </h2>

        <div className={styles.cardsWrapper}>
          {WHY_ITEMS.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          ))}
        </div>
      </section>

      <section className={styles.faq}>
        <h2 className={styles.titleFaq}>FAQ</h2>

        <div className={styles.faqsWrapper}>
          {FAQ_ITEMS.map((item) => (
            <InfoCard
              key={item.id}
              title={item.title}
              text={item.text}
              icon={item.icon}
              variant="faq"
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
