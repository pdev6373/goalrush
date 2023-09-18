import Image from "next/image";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image src="/404.gif" alt="404 image" fill />
      </div>
    </div>
  );
}
