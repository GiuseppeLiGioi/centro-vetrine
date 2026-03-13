import Container from "@/components/ui/Container/Container";
import CategoryHero from "@/components/ui/CategoryHero/CategoryHero";
import { categoryPages } from "@/data/catalog/categoryPages";
import styles from "./page.module.css";
export default function Manichini() {
  const pageData = categoryPages.manichini;
  return (
    <Container className={styles.categoryPage}>
      <CategoryHero data={pageData.hero} />
    </Container>
  );
}
