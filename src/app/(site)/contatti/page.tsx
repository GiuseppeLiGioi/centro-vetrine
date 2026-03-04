import styles from "./page.module.css";
import Container from "@/components/ui/Container/Container";
import InfoCard from "@/components/ui/InfoCard/InfoCard";
import ContactForm from "@/components/ui/ContactForm/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
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

      <div className={styles.location}>
        <address className={styles.address}>
          Via Mameli 20, 07026, Olbia
        </address>
        <div className={styles.innerLocation}>
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6029.375803457347!2d9.493963576670279!3d40.92258852469596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d94b030e4bf49f%3A0xf996380f5a91aa2b!2sCentro%20Vetrine%20Li%20Gioi!5e0!3m2!1sit!2sit!4v1772101264941!5m2!1sit!2sit"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Mappa Centro Vetrine"
            />
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Via+Goffredo+Mameli+20+Olbia"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapsLink}
          >
            <MapPin />
            <span className={styles.textMap}>Apri su Google Maps</span>
          </a>
        </div>
      </div>

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
