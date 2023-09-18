import Image from "next/image";
import { SectionHeading, Text, Wrapper } from "..";
import { News } from "@/constants";
import styles from "./index.module.css";
import Link from "next/link";

export default function NewsPreview() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <SectionHeading>Recent News</SectionHeading>
      </div>
      <div className={styles.newsWrapper}>
        {News.slice(0, 3).map((news, index) => (
          // <Link href="" className={styles.news} key={index}>
          <div className={styles.news} key={index}>
            <Image src={news.image} alt="news image" width={90} height={80} />
            <Wrapper noBackground gapStatic={12}>
              <>
                <div className={styles.title}>
                  <Text
                    sizeStatic={14}
                    type="body"
                    variation="main"
                    weight="600"
                  >
                    {news.title}
                  </Text>
                </div>

                <Text
                  sizeStatic={12}
                  type="body"
                  variation="main-300"
                  weight="600"
                >
                  {news.time}
                </Text>
              </>
            </Wrapper>
          </div>
        ))}
      </div>
    </div>
  );
}
