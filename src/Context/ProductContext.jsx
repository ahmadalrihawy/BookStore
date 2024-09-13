import { useContext } from "react";

const { useEffect } = require("react");
const { useState } = require("react");
const { createContext } = require("react");

const ProductConext = createContext();

function ProductProvider({ children }) {
  const [data, setData] = useState([]);
  const [fullData, setFullData] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://bookstorewebapp.somee.com/api/Book"
        );
        const result = await response.json();

        setData(result);
        setFullData(result);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const signup = async (userData) => {
    try {
      const response = await fetch(
        "https://bookstorewebapp.somee.com/api/Customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong");
      }

      return result;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  };

  const login = async (loginData) => {
    try {
      const response = await fetch(
        "https://bookstorewebapp.somee.com/api/Customer"
      );
      const users = await response.json();

      const foundUser = users.find(
        (user) =>
          user.username === loginData.username &&
          user.password === loginData.password
      );

      if (!foundUser) {
        throw new Error("Invalid username or password");
      }

      setUser(foundUser);

      localStorage.setItem("userId", foundUser.id);
      localStorage.setItem("username", foundUser.username);

      return foundUser;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  };

  const setCartToLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (product) => {
    const { description, price, imageUrlS, bookTitle, id } = product;

    let cart = getCartFromLocalStorage();

    const newProduct = { description, price, imageUrlS, bookTitle, id };
    cart = [...cart, newProduct];

    setCartToLocalStorage(cart);

    setCart(cart);
    setCartData(cart);
  };

  const removeFromCart = (productId) => {
    let cart = getCartFromLocalStorage();

    cart = cart.filter((item) => item.id !== productId);
    setCartToLocalStorage(cart);

    setCart(cart);
    setCartData(cart);
  };

  useEffect(() => {
    const cart = getCartFromLocalStorage();
    setCart(cart);
    setCartData(cart);
  }, []);

  const fetchOrders = async () => {
    try {
      const ordersResponse = await fetch(
        "https://bookstorewebapp.somee.com/api/Order"
      );
      const orders = await ordersResponse.json();

      const customersResponse = await fetch(
        "https://bookstorewebapp.somee.com/api/Customer"
      );
      const customers = await customersResponse.json();

      const booksResponse = await fetch(
        "https://bookstorewebapp.somee.com/api/Book"
      );
      const books = await booksResponse.json();

      const enrichedOrders = orders.map((order) => {
        const customer = customers.find((c) => c.id === order.customerId);
        const orderItems = order.orderItems.map((item) => {
          const book = books.find((b) => b.id === item.bookId);
          return {
            ...item,
            bookTitle: book.bookTitle,
            bookPrice: book.price,
          };
        });

        return {
          ...order,
          customerName: customer ? customer.username : "Unknown Customer",
          orderItems,
        };
      });

      return enrichedOrders;
    } catch (error) {
      console.error("Error fetching orders:", error);
      throw error;
    }
  };

  return (
    <ProductConext.Provider
      value={{
        data,
        fullData,
        addToCart,
        removeFromCart,
        cartData,
        signup,
        login,
        user,
        fetchOrders,
      }}
    >
      {children}
    </ProductConext.Provider>
  );
}
function useProduct() {
  const context = useContext(ProductConext);
  return context;
}

export { ProductProvider, useProduct };
