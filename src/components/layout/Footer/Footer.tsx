import styles from "./Footer.module.css";
import Container from "@/components/ui/Container/Container";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.containerFooter}>
        <div className={styles.allBoxes}>
          <div className={styles.colBrand}>
            <h3 className={styles.title}>CENTRO VETRINE</h3>
            <p className={styles.description}>
              Soluzioni professionali per vetrine e allestimenti.
            </p>
            <Link href={"/contatti"} className={styles.info}>
              Richiedi Informazioni
              <span aria-hidden="true">
                <ArrowRight aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className={styles.colNav}>
            <h4 className={styles.semiTitle}>Navigazione</h4>
            <nav className={styles.navFooter} aria-label="Footer">
              <Link href="/" className={styles.navItem}>
                Home
              </Link>
              <Link href="/chi-siamo" className={styles.navItem}>
                Chi Siamo
              </Link>
              <Link href="/contatti" className={styles.navItem}>
                Catalogo
              </Link>
              <Link href="/contatti" className={styles.navItem}>
                Contatti
              </Link>
            </nav>
          </div>
          <div className={styles.colContacts}>
            <h4 className={styles.semiTitle}>Contatti</h4>
            <div className={styles.contactsBox}>
              <a href="tel:3284595823" className={styles.contactA}>
                <Phone aria-hidden="true" />
                <span className={styles.contactSpan}>328 4595823</span>
              </a>
              <a
                href="mailto:ligioimarco@gmail.com"
                className={styles.contactA}
              >
                <Mail aria-hidden="true" />
                <span className={styles.contactSpan}>
                  ligioimarco@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div className={styles.colLocation}>
            <h4 className={styles.semiTitle}>Dove Siamo</h4>
            <address className={styles.address}>
              Via Mameli 20, 07026, Olbia
            </address>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Via+Goffredo+Mameli+20+Olbia"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapsA}
            >
              Apri su Google Maps
            </a>
          </div>
        </div>
      </Container>

      <div className={styles.legacy}>
        <Container className={styles.containerFooterBottom}>
          <div className={styles.legacyInner}>
            <div className={styles.companyLine}>
              <span>© 2026 Centro Vetrine</span>
              <span className={styles.divider} aria-hidden="true" />
              <span>P.IVA 01234567890</span>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
