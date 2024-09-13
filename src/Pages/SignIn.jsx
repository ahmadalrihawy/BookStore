
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { useProduct } from "../Context/ProductContext";
import Header from "../components/Header/Header";
import Button from "../components/Button";
import styles from "./SignIn.module.css";

function SignIn() {
  const { login } = useProduct(); 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const result = await login({
        username: formData.username,
        password: formData.password,
      });

      setSuccess("Login successful!");
      navigate("/"); 
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <main className={styles.signIn}>
      <div className="container">
        <Header />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.signInCard}>
          <h1>LOG IN</h1>
          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button content="Log in" customize="login" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignIn;
