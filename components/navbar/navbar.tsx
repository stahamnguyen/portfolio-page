import React from "react";
import Link from "next/link";

import Nav from "./nav/nav";

import styles from "../../styles/components/_navbar.scss";

export default class Navbar extends React.Component {
  render() {
    return (
      <section className={`${styles.navbar}`}>
        <div className={`${styles.navbar__logoContainer}`}>
          <Link href="">
            <a>
              <img
                src={require("../../assets/icons/logo.svg")}
                className={`${styles.navbar__logoContainer__logo}`}
              />
            </a>
          </Link>
        </div>
        <Nav />
      </section>
    );
  }
}
