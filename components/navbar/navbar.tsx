import React from "react";

import Nav from "./nav/nav";

import styles from "../../styles/components/_navbar.scss";

export default class Navbar extends React.Component {
  render() {
    return (
      <section className={`${styles.navbar}`}>
        <div className={`${styles.navbar__logoContainer}`}>
          <img
            src={require("../../assets/images/logo.svg")}
            className={`${styles.navbar__logoContainer__logo}`}
          />
        </div>
        <Nav />
      </section>
    );
  }
}
