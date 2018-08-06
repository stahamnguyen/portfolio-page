import Logo from "../../assets/images/logo.svg";
import Nav from "./nav/nav";

import styles from "../../styles/components/_navbar.scss";

const navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.navbar__logoContainer}`}>
        <Logo className={`${styles.navbar__logoContainer__logo}`} />
      </div>
      <Nav />
    </div>
  );
};

export default navbar;
