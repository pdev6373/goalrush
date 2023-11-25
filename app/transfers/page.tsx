import { Fragment } from "react";
import { PlayerCard } from "@/components";
import { Transfers as AllTransfers } from "@/constants";
import styles from "./page.module.css";

export default function Transfers() {
  return (
    <div className={styles.players}>
      {AllTransfers[0].body.map((transfer, index) => (
        <Fragment key={index}>
          <PlayerCard type="transfer" id={index + 1} body={transfer} />
        </Fragment>
      ))}
    </div>
  );
}
