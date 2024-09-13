import { ParallixCardsData } from "./data";
import ParallixCard from "./ParallixCard";
import styles from "./ParallixCards.module.css";

function ParallixCards() {
  return (
    <main className={styles.main}>
      {ParallixCardsData.map((card, i) => {
        return <ParallixCard key={`p_${i}`} i={i} {...card} />;
      })}
    </main>
  );
}

export default ParallixCards;
