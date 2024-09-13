import { useNavigate } from "react-router-dom";
import AddToCartBtn from "./AddToCartBtn";
import styles from "./Products.module.css";

function Product({ bookObj }) {
  const navigate = useNavigate();

  const truncateDescription = (desc) => {
    if (desc.length > 20) {
      return desc.substring(0, 20) + "...";
    }
    return desc;
  };
  const handleNavigate = () => {
    navigate(`/book/${bookObj.id}`);
  };

  return (
    <>
      <div className={styles.card}>
        <div className={styles.cardImg} onClick={handleNavigate}>
          <img src={bookObj.imageUrlL} alt="" />
        </div>
        <div className={styles.cardInfo}>
          <div className={styles.title}>
            <h3>{truncateDescription(bookObj.bookTitle)}</h3>
            <AddToCartBtn bookObj={bookObj} />
          </div>
          <p className={styles.desc}>
            {truncateDescription(bookObj.bookAuthor)}
          </p>
          <span className={styles.price}>{bookObj.price} S.P</span>
        </div>
      </div>
    </>
  );
}

export default Product;
