import React, { useState, useEffect } from "react";
import DashboardHeader from "./DashboardHeader";
import MessageCard from "./MessageCard";
import styles from "./Dashboard.module.css"
function Messages() {
  const [messages, setMessages] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("https://bookstorewebapp.somee.com/api/Messages"); 
        if (!response.ok) {
          throw new Error("Failed to fetch messages");
        }
        const data = await response.json(); 
        setMessages(data); 
        setLoading(false); 
      } catch (error) {
        setError(error.message); 
        setLoading(false);
      }
    };

    fetchMessages(); 
  }, []);


  return (
    <div className="container">
      <DashboardHeader />
      {loading && <p>Loading messages...</p>} 
      {error && <p>Error: {error}</p>} 
      {!loading && !error && (
        <div className={styles.messagesContainer}>
          {messages.map((message) => (
            <MessageCard key={message.messageId} message={message} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Messages;
