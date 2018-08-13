import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import Waypoint from "react-waypoint";

import avatar from "../../../assets/images/hero/avatar.jpeg";

import styles from "../../../styles/components/_hero.scss";

export default class Hero extends React.PureComponent {
  dismissNavBar: () => any = () => {
    document.querySelector("header").style.top = "-92px";
  };

  callNavBar: () => any = () => {
    document.querySelector("header").style.top = "0";
  };

  render() {
    return (
      <Waypoint onEnter={this.dismissNavBar} onLeave={this.callNavBar}>
        <section className={`${styles.hero}`} id="home">
          <img src={avatar} alt="avatar" className={`${styles.hero__avatar}`} />
          <h1 className={`${styles.hero__text_blue}`}>i'm staham nguyen</h1>
          <h2 className={`${styles.hero__text_blue}`}>
            A web and mobile developer born in Vietnam, based in Helsinki,
            Finland.
          </h2>
          <h2 className={`${styles.hero__text_blue}`}>
            Also, a professional photographer.
          </h2>
          <AnchorLink href="#work" offset="100">
            <img
              src={require("../../../assets/icons/double-chevron.svg")}
              className={`${styles.hero__downChevron}`}
            />
          </AnchorLink>
        </section>
      </Waypoint>
    );
  }
}
