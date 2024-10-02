import styles from "./template.module.css";

const TwoColumnSection = ({
  subtitle,
  title,
  paragraph,
  id,
  children,
  leftAlign,
}) => {
  return (
    <section
      className={`${leftAlign && styles.flexDirectionColumn} ${
        styles.sectionContainer
      }`}
      id={id}
    >
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
        {!leftAlign && <>{children}</>}
      </div>
      {leftAlign && <>{children}</>}
    </section>
  );
};

export default TwoColumnSection;
