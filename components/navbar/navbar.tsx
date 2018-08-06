import Logo from "../../assets/images/logo.svg";

import styles from "../../styles/components/navbar/_navbar.scss";

const navbar = () => {
  return (
    <div className={`${styles.navbar}`}>
      <Logo className={`${styles.navbar__logo}`} />
    </div>
  );
};

export default navbar;
