import { Text, Wrapper } from "@/components";
import Image from "next/image";
import styles from "./page.module.css";

export default function Livescore() {
  return (
    <div className={styles.linUpsWrapper}>
      <div className={styles.lineUps}>
        <div className={styles.fieldTop}>
          <Image src="/assets/field-top.png" alt="field top" fill />
        </div>

        <div className={styles.fieldMain}>
          <Image src="/assets/field.png" alt="field main" fill />
        </div>
      </div>

      <div className={styles.lineUps}>
        <div className={styles.fieldTop}>
          <Image src="/assets/field-top.png" alt="field top" fill />
        </div>
        <div className={styles.fieldMain}>
          <Image src="/assets/field.png" alt="field main" fill />
        </div>
      </div>
    </div>
  );
}
