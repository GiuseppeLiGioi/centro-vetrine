import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import DesktopNav from "@/components/ui/DesktopNav/DesktopNav";
import { navigations } from "@/data/navigation";
import styles from "./layout.module.css";
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={styles.shell}>
        <Header />
        <DesktopNav items={navigations} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
