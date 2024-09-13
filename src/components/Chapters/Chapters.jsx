import { useState } from "react";
import SectionHeading from "../SectionHeading";
import ChaptersCard from "./ChaptersCard";
import styles from "./Chpters.module.css";

import { chapters } from "./data";

function Chapters() {
  const [active, setIsActive] = useState(0);
  return (
    <div className={styles.chapters} id="books">
      <SectionHeading title="CHAPTERS" desc="Chapters we've covered" />
      <div className={styles.container}>
        <div className={styles.chapterPhoto}>
          <img src="hero-2.png" alt="" />
        </div>
        <div className={styles.chapterCards}>
          {chapters.map((chapters, i) => (
            <ChaptersCard
              setIsActive={setIsActive}
              index={i}
              isActive={active === i}
              chaptersObj={chapters}
              key={chapters.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chapters;
