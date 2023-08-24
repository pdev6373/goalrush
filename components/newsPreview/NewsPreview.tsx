import Image from "next/image";
import { SectionHeading, Wrapper } from "..";
import { News } from "@/constants";
import styles from "./NewsPreview.module.css";

export default function NewsPreview() {
  return (
    <Wrapper>
      <>
        <SectionHeading>Recent News</SectionHeading>
        <div className={styles.newsWrapper}>
          {News.slice(0, 3).map((news, index) => (
            <div className={styles.news} key={index}>
              <Image src={news.image} alt="news image" width={90} height={80} />

              <Wrapper noBackground gap={12}>
                <>
                  <h2 className={styles.newsHeading}>{news.title}</h2>
                  <p className={styles.newsTime}>{news.time}</p>
                </>
              </Wrapper>
            </div>
          ))}
        </div>
      </>
    </Wrapper>
  );
}
