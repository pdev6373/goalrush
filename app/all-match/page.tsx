import { Calendar, LiveScores } from "@/components";
import styles from "./page.module.css";

export default function page() {
  return (
    <div className={styles.wrapper}>
      <div>
        <LiveScores />
      </div>
      <div>
        <Calendar />
      </div>
    </div>
  );
}
