import styles from "./CartButton.module.css";
import { motion } from "framer-motion";
function CartButton({ setIsActive, isActive }) {
  return (
    <div
      onClick={() => {
        setIsActive(!isActive);
      }}
      className={styles.button}
    >
      <motion.div
        className={styles.slider}
        animate={{ top: isActive ? "-100%" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label="Cart" />
        </div>
        <div className={styles.el}>
          <PerspectiveText label="Close" />
        </div>
      </motion.div>
    </div>
  );
}

export default CartButton;

function PerspectiveText({ label }) {
  return (
    <div className={styles.PerspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
