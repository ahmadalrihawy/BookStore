import styles from "./PaymentButton.module.css";
import { motion } from "framer-motion";
function PaymentButton() {
  return (
    <div
      className={styles.button}
    >
      <motion.div
        className={styles.slider}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className={styles.el}>
          <PerspectiveText label="Payment" />
        </div>
      </motion.div>
    </div>
  );
}

export default PaymentButton;

function PerspectiveText({ label }) {
  return (
    <div className={styles.PerspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}
