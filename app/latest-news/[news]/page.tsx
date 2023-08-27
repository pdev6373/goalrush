import { News as AllNews } from "@/constants";
import styles from "./page.module.css";

type NewsType = {
  params: {
    news: string;
  };
};

export default function News({ params }: NewsType) {
  const currentNews = AllNews.find((news) => news.id === params.news);

  return (
    <div className={styles.wrapper}>
      <aside></aside>
      <main>
        <h1>{currentNews?.title}</h1>
      </main>
    </div>
  );
}
