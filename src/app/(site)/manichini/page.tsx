import Container from "@/components/ui/Container/Container";
import CategoryHero from "@/components/ui/CategoryHero/CategoryHero";
import styles from "./page.module.css";
export default function Manichini() {
  return (
    <Container className={styles.categoryPage}>
      <CategoryHero
        title="Manichini"
        text="Soluzioni professionali per il tuo negozio"
        src="/manichino.png"
        alt="Manichino Centro Vetrine Esposizione"
      />
    </Container>
  );
}
