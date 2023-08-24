import {
  Calendar,
  Leagues,
  LiveScores,
  NewsPreview,
  Wrapper,
} from "@/components";
import styles from "./page.module.css";
import DropDownButton from "@/components/dropDownButton";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.allLeagues}>
        <Leagues />
      </section>

      <main className={styles.main}>
        <div className={styles.dropDowns}>
          <div className={styles.dropDownWapper}>
            <DropDownButton currentValue="All Cup" />
            <div className={styles.dropDownContent}>
              <Leagues />
            </div>
          </div>

          <div className={styles.dropDownWapper}>
            <DropDownButton currentValue="May, 29" />
            <div className={styles.dropDownContent}>
              <Calendar />
            </div>
          </div>
        </div>

        <LiveScores />
      </main>

      <div className={styles.aside}>
        <Wrapper noBackground gap={30}>
          <>
            <div className={styles.calendar}>
              <Calendar />
            </div>
            <NewsPreview />
          </>
        </Wrapper>
      </div>
    </div>
  );
}
