import { TextType } from "@/types";
import styles from "./index.module.css";

export default function Text({
  children,
  type,
  size,
  sizeStatic,
  weight,
  variation,
  extraStyles,
}: TextType) {
  const textStyles = [
    size === 12 && styles.size12,
    size === 14 && styles.size14,
    size === 16 && styles.size16,
    size === 18 && styles.size18,
    size === 20 && styles.size20,
    size === 22 && styles.size22,

    sizeStatic === 12 && styles.sizeStatic12,
    sizeStatic === 14 && styles.sizeStatic14,
    sizeStatic === 16 && styles.sizeStatic16,
    sizeStatic === 18 && styles.sizeStatic18,
    sizeStatic === 20 && styles.sizeStatic20,
    sizeStatic === 22 && styles.sizeStatic22,

    weight === "300" && styles.weight300,
    weight === "400" && styles.weight400,
    weight === "600" && styles.weight600,
    weight === "700" && styles.weight700,

    variation === "active" && styles.active,
    variation === "alert" && styles.alert,
    variation === "alert-300" && styles.alert300,
    variation === "alert-200" && styles.alert200,
    variation === "main" && styles.main,
    variation === "main-300" && styles.main300,
    variation === "secondary" && styles.secondary,
    variation === "yellow" && styles.yellow,
  ].join(" ");

  return type === "heading" ? (
    <h2 className={textStyles} style={extraStyles}>
      {children}
    </h2>
  ) : (
    <p className={textStyles} style={extraStyles}>
      {children}
    </p>
  );
}
