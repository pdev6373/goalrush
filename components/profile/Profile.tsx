import Image from "next/image";
import React from "react";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <div>
      <div className={styles.profileImageDesktopWrapper}>
        <Image src="/assets/user.png" alt="user" width={40} height={40} />
      </div>

      <div className={styles.profileImageMobileWrapper}>
        <Image src="/assets/user.png" alt="user" width={30} height={30} />
      </div>
    </div>
  );
}
