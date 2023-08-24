import { WrapperType } from "@/types";
import styles from "./Wrapper.module.css";

export default function Wrapper({
  children,
  padding,
  paddingBlock,
  gap,
  noBackground = false,
  extraStyles,
}: WrapperType) {
  return (
    <div
      className={[
        styles.wrapper,
        padding === 0 && styles.noPadding,
        padding === 8 && styles.padding8,
        padding === 10 && styles.padding10,
        padding === 12 && styles.padding12,
        padding === 14 && styles.padding14,
        padding === 20 && styles.padding20,
        padding === 30 && styles.padding30,
        paddingBlock === 0 && styles.noPaddingBlock,
        paddingBlock === 8 && styles.paddingBlock8,
        paddingBlock === 10 && styles.paddingBlock10,
        paddingBlock === 12 && styles.paddingBlock12,
        paddingBlock === 14 && styles.paddingBlock14,
        paddingBlock === 20 && styles.paddingBlock20,
        paddingBlock === 30 && styles.paddingBlock30,
        gap === 0 && styles.noGap,
        gap === 8 && styles.gap8,
        gap === 10 && styles.gap10,
        gap === 12 && styles.gap12,
        gap === 14 && styles.gap14,
        gap === 20 && styles.gap20,
        gap === 30 && styles.gap30,
        noBackground && styles.noBackground,
      ].join(" ")}
      style={extraStyles}
    >
      {children}
    </div>
  );
}
