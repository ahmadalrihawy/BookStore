import styles from "./Dashboard.module.css";

function MessageCard({ message }) {
  return (
    <div className={styles.messageCard}>
      <div>
        <span>Message by: </span>
        <span>{message.name}</span>
      </div>
      <div>
        <span>Subject: </span>
        <span>{message.subject}</span>
      </div>
      <div>
        <span>Message: </span>
        <span>{message.message1}</span> 
      </div>
    </div>
  );
}

export default MessageCard;
