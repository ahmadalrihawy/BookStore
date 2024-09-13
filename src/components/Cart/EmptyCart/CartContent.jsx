import { useProduct } from "../../../Context/ProductContext";
import ProductCart from "./ProductCart";
import styles from "./CartContent.module.css";
import { motion } from "framer-motion";
import PaymentButton from "../CartButton/PaymentButton";
import { NavLink } from "react-router-dom";

const perspectiveEmpty = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: { delay: 0.5 },
  },
  exit: {
    opacity: 0,
  },
};

const perspective = {
  initial: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: 0,
  },
  enter: (i) => ({
    opacity: 1,
    rotateX: 0,
    translateY: 0,
    translateX: 0,
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  exit: {
    opacity: 0,
    rotateX: 90,
    translateY: 80,
    translateX: 0,
    transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  },
};

function CartContent() {
  const { cartData } = useProduct();

  const totalPrice = cartData.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <>
      {cartData.length === 0 ? (
        <div className={styles.cartEmpty}>
          <div className={styles.bodyEmpty}>
            <motion.div
              variants={perspectiveEmpty}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <p>Your Cart is Empty</p>
              <p>
              but great stories await! Browse our collection and find your next favorite read.
              </p>
            </motion.div>
          </div>
        </div>
      ) : (
        <motion.div
          className={styles.nav}
          variants={perspectiveEmpty}
          exit="exit"
          animate="enter"
          initial="initial"
        >
          <h1 className={styles.navTitle}>Your Cart ({cartData.length})</h1>
          <div className={styles.body}>
            {cartData.map((product, i) => (
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <ProductCart productObj={product} key={product.id} />
              </motion.div>
            ))}
          </div>
          <div className={styles.price}>
            <h1>Total Price:</h1>
            <h1>{totalPrice} S.P</h1>
          </div>
          <NavLink to="/checkout">
          <PaymentButton />
          </NavLink>
        </motion.div>
      )}
    </>
  );
}

export default CartContent;
