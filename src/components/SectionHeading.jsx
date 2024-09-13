import styles from "./SectionHeading.module.css";

function SectionHeading({ title, desc }) {
  return (
    <div className={styles.heading}>
      <p>{title}</p>
      <h2>{desc}</h2>
      <div className={styles.divider}></div>
    </div>
  );
}

export default SectionHeading;
