import Nav from "./nav/nav";

import styles from "../../styles/components/_navbar.scss";

const navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.navbar__logoContainer}`}>
        <img src={require('../../assets/images/logo.svg')} className={`${styles.navbar__logoContainer__logo}`} />
      </div>
      <Nav />
    </div>
  );
};

export default navbar;
