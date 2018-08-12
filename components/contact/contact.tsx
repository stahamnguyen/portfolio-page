import React from "react";

import Quote from "./quote/quote";
import Footer from "./footer/footer";

import styles from "../../styles/components/_contact.scss";

export default class Contact extends React.Component {
  render() {
    return (
      <section>
        <Quote />
        <Footer />
      </section>
    );
  }
}
