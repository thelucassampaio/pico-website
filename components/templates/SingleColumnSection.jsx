import styles from "./template.module.css";

const SingleColumnSection = ({ subtitle, title, id, children }) => {
  return (
    <section className={styles.sectionContainer} id={id}>
      <div className={styles.singleColumnContentWrapper}>
        <div className={styles.singleColumnContent}>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.divider} />
          {children}
        </div>
      </div>
    </section>
  );
};

export default SingleColumnSection;
