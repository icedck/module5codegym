import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <Link href="/" legacyBehavior className={styles.navLink}>
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/about" legacyBehavior className={styles.navLink}>
                <a>About Us</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog" legacyBehavior className={styles.navLink}>
                <a>Blog</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/login" legacyBehavior className={styles.navLink}>
                <a>Logout</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/covid-19/index" legacyBehavior className={styles.navLink}>
                <a>Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.container}>
        {children}</div>
    </div>
  );
}
