import DeleteButton from "../components/Cart/CartButton/DeleteButton";
import styles from "./Checkout.module.css";

function CheckOutCard({ cartObj }) {
  return (
    <div className={styles.checkOutCard}>
      <div className={styles.productCart}>
        <img src={cartObj.imageUrlS} alt={cartObj.bookTitle} />
        <div className={styles.productContent}>
          <p>{cartObj.bookTitle}</p>
          <span>{cartObj.price} S.P</span>
        </div>
      </div>
      <DeleteButton productObj={cartObj} />
    </div>
  );
}

export default CheckOutCard;
