import AnchorLink from "react-anchor-link-smooth-scroll";

import styles from "../../../styles/components/_navbar.scss";

const links = () => (
  <div className={`${styles.navbar__nav}`}>
    <AnchorLink href="#about">about</AnchorLink>
    <AnchorLink href="#work" offset='100'>work</AnchorLink>
    <AnchorLink href="#gallery">gallery</AnchorLink>
    <AnchorLink href="#contact">contact</AnchorLink>
  </div>
);

export default links;
