import Image from "next/image";
import styles from "./CategoryGallery.module.css";
type CategoryGalleryProps = {
  data: {
    title: string;
    text: string;
    cards: [
      {
        src: string;
        alt: string;
        title: string;
        text: string;
      },
    ];
  };
};
export default function CategoryGallery({ data }: CategoryGalleryProps) {
  const { title, text, cards } = data;
  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.titleSection}>{title}</h2>
      <p className={styles.textSection}>{text}</p>
      <div className={styles.containerGalleryCards}>
        <div className={styles.card}></div>
      </div>
    </section>
  );
}
