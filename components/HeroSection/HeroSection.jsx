import Image from "next/image";

import localFont from "next/font/local";

import styles from "./HeroSections.module.css";

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
          <Image
            src="/logo-white.png"
            width={68}
            height={68}
            priority
            alt="Logo da Pico Investimentos"
            className={styles.logo}
          />
          <h1 className={`${styles.title} ${CalyaFont.variable}`}>
            PICO Investimentos
          </h1>
          <p className={styles.subtitle}>
            Pensando de forma diferente desde 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
