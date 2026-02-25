import { NavigationItem } from "@/data/navigation";
import Container from "@/components/ui/Container/Container";
import styles from "./DesktopNav.module.css";
import Link from "next/link";
type DesktopNavProps = {
  items: NavigationItem[];
};

export default function DesktopNav({ items }: DesktopNavProps) {
  return (
    <nav className={styles.navbarLg}>
      <Container className={styles.containerNavbarLg}>
        {items.map((item) => {
          if (item.href) {
            return (
              <Link
                href={item.href}
                className={styles.voiceNavLg}
                key={item.id}
              >
                {item.label}
              </Link>
            );
          }

          if (item.children && item.children.length > 0) {
            return (
              <div className={styles.navItem} key={item.id}>
                <button type="button" className={styles.navTrigger}>
                  {item.label}
                </button>
                <div className={styles.subMenu}>
                  {item.children.map((child) => (
                    <Link
                      href={child.href!}
                      key={child.id}
                      className={styles.childItem}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return null;
        })}
      </Container>
    </nav>
  );
}
