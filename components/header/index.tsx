import Image from "next/image";
import Link from "next/link";
import { Nav, Profile } from "..";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Link href="/" className={styles.logo}>
        <Image src="/assets/logo.png" alt="logo" width={131} height={28} />
      </Link>

      <div className={styles.hamburger}>
        <Image
          src="/assets/hamburger.png"
          alt="hamburger munu"
          width={24}
          height={24}
        />
      </div>

      <Nav />
      {/* <Profile /> */}
    </header>
  );
}
