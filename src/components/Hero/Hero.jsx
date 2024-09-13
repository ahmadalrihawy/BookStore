import { NavLink } from "react-router-dom";
import Button from "../Button";
import styles from "./Hero.module.css";
import { useProduct } from "../../Context/ProductContext"; 

function Hero() {
  const { user } = useProduct(); 
  const isLoggedIn = user || localStorage.getItem("userId");
  const userName = localStorage.getItem("username");

  return (
    <div className={styles.landingPage} id="home">
      <div className={styles.cricle1}></div>
      <div className={styles.cricle2}></div>
      <div className={styles.cricle3}></div>
      <div className={styles.container}>
        <div className={styles.introductionText}>
          {!isLoggedIn ? (
            <p>LET'S MAKE THE BEST INVESTMENT</p>
          ) : (
            <p>WELCOME BACK {userName}</p>
          )}
          <h1>There Is No Friend As Loyal As A Book</h1>
          <p>
            where stories come alive and knowledge knows no bounds. Explore a
            diverse collection of books, from timeless classics to the latest
            bestsellers.
          </p>
          <div className={styles.buttons}>
            {!isLoggedIn && (
              <>
                <NavLink to="/SignIn">
                  <Button content="Login" customize="login" />
                </NavLink>
                <NavLink to="/SignUp">
                  <Button content="Sign up" customize="signup" />
                </NavLink>
                {/* <NavLink to="/Test">
                  <Button content="Dashboard" customize="signup" />
                </NavLink> */}
              </>
            )}
          </div>
        </div>
        <div className={styles.landingImg}>
          <img src="hero.png" alt="" />
          <div className={styles.circle}>Best Seller</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
