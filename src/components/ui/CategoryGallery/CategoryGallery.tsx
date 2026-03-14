import Image from "next/image";
import styles from "./CategoryGallery.module.css";
type CategoryGalleryProps = {
  data: {
    title: string;
    text: string;
    cards: {
      id: number;
      src: string;
      alt: string;
      title: string;
      text: string;
    }[];
  };
};
export default function CategoryGallery({ data }: CategoryGalleryProps) {
  const { title, text, cards } = data;
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.titleSection}>{title}</h2>
      <p className={styles.textSection}>{text}</p>

      <div className={styles.containerGalleryCards}>
        {cards.map((card) => (
          <article className={styles.card} key={card.id}>
            <div className={styles.cardImageWrapper}>
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className={styles.cardImage}
              />
            </div>

            <div className={styles.boxInfoCard}>
              <h3 className={styles.titleCard}>{card.title}</h3>
              <p className={styles.textCard}>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
