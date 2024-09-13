import { useState } from "react";
import styles from "./Cart.module.css";
import CartButton from "./CartButton/CartButton";
import { AnimatePresence, delay, motion } from "framer-motion";
import CartContent from "./EmptyCart/CartContent";
import { useProduct } from "../../Context/ProductContext";

const variants = {
  open: {
    width: 480,
    height: `${window.innerHeight - 100}px`,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: 0,
    right: 0,

    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

function Cart() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <CartContent />}</AnimatePresence>
      </motion.div>
      <CartButton isActive={isActive} setIsActive={setIsActive} />
  
    </div>
  );
}

export default Cart;
