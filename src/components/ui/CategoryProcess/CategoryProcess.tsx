import styles from "./CategoryProcess.module.css";

type CategoryProcessProps = {
  data: {
    title: string;
    text: string;
    steps: {
      id: number;
      title: string;
      text: string;
    }[];
  };
};
export default function CategoryProcess({ data }: CategoryProcessProps) {
  const { title, text, steps } = data;

  return (
    <section className={styles.containerProcess}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionText}>{text}</p>
      </div>

      <ol className={styles.steps}>
        {steps.map((s) => (
          <li className={styles.step} key={s.id}>
            <div className={styles.stepNumber}>{s.id}</div>

            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepText}>{s.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
