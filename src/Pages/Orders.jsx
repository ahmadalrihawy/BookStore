import React, { useEffect, useState } from "react";
import { useProduct } from "../Context/ProductContext";
import styles from "./Orders.module.css";
import DashboardHeader from "./DashboardHeader";
function Orders() {
  const { fetchOrders } = useProduct();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const ordersData = await fetchOrders();
        setOrders(ordersData);
      } catch (error) {
        console.error("Error loading orders:", error);
      }
    };

    getOrders();
  }, [fetchOrders]);

  if (!orders.length) {
    return <p>No orders found.</p>;
  }

  return (
    <div className="container">
      <DashboardHeader />
      <h1 className={styles.dashboardTitle}>Orders</h1>
      <div className={styles.orderCardContainer}>
        {orders.map((order) => (
          <div key={order.orderId} className={styles.orderCard}>
            <h2>Order ID: {order.orderId}</h2>
            <div className={styles.infos}>
              <p>Customer: {order.customerName}</p>
              <p>Total Amount: {order.totalAmount} S.P</p>
            </div>
            <h3>Items Ordered:</h3>
            <ul>
              {order.orderItems.map((item) => (
                <li key={item.orderItemId}>
                  {item.bookTitle} - {item.price} S.P
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
