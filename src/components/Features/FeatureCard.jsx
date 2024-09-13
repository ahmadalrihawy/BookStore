import styles from "./Features.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FeatureCard({ featureObj }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <FontAwesomeIcon icon={featureObj.img} className={styles.icon} />
      </div>
      <div className={styles.cardTitle}>
        <h3>{featureObj.title}</h3>
      </div>
      <div className={styles.cardP}>{featureObj.description}</div>
    </div>
  );
}

export default FeatureCard;
