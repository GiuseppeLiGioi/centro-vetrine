import styles from "./CategoryCustomization.module.css";
import Image from "next/image";
type CategoryCustomizationProps = {
  data: {
    title: string;
    text: string;
    image: {
      src: string;
      alt: string;
    };
    groups: {
      id: string;
      title: string;
      options: {
        id: string;
        src: string;
        alt: string;
        label: string;
      }[];
    }[];
  };
};

export default function CategoryCustomization({
  data,
}: CategoryCustomizationProps) {
  const { title, text, image, groups } = data;

  return (
    <section className={styles.customizationSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
      <div className={styles.mainImageWrapper}>
        <Image
          className={styles.mainImage}
          fill
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div className={styles.containerGroups}>
        {groups.map((g) => (
          <div className={styles.group} key={g.id}>
            <h3 className={styles.titleGroup}>{g.title}</h3>
            <div className={styles.containerOptions}>
              {g.options.map((o) => (
                <article className={styles.singleOption} key={o.id}>
                  <div className={styles.optionImageWrapper}>
                    <Image
                      className={styles.cardOptionImage}
                      fill
                      src={o.src}
                      alt={o.alt}
                    />
                  </div>
                  <span className={styles.labelImage}>{o.label}</span>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
