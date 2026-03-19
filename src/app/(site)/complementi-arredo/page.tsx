import Container from "@/components/ui/Container/Container";
import CategoryHero from "@/components/ui/CategoryHero/CategoryHero";
import CategoryGallery from "@/components/ui/CategoryGallery/CategoryGallery";
import CategoryCustomization from "@/components/ui/CategoryCustomization/CategoryCustomization";
import CategoryProcess from "@/components/ui/CategoryProcess/CategoryProcess";
import CategoryFinalCta from "@/components/ui/CategoryFinalCta/CategoryFinalCta";
import { categoryPages } from "@/data/catalog/categoryPages";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complementi d'arredo | Centro Vetrine",
  description:
    "Complementi d'arredo e soluzioni accessorie per completare negozi, vetrine e spazi espositivi con equilibrio e funzionalità.",
};
export default function ComplementiArredo() {
  const pageData = categoryPages.complementiArredo;
  return (
    <Container className={styles.categoryPage}>
      <CategoryHero data={pageData.hero} />
      <CategoryGallery data={pageData.reasons} />
      <CategoryCustomization data={pageData.customization} />
      <CategoryProcess data={pageData.process} />
      <CategoryFinalCta data={pageData.finalCta} />
    </Container>
  );
}
