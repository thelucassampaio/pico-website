import styles from "./template.module.css";

const TwoColumnSection = ({ subtitle, title, paragraph, children }) => {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.twoColumnContentWrapper}>
        <div className={styles.twoColumnTextContent}>
          <span className={styles.subtitle}>{subtitle}</span>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.divider} />
          {typeof paragraph === "string" ? (
            <p className={styles.paragraph}>{paragraph}</p>
          ) : (
            paragraph
          )}
        </div>
        <>{children}</>
      </div>
    </section>
  );
};

export default TwoColumnSection;
