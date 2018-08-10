import React from "react";

import Hero from "./hero/hero";
import Intro from './intro/intro';

export default class About extends React.PureComponent {
  render() {
    return (
      <section>
        <Hero />
        <Intro />
      </section>
    );
  }
}
