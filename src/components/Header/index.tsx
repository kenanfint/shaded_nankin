import Image from "next/image";
import styles from "./main.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        {/*
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={10}
            height={18}
            priority
          />
        */}
      </div>
      <div className={styles.center}>
        <h1 className={styles.title}>Shaded Nankin</h1>
      </div>

      <div className={styles.right}>
        {/* Futuramente: botões, ícones, login, etc */}
      </div>
    </header>
  );
}
