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
  title: "Stender | Centro Vetrine",
  description:
    "Stender ed espositori per negozi pensati per organizzare al meglio il punto vendita e migliorare la presentazione dei prodotti.",
};
export default function Stender() {
  const pageData = categoryPages.stender;
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
