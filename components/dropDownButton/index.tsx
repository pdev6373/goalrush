import { DropDownButtonType } from "@/types";
import styles from "./index.module.css";
import Image from "next/image";
import { Text } from "..";

export default function DropDownButton({ currentValue }: DropDownButtonType) {
  return (
    <div className={styles.wrapper}>
      <Text size={16} type="body" variation="main" weight="600">
        {currentValue}
      </Text>

      <Image
        src="/assets/arrow-down.png"
        alt="dropdown image"
        width={18}
        height={18}
      />
    </div>
  );
}
