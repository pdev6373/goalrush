import { Fragment } from "react";
import { Transfers } from "@/constants";
import { PlayerCard } from "@/components";
import styles from "./page.module.css";

export default function Rumours() {
  return (
    <div className={styles.players}>
      {Transfers[0].body.map((transfer, index) => (
        <Fragment key={index}>
          <PlayerCard type="rumours" id={index + 1} body={transfer} />
        </Fragment>
      ))}
    </div>
  );
}
