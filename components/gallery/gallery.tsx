import React from "react";

import Waypoint from "react-waypoint";

import { highlightCurrentAnchor } from "../../helpers/helpers";

import styles from "../../styles/components/_gallery.scss";

export default class Gallery extends React.Component {
  indexes = [1, 2, 3, 4];

  images = this.indexes.map(index => (
    <div className={styles.gallery__imgContainer__card} key={index}>
      <img
        src={require("../../assets/images/gallery/gallery-" +
          index +
          "-small.jpg")}
      />
    </div>
  ));

  render() {
    return (
      <Waypoint
        onEnter={() => highlightCurrentAnchor("gallery")}
        onLeave={() => highlightCurrentAnchor("gallery")}
        topOffset="20%"
        bottomOffset="20%"
      >
        <section className={styles.gallery} id="gallery">
          <h1>Gallery</h1>
          <div className={styles.gallery__imgContainer}>{this.images}</div>
        </section>
      </Waypoint>
    );
  }
}
