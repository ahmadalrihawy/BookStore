import styles from "./Header.module.css";
import Link from "./Link";

function Header() {
  return (
    <div class={styles.headerArea}>
      <div class={styles.container}>
        <div class={styles.logo}>Book Store</div>
        <div class={styles.linksContainer}>
          <ul class={styles.links}>
            <Link Lhref="Home" />
            <Link Lhref="Features" />
            <Link Lhref="chapters" />
            <Link Lhref="products" />
            <Link Lhref="contact" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
