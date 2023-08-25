import { Fragment } from "react";
import { Videos } from "@/components";
import { Videos as AllVideos } from "@/constants";
import styles from "./page.module.css";

export default function Video() {
  return (
    <div className={styles.wrapper}>
      {AllVideos.map((video) => (
        <Fragment key={video.title}>
          <Videos
            thumbnail={video.thumbnail}
            date={video.date}
            title={video.title}
            route="/video/hello"
          />
        </Fragment>
      ))}
    </div>
  );
}
