import { useState } from "react";
import styles from "./Contact.module.css";
import Button from "../Button";

function ContactInputs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const messageData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message1: formData.message, 
    };

    try {
      const response = await fetch("https://bookstorewebapp.somee.com/api/Messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(messageData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the message");
      }

      const result = await response.json();
      console.log("Message sent successfully:", result);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      console.error("Error sending the message:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.inputsContainer}>
      <input
        type="text"
        name="name"
        value={formData.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="subject"
        value={formData.subject}
        placeholder="Subject"
        onChange={handleChange}
      />
      <textarea
        name="message"
        value={formData.message}
        placeholder="Your Message"
        onChange={handleChange}
      />
      <Button content="Send Now" customize="login" />
    </form>
  );
}

export default ContactInputs;
