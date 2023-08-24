import { DropDownButtonType } from "@/types";
import styles from "./index.module.css";
import Image from "next/image";

export default function DropDownButton({ currentValue }: DropDownButtonType) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{currentValue}</p>
      <Image
        src="/assets/arrow-down.png"
        alt="dropdown image"
        width={18}
        height={18}
      />
    </div>
  );
}
