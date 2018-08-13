import AnchorLink from "react-anchor-link-smooth-scroll";

import Dropdown from './dropdown';

import { toggleDropdown } from "../../../helpers/helpers";

import styles from "../../../styles/components/_navbar.scss";

const links = () => (
  <nav className={`${styles.navbar__nav}`}>
    <div className={`${styles.navbar__nav__linkContainer}`}>
      <AnchorLink href="#about">about</AnchorLink>
      <AnchorLink href="#work" offset="100">
        work
      </AnchorLink>
      <AnchorLink href="#gallery">gallery</AnchorLink>
      <AnchorLink href="#contact">contact</AnchorLink>
    </div>
    <div className={`${styles.navbar__nav__hamburger}`} onClick={toggleDropdown} />
    <Dropdown />
  </nav>
);

export default links;
