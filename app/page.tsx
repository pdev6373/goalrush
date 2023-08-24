import {
  Calendar,
  Leagues,
  LiveScores,
  NewsPreview,
  Wrapper,
} from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.leaguesWrapper}>
        <Leagues />
      </section>

      <main className={styles.main}>
        <LiveScores />
      </main>

      <div className={styles.aside}>
        <Wrapper noBackground gap={30}>
          <>
            <Calendar />
            <NewsPreview />
          </>
        </Wrapper>
      </div>
    </div>
  );
}
