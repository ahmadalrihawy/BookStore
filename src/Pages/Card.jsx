import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Dashboard.module.css";

function Card({ statisticObj }) {
  return (
    <div className={styles.card}>
      <FontAwesomeIcon icon={statisticObj.image} className={styles.cardIcon}/>
      <h2>{statisticObj.count}</h2>
      <span>{statisticObj.title}</span>
    </div>
  );
}

export default Card;
