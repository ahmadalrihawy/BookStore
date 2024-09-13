import styles from "./Dashboard.module.css";
import { NavLink } from "react-router-dom";
function DashboardHeader() {
  return (
    <div className="container">
      <div class={styles.headerArea}>
        <div class={styles.container}>
          <div class={styles.logo}>Dashboard</div>
          <div class={styles.linksContainer}>
            <ul class={styles.links}>
              <li>
                <NavLink to="/">
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="Messages">
                  <span>Messages</span>
                </NavLink>
              </li>

              <li>
                <NavLink to="Orders">
                  <span>Orders</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
