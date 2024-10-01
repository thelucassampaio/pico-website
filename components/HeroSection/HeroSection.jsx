import Image from "next/image";

import localFont from "next/font/local";

import styles from "./HeroSections.module.css";
import LogoWithText from "@/utils/logo/LogoWithText";
import Logo from "@/utils/logo/Logo";

const CalyaFont = localFont({
  src: "../../app/fonts/Calya.otf",
  variable: "--font-calya",
  display: "swap",
});

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.logoContainer}>
            <Logo
              aria-label="Logo da Pico Investimentos"
              width={200}
              className={styles.logo}
            />
          </div>
          <h1 className={`${styles.title} ${CalyaFont.variable}`}>
            PICO Investimentos
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
