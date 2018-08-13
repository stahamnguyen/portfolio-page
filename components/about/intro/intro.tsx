import React from "react";

import styles from "../../../styles/components/_intro.scss";

export default class Intro extends React.PureComponent {
  render() {
    return (
      <section className={`${styles.intro}`}>
        <div className={`${styles.intro__container}`}>
          <h1>
            I'm a developer focusing on web and mobile. I create products that
            could solve customers' problems. I capture images of meaningful
            moments.
          </h1>
        </div>
      </section>
    );
  }
}
