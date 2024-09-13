import styles from "./ParallixCards.module.css";

function ParallixCard({
  i,
  title,
  description,
  image,
  color,
}) {
  return (
    <div className={styles.cardContainer}>
      <div style={{ backgroundColor: color }} className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.inner}>
              <img src={image} alt="book" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParallixCard;
