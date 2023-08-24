import { SectionHeadingType } from "@/types";
import styles from "./SectionHeading.module.css";

export default function SectionHeading({ children }: SectionHeadingType) {
  return <h2 className={styles.heading}>{children}</h2>;
}
