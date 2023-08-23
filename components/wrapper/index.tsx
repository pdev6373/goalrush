import { WrapperType } from "@/types";
import styles from "./index.module.css";

export default function Wrapper({
  children,
  padding,
  paddingBlock,
  gap,
  noBackground = false,
}: WrapperType) {
  return (
    <div
      className={[
        styles.wrapper,
        padding === 0 && styles.noPadding,
        padding === 8 && styles.padding8,
        padding === 10 && styles.padding10,
        padding === 14 && styles.padding14,
        padding === 20 && styles.padding20,
        paddingBlock === 0 && styles.noPaddingBlock,
        paddingBlock === 8 && styles.paddingBlock8,
        paddingBlock === 10 && styles.paddingBlock10,
        paddingBlock === 14 && styles.paddingBlock14,
        paddingBlock === 20 && styles.paddingBlock20,
        gap === 0 && styles.noGap,
        gap === 8 && styles.gap8,
        gap === 10 && styles.gap10,
        gap === 14 && styles.gap14,
        gap === 20 && styles.gap20,
        noBackground && styles.noBackground,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
