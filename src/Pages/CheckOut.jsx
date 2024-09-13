import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header/Header";
import { useProduct } from "../Context/ProductContext";
import styles from "./Checkout.module.css";
import CheckOutCard from "./CheckOutCard";

function CheckOut() {
  const { cartData } = useProduct();

  const handleCheckout = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const username = localStorage.getItem("username");
      const cart = JSON.parse(localStorage.getItem("cart"));

      if (!userId || !cart || cart.length === 0) {
        throw new Error("No user or cart data available for checkout.");
      }
      const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
      const orderItems = cart.map((item) => ({
        orderItemId: 0,
        orderId: 0,
        bookId: item.id,
        quantity: 1,
        price: item.price,
      }));

      const order = {
        orderId: 1,
        customerId: parseInt(userId),
        orderDate: new Date().toISOString(),
        totalAmount: totalAmount,
        paymentTypeId: 1,
        paid: true,
        delivered: true,
        orderItems: orderItems,
      };

      const response = await fetch("https://bookstorewebapp.somee.com/api/Order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Failed to place the order");
      }

      const result = await response.json();
      console.log("Order successfully placed:", result);

      localStorage.removeItem("cart");
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div className="container">
      <Header />
      <div className={styles.booksContainer}>
        {cartData.map((product) => (
          <CheckOutCard cartObj={product} key={product.id} />
        ))}
      </div>
      <div className={styles.btn}>
      <NavLink to="/">
        <Button
          content="Check Out"
          customize="login"
          onClick={handleCheckout}
        />
      </NavLink>
      </div>

    </div>
  );
}

export default CheckOut;
