import { WrapperType } from "@/types";
import styles from "./index.module.css";

export default function Wrapper({
  children,
  padding,
  gap,
  noBackground = false,
  extraStyles,
}: WrapperType) {
  return (
    <div
      className={[
        styles.wrapper,

        noBackground && styles.noBackground,

        padding === 0 && styles.noPadding,
        padding === 8 && styles.padding8,
        padding === 10 && styles.padding10,
        padding === 12 && styles.padding12,
        padding === 20 && styles.padding20,
        padding === 30 && styles.padding30,

        gap === 0 && styles.noGap,
        gap === 8 && styles.gap8,
        gap === 10 && styles.gap10,
        gap === 12 && styles.gap12,
        gap === 20 && styles.gap20,
        gap === 30 && styles.gap30,
      ].join(" ")}
      style={extraStyles}
    >
      {children}
    </div>
  );
}
