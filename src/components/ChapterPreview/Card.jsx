import styles from "./Card.module.css";
import { motion } from "framer-motion";

const variants = {
  active: {
    width: "500px",
    transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
  },
  inactive: {
    width: "80px",
    transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
  },
};
const imagePosition = {
  active: {
    width: `${100}%`,
  },
  inactive: {
    width: `${0}%`,
    transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
  },
};

function Card({ chaptersObj, isActive, setIsActive, index, setShowContent }) {
  function handleClick() {
    setIsActive(index);
    isActive && setShowContent((e) => !e);
  }

  return (
    <motion.div
      className={styles.card}
      onClick={handleClick}
      variants={variants}
      animate={isActive ? "active" : "inactive"}
      initial="inactive"
    >
      <p className={isActive ? `${styles.active}` : ""}>{chaptersObj.title}</p>
      {isActive && (
        <motion.img
          src={chaptersObj.image}
          variants={imagePosition}
          animate={isActive ? "active" : "inactive"}
          initial="inactive"
          alt="BookImage"
        />
      )}
    </motion.div>
  );
}

export default Card;
