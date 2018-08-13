import React from "react";

import styles from "../../styles/components/_gallery.scss";

export default class Gallery extends React.Component {
  indexes = [1, 2, 3, 4];

  images = this.indexes.map(index => (
    <div className={styles.gallery__imgContainer__card}>
      <img
        src={require("../../assets/images/gallery/gallery-" +
          index +
          "-large.jpg")}
        key={index}
      />
    </div>
  ));

  render() {
    return (
      <section className={styles.gallery} id="gallery">
        <h1>Gallery</h1>
        <div className={styles.gallery__imgContainer}>{this.images}</div>
      </section>
    );
  }
}
