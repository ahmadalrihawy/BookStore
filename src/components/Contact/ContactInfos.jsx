import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Contact.module.css";
import {
  faFacebook,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
function ContactInfos() {
  return (
    <div className={styles.contactInfos}>
      <div>
        <p>Address</p>
        <span>Damascus, Syria</span>
      </div>
      <div>
        <p>Phone</p>
        <span>+963 934164232</span>
      </div>
      <div>
        <p>Email</p>
        <span>Rihawyahmad17@gmail.com</span>
      </div>
      <div>
        <h2>Connect book socials</h2>
        <div className={styles.socials}>
          <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
          <FontAwesomeIcon className={styles.icon} icon={faXTwitter} />
          <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
          <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
          <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
        </div>
      </div>
    </div>
  );
}

export default ContactInfos;
