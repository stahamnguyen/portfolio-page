import React from "react";
import Link from "next/link";

import styles from "../../../styles/components/_contact.scss";

import Waypoint from "react-waypoint";

import { highlightCurrentAnchor } from "../../../helpers/helpers";

export default class Footer extends React.Component {
  render() {
    return (
      <Waypoint
        onEnter={() => highlightCurrentAnchor("contact")}
        onLeave={() => highlightCurrentAnchor("contact")}
      >
        <section className={styles.contact__footer} id="contact">
          <div className={styles.contact__footer__container}>
            <Link href="mailto:nguyensnj@gmail.com?Subject=Hello Staham">
              <a>
                <img
                  src={require("../../../assets/icons/mail.svg")}
                  alt="mail"
                />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/staham-nguyen/">
              <a>
                <img
                  src={require("../../../assets/icons/linkedin.svg")}
                  alt="linkedin"
                />
              </a>
            </Link>
            <Link href="https://github.com/stahamnguyen">
              <a>
                <img
                  src={require("../../../assets/icons/github.svg")}
                  alt="github"
                />
              </a>
            </Link>
            <Link href="https://www.instagram.com/stahamnguyen/">
              <a>
                <img
                  src={require("../../../assets/icons/instagram.svg")}
                  alt="instagram"
                />
              </a>
            </Link>
          </div>
        </section>
      </Waypoint>
    );
  }
}
