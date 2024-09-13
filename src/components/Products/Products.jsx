import { NavLink } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import SectionHeading from "../SectionHeading";
import Product from "./Product";
import styles from "./Products.module.css";
import Button from "../Button";

function Products({ inDetails }) {
  const { data } = useProduct();

  return (
    <div className={styles.preview}>
      {!inDetails && (
        <SectionHeading
          title="CHAPTERS PREVIEW"
          desc="Read some chapter free"
        />
      )}
      <div className={styles.container}>
        {data.slice(0, 8).map((books) => (
          <Product bookObj={books} key={books.id} />
        ))}
      </div>
      <NavLink to="/allbooks" className={styles.btn}>
        <Button content="See All Books" customize="login" />
      </NavLink>
    </div>
  );
}

export default Products;
