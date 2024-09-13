import { useState } from "react";
import SectionHeading from "../SectionHeading";
import Card from "./Card";
import styles from "./ChaptersPreview.module.css";
import { ChaptersPreviewData } from "./data";

function ChaptersPreview({setShowContent}) {
  const [active, setIsActive] = useState(0);
  return (
    <div className={styles.ChaptersPreview}>
      <SectionHeading title="BEST SELLERS" desc="Best Sellers Books" />
      <div className="container">
        <div className={styles.cardsContainer}>
          {ChaptersPreviewData.map((chapters, i) => (
            <Card
              isActive={active === i}
              setIsActive={setIsActive}
              chaptersObj={chapters}
              key={i}
              index={i}
              setShowContent={setShowContent}
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default ChaptersPreview;
