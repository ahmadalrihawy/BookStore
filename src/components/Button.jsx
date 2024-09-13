import styles from "./Button.module.css";

function Button({ content, customize, onClick }) {
  return (
    <button className={styles[customize]} onClick={onClick}>
      <span>{content}</span>
    </button>
  );
}

export default Button;
