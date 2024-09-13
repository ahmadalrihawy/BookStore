import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../Context/ProductContext"; 
import Button from "../components/Button";
import Header from "../components/Header/Header";
import styles from "./Signup.module.css";

function SignUp() {
  const { signup } = useProduct(); 
  const [formData, setFormData] = useState({
    username: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
    fName: "",
    lName: ""
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

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!formData.username || !formData.emailAddress || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const result = await signup({
        username: formData.username,
        password: formData.password,
        emailAddress: formData.emailAddress,
        fName: formData.fName,
        lName: formData.lName,
      });
      setSuccess("Signup successful!");
      setTimeout(() => {
        navigate("/signin");  // Redirect to login page after success
      }, 200);  // Optional delay of 2 seconds before redirecting
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <main className={styles.signUp}>
      <div className="container">
        <Header />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.signInCard}>
          <h1>Sign Up</h1>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.nameInputs}>
              <input
                type="text"
                name="fName"
                placeholder="First Name"
                value={formData.fName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lName"
                placeholder="Last Name"
                value={formData.lName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              name="username"
              placeholder="User Name"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="emailAddress"
              placeholder="Your Email"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <Button content="Sign up" customize="login" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
