import Image from "next/image";
import { VideoType } from "@/types";
import { Text, Wrapper } from "..";
import Link from "next/link";
import styles from "./index.module.css";

export default function Videos({ thumbnail, date, title, route }: VideoType) {
  return (
    <Link href={route}>
      <Wrapper noBackground gapStatic={10}>
        <>
          <div className={styles.imageWrapper}>
            <Image
              src={thumbnail}
              alt="video thumbnail"
              fill
              className={styles.image}
            />
          </div>

          <Wrapper noBackground gapStatic={8}>
            <>
              <Text
                sizeStatic={14}
                type="body"
                variation="main-300"
                weight="600"
              >
                {date}
              </Text>
              <Text
                sizeStatic={18}
                type="heading"
                variation="main"
                weight="600"
              >
                {title}
              </Text>
            </>
          </Wrapper>
        </>
      </Wrapper>
    </Link>
  );
}
