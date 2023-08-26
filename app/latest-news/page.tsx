import Image from "next/image";
import styles from "./page.module.css";
import { Text, Wrapper } from "@/components";
import { News } from "@/constants";

export default function LatestNews() {
  return (
    <div className={styles.wrapper}>
      <Wrapper noBackground gap={30}>
        <>
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/news-background.png"
              alt="news background"
              fill
            />
          </div>

          <main className={styles.main}>
            <div className={styles.mainInner}>
              <Wrapper padding={20}>
                <>
                  <div className={styles.headerWrapper}>
                    <Text
                      size={22}
                      type="heading"
                      variation="main"
                      weight="700"
                    >
                      Latest News
                    </Text>
                  </div>

                  {News.map((news, index) => (
                    <div
                      key={index}
                      className={[
                        styles.news,
                        index % 2 && styles.newsOdd,
                      ].join(" ")}
                    >
                      <div className={styles.newsImageWrapper}>
                        <Image
                          src={news.image}
                          alt="news image"
                          fill
                          className={styles.newsImage}
                        />
                      </div>

                      <Wrapper noBackground gap={10}>
                        <>
                          <Wrapper noBackground gap={10}>
                            <>
                              <h3 className={styles.title}>{news.title}</h3>

                              <div className={styles.bodyWrapper}>
                                <Text
                                  size={14}
                                  type="body"
                                  variation="main"
                                  weight="400"
                                >
                                  {news.body}
                                </Text>
                              </div>
                            </>
                          </Wrapper>

                          <div className={styles.timeWrapper}>
                            <Text
                              size={14}
                              type="body"
                              variation="main-300"
                              weight="600"
                            >
                              {news.time}
                            </Text>
                          </div>
                        </>
                      </Wrapper>
                    </div>
                  ))}
                </>
              </Wrapper>
            </div>
          </main>
        </>
      </Wrapper>
    </div>
  );
}
