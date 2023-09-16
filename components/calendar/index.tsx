"use client";
import { useState, useEffect } from "react";
import { Calendar as CalendarComponent } from "react-calendar";
import { Wrapper } from "..";
import styles from "./index.module.css";
import Image from "next/image";
import { CalendarType } from "@/types";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendar({ setValue }: CalendarType) {
  const [value, onChange] = useState<Value>(new Date());

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <Wrapper>
      <CalendarComponent
        onChange={onChange}
        // onClickDay={(value) => console.log("Clicked day: ", value)}
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
