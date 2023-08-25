import Image from "next/image";
import { SectionHeading, Text, Wrapper } from "..";
import { News } from "@/constants";
import styles from "./index.module.css";

export default function NewsPreview() {
  return (
    <Wrapper>
      <>
        <SectionHeading>Recent News</SectionHeading>
        <div className={styles.newsWrapper}>
          {News.slice(0, 3).map((news, index) => (
            <div className={styles.news} key={index}>
              <Image src={news.image} alt="news image" width={90} height={80} />
              <Wrapper noBackground gapStatic={12}>
                <>
                  <Text
                    sizeStatic={14}
                    type="body"
                    variation="main"
                    weight="600"
                  >
                    {news.title}
                  </Text>

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
      </>
    </Wrapper>
  );
}
