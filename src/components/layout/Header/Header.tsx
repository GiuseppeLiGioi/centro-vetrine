"use client";
import styles from "./Header.module.css";
import Container from "@/components/ui/Container/Container";
import Logo from "@/components/ui/Logo/Logo";
import { Mail, Phone, Menu } from "lucide-react";
import { useState } from "react";
import MobileNav from "@/components/ui/MobileNav/MobileNav";
import { navigations } from "@/data/navigation";
import Link from "next/link";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const onClose = (): void => {
    setMenuOpen(false);
  };
  return (
    <header className={styles.containerHeader}>
      <Container className={styles.containerHeaderWide}>
        <div className={styles.containerInnerHeader}>
          <Logo />
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
          <button
            className={styles.btnHamburgher}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu />
          </button>
          <Link href={"/contatti"} className={styles.ctaDesktop}>
            Contattaci
          </Link>
        </div>
      </Container>
      {menuOpen && <MobileNav onClose={onClose} items={navigations} />}
    </header>
  );
}
