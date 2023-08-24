"use client";
import { useState } from "react";
import { Calendar as CalendarComponent } from "react-calendar";
import { Wrapper } from "..";
import styles from "./Calendar.module.css";
import Image from "next/image";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Calendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <Wrapper>
      <CalendarComponent
        onChange={onChange}
        onClickDay={(value) => console.log("Clicked day: ", value)}
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
            }}
          />
        }
        prev2Label={null}
        next2Label={null}
      />
    </Wrapper>
  );
}
