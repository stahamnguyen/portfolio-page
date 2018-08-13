import AnchorLink from "react-anchor-link-smooth-scroll";

import { hideDropdown } from "../../../helpers/helpers";

import styles from "../../../styles/components/_dropdown.scss";
import navStyles from "../../../styles/components/_navbar.scss";

if (typeof document !== "undefined") {
//   document.addEventListener("touchstart", event => {
//     if (event.target.parentNode.classList.value !== navStyles.navbar__nav__hamburger) {
//       hideDropdown();
//     }
//   });

  document.addEventListener("click", event => {
    if (event.target.classList.value !== navStyles.navbar__nav__hamburger) {
      hideDropdown();
    }
  });
}

const dropdown = () => {
  return (
    <div className={`${styles.dropdown} ${styles.dropdown_invisible}`}>
      <AnchorLink href="#about" onClick={hideDropdown}>
        about
      </AnchorLink>
      <AnchorLink href="#work" offset="100" onClick={hideDropdown}>
        work
      </AnchorLink>
      <AnchorLink href="#gallery" onClick={hideDropdown}>
        gallery
      </AnchorLink>
      <AnchorLink href="#contact" onClick={hideDropdown}>
        contact
      </AnchorLink>
    </div>
  );
};

export default dropdown;
