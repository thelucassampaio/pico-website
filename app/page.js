import About from "@/components/About/About";
import Approach from "@/components/Approach/Approach";
import FeaturesSection from "@/components/FeaturesSection/FeaturesSection";
import HeroSection from "@/components/HeroSection/HeroSection";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <About />
        <FeaturesSection />
        <Approach />
      </main>
    </div>
  );
}
