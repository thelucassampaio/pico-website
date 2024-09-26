import About from "@/components/About/About";
import HeroSection from "@/components/HeroSection/HeroSection";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <About />
      </main>
    </div>
  );
}
