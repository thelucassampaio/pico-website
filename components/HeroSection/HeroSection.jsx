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
          <div className={styles.logoContainer}>
            <Image
              src="/logo.png"
              width={150}
              height={150}
              priority
              alt="Logo da Pico Investimentos"
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
