import {
  faTelegram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.title}>
          <h1>Book Store</h1>
        </div>
        <div className={styles.links}>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="SignIn">
            <span>Sign In</span>
          </NavLink>
          <NavLink to="SignUp">
            <span>Sign up</span>
          </NavLink>
          <NavLink to="Dashboard">
            <span>Dashboard</span>
          </NavLink>
        </div>
        <div className={styles.socials}>
          <FontAwesomeIcon className={styles.icon} icon={faTelegram} />
          <FontAwesomeIcon className={styles.icon} icon={faWhatsapp} />
          <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
