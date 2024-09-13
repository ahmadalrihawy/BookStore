import { useParams } from "react-router-dom";
import { useProduct } from "../Context/ProductContext";
import Header from "../components/Header/Header";
import styles from "./BookDetails.module.css";
import AddToCartBtn from "../components/Products/AddToCartBtn";
import Cart from "../components/Cart/Cart";
import Products from "../components/Products/Products";

function BookDetails() {
  const { id } = useParams();
  const { data } = useProduct();
  const book = data.find((item) => item.id == id);
  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <main>
      <Cart />
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <div className={styles.product}>
          <div className={styles.image}>
            <img src={book.imageUrlL} alt={book.bookTitle} />
          </div>
          <div className={styles.productDetails}>
            <div className={styles.title}>
              <h2>{book.bookTitle}</h2>
            </div>
            <div className={styles.details}>
              <div>
              <h2>Book Author:</h2>
              <p>{book.bookAuthor}</p>
              </div>
              <div>
              <h2>Book Publisher:</h2>
              <p>{book.publisher}</p>
              </div>
              <div>
              <h2>Year Of Publication:</h2>
              <p>{book.yearOfPublication}</p>
              </div>
            </div>
            <div className={styles.price}>
              <h2>
                Price:
                <span>{book.price} S.P</span>
              </h2>
              <div className={styles.addToCartBtn}>
                Add To Cart <AddToCartBtn bookObj={book} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products inDetails={true} />
    </main>
  );
}

export default BookDetails;
