import SectionHeading from "../SectionHeading";
import styles from "./Contact.module.css";
import ContactInfos from "./ContactInfos";
import ContactInputs from "./ContactInputs";

function Contact() {
  return (
    <div className={`${"container"} ${styles.contactContainer}`}>
      <SectionHeading title="CONTACT" desc="Write me Your Feedback" />
      <div className={styles.contact}>
        <ContactInputs />
        <ContactInfos />
      </div>
    </div>
  );
}

export default Contact;
