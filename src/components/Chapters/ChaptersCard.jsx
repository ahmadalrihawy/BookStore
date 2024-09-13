import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Chpters.module.css";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const variants = {
  active: {
    height: "500px",
    transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
  },
  inactive: {
    height: "80px",
    transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
  },
};

function ChaptersCard({ chaptersObj, index, isActive, setIsActive }) {
  function handleClick() {
    setIsActive(index);
  }

  return (
    <motion.div
      onClick={handleClick}
      className={`${styles.card} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.cardTitle}>
        <div className={styles.title}>{chaptersObj.title}</div>
        <div className={`${styles.arrow} ${isActive ? styles.rotate : ""}`}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
      {isActive && (
        <div className={styles.cardP}>{chaptersObj.description}</div>
      )}
    </motion.div>
  );
}

export default ChaptersCard;
