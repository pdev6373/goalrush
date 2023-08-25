import { TextType } from "@/types";
import styles from "./index.module.css";

export default function Text({
  children,
  type,
  size,
  weight,
  variation,
}: TextType) {
  const textStyles = [
    size === 12 && styles.size12,
    size === 14 && styles.size14,
    size === 16 && styles.size16,
    size === 18 && styles.size18,

    weight === "300" && styles.weight300,
    weight === "400" && styles.weight400,
    weight === "600" && styles.weight600,
    weight === "700" && styles.weight700,

    variation === "active" && styles.active,
    variation === "alert" && styles.alert,
    variation === "alert-300" && styles.alert300,
    variation === "main" && styles.main,
    variation === "main-300" && styles.main300,
    variation === "secondary" && styles.secondary,
  ].join(" ");

  return type === "heading" ? (
    <h2 className={textStyles}>{children}</h2>
  ) : (
    <p className={textStyles}>{children}</p>
  );
}
