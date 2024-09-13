import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useProduct } from "../../../Context/ProductContext";
import styles from "./DeleteButton.module.css"
function DeleteButton({ productObj }) {
  const { removeFromCart } = useProduct();

  const handleClick = () => {
    removeFromCart(productObj.id);
  };
  return (
    <div onClick={handleClick}>
      <FontAwesomeIcon className={styles.deleteIcon} icon={faCircleXmark} />
    </div>
  );
}

export default DeleteButton;
