import Link from "next/link";

import styles from "../../../styles/components/_navbar.scss";

const links = () => (
  <div className={`${styles.navbar__nav}`}>
    <Link href="#about">
      <a>about</a>
    </Link>
    <Link href="#work">
      <a>work</a>
    </Link>
    <Link href="#gallery">
      <a>gallery</a>
    </Link>
    <Link href="contact">
      <a>contact</a>
    </Link>
  </div>
);

export default links;
