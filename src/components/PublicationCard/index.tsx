import Image from "next/image";
import styles from "./main.module.css";
import Link from 'next/link';

export default function PublicationCard() {
  return (
    <Link href="/pub/liacs" className={styles.container}>
      <div className={styles.content}>
        <div>
          <h1>
            LIACS... But who's buying? 
          </h1>
          <p>
            A pragmatic view on building a company
          </p>
        </div>

    
          <Image 
          className={styles.cardImage}
          src="/liacs_nankin.png" alt="Next.js logo" width={100} height={100}
          />
      </div>
    </Link>
  );
}
