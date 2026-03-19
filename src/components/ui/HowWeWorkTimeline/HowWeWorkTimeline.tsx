import { HOW_WE_WORK_ITEMS } from "@/data/about/howWeWork";
import styles from "./HowWeWorkTimeline.module.css";
import Image from "next/image";
export default function HowWeWorkTimeline() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.timelineList}>
        {HOW_WE_WORK_ITEMS.map((item) => {
          return (
            <li className={styles.timelineStep} key={item.id}>
              <div className={styles.stepNumber} aria-hidden="true">
                {item.step}
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepCardLeft}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 380px) 100vw, (max-width: 767px) 92px, (max-width: 1023px) 112px, 128px"
                  />
                </div>
                <div className={styles.stepCardRight}>
                  <h3 className={styles.titleCard}>{item.title}</h3>
                  <p className={styles.textCard}>{item.text}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
