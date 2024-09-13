import DeleteButton from "../CartButton/DeleteButton";
import styles from "./ProductCart.module.css";

function ProductCart({ productObj }) {

  const truncateDescription = (desc) => {
    if (desc.length > 20) {
      return desc.substring(0, 20) + "...";
    }
    return desc;
  };
  return (
    <div className={styles.productCartContainer}>
      <div className={styles.productCart}>
      <img src={productObj.imageUrlS} alt={productObj.bookTitle} />
      <div className={styles.productContent}>
        <p>{truncateDescription(productObj.bookTitle)}</p>
        <span>{productObj.price} S.P</span>
      </div>
      </div>
      <DeleteButton productObj={productObj}/>
    </div>
  );
}

export default ProductCart;
