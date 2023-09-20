import { Calendar as CalendarComponent } from "react-calendar";
import { Wrapper } from "..";
import { CalendarType } from "@/types";
import Image from "next/image";
import styles from "./index.module.css";

export default function Calendar({ value, onChange }: CalendarType) {
  return (
    <Wrapper>
      <CalendarComponent
        onChange={onChange}
        value={value}
        className={styles.calendar}
        tileClassName={styles.tile}
        prevLabel={
          <Image
            src="/assets/arrow-left.png"
            alt="previous arrow"
            width={20}
            height={20}
            style={{
              background: "#2c343a",
              border: "none",
              outline: "none",
              paddingInline: 10,
              boxSizing: "content-box",
            }}
          />
        }
        nextLabel={
          <Image
            src="/assets/arrow-right.png"
            alt="next arrow"
            width={20}
            height={20}
            style={{
              background: "#2c343a",
              border: "none",
              outline: "none",
              paddingInline: 10,
              boxSizing: "content-box",
            }}
          />
        }
        prev2Label={null}
        next2Label={null}
      />
    </Wrapper>
  );
}
