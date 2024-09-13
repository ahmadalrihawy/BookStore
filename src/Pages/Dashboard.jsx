import { useEffect, useState } from "react";
import Button from "../components/Button";
import styles from "./Dashboard.module.css";
import Card from "./Card";
import { statisticsObj } from "./data";
import DashboardHeader from "./DashboardHeader";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);

  useEffect(() => {
    // Fetch total users
    fetch("https://bookstorewebapp.somee.com/api/Customer")
      .then((response) => response.json())
      .then((data) => setTotalUsers(data.length)) // Assuming the API returns an array of users
      .catch((error) => console.error("Error fetching users:", error));

    // Fetch total books
    fetch("https://bookstorewebapp.somee.com/api/Book")
      .then((response) => response.json())
      .then((data) => setTotalBooks(data.length)) // Assuming the API returns an array of books
      .catch((error) => console.error("Error fetching books:", error));

    // Fetch total sales
    fetch("https://bookstorewebapp.somee.com/api/order")
      .then((response) => response.json())
      .then((data) => setTotalSales(data.length)) // Assuming the API returns an array of orders
      .catch((error) => console.error("Error fetching sales:", error));

    // Fetch total feedbacks
    fetch("https://bookstorewebapp.somee.com/api/Messages")
      .then((response) => response.json())
      .then((data) => setTotalFeedbacks(data.length)) // Assuming the API returns an array of messages
      .catch((error) => console.error("Error fetching feedbacks:", error));
  }, []);

  const [bookData, setBookData] = useState({
    isbn: "",
    bookTitle: "",
    bookAuthor: "",
    yearOfPublication: "",
    publisher: "",
    imageUrlS: "",
    imageUrlM: "",
    imageUrlL: "",
    price: "",
    stock: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {};
    for (let key in bookData) {
      if (bookData[key]) {
        formData[key] = bookData[key];
      }
    }

    try {
      const response = await fetch(
        "https://bookstorewebapp.somee.com/api/Book",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Error adding book");
      }

      alert("Book added successfully!");
      setBookData({
        isbn: "",
        bookTitle: "",
        bookAuthor: "",
        yearOfPublication: "",
        publisher: "",
        imageUrlS: "",
        imageUrlM: "",
        imageUrlL: "",
        price: "",
        stock: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Error adding book. Please try again.");
    }
  };

  function handleClick() {
    if (email && password === "admin") {
      setShowDashboard(true);
    }
  }

  return (
    <main className={styles.signIn}>
      <DashboardHeader />
      {!showDashboard ? (
        <>
          <div className={styles.cardContainer}>
            <div className={styles.signInCard}>
              <h1>LOG IN</h1>
              <input
                type="text"
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Your Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                content="Log in"
                customize="login"
                onClick={handleClick}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <div className={styles.dashboard}>
            <div className={styles.statistics}>
              <Card
                statisticObj={{
                  image: faUser,
                  count: totalUsers,
                  title: "Total Users",
                }}
              />
              <Card
                statisticObj={{
                  image: faBook,
                  count: totalBooks,
                  title: "Total Books",
                }}
              />
              <Card
                statisticObj={{
                  image: faCartShopping,
                  count: totalSales,
                  title: "Total Sales",
                }}
              />
              <Card
                statisticObj={{
                  image: faMessage,
                  count: totalFeedbacks,
                  title: "Total Feedbacks",
                }}
              />
            </div>
            <div className={styles.form}>
              <h1>Add Books To The Gallery</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="ISBN"
                  name="isbn"
                  value={bookData.isbn}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Book Title"
                  name="bookTitle"
                  value={bookData.bookTitle}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Author"
                  name="bookAuthor"
                  value={bookData.bookAuthor}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  placeholder="Year of Publication"
                  name="yearOfPublication"
                  value={bookData.yearOfPublication}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Publisher"
                  name="publisher"
                  value={bookData.publisher}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Small Image URL"
                  name="imageUrlS"
                  value={bookData.imageUrlS}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Medium Image URL"
                  name="imageUrlM"
                  value={bookData.imageUrlM}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Large Image URL"
                  name="imageUrlL"
                  value={bookData.imageUrlL}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={bookData.price}
                  onChange={handleInputChange}
                />
                <input
                  type="number"
                  placeholder="Stock"
                  name="stock"
                  value={bookData.stock}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={bookData.description}
                  onChange={handleInputChange}
                />
                <button type="submit">
                  <span>Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Dashboard;
