import FeatureCard from "./FeatureCard";
import styles from "./Features.module.css";
import SectionHeading from "../SectionHeading";
import { features } from "./data";

function Features() {
  return (
    <div className={styles.features} id="features">
      <SectionHeading
        title="OUR FEATUERS!"
        desc="What you'll achieve by this store"
      />
      <div className={styles.container}>
        <div className={styles.featuresImg}>
          <div className={styles.imgShadow}></div>
          <img className={styles.feImg} src="achive2.jpg" alt="" />
        </div>
        <div className={styles.featuersCards}>
          {features.map((feature) => (
            <FeatureCard featureObj={feature} key={feature.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
