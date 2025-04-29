import styles from "./main.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={`${styles.navItem} ${styles.active}`}>Home</li>
        <li className={`${styles.navItem}`}>Contact</li>
      </ul>
    </nav>
  );
}
