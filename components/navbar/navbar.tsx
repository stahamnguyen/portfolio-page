import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Nav from "./nav/nav";

import styles from "../../styles/components/_navbar.scss";

export default class Navbar extends React.Component {
  render() {
    return (
      <header className={`${styles.navbar}`}>
        <div className={`${styles.navbar__logoContainer}`}>
          <AnchorLink href="#home">
            <img
              src={require("../../assets/icons/logo.svg")}
              className={`${styles.navbar__logoContainer__logo}`}
            />
          </AnchorLink>
        </div>
        <Nav />
      </header>
    );
  }
}
