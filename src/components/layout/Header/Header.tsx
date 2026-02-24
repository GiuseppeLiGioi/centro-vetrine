"use client";
import styles from "./Header.module.css";
import Container from "@/components/ui/Container/Container";
import Logo from "@/components/ui/Logo/Logo";
import { Mail, Phone, Menu } from "lucide-react";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <header className={styles.containerHeader}>
      <Container>
        <div className={styles.containerInnerHeader}>
          <Logo />
          <div className={styles.contactsMobile}>
            <a href="tel:3331234567" className={styles.contactA}>
              <Phone />
              <span className={styles.contactSpan}>333 1234567</span>
            </a>
            <a href="mailto:ligioimarco@gmail.com" className={styles.contactA}>
              <Mail />
              <span className={styles.contactSpan}>ligioimarco@gmail.com</span>
            </a>
          </div>
          <button
            className={styles.btnHamburgher}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu />
          </button>
        </div>
      </Container>
    </header>
  );
}
