import { Leagues, LiveScores } from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <aside className={styles.aside}>
        <Leagues />
      </aside>

      <main className={styles.main}>
        <LiveScores />
      </main>
    </div>
  );
}
