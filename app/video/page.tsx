import { Videos } from "@/components";
import { Videos as AllVideos } from "@/constants";
import styles from "./page.module.css";

export default function Video() {
  return (
    <div className={styles.wrapper}>
      {AllVideos.map((video) => (
        <Videos
          thumbnail={video.thumbnail}
          date={video.date}
          title={video.title}
          route="/video/hello"
        />
      ))}
    </div>
  );
}
